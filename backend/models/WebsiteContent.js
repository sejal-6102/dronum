const mongoose = require('mongoose');

const websiteContentSchema = new mongoose.Schema({
  contentKey: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  contentValue: {
    type: mongoose.Schema.Types.Mixed, // Allows storing any data type (string, array, object)
    required: true,
  },
  contentType: { // Optional: for hinting UI or specific handling
    type: String,
    enum: ['text', 'image_url', 'json_object', 'json_array', 'rich_text','textarea'],
  },
  pageHint: { // Optional: To group content by page in admin if needed
    type: String,
  },
  lastUpdatedBy: {
    type: String, // Or mongoose.Schema.Types.ObjectId if you have an AdminUser model
  },
}, { timestamps: true });

module.exports = mongoose.model('WebsiteContent', websiteContentSchema);