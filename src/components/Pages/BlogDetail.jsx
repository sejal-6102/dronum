// frontend/src/components/Pages/BlogDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Header from '../Header';
import Footer from '../Footer';
import PagesHero from '../PagesHero';
import BlogInfo from '../BlogInfo';
import { API_BASE_URL } from './Admin/contentSchemas';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Blog slug not found in URL.");
      setLoading(false);
      return;
    }

    const contentKeyForFullPost = `blog_post_${slug}`;

    const fetchBlogPostAndCombine = async () => {
      setLoading(true);
      setError(null);
      setPost(null); // Reset post state at the beginning of a fetch

      let fullPostData = null;
      let summaryData = null;
      let fetchedError = null;

      try {
        // 1. Attempt to fetch the full blog post content
        console.log(`[BlogDetail] Fetching full post: ${contentKeyForFullPost}`);
        const fullPostResponse = await axios.get(`${API_BASE_URL}/api/public/content/${contentKeyForFullPost}`);

        if (fullPostResponse.data && fullPostResponse.data.contentValue) {
          let rawFullData = fullPostResponse.data.contentValue;
          if (typeof rawFullData === 'string') {
            try {
              fullPostData = JSON.parse(rawFullData);
              console.log("[BlogDetail] Parsed full post data:", fullPostData);
            } catch (parseError) {
              console.error("BlogDetail: Failed to parse full blog post JSON:", parseError, "\nRaw Data:", rawFullData);
              fetchedError = `Data for blog "${slug}" (full content) is improperly formatted.`;
              // Don't stop here, we might still get an image from summary
            }
          } else {
            fullPostData = rawFullData; // Assume it's already an object
            console.log("[BlogDetail] Received full post data (already object):", fullPostData);
          }
        } else {
          console.warn(`[BlogDetail] No contentValue for full post: ${contentKeyForFullPost}`);
          // This is not necessarily an error if we can find summary data
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          console.warn(`[BlogDetail] Full post ${contentKeyForFullPost} not found (404). Will try to use summary.`);
          // Not a critical error yet, summary might exist.
        } else if (!err.message.includes("improperly formatted")) { // Ignore parse error already handled
          console.error(`[BlogDetail] Error fetching full post ${contentKeyForFullPost}:`, err);
          fetchedError = `Could not load full content for blog "${slug}".`;
        }
         // If parse error happened for fullPostData, fetchedError is already set
      }

      // 2. Always attempt to fetch blog summaries to get the image if needed, or title/date as fallback
      try {
        console.log(`[BlogDetail] Fetching blog summaries (blog_grid_items)`);
        const summariesResponse = await axios.get(`${API_BASE_URL}/api/public/content/blog_grid_items`);
        if (summariesResponse.data && Array.isArray(summariesResponse.data.contentValue)) {
          summaryData = summariesResponse.data.contentValue.find(item => item.slug === slug);
          if (summaryData) {
            console.log("[BlogDetail] Found matching summary data:", summaryData);
          } else {
            console.warn(`[BlogDetail] No matching summary found for slug "${slug}".`);
          }
        } else {
          console.warn("[BlogDetail] Blog summaries (blog_grid_items) not found or not an array.");
        }
      } catch (err) {
        console.error("[BlogDetail] Error fetching blog summaries:", err);
        // This is not critical enough to stop rendering if fullPostData exists
      }

      // 3. Combine data and set state
      if (fullPostData) {
        // We have full post data. Check if its 'img' needs to be overridden by summary's 'img'.
        const combinedPost = { ...fullPostData }; // Start with full post data

        // If full post data doesn't have an image, AND summary data exists with an image, use summary image.
        if ((!combinedPost.img || combinedPost.img.trim() === "") && summaryData && summaryData.img && summaryData.img.trim() !== "") {
          console.log(`[BlogDetail] Using image from summary for post "${slug}": ${summaryData.img}`);
          combinedPost.img = summaryData.img;
        }
        // Ensure essential fields like title and date are present, falling back to summary if needed
        if (!combinedPost.title && summaryData && summaryData.title) combinedPost.title = summaryData.title;
        if (!combinedPost.date && summaryData && summaryData.date) combinedPost.date = summaryData.date;
        if (!combinedPost.slug) combinedPost.slug = slug; // Ensure slug is there

        setPost(combinedPost);
        if(fetchedError && !combinedPost.img) setError(fetchedError); // Show parse error if still no image
        else setError(null); // Clear previous non-critical errors if we got data

      } else if (summaryData) {
        // No full post data, but we have summary data. Use it as a fallback.
        console.log(`[BlogDetail] No full post data for "${slug}". Using summary data as fallback.`);
        setPost({
          title: summaryData.title || "Blog Post",
          slug: summaryData.slug || slug,
          date: summaryData.date || "",
          img: summaryData.img || "",
          author: summaryData.author || "Admin Dronum", // Assuming summary might have author
          category: summaryData.category || "",    // Assuming summary might have category
          sections: [{ type: "paragraph", content: summaryData.summary || "<p>Content not fully loaded. Please check back later.</p>" }], // Use summary as content
        });
        setError(fetchedError); // Show any error from full post fetch attempt
      } else {
        // No full post data AND no matching summary. This is an error.
        setError(fetchedError || `Blog post with slug "${slug}" not found.`);
        setPost(null);
      }

      setLoading(false);
    };

    fetchBlogPostAndCombine();
  }, [slug]);

  // getFullImageUrl function remains the same
  const getFullImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('blob:')) {
      return imagePath;
    }
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    return `${backendRootUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
  };

  // --- UI for Loading, Error, and Main Render states remain largely the same ---
  if (loading) {
    // ... (loading UI)
    return (
      <>
        <Header />
        <PagesHero name="Loading Blog Post..." img="/assets/img/default-blog-hero.jpg" style={{ fontSize:'20px'}}/>
        <div className="container" style={{ textAlign: "center", padding: "50px" }}>
          <p>Loading content, please wait...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    // ... (error UI)
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

  return (
    <>
      <Header />
      <PagesHero
        img={getFullImageUrl(post.img) || "/assets/img/default-blog-hero.jpg"}
        name={post.title || "Blog Details"}
      />
      <BlogInfo post={post} />
      <Footer />
    </>
  );
};

export default BlogDetail;