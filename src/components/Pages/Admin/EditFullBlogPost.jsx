// frontend/src/components/Pages/Admin/EditFullBlogPost.jsx
// (Code from previous response - yeh GenericContentForm ko use karta hai
// slug ke basis par contentKey banakar aur type: "textarea" schema ke saath)
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // useNavigate import karein
import GenericContentForm from './components/GenericContentForm';

const EditFullBlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate(); // For navigation after save

  // contentKey for the database, derived from the slug
 const contentKeyForFullPost = `blog_post_${slug}`;

  // A simple schema definition specifically for GenericContentForm for this page
  const blogPostSchemaForEditor = {
      label: `Edit Full Content for Blog: ${slug}`,
    contentKey: contentKeyForFullPost, // Yeh contentKey GenericContentForm use karega save/fetch ke liye
    type: "textarea", // Admin edits raw JSON
  };

  if (!slug) {
    return (
      <div>
        <h2>Error</h2>
        <p>Blog slug not provided in the URL.</p>
        <Link to="/admin/manage-blogs" className="btn btn-secondary">Back to Manage Blogs</Link>
      </div>
    );
  }

  const handleSaveSuccess = () => {
    console.log(`EditFullBlogPost.jsx: Full content for blog with slug "${slug}" (using contentKey: "${contentKeyForFullPost}") saved successfully.`);
    alert(`Blog post "${slug}" full content saved!`);
    // navigate('/admin/manage-blogs'); // Optional redirect
  };

  return (
    <div>
      <Link to="/admin/manage-blogs" className="btn btn-outline-secondary mb-3">
        ← Back to Blog Management
      </Link>
      {/* GenericContentForm will handle fetching existing data for this contentKey (if any)
          and saving the updated JSON string to this contentKey. */}
     <GenericContentForm
        contentKey={contentKeyForFullPost} // <<--- YEH contentKey PASS HO RAHA HAI
        schema={blogPostSchemaForEditor}
        onSaveSuccess={handleSaveSuccess}
      />
      <div className="mt-4 p-3 border bg-light rounded">
        <p><strong>Instructions for JSON data:</strong></p>
        <p>
          Enter the complete data for this blog post as a valid JSON object.
          This JSON should include fields like <code>"title"</code>, <code>"date"</code>,
          <code>"img"</code> (path to main image, e.g., "/uploads/your-image.jpg"),
          and a <code>"sections"</code> array. Each item in the "sections" array
          should be an object with <code>"heading"</code> and <code>"content"</code> (which can contain HTML).
        </p>
        <p>Example for one section within the "sections" array:</p>
        <pre style={{whiteSpace: 'pre-wrap', wordBreak: 'break-all', maxHeight: '150px', overflowY:'auto', background:'#e9ecef', padding:'10px'}}>
{`{
  "heading": "Your Section Title",
  "content": "<p>Your paragraph here. <strong>Bold text</strong> and <em>italic text</em> are allowed using HTML tags.</p><ul><li>List item 1</li><li>List item 2</li></ul>"
}`}
        </pre>
        <p>Make sure the overall structure is a single JSON object: <code>{`{ "title": "...", "date": "...", "img": "...", "slug": "${slug}", "sections": [...] }`}</code></p>
        <p><strong>Important:</strong> The "slug" in your JSON should match the slug in the URL (<strong>{slug}</strong>) for consistency, although `BlogDetail.jsx` primarily uses the URL slug to fetch.</p>
      </div>
    </div>
  );
};

export default EditFullBlogPost;