// frontend/src/components/Pages/Admin/EditFullBlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GenericContentForm from './components/GenericContentForm';

const EditFullBlogPost = () => {
  const { slug } = useParams();

  if (!slug) {
    return (
      <div>
        <h2>Error</h2>
        <p>Blog slug not provided in the URL.</p>
        <Link to="/admin/manage-blogs" className="btn btn-secondary">Back to Manage Blogs</Link>
      </div>
    );
  }
  const contentKeyForFullPost = `blog_post_${slug}`;

  const blogPostSchemaForEditor = {
    label: `Edit Full Content for Blog: ${slug}`,
    contentKey: contentKeyForFullPost,
    type: "object",
    itemSchema: { // Top-level fields for the blog post
      title: { 
        type: "text", 
        label: "1. Blog Post Main Title", // Numbering for clarity
        defaultValue: "",
        placeholder: "Main title of the post"
      },
      date: { 
        type: "text", 
        label: "2. Publication Date", 
        placeholder: "e.g., December 04, 2024",
        defaultValue: "" 
      },
      author: { // Added author as it's in your desired output
        type: "text", 
        label: "3. Author Name",
        defaultValue: "Dronum", // Default to Dronum as per your image
        placeholder: "Author Name"
      },
      img: { // For the main featured image (MISSING in your example output image, but usually desired)
        type: "image_url", 
        label: "4. Main Featured Image (Optional - for top of post)",
        note: "optional image",
        defaultValue: "" 
      },
      // Sections array for content
      sections: {
        type: "json_array",
        label: "5. Blog Content Sections (Sub-Headings and Paragraphs)",
        _itemName: "Content Block", // Changed from "Section" to "Content Block"
        _itemTitleField: "admin_section_label", 
        itemSchema: { // Fields for EACH Content Block
          admin_section_label: { 
            type: "text", 
            label: "Admin Label (for your reference, e.g., 'Intro Heading', 'First Paragraph')", 
            defaultValue: "New Content Block",
            placeholder: "Helps you organize content blocks"
          },
          section_type: {
            type: "select",
            label: "Type of this Content Block",
            options: [
              // Option for a more prominent heading (like your first "Launch Your Drone...")
              { value: "primary_heading", label: "Primary Sub-Heading (Bold, larger)" }, 
              // Option for standard sub-headings (like "Fast and Effective Learning")
              { value: "secondary_heading", label: "Secondary Sub-Heading (Regular)" }, 
              { value: "paragraph", label: "Paragraph (Text block)" },
            ],
            defaultValue: "paragraph"
          },
          // Field for Heading Text (used if section_type is 'primary_heading' or 'secondary_heading')
          heading_text: { 
            type: "text", 
            label: "Heading Text (if block type is a Heading)",
            placeholder: "Sub-heading ",
            defaultValue: ""
          },
          // Field for Paragraph Content (used if section_type is 'paragraph')
          paragraph_content: { 
            type: "textarea", 
            label: "Paragraph Text (if block type is Paragraph)",
            rows: 5, // Suggest more rows for easier typing
            placeholder: "Paragraph . Basic HTML like <p>, <strong>, <ul>, <li> is okay.",
            defaultValue: "" // Start with empty, client adds <p> or types plain
          },
        }
      }
    }
  };

  const handleSaveSuccess = () => {
    alert(`Blog post "${slug}" content saved!`);
  };

  return (
    <div>
      <Link to="/admin/manage-blogs" className="btn btn-outline-secondary mb-3">
        ← Back to Blog Management
      </Link>
      <GenericContentForm
        contentKey={contentKeyForFullPost}
        schema={blogPostSchemaForEditor}
        onSaveSuccess={handleSaveSuccess}
      />
    </div>
  );
};

export default EditFullBlogPost;