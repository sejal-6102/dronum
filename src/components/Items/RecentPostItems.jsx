// frontend/src/components/Blog/Items/RecentPostItems.jsx
import React from "react";
import { Link } from "react-router-dom";
// Assuming contentSchemas.js is accessible from this path
// Adjust the path '..' based on your actual folder structure
import { API_BASE_URL } from "../Pages/Admin/contentSchemas";

// Helper function to construct the full image URL (copied from CourseDetailPage)
const getFullImageUrl = (relativePath) => {
  if (!relativePath) return '/assets/img/default-blog-placeholder.png'; // Provide a default blog placeholder

  if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
    return relativePath;
  }

  // API_BASE_URL might be 'http://localhost:5000/api' or 'http://localhost:5000'
  // We need the root URL of the backend to serve static files.
  let backendRootUrl = API_BASE_URL;
  if (API_BASE_URL.includes('/api')) { // Check if '/api' is part of the base URL
    backendRootUrl = API_BASE_URL.substring(0, API_BASE_URL.lastIndexOf('/api'));
  }
  // Ensure the relativePath starts with a '/' if it doesn't already,
  // and backendRootUrl doesn't end with one, to avoid double slashes.
  const cleanBackendRoot = backendRootUrl.endsWith('/') ? backendRootUrl.slice(0, -1) : backendRootUrl;
  const cleanRelativePath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;

  return `${cleanBackendRoot}${cleanRelativePath}`;
};

const RecentPostItems = (props) => {
  const linkTo = props.slug ? `/blog/${props.slug}` : "/blog-details"; // Fallback if no slug
  const imageUrl = getFullImageUrl(props.img); // Use the helper function

  return (
    <>
      <div className="img-content">
        <img src={imageUrl} alt={props.title || "Blog post image"} />
      </div>
      <div className="text-content">
        <span>
          {props.date || "No Date"}
        </span>
       <Link to={linkTo}>
         {props.title || "Untitled Post"}
       </Link>
          
        
      </div>
    </>
  );
};

export default RecentPostItems;