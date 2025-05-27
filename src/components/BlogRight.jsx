// frontend/src/components/Blog/BlogRight.jsx
import React, { useState, useEffect } from "react";
import RecentPostItems from "./Items/RecentPostItems"; // Assuming path is correct
import { API_BASE_URL } from './Pages/Admin/contentSchemas';  // Import your API_BASE_URL

const BlogRight = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentKey = "blog_right_recent_posts"; // The key we defined in contentSchemas

  useEffect(() => {
    const fetchRecentPostsContent = async () => {
      setLoading(true);
      setError(null);
      try {
        // This is your generic endpoint to fetch content by its key
        const response = await fetch(`${API_BASE_URL}/api/public/content/${contentKey}`);

        if (!response.ok) {
          if (response.status === 404) {
            // If content not found, it might mean it hasn't been created by admin yet.
            // Set to empty array or handle as a "no content yet" state.
            setRecentPosts([]);
            console.warn(`Content for key '${contentKey}' not found. Admin may need to create it.`);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          // Assuming the API returns { contentKey: "...", contentValue: [...] }
          // And contentValue is the array of posts.
          // Adjust based on your actual API response structure.
          if (data && data.contentValue && Array.isArray(data.contentValue)) {
            setRecentPosts(data.contentValue);
          } else {
            // Handle cases where contentValue might be missing or not an array
            // This could happen if the admin saved it incorrectly or it's new
            console.warn(`Received unexpected data structure for '${contentKey}'. Expected an array in contentValue.`, data);
            setRecentPosts([]); // Default to empty if structure is wrong
          }
        }
      } catch (e) {
        console.error(`Failed to fetch content for key '${contentKey}':`, e);
        setError(e.message || "Failed to load recent posts.");
        setRecentPosts([]); // Ensure posts is empty on error
      } finally {
        setLoading(false);
      }
    };

    fetchRecentPostsContent();
  }, [contentKey]); // Re-fetch if contentKey changes (though it's constant here)

  if (loading) {
    return (
      <div className="right">
        <div className="right-inner">
          <div className="side-bar">
            <div className="widget recent-post">
              <h4>Recent Posts</h4>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="right">
        <div className="right-inner">
          <div className="side-bar">
            <div className="widget recent-post">
              <h4>Recent Posts</h4>
              <p>Error: {error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="right">
        <div className="right-inner">
          <div className="side-bar">
            <div className="widget recent-post">
              <h4>Recent Posts</h4>
              {recentPosts && recentPosts.length > 0 ? (
                <ul>
                  {recentPosts.map((post, index) => (
                    // Use a unique identifier from the post data if available, otherwise fallback to index
                    // If your admin system adds a unique _id or similar to each item in json_array, use that.
                    <li key={post.slug || post.id || `recent-post-${index}`}>
                      <RecentPostItems
                        img={post.img}
                        title={post.title}
                        date={post.date}
                        slug={post.slug}
                        // If you have a specific ID field in your itemSchema like 'postId'
                        // id={post.postId}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No recent posts to display.</p>
              )}
            </div>
            {/* Other widgets can go here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRight;