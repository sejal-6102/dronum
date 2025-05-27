// backend/routes/adminContentRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2; // Import Cloudinary
const WebsiteContent = require('../models/WebsiteContent');
const authMiddleware = require('../middleware/authMiddleware');

// --- Multer Setup for Cloudinary (Store in memory, then upload) ---
const storage = multer.memoryStorage(); // Use memoryStorage for Cloudinary
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    // We can keep your file filter, or simplify if Cloudinary handles it
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const mimetype = filetypes.test(file.mimetype);
    // path.extname is not directly applicable with memoryStorage in the same way,
    // but Cloudinary can infer type or you can check mimetype.
    if (mimetype) {
      return cb(null, true);
    }
    cb(new Error('Error: File upload only supports image filetypes (jpeg, jpg, png, gif, webp)'));
  }
});
// --- End Multer Setup for Cloudinary ---

// POST Upload Image (Admin Protected) - MODIFIED FOR CLOUDINARY
router.post('/upload-image', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided.' });
    }

    // Upload image buffer to Cloudinary
    const cloudinaryUploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "website_content_uploads", // Optional: organize in a Cloudinary folder
        // resource_type: "auto" // Cloudinary can usually auto-detect
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          return res.status(500).json({ message: 'Failed to upload image to Cloudinary.', errorDetails: error.message });
        }

        // result.secure_url is the URL of the uploaded image on Cloudinary
        // result.public_id is useful if you want to delete it later
        res.json({
          imageUrl: result.secure_url, // Send back the Cloudinary URL
          imagePublicId: result.public_id, // Optionally send public_id
          message: 'Image uploaded successfully to Cloudinary!'
        });
      }
    );

    // Pipe the file buffer from multer (req.file.buffer) into the Cloudinary upload stream
    cloudinaryUploadStream.end(req.file.buffer);

  } catch (error) {
    // Handle multer errors (e.g., file too large, wrong file type)
    if (error instanceof multer.MulterError) {
      return res.status(400).json({ message: `Multer error: ${error.message}` });
    } else if (error.message.includes('File upload only supports image filetypes')) { // Check specific error message from fileFilter
      return res.status(400).json({ message: error.message });
    }
    // Handle other errors
    console.error('Server error during image upload processing:', error);
    res.status(500).json({ message: 'Server error during image upload.', errorDetails: error.message });
  }
});


// GET content for a specific key (for admin panel) - (No change needed here for Cloudinary unless this route also handles uploads)
router.get('/content/:contentKey', authMiddleware, async (req, res) => {
  try {
    const { contentKey } = req.params;
    const content = await WebsiteContent.findOne({ contentKey });
    if (!content) {
      // If content is not found, return a default structure, especially for arrays
      if (contentKey.includes('slider') || contentKey.includes('gallery')) {
         return res.json({ contentKey, contentValue: [] }); // Default to empty array
      }
      return res.json({ contentKey, contentValue: '' }); // Default to empty string or appropriate default
    }
    res.json(content);
  } catch (error) {
    console.error(`Error fetching admin content for ${req.params.contentKey}:`, error);
    res.status(500).json({ message: 'Server error while fetching content' });
  }
});

// PUT Update or Create content for a specific key (Admin Protected) - (No direct change needed here for Cloudinary,
// but it will receive Cloudinary URLs in 'contentValue' if images are involved in that content)
router.put('/content/:contentKey', authMiddleware, async (req, res) => {
  const { contentKey } = req.params;
  try {
    const { contentValue, contentType, pageHint } = req.body;
    console.log(`[PUT /api/admin/cms/content/${contentKey}] Received request body:`, JSON.stringify(req.body, null, 2));

    if (contentValue === undefined) {
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Validation Error: contentValue is undefined.`);
        return res.status(400).json({ message: 'contentValue is required and cannot be undefined.' });
    }

    // Example: if contentValue for a gallery_slider_images is an array of objects,
    // each object might now contain a Cloudinary URL from a previous upload via /upload-image
    // e.g., contentValue: [{ img: 'https://res.cloudinary.com/.../image1.jpg', caption: '...' }, ...]

    const updateData = {
      contentKey,
      contentValue,
      lastUpdatedBy: req.user ? req.user.id : (req.admin ? req.admin.id : 'default_admin_fallback'),
    };
    if (contentType !== undefined) updateData.contentType = contentType;
    if (pageHint !== undefined) updateData.pageHint = pageHint;

    console.log(`[PUT /api/admin/cms/content/${contentKey}] Data to be updated/inserted:`, JSON.stringify(updateData, null, 2));
    const updatedContent = await WebsiteContent.findOneAndUpdate(
      { contentKey },
      updateData,
      { new: true, upsert: true, runValidators: true }
    );

    console.log(`[PUT /api/admin/cms/content/${contentKey}] Content successfully updated/inserted for key: ${contentKey}`);
    res.json({ message: 'Content updated successfully!', data: updatedContent });

  } catch (error) {
    console.error(`[PUT /api/admin/cms/content/${contentKey}] Error updating content:`, error);
    if (error.name === 'ValidationError') {
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Mongoose Validation Error details:`, error.errors);
        return res.status(400).json({
            message: `Validation Failed: ${error.message}`,
            details: error.errors
        });
    }
    res.status(500).json({ message: 'Server error while updating content.' });
  }
});

// You might want a route to delete images from Cloudinary if they are removed from content
router.delete('/delete-cloudinary-image/:publicId', authMiddleware, async (req, res) => {
    const { publicId } = req.params;
    if (!publicId) {
        return res.status(400).json({ message: 'Image Public ID is required.' });
    }
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        // Check result.result (should be 'ok' or 'not found')
        if (result.result === 'ok') {
            res.status(200).json({ message: 'Image deleted from Cloudinary successfully.' });
        } else if (result.result === 'not found') {
            res.status(404).json({ message: 'Image not found on Cloudinary.' });
        } else {
            // Some other response from Cloudinary
            console.warn('Cloudinary deletion issue:', result);
            res.status(500).json({ message: 'Failed to delete image from Cloudinary or image not found.', details: result });
        }
    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        res.status(500).json({ message: 'Server error while deleting image from Cloudinary.', errorDetails: error.message });
    }
});


module.exports = router;