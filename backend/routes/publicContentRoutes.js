const express = require('express');
const router = express.Router();
const WebsiteContent = require('../models/WebsiteContent');

// GET content for a specific key (for main website)

router.get('/courses-list', async (req, res) => {
  try {
    // Fetch documents where contentKey starts with 'course_details_'
    // Using a regex for case-insensitive matching of the prefix
    const courseDocuments = await WebsiteContent.find({
      contentKey: { $regex: /^course_details_/, $options: 'i' }
    });

    if (!courseDocuments || courseDocuments.length === 0) {
      return res.json([]); // Return empty array if no courses found
    }

    const coursesList = courseDocuments.map(doc => {
      let name = 'Unnamed Course'; // Default name
      // Extract courseId from contentKey
      // Example: 'course_details_pilot_training' -> 'pilot_training'
      const courseId = doc.contentKey.substring('course_details_'.length);

      // Safely access contentValue and its name property
      if (doc.contentValue) {
        let courseData = doc.contentValue;
        // If contentValue was saved as a JSON string by admin (e.g., from a textarea)
        if (typeof courseData === 'string') {
          try {
            courseData = JSON.parse(courseData);
          } catch (e) {
            console.warn(`Could not parse JSON for contentKey ${doc.contentKey} in courses-list:`, e.message);
            courseData = {}; // Fallback to empty object on parse error
          }
        }
        // Ensure courseData is an object before accessing .name
        if (typeof courseData === 'object' && courseData !== null && courseData.name) {
          name = courseData.name;
        }
      }

      return {
        id: courseId,         // For React key and potentially other uses
        name: name,           // Course name for display
        path: `/courses/${courseId}` // Path for frontend routing (Link 'to' prop)
      };
    }).sort((a, b) => a.name.localeCompare(b.name)); // Optional: Sort courses alphabetically by name

    res.json(coursesList);

  } catch (error) {
    console.error("[API /public/courses-list] Error fetching courses list:", error);
    res.status(500).json({ message: "Failed to fetch courses list. Please try again." });
  }
});

router.get('/:contentKey', async (req, res) => {
  try {
    const { contentKey } = req.params;
    const content = await WebsiteContent.findOne({ contentKey });

    if (!content) {
      // Return a default/empty structure based on contentKey if you want to avoid errors on frontend
      // For example, for sliders, return an empty array for contentValue
      if (contentKey.includes('slider') || contentKey.includes('gallery')) {
        return res.json({ contentKey, contentValue: [] });
      }
      return res.status(404).json({ message: 'Content not found' });
    }
    res.json({ contentKey: content.contentKey, contentValue: content.contentValue });
  } catch (error) {
    console.error(`Error fetching public content for ${req.params.contentKey}:`, error);
    res.status(500).json({ message: 'Server error while fetching content' });
  }
});


module.exports = router;