// // // frontend/src/index.js
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css"; // Aapki global CSS
// import 'animate.css'; // Animate.css

// // React Router DOM imports
// import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

// // Main Website Page Components (Aapke existing imports)
// import Home from "./components/Pages/Home";
// import Error from "./components/Pages/Error";
// import AboutOne from "./components/Pages/AboutOne";
// import AllServices from "./components/Pages/AllServices";
// // import ServicesDetail from "./components/Pages/ServicesDetail"; // Commented out in your code
// import TeamListing from "./components/Pages/TeamListing";
// import Faq from "./components/Pages/Faq";
// import Button from "./components/Button"; // Global button component
// import ContactUS from "./components/Pages/ContactUS";
// // import GalleryGrid from "./components/Pages/GalleryGrid"; // Commented out
// import GalleryDetails from "./components/Pages/GalleryDetails";
// import Cart from "./components/Pages/Cart";
// import Checkout from "./components/Pages/Checkout";
// // import MyAccount from "./components/Pages/MyAccount"; // Commented out
// import BlogDetail from "./components/Pages/BlogDetail";
// import NewsGrid from "./components/Pages/NewsGrid";
// import BlogGrid from "./components/Pages/BlogGrid";
// // import Shop from "./components/Pages/Shop"; // Commented out
// import Privacy from "./components/Pages/Privacy";
// import SingleProduct from "./components/Pages/SingleProduct";
// import EnrollForm from "./components/Pages/EnrollForm";
// import CourseDetailPage from './components/Pages/CourseDetailPage';

// // Admin Panel Components
// import AdminLogin from "./components/Pages/Admin/Login"; // Corrected path as per your structure
// import AdminPannel from "./components/Pages/Admin/AdminPannel"; // This is now the LAYOUT
// import Dashboard from "./components/Pages/Admin/Dashboard";   // Your data dashboard

// // Protected Route (ensure this import path is correct)
// import ProtectedRoute from "./components/Pages/Admin/components/ProtectedRoute"; // Or wherever it is

// // Content Management System (CMS) related imports
// import { contentSchemas } from './components/Pages/Admin/contentSchemas';
// import GenericContentForm from './components/Pages/Admin/components/GenericContentForm';


// import ManageBlogPosts from './components/Pages/Admin/ManageBlogPosts'; // Naya page list karne ke liye
// import EditFullBlogPost from './components/Pages/Admin/EditFullBlogPost'; 


// // Generic Editor Page Component - Renders GenericContentForm based on contentKey
// const GenericEditorPage = ({ contentKey }) => {
//     const schema = contentSchemas[contentKey];
//     if (!schema) {
//         console.error(`Schema not found for contentKey: "${contentKey}" in GenericEditorPage. Check contentSchemas.js and adminEditorPath in routes.`);
//         return (
//           <div style={{ padding: '20px', color: 'red', border: '1px solid red' }}>
//             <strong>Configuration Error:</strong> Content schema for "<em>{contentKey}</em>" not found.
//             Please check <code>contentSchemas.js</code> and the route configuration in <code>index.js/App.js</code>.
//             Ensure the <code>adminEditorPath</code> in the schema matches the route.
//           </div>
//         );
//     }
//     return <GenericContentForm contentKey={contentKey} schema={schema} />;
// };


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         {/* --- Main Website Routes (Aapke existing routes) --- */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutOne />} />
//         <Route path="/who-we-are" element={<AllServices />} />
//         <Route path="courses/:courseId" element={<CourseDetailPage />} />
//         <Route path="/our-glimps" element={<GalleryDetails />} />
//         <Route path="/team-listing" element={<TeamListing />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/contact-us" element={<ContactUS />} />
//         <Route path="/singleProduct" element={<SingleProduct />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/checkout" element={<Checkout />} />
//         <Route path="/latest-news" element={<NewsGrid />} />
//         <Route path="/blog-grid" element={<BlogGrid />} />
//         <Route path="/blog-details/:title" element={<BlogDetail />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/enroll-Form" element={<EnrollForm />} />
//         {/* Any other main website routes */}


//         {/* --- Admin Routes --- */}
//         {/* Public route for Admin Login Page */}
//         <Route path="/admin/login" element={<AdminLogin />} />

//         {/* Base route for all authenticated admin sections */}
//         {/* AdminPannel is the layout component with sidebar and Outlet */}
//         <Route
//           path="/admin"
//           element={
//             <ProtectedRoute>
//               <AdminPannel />
//             </ProtectedRoute>
//           }
//         >
//           {/* Default child route for /admin (e.g., when navigating to just /admin) */}
//           {/* This will redirect to /admin/dashboard */}
//           <Route index element={<Navigate to="dashboard" replace />} />

//           {/* Route for the data dashboard */}
//           <Route path="dashboard" element={<Dashboard />} />

//           {/* Dynamically create routes for content editors based on contentSchemas */}
//           {Object.values(contentSchemas).map(schema => {
//             // adminEditorPath in contentSchemas should be like "/admin/edit/some-key"
//             // We need to make the path relative to "/admin" for nesting
//             if (schema.adminEditorPath && schema.adminEditorPath.startsWith('/admin/')) {
//               const relativePath = schema.adminEditorPath.substring('/admin/'.length); // e.g., "edit/gallery-slider"
//               return (
//                 <Route
//                   key={schema.contentKey}
//                   path={relativePath} // Path relative to "/admin"
//                   element={<GenericEditorPage contentKey={schema.contentKey} />}
//                 />
//               );
//             }
//             return null; // Skip if adminEditorPath is not defined or doesn't start with /admin/
//           })}

//           {/* Fallback for any /admin sub-route not matched above */}
//           {/* This can redirect to the admin dashboard or show a specific admin 404 page */}
//           <Route path="*" element={<Navigate to="dashboard" replace />} />
//           {/* Or <Route path="*" element={<div>Admin Section Not Found</div>} /> */}
//         </Route>


//         {/* General 404 Error Page for any other unmatched routes */}
//         <Route path="/*" element={<Error />} />
//       </Routes>
//       <Button /> {/* Your global Button component */}
//     </BrowserRouter>
//   </React.StrictMode>
// );



// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Aapki global CSS
import 'animate.css'; // Animate.css

// React Router DOM imports
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

// Main Website Page Components (Aapke existing imports)
import Home from "./components/Pages/Home";
import Error from "./components/Pages/Error";
import AboutOne from "./components/Pages/AboutOne";
import AllServices from "./components/Pages/AllServices";
import ServicesDetail from "./components/Pages/ServicesDetail";
import TeamListing from "./components/Pages/TeamListing";
import Faq from "./components/Pages/Faq";
import Button from "./components/Button";
import ContactUS from "./components/Pages/ContactUS";
import GalleryGrid from "./components/Pages/GalleryGrid";
import GalleryDetails from "./components/Pages/GalleryDetails";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import BlogDetail from "./components/Pages/BlogDetail";
import NewsGrid from "./components/Pages/NewsGrid";
import BlogGrid from "./components/Pages/BlogGrid"; // Assuming BgridItems is used inside BlogGrid
import Privacy from "./components/Pages/Privacy";
import SingleProduct from "./components/Pages/SingleProduct";
import EnrollForm from "./components/Pages/EnrollForm";
import CourseDetailPage from './components/Pages/CourseDetailPage';

// Admin Panel Components
import AdminLogin from "./components/Pages/Admin/Login";
import AdminPannel from "./components/Pages/Admin/AdminPannel"; // LAYOUT component
import Dashboard from "./components/Pages/Admin/Dashboard";   // Data dashboard

// Protected Route
import ProtectedRoute from "./components/Pages/Admin/components/ProtectedRoute"; // Path check karein

// CMS related imports
import { contentSchemas } from './components/Pages/Admin/contentSchemas';
import GenericContentForm from './components/Pages/Admin/components/GenericContentForm';

// NEW: Blog Management Admin Pages
import ManageBlogPosts from './components/Pages/Admin/ManageBlogPosts';
import EditFullBlogPost from './components/Pages/Admin/EditFullBlogPost';


// Generic Editor Page Component - Renders GenericContentForm
const GenericEditorPage = ({ contentKey }) => {
    const schema = contentSchemas[contentKey];
    if (!schema) {
        console.error(`Schema not found for contentKey: "${contentKey}" in GenericEditorPage.`);
        return 
    }
    return <GenericContentForm contentKey={contentKey} schema={schema} />;
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* --- Main Website Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutOne />} />
        <Route path="/why-choose-us" element={<AllServices />} />
        <Route path="courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/our-glimps" element={<GalleryDetails />} />
        <Route path="/team-dronum" element={<TeamListing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/latest-news" element={<NewsGrid />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        {/* For BlogDetail, use :slug or a unique identifier instead of :title if possible */}
       <Route path="/blog-details/:slug" element={<BlogDetail />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/enroll-Form" element={<EnrollForm />} />


        {/* --- Admin Routes --- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPannel /> {/* AdminPannel is the LAYOUT with sidebar & <Outlet/> */}
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />

          {Object.values(contentSchemas).map(currentSchema => { // Renamed 'schema' to 'currentSchema' to avoid conflict if schema is also a prop name
            if (currentSchema.adminEditorPath && currentSchema.adminEditorPath.startsWith('/admin/')) {
              const relativePath = currentSchema.adminEditorPath.substring('/admin/'.length);
              
              console.log(`[index.js Router] Generating admin route: path="${relativePath}" for contentKey="${currentSchema.contentKey}" (using adminEditorPath: "${currentSchema.adminEditorPath}")`);
              
              // Check if currentSchema itself is valid before passing
              if (!currentSchema.contentKey || !currentSchema.type) {
                console.error(`[index.js Router] SKIPPING route for adminEditorPath "${currentSchema.adminEditorPath}" due to INCOMPLETE SCHEMA: `, currentSchema);
                return null; 
              }

              return (
                <Route
                  key={currentSchema.contentKey}
                  path={relativePath}
                  // Render GenericContentForm directly, passing the schema object
                  element={<GenericContentForm contentKey={currentSchema.contentKey} schema={currentSchema} />} 
                />
              );
            }
            return null;
          })}

          {/* VVVVVV  NEW ROUTES FOR BLOG MANAGEMENT  VVVVVV */}
          <Route path="manage-blogs" element={<ManageBlogPosts />} />
          <Route path="edit-full-blog/:slug" element={<EditFullBlogPost />} />
          {/* ^^^^^^  NEW ROUTES FOR BLOG MANAGEMENT  ^^^^^^ */}

          <Route path="*" element={<Navigate to="dashboard" replace />} /> {/* Fallback within /admin */}
        </Route>


        {/* General 404 Error Page */}
        <Route path="/*" element={<Error />} />
      </Routes>
      <Button /> {/* Global Button */}
    </BrowserRouter>
  </React.StrictMode>
);