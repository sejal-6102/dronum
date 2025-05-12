// frontend/src/components/Pages/BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom"; // useParams to get URL parameters
import axios from 'axios';
import Header from '../Header'; // Adjust path as per your structure
import Footer from '../Footer'; // Adjust path
import PagesHero from '../PagesHero'; // Adjust path
import BlogInfo from '../BlogInfo';   // Adjust path

// Adjust path to contentSchemas.js based on this file's location
import { API_BASE_URL } from './Admin/contentSchemas';

const BlogDetail = () => {
  // Get the 'slug' parameter from the URL (defined in your index.js route as /blog-details/:slug)
  const { slug } = useParams();

  const [post, setPost] = useState(null);       // State to hold the fetched full blog post
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    // Fetch blog post only if slug is present in the URL
    if (!slug) {
      setError("Blog slug not found in URL. Cannot fetch post.");
      setLoading(false);
      setPost(null);
      return;
    }

    // Construct the contentKey for the database using the slug
    const contentKeyForFullPost = `blog_post_${slug}`;

    const fetchBlogPost = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`[BlogDetail] Attempting to fetch post with contentKey: "${contentKeyForFullPost}" (derived from slug: "${slug}")`);
        const response = await axios.get(`${API_BASE_URL}/public/content/${contentKeyForFullPost}`);

        if (response.data && response.data.contentValue) {
          let rawData = response.data.contentValue;
          // If admin saved data as a JSON string, parse it
          if (typeof rawData === 'string') {
            try {
              rawData = JSON.parse(rawData);
            } catch (parseError) {
              console.error("BlogDetail: Failed to parse blog post JSON:", parseError, "\nRaw Data received:", rawData);
              setPost(null); // Set post to null on parse error
              // Throw error to be caught by outer catch block
              throw new Error(`Data for blog "${slug}" appears to be improperly formatted.`);
            }
          }
          setPost(rawData); // Set the parsed (or already object) data
        } else {
          console.warn(`BlogDetail: No contentValue found for key ${contentKeyForFullPost}. Response:`, response.data);
          setError(`Blog post with slug "${slug}" not found or has no content.`);
          setPost(null);
        }
      } catch (err) {
        console.error(`BlogDetail: Failed to fetch blog post for key ${contentKeyForFullPost}:`, err);
        let errorMessage = `Could not load the blog post for slug: "${slug}".`;
        if (err.response) { // HTTP error from backend
            if (err.response.status === 404) {
                errorMessage = `Blog post with slug "${slug}" was not found (404). Please ensure it has been published with this slug.`;
            } else if (err.response.data && err.response.data.message) {
                errorMessage = err.response.data.message; // Use backend's error message if available
            }
        } else if (err.message.includes("improperly formatted")) { // Catch error thrown from JSON.parse
            errorMessage = err.message;
        }
        setError(errorMessage);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]); // Re-fetch if the slug from URL changes

  // Helper function to get full image URL
   const getFullImageUrl = (relativePath) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) return relativePath;
    const backendRootUrl = API_BASE_URL.replace('/api', ''); // Assumes API_BASE_URL ends with /api
    return `${backendRootUrl}${relativePath}`;
  };

  // --- UI for Loading State ---
  if (loading) {
    return (
      <>
        <Header />
        <PagesHero name="Loading Blog Post..." img="/assets/img/default-blog-hero.jpg" />
        <div className="container" style={{ textAlign: "center", padding: "50px" }}>
          <p>Loading content, please wait...</p>
        </div>
        <Footer />
      </>
    );
  }

  // --- UI for Error or Post Not Found State ---
  if (error || !post) {
    return (
      <>
        <Header />
        <PagesHero name={error ? "Error Loading Post" : "Blog Post Not Found"} img="/assets/img/error-hero.jpg" />
        <div className="container" style={{ textAlign: "center", padding: "50px" }}>
          <h2>Oops! Something Went Wrong.</h2>
          <p>{error || `The blog post with identifier "${slug}" could not be found or loaded.`}</p>
          <Link to="/blog-grid" className="site-button">Back to All Blogs</Link>
        </div>
        <Footer />
      </>
    );
  }

  // --- Main Render when post data is available ---
  return (
    <>
      <Header />
      {/* Use fetched image and title for PagesHero */}
      <PagesHero
        img={getFullImageUrl(post.img) || "/assets/img/default-blog-hero.jpg"} // Fallback to a default hero image
        name={post.title || "Blog Details"} // Fallback to a default title
      />
      {/* BlogInfo component will display the main content of the blog */}
      <BlogInfo post={post} /> {/* Pass the entire fetched post object to BlogInfo */}
      <Footer />
    </>
  );
};

export default BlogDetail;