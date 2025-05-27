// backend/routes/publicContentRoutes.js
const express = require('express');
const router = express.Router();
const WebsiteContent = require('../models/WebsiteContent'); // Assuming this model holds all_courses_data

// This is your OLD system for courses, keep it if still needed or phase out
// router.get('/courses-list-old', async (req, res) => { // Renamed to avoid confusion
//   try {
//     const courseDocuments = await WebsiteContent.find({
//       contentKey: { $regex: /^course_details_/, $options: 'i' }
//     });
//     if (!courseDocuments || courseDocuments.length === 0) {
//       return res.json([]);
//     }
//     const coursesList = courseDocuments.map(doc => {
//       let name = 'Unnamed Course';
//       const courseId = doc.contentKey.substring('course_details_'.length);
//       if (doc.contentValue) {
//         let courseData = doc.contentValue;
//         if (typeof courseData === 'string') {
//           try { courseData = JSON.parse(courseData); }
//           catch (e) {
//             console.warn(`Could not parse JSON for contentKey ${doc.contentKey} in courses-list-old:`, e.message);
//             courseData = {};
//           }
//         }
//         if (typeof courseData === 'object' && courseData !== null && courseData.name) {
//           name = courseData.name;
//         }
//       }
//       return { id: courseId, name: name, path: `/courses/${courseId}` };
//     }).sort((a, b) => a.name.localeCompare(b.name));
//     res.json(coursesList);
//   } catch (error) {
//     console.error("[API /public/courses-list-old] Error:", error);
//     res.status(500).json({ message: "Failed to fetch courses list (old system)." });
//   }
// });


// VVVVVV CORRECTED NEW Endpoint for Navbar Courses List VVVVVV
// This will be accessible at GET /api/public/content/courses-list-for-nav
router.get('/courses-list-for-nav', async (req, res) => { // REMOVED '/public/' from this path
    try {
        const allCoursesEntry = await WebsiteContent.findOne({ contentKey: 'all_courses_data' });

        if (!allCoursesEntry || !allCoursesEntry.contentValue) {
            console.warn('Backend (/courses-list-for-nav): all_courses_data not found or empty.');
            return res.json([]);
        }

        let coursesArray = allCoursesEntry.contentValue;

        if (typeof coursesArray === 'string') {
            try {
                coursesArray = JSON.parse(coursesArray);
            } catch (parseError) {
                console.error('Backend (/courses-list-for-nav): Failed to parse all_courses_data JSON:', parseError);
                return res.json([]);
            }
        }

        if (!Array.isArray(coursesArray)) {
            console.warn('Backend (/courses-list-for-nav): all_courses_data.contentValue is not an array.');
            return res.json([]);
        }

        const navCourses = coursesArray.map(course => {
            if (course && course.id && course.name) {
                return {
                    id: String(course.id),
                    name: String(course.name),
                    path: `/courses/${course.id}`
                };
            }
            console.warn('Backend (/courses-list-for-nav): Skipping malformed course object in all_courses_data:', course);
            return null;
        }).filter(course => course !== null);

        res.json(navCourses);

    } catch (error) {
        console.error('Backend Error in /courses-list-for-nav endpoint:', error);
        res.status(500).json({ message: 'Error retrieving courses list for navigation.' });
    }
});


// Generic content fetcher - accessible at GET /api/public/content/{some_content_key}
router.get('/:contentKey', async (req, res) => {
  try {
    const { contentKey } = req.params;
    const content = await WebsiteContent.findOne({ contentKey }); // Using WebsiteContent

    if (!content) {
      if (contentKey.includes('slider') || contentKey.includes('gallery')) {
        return res.json({ contentKey, contentValue: [] });
      }
      return res.status(404).json({ message: `Content for key '${contentKey}' not found` });
    }
    res.json({ contentKey: content.contentKey, contentValue: content.contentValue });
  } catch (error) {
    console.error(`Error fetching public content for ${req.params.contentKey}:`, error);
    res.status(500).json({ message: 'Server error while fetching content' });
  }
});


module.exports = router;