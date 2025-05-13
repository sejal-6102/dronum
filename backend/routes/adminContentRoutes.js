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




// backend/routes/adminContentRoutes.js
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs'); // File System module
// const WebsiteContent = require('../models/WebsiteContent');
// const authMiddleware = require('../middleware/authMiddleware'); // Assuming this is your correct auth middleware

// // --- Multer Setup for Image Uploads ---
// const IS_VERCEL_ENV = !!process.env.VERCEL; // Check if running in Vercel environment

// // Define a base path for uploads. For Vercel, this will be /tmp.
// // For local, it will be relative to the project's backend directory.
// const UPLOADS_BASE_PATH = IS_VERCEL_ENV ? '/tmp' : path.join(__dirname, '..');
// const UPLOADS_DIR = path.join(UPLOADS_BASE_PATH, 'uploads');

// // Ensure the uploads directory exists, especially needed for /tmp in serverless
// try {
//   if (!fs.existsSync(UPLOADS_DIR)) {
//     fs.mkdirSync(UPLOADS_DIR, { recursive: true });
//     console.log(`[Multer Setup] Uploads directory created/ensured at: ${UPLOADS_DIR}`);
//   } else {
//     console.log(`[Multer Setup] Uploads directory already exists at: ${UPLOADS_DIR}`);
//   }
// } catch (err) {
//   console.error(`[Multer Setup] CRITICAL ERROR: Could not create/access uploads directory at ${UPLOADS_DIR}. File uploads will fail. Error: ${err.message}`);
//   // Depending on your error handling strategy, you might want to
//   // prevent the application from starting or disable upload functionality.
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     // Re-check and ensure directory exists before each upload (good for ephemeral /tmp)
//     if (!fs.existsSync(UPLOADS_DIR)) {
//       try {
//         fs.mkdirSync(UPLOADS_DIR, { recursive: true });
//         console.log(`[Multer Destination] Uploads directory re-created at: ${UPLOADS_DIR}`);
//       } catch (mkdirErr) {
//         console.error("[Multer Destination] Error creating destination directory during upload:", mkdirErr);
//         return cb(mkdirErr); // Pass error to multer, upload will fail
//       }
//     }
//     cb(null, UPLOADS_DIR); // Save files to the determined UPLOADS_DIR
//   },
//   filename: function (req, file, cb) {
//     // Sanitize filename and make it unique
//     const safeOriginalName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '-').toLowerCase();
//     cb(null, Date.now() + '-' + safeOriginalName);
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
//   fileFilter: function (req, file, cb) {
//     const filetypes = /jpeg|jpg|png|gif|webp/;
//     const mimetype = filetypes.test(file.mimetype);
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     if (mimetype && extname) {
//       return cb(null, true);
//     }
//     console.warn(`[Multer FileFilter] Blocked file upload: ${file.originalname} (type: ${file.mimetype}). Invalid file type.`);
//     cb(new Error('File upload only supports JPEG, JPG, PNG, GIF, WEBP images.'), false); // Send false to reject
//   }
// });

// // === API ROUTES ===

// // POST /api/admin/cms/upload-image
// router.post('/upload-image', authMiddleware, upload.single('image'), (req, res) => {
//   // Log request reception (excluding sensitive details like full req object)
//   console.log(`[POST /upload-image] Request received. User authenticated: ${req.user ? req.user.id : (req.admin ? req.admin.id : 'N/A')}`);

//   if (!req.file) {
//     console.log("[POST /upload-image] No image file provided in the request.");
//     return res.status(400).json({ message: 'No image file provided.' });
//   }

//   // The URL path that will be stored in the database and used by the frontend
//   // This path is relative to how static files are served (see server.js app.use('/uploads', ...))
//   const imageUrl = `/uploads/${req.file.filename}`;

//   console.log(`[POST /upload-image] File uploaded successfully: ${req.file.filename}. Public URL to be: ${imageUrl}. Saved at: ${req.file.path}`);
//   res.status(201).json({ // Send 201 Created for successful resource creation
//     imageUrl: imageUrl,
//     message: 'Image uploaded successfully!',
//     filename: req.file.filename // Optionally return filename
//   });
// });


// // GET /api/admin/cms/content/:contentKey (For Admin Panel to fetch content for editing)
// router.get('/content/:contentKey', authMiddleware, async (req, res) => {
//   const { contentKey } = req.params;
//   console.log(`[GET /content/${contentKey}] Admin request to fetch content.`);
//   try {
//     const content = await WebsiteContent.findOne({ contentKey });
//     if (!content) {
//       console.log(`[GET /content/${contentKey}] No content found. Returning default structure.`);
//       // Return a default structure so admin form can initialize correctly
//       if (contentKey.includes('slider') || contentKey.includes('gallery') || contentKey.includes('slides') || contentKey.includes('items')) {
//          return res.json({ contentKey, contentValue: [] }); // Default for array types
//       }
//       return res.json({ contentKey, contentValue: '' }); // Default for text/textarea types
//     }
//     console.log(`[GET /content/${contentKey}] Content found and returned.`);
//     res.json(content); // Send the whole document
//   } catch (error) {
//     console.error(`[GET /content/${contentKey}] Error fetching admin content:`, error);
//     res.status(500).json({ message: 'Server error while fetching content for admin.' });
//   }
// });

// // PUT /api/admin/cms/content/:contentKey (To Update or Create content)
// router.put('/content/:contentKey', authMiddleware, async (req, res) => {
//   const { contentKey } = req.params;
//   try {
//     const { contentValue, contentType, pageHint } = req.body;

//     console.log(`[PUT /content/${contentKey}] Admin request to update/create content. Received body:`, {contentValueExists: contentValue !== undefined, contentType, pageHint }); // Log less verbose body initially

//     // Validate contentValue
//     if (contentValue === undefined) {
//         console.error(`[PUT /content/${contentKey}] Validation Error: contentValue is undefined.`);
//         return res.status(400).json({ message: 'contentValue is required and cannot be undefined.' });
//     }

//     // Example specific validation (adapt as needed for other keys)
//     if (contentKey === 'gallery_slider_images' || contentKey === 'video_section_slides_data' || contentKey === 'news_popup_items' || contentKey === 'blog_grid_items') {
//       if (!Array.isArray(contentValue)) {
//         console.error(`[PUT /content/${contentKey}] Validation Error: contentValue must be an array for this contentKey.`);
//         return res.status(400).json({ message: `contentValue for ${contentKey} must be an array.` });
//       }
//       // Further validation for items within the array can be added here if needed
//       if (contentKey === 'gallery_slider_images' && contentValue.some(item => typeof item !== 'object' || item === null || !item.hasOwnProperty('img'))) {
//         return res.status(400).json({ message: "Each item in gallery_slider_images must be an object with an 'img' property." });
//       }
//     }

//     const updateData = {
//       contentKey,
//       contentValue,
//       lastUpdatedBy: req.user?.id || req.admin?.id || 'unknown_admin', // Safely access admin/user ID
//     };
//     if (contentType !== undefined) updateData.contentType = contentType;
//     if (pageHint !== undefined) updateData.pageHint = pageHint;

//     // console.log(`[PUT /content/${contentKey}] Data to be updated/inserted:`, JSON.stringify(updateData, null, 2)); // Can be very verbose

//     const updatedContent = await WebsiteContent.findOneAndUpdate(
//       { contentKey },
//       updateData,
//       { new: true, upsert: true, runValidators: true } // upsert: creates if not found; runValidators: applies schema validations
//     );

//     console.log(`[PUT /content/${contentKey}] Content successfully updated/inserted for key: ${contentKey}`);
//     res.json({ message: 'Content updated successfully!', data: updatedContent });

//   } catch (error) {
//     console.error(`[PUT /content/${contentKey}] Error updating content:`, error.message, error.stack);
//     if (error.name === 'ValidationError') {
//         console.error(`[PUT /content/${contentKey}] Mongoose Validation Error details:`, error.errors);
//         return res.status(400).json({
//             message: `Validation Failed: ${error.message}`, // Main Mongoose error message
//             details: error.errors // Detailed field-specific errors
//         });
//     }
//     res.status(500).json({ message: 'Server error while updating content. Check logs.' });
//   }
// });

// module.exports = router;