// backend/routes/adminContentRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const WebsiteContent = require('../models/WebsiteContent');
const authMiddleware = require('../middleware/authMiddleware'); // Renamed from adminAuth for consistency

// --- Multer Setup (Aapka code - Theek hai) ---
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) { cb(null, UPLOADS_DIR); },
  filename: function (req, file, cb) { cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-')); }
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif|webp/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) { return cb(null, true); }
    cb(new Error('Error: File upload only supports the following filetypes - ' + filetypes));
  }
});

// POST Upload Image (Admin Protected) - (Aapka code - Theek hai)
router.post('/upload-image', authMiddleware, upload.single('image'), (req, res) => {
  if (!req.file) { return res.status(400).json({ message: 'No image file provided.' }); }
  const imageUrl = `/uploads/${req.file.filename}`;
  res.json({ imageUrl: imageUrl, message: 'Image uploaded successfully!' });
});

// GET content for a specific key (for admin panel) - (Aapka code - Theek hai)
router.get('/content/:contentKey', authMiddleware, async (req, res) => {
  try {
    const { contentKey } = req.params;
    const content = await WebsiteContent.findOne({ contentKey });
    if (!content) {
      if (contentKey.includes('slider') || contentKey.includes('gallery')) {
         return res.json({ contentKey, contentValue: [] });
      }
      return res.json({ contentKey, contentValue: '' });
    }
    res.json(content);
  } catch (error) {
    console.error(`Error fetching admin content for ${req.params.contentKey}:`, error);
    res.status(500).json({ message: 'Server error while fetching content' }); // Consistent error message
  }
});

// PUT Update or Create content for a specific key (Admin Protected)
// ***** YAHAN DEBUGGING LOGS ADD KIYE GAYE HAIN *****
router.put('/content/:contentKey', authMiddleware, async (req, res) => {
  const { contentKey } = req.params; // contentKey ko try block ke bahar bhi use kar sakte hain error logging ke liye
  try {
    const { contentValue, contentType, pageHint } = req.body;

    // --- 1. Log incoming request body ---
    console.log(`[PUT /api/admin/cms/content/${contentKey}] Received request body:`, JSON.stringify(req.body, null, 2));

    // --- 2. Validate contentValue ---
    if (contentValue === undefined) {
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Validation Error: contentValue is undefined.`);
        return res.status(400).json({ message: 'contentValue is required and cannot be undefined.' });
    }

    // Specific validation for gallery_slider_images (example)
    if (contentKey === 'gallery_slider_images') {
      if (!Array.isArray(contentValue)) {
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Validation Error: contentValue must be an array for gallery_slider_images.`);
        return res.status(400).json({ message: 'contentValue for gallery_slider_images must be an array.' });
      }
      // Optional: Check if each item in the array has the 'img' property
      if (contentValue.some(item => typeof item !== 'object' || item === null || !item.hasOwnProperty('img'))) {
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Validation Error: Each item in contentValue array for gallery_slider_images must be an object with an 'img' property.`);
        return res.status(400).json({ message: "Each item in gallery_slider_images must be an object with an 'img' property." });
      }
    }
    // Add similar specific validations for other contentKeys if needed

    const updateData = {
      contentKey,
      contentValue,
      // Assuming req.user is set by authMiddleware if you want to track who made the change
      lastUpdatedBy: req.user ? req.user.id : (req.admin ? req.admin.id : 'default_admin_fallback'),
    };
    if (contentType !== undefined) updateData.contentType = contentType; // Only add if provided
    if (pageHint !== undefined) updateData.pageHint = pageHint;     // Only add if provided

    // --- 3. Log data before saving to DB ---
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
    if (error.name === 'ValidationError') { // Mongoose validation error
        // Log the detailed Mongoose validation errors
        console.error(`[PUT /api/admin/cms/content/${contentKey}] Mongoose Validation Error details:`, error.errors);
        return res.status(400).json({
            message: `Validation Failed: ${error.message}`,
            details: error.errors // Send detailed Mongoose validation errors to frontend
        });
    }
    // Generic server error
    res.status(500).json({ message: 'Server error while updating content.' });
  }
});

module.exports = router;