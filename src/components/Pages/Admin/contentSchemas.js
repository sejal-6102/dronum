// frontend/src/components/Pages/Admin/contentSchemas.js

// Define the structure of your editable content sections
export const contentSchemas = {
    gallery_slider_images: {
      label: "Event Glimpse Slider Images",
      contentKey: "gallery_slider_images",
      type: "json_array",
      itemSchema: {
        img: { type: "image_url", label: "Slide Image" },
      },
      // Path for admin page to edit this content
      adminEditorPath: "/admin/edit/gallery-slider"
    },
      news_popup_items: { // Naya contentKey
    label: "Latest News Popup Items",
    contentKey: "news_popup_items", // Yeh key database mein use hogi
    type: "json_array", // Kyunki yeh array of news items hoga
    itemSchema: { // Har news item ka structure
      image: { type: "image_url", label: "News Image" },
      title: { type: "text", label: "News Title" },
      date: { type: "text", label: "News Date (e.g., February 15, 2024)" },
      // Agar "Events" label bhi dynamic karna hai, toh use bhi add kar sakte hain:
      // categoryLabel: { type: "text", label: "Category Label (e.g., Events)" }
    },
    adminEditorPath: "/admin/edit/news-popup" // Admin panel mein isko edit karne ka path
  },

 // --- NEW: GENERIC SCHEMA FOR ALL COURSES ---
  all_courses_data: {
    label: "All Courses Data (Manage All Courses Here)",
    contentKey: "all_courses_data", // Single key for all course data
    type: "json_array", // The value will be an array of course objects
    adminEditorPath: "/admin/edit-all-courses", // A new admin page to manage all courses
    itemSchema: { // Defines the structure of a SINGLE course object within the array
      id: { 
        type: "text", 
        label: "Course ID / Slug (Unique, URL-friendly, e.g., 'small-rpc-agri-10day')", 
        required: true 
      },
      name: { type: "text", label: "Course Name", required: true },
      isDgcaApproved: { type: "boolean", label: "DGCA Approved?", defaultValue: false },
      rating: { type: "number", label: "Rating (0-5)", defaultValue: 0, min: 0, max: 5 },
      reviewCount: { type: "number", label: "Review Count", defaultValue: 0 },
      
      heroImage: { type: "image_url", label: "Course Detail Page Hero Image (Optional, overrides default)" },
      videoThumbnail: { type: "image_url", label: "Course Thumbnail Image (for sidebar & course lists)" },

      infoBoxes: {
        type: "array",
        label: "Info Boxes (e.g., Duration, Skill Level)",
        itemSchema: {
          label: { type: "text", label: "Label (e.g., Duration)" },
          value: { type: "text", label: "Value (e.g., 10 Days)" }
        }
      },
      aboutCourse: { type: "textarea", label: "About This Course (Can include HTML)" },
      
      // Optional: If each course could have its own brochure (otherwise use common one)
      // specificBrochureUrl: { type: "file_url", label: "Specific Course Brochure PDF (Optional)"},
      // specificBrochureFilename: { type: "text", label: "Specific Brochure Download Filename (Optional)" },

      whatYouWillLearn: {
        type: "array",
        label: "What You Will Learn (List of points)",
        itemSchema: { // Each item is an object for easier management if you add more fields later
          point: { type: "text", label: "Learning Point Text" }
        }
      },
      courseContent: {
        type: "array",
        label: "Course Content Modules (Accordion Sections)",
        itemSchema: {
          title: { type: "text", label: "Module Title" },
          day: { type: "text", label: "Day(s) (e.g., '1-2', optional)", optional: true },
          details: { // List of detail points for the module
            type: "array",
            label: "Module Detail Points",
            itemSchema: {
              detail: { type: "text", label: "Detail Point Text" }
            }
          }
        }
      },
      courseBreakdown: {
        type: "array",
        label: "Course Highlights (Sidebar list with icons)",
        itemSchema: {
          icon: { type: "text", label: "Icon Name (e.g., FaBookOpen, FaClock - from react-icons/fa)" },
          label: { type: "text", label: "Highlight Label (e.g., Duration)" },
          value: { type: "text", label: "Highlight Value (e.g., 10 Days)" }
        }
      },
      upcomingBatches: {
        type: "array",
        label: "Upcoming Batches",
        itemSchema: {
          day: { type: "text", label: "Day (e.g., 15)" },
          monthYear: { type: "text", label: "Month & Year (e.g., Aug 2024)" },
          time: { type: "text", label: "Time (e.g., 10:00 AM - 01:00 PM)" }
        }
      },
      // Add any other fields a course might need
      // e.g., price, prerequisites, targetAudience, etc.
    }
  },
  // --- END NEW GENERIC SCHEMA ---
    // --- VIDEO SECTION SLIDER DATA ONLY ---
  video_section_slides_data: { // Sirf slides ke liye
    label: "Edit Video Section: Slider Items",
    contentKey: "video_section_slides_data", // Database mein is key se save hoga
    type: "json_array", // Array of slide objects
    itemSchema: { // Structure of each slide object
      img: { type: "image_url", label: "Slide Thumbnail Image" },
      head: { type: "text", label: "Slide Heading/Title" }
      // Agar video link bhi hai toh:
      // videoUrl: { type: "text", label: "Video URL (e.g., YouTube ID or full URL)" }
    },
    adminEditorPath: "/admin/edit/video-section-slides" // Admin panel mein isko edit karne ka path
  },
      blog_right_recent_posts: {
      label: "Blog Right Sidebar - Recent Posts",
      contentKey: "blog_right_recent_posts", // This key will be used in the database
      type: "json_array", // It's an array of post objects
      itemSchema: { // Structure of each recent post item
        img: { type: "image_url", label: "Post Image URL (e.g., assets/img/blog1.png)" },
        title: { type: "text", label: "Post Title" },
        date: { type: "text", label: "Post Date (e.g., December 04, 2024)" },
        slug: { type: "text", label: "Post Slug (for URL, e.g., master-drone-operations)" },
        // id is usually managed by the array index or a backend, but if needed for linking:
        // postId: { type: "text", label: "Unique Post ID (optional, if not using slug or index)" }
      },
      adminEditorPath: "/admin/edit/blog-recent-posts" // Admin panel path to edit this
    },

      rpto_location_details: {
      label: "RPTO Location Details (Address, Phone, Map)",
      contentKey: "rpto_location_details", // Key for database
      type: "json_array", // An array of location detail objects
      itemSchema: { // Structure for each location's editable details
        // We need a way to match these details to the static locations.
        // Using a 'locationId' that matches the 'id' in your static `places` array in Pricing.jsx is a good way.
        locationId: { type: "number", label: "Location ID (Must match static ID: 1 for Gandhi Nagar, 2 for Jaipur, 3 for Hyderabad)" },
        address: { type: "text", label: "Address (Leave blank for 'Upcoming...')" },
        mobile: { type: "text", label: "Mobile Number (Leave blank for 'Upcoming...')" },
        googleMapsLink: { type: "url", label: "Google Maps Link (Full URL, leave blank for 'Upcoming...')" }
      },
      // Important Note for Admin:
      // Admin should add items to this array corresponding to each static location defined in Pricing.jsx.
      // The 'locationId' in each item here MUST match the 'id' of the static location.
      // Example: For Gandhi Nagar (static id: 1), admin adds an item with locationId: 1 and its details.
      adminEditorPath: "/admin/edit/rpto-locations" // Admin panel path
    },




    // Add more schemas as needed
  };
  
  // Helper to get admin token (replace with your actual token retrieval logic)
  export const getAdminToken = () => {
      return localStorage.getItem('adminToken'); // Or from context, Redux store, etc.
  };
  
  // Base URL for your backend API
  // Ensure this is correct for your setup (development and production)
  // export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://dronum-git-main-sejal-6102s-projects.vercel.app';

  // const ACTUAL_BACKEND_URL = 'https://dronum-backend-git-main-sejal-6102s-projects.vercel.app/api';

// export const API_BASE_URL = 'https://dronum-backend-git-main-sejal-6102s-projects.vercel.app';
// export const API_BASE_URL = 'http://localhost:5000/api';

const LOCAL_DEV_BACKEND_ROOT_URL = 'http://localhost:5000';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || LOCAL_DEV_BACKEND_ROOT_URL;