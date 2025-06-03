// frontend/src/components/BlogInfo.jsx
// KEEPING YOUR ORIGINAL STRUCTURE AS MUCH AS POSSIBLE
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_BASE_URL } from './Pages/Admin/contentSchemas';

const BlogInfo = ({ post }) => {
  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
      return relativePath;
    }
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    return `${backendRootUrl}${relativePath}`;
  };

  if (!post) {
    return (
      <div className="blog-info-outer">
        <div className="container">
          <div className="blog-info-inner text-center py-5">
            <h2>Blog Post Data Not Available</h2>
            <p>The content for this blog post could not be loaded.</p>
            <Link to="/blog-grid" className="site-button">Back to Blogs</Link>
          </div>
        </div>
      </div>
    );
  }

  // Main image from post.img (if you want it displayed here, PagesHero might already do it)
  // If PagesHero handles the main image, you can remove this `mainImageUrl` block.
  const mainImageUrl = post.img ? getFullImageUrl(post.img) : null; // Set to null if no post.img to avoid broken default

  return (
    <>
      <div className="blog-info-outer">
        <div className="container">
          <div className="blog-info-inner animate__animated animate__zoomIn"> {/* Your existing animation class */}
            <div className="post">
              
              {/* Optional: Display main post.img here if not handled solely by PagesHero */}
              {mainImageUrl && (
                <div className="img-content main-blog-image mb-4"> {/* Your existing class */}
                  <img src={mainImageUrl} alt={post.title || "Blog Main Image"} style={{width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '8px'}}/>
                </div>
              )}

              <div className="text-content">
                <div className="blog-full-details">
                  <div className="post-info">
                    {/* Post Title - Assuming PagesHero displays the main title */}
                    {/* If you need it here too: <h2>{post.title}</h2> */}
                    
                    <span className="posted"> {/* Your existing class */}
                      Posted on <Link to="#">{post.date || "Unknown Date"}</Link> 
                      {post.author && ` by ${post.author}`} {/* Use post.author from data */}
                    </span>
                    
                    <div className="post-details mt-3">
                      {/* VVVVVV MODIFIED SECTION RENDERING LOGIC VVVVVV */}
                      {Array.isArray(post.sections) && post.sections.length > 0 ? (
                        post.sections.map((section, index) => {
                          const sectionKey = `section-${index}-${section.section_type || 'default'}`;

                          if (section.section_type === 'primary_heading' && section.heading_text) {
                            // Use your existing CSS for headings if possible, or style as needed
                            // This was h3 with <b> in your old code for section.heading
                            return (
                              <div key={sectionKey} className="blog-section-item mb-3"> {/* Added item class */}
                                <h2 className="section-heading primary-heading"> {/* Or h3, adjust class/tag */}
                                  <b>{section.heading_text}</b>
                                </h2>
                              </div>
                            );
                          } else if (section.section_type === 'secondary_heading' && section.heading_text) {
                            return (
                              <div key={sectionKey} className="blog-section-item mb-3">
                                <h3 className="section-heading secondary-heading"> {/* Or h4 */}
                                  <b>{section.heading_text}</b>
                                </h3>
                              </div>
                            );
                          } else if (section.section_type === 'paragraph' && section.paragraph_content) {
                            // Your old code used section.content and a .replace for newlines
                            // The new schema uses section.paragraph_content and assumes it might contain HTML
                            return (
                              <div key={sectionKey} className="blog-section-item mb-4"> {/* mb-4 was from your old div */}
                                {section.paragraph_heading && section.paragraph_heading.trim() !== "" && (
                                     <h4 className="section-paragraph-heading"><b>{section.paragraph_heading}</b></h4> // Example if paragraphs can have their own small headings
                                )}
                                <div 
                                  className="section-content" /* Your existing class */
                                  dangerouslySetInnerHTML={{ __html: section.paragraph_content }} 
                                />
                              </div>
                            );
                          }
                          // Fallback for sections that don't match known types or are missing essential data
                          return null; 
                        })
                      ) : (
                        <p>No detailed content sections available for this post.</p>
                      )}
                      {/* ^^^^^^ END OF MODIFIED SECTION RENDERING LOGIC ^^^^^^ */}
                    </div>
                  </div>

                  {/* Your existing media gallery (hardcoded) - keep if you still want it */}
                  {/* <ul className="media-gallery"> ... </ul> */}

                  {/* Your existing tags (hardcoded) - keep if you still want it */}
                  {/* <div className="tags-inline"> ... </div> */}
                  
                  {/* Your existing share wrapper */}
                  <div className="share-wrapper">
                    <div>
                      <Link to="#" className="post-share"> {/* Changed to # */}
                        <FaShare />
                      </Link>
                      <ul className="icon" style={{ display: "flex", gap: "10px", marginTop: "10px", listStyle: 'none', paddingLeft: 0 }}>
                        <li><Link to="https://www.instagram.com/dronum_aviations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer"><img src="/assets/img/instagram.png" alt="Instagram" width="40px"/></Link></li>
                        <li><Link to="https://www.facebook.com/people/Dronum-India-Aviation/61566053652177" target="_blank" rel="noopener noreferrer"><img src="/assets/img/facebook.png" alt="Facebook" width="35px"/></Link></li>
                        <li><Link to="https://www.youtube.com/@DronumIndiaAvaitions" target="_blank" rel="noopener noreferrer"><img src="/assets/img/youtube.png" alt="YouTube" width="38px"/></Link></li>
                        <li><Link to="https://www.linkedin.com/company/dronum-india-aviation-private-limited/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/linkedin.png" alt="LinkedIn" width="38px"/></Link></li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;