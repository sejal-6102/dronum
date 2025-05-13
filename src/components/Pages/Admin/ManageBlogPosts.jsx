// frontend/src/components/Pages/Admin/ManageBlogPosts.jsx (Nayi File ya Existing ko Update)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, getAdminToken } from './contentSchemas'; // Path check karein

const ManageBlogPosts = () => {
  const [blogSummaries, setBlogSummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const adminToken = getAdminToken();

  useEffect(() => {
    const fetchSummaries = async () => {
      if (!adminToken) {
        setError("Admin authentication required.");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        // Fetch the list of blog summaries
        const response = await axios.get(`${API_BASE_URL}/api/public/content/blog_grid_items`); // Public endpoint is fine for just reading summaries
        if (response.data && Array.isArray(response.data.contentValue)) {
          setBlogSummaries(response.data.contentValue);
        } else {
          setBlogSummaries([]);
        }
      } catch (err) {
        console.error("ManageBlogPosts: Error fetching blog summaries:", err);
        setError("Failed to load blog summaries.");
        setBlogSummaries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSummaries();
  }, [adminToken]); // Re-fetch if token changes, though unlikely here

  // Function to generate slug (ensure this matches BlogDetail.jsx's logic if not using a dedicated slug field)
  const generateSlug = (title) => {
    if (!title) return '';
    return title.toLowerCase().replace(/\s+/g, '_').replace(/[^\w-]+/g, '');
  };

  if (loading) return <p>Loading blog posts...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <h2>Manage Blog Posts</h2>
      <p>From here, you can edit the full content of each blog post. To edit the summaries shown on the blog grid page, go to "Edit Blog Summaries (Grid Page)".</p>
      <Link to="/admin/edit/blog-summaries" className="btn btn-info mb-3">
        Edit Blog Summaries (Grid/Listing Page)
      </Link>

      {blogSummaries.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug (for URL)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogSummaries.map((post, index) => {
              // IMPORTANT: Use the 'slug' field from the summary if it exists,
              // otherwise generate it from the title. It's best if admin defines the slug
              // when creating/editing the summary in "Edit Blog Summaries".
              const slugToUse = post.slug || generateSlug(post.title);
              return (
                <tr key={post.title || index}>
                  <td>{post.title}</td>
                  <td>{slugToUse}</td>
                  <td>{post.date}</td>
                  <td>
                    <Link
                      to={`/admin/edit-full-blog/${slugToUse}`} // Navigate to the editor for this specific slug
                      className="btn btn-primary btn-sm"
                    >
                      Edit Full Content (JSON)
                    </Link>
                    {/* TODO: Add Delete functionality later */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No blog summaries found. Please add summaries first via "Edit Blog Summaries (Grid Page)".</p>
      )}
    </div>
  );
};

export default ManageBlogPosts;