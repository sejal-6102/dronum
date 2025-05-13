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

    course_details_small_rpc_agri_10day: {
    label: "Course: Small RPC Agri (Edit JSON)", // Sidebar display label
    contentKey: "course_details_small_rpc_agri_10day",
    type: "textarea", // Admin edits raw JSON for all course fields including 'name'
    adminEditorPath: "/admin/edit-course/small-rpc-agri-10day"
  },
  course_details_medium_rpc_agri_10day: {
    label: "Course: Medium RPC Agri (Edit JSON)",
    contentKey: "course_details_medium_rpc_agri_10day",
    type: "textarea",
    adminEditorPath: "/admin/edit-course/medium-rpc-agri_10day"
  },
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

// const LOCAL_DEV_BACKEND_ROOT_URL = 'http://localhost:5000';
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;