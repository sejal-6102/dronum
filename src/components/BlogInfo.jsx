// import React from "react";
// import {
//   FaComments,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaPinterest,
//   FaShare,
//   FaTwitter,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const BlogInfo = ({ post }) => {
//   if (!post) return <h2>No Blog Data Available</h2>;
//   return (
//     <>
//       <div className="blog-info-outer">
//         <div className="container">
//           <div className="blog-info-inner animate__animated animate__zoomIn">
//             <div className="post">
//               <div className="img-content">
//               <img src={post.img} alt={post.title} />
//               </div>
//               <div className="text-content">
//                 <div className="blog-full-details">
//                   <div className="post-info">
//                   <h2>{post.title}</h2>
//                     <span className="posted">
//                     Posted on <Link>{post.date}</Link> by dronum
//                     </span>
//                     <div className="post-details">
//                       <p>
//                       <p>{post.content}</p>
//                       </p>
                    
//                       <div className="media-post">
                       
                      
//                         <div className="post-details">
//                     {post.sections &&
//                       post.sections.map((section, index) => (
//                         <div key={index}>
//                           <h3><b>{section.heading}</b></h3>
//                           <p>{section.content}</p>
//                         </div>
//                       ))}
//                   </div>
                        
//                       </div>
                  
//                       <ul className="media-gallery">
//                         <li>
//                           <img src="assets/img/5.jpg" alt="" />
//                         </li>
//                         <li>
//                           <img src="assets/img/1.jpg" alt="" />
//                         </li>
//                         <li>
//                           <img src="assets/img/6.jpg" alt="" />
//                         </li>
//                       </ul>
                  
//                     </div>
//                   </div>
//                   <div className="tags-inline">
               
//                   </div>
//                   <div className="share-wrapper">
//                     <div className="social">
//                       <Link to="" className="post-share">
//                         <FaShare />
//                       </Link>
//                       <ul className="icon">
//                         <li>
//                           <Link to="https://www.facebook.com/" className="facebook">
//                             <FaFacebookF />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="https://in.linkedin.com/" className="linkedin">
//                             <FaLinkedinIn />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="https://in.pinterest.com/x" className="pinterest">
//                             <FaPinterest />
//                           </Link>
//                         </li>
//                         <li>
//                           <Link to="https://twitter.com/" className="twitter">
//                             <FaTwitter />
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
                 
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogInfo;

// frontend/src/components/BlogInfo.jsx
import React from "react";
import {
  // FaComments, // Commented out if not used
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// API_BASE_URL ko import karein agar getFullImageUrl yahaan define karna hai
import { API_BASE_URL } from './Pages/Admin/contentSchemas'; // Path adjust karein

const BlogInfo = ({ post }) => {
  // Helper function to construct full image URL (agar zaroori hai)
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

  const mainImageUrl = post.img ? getFullImageUrl(post.img) : "/assets/img/default-blog-image.jpg"; // Fallback

  return (
    <>
      <div className="blog-info-outer">
        <div className="container">
          <div className="blog-info-inner animate__animated animate__zoomIn">
            <div className="post">
              {/* Main image of the blog post, agar PagesHero mein nahi dikha rahe */}
              {/* Agar PagesHero mein image hai, toh yeh section optional hai */}
              {mainImageUrl && (
                <div className="img-content main-blog-image mb-4">
                  <img src={mainImageUrl} alt={post.title || "Blog Image"} style={{width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover'}}/>
                </div>
              )}

              <div className="text-content">
                <div className="blog-full-details">
                  <div className="post-info">
                    {/* Title yahaan bhi dikha sakte hain, ya sirf PagesHero mein */}
                    {/* <h2>{post.title}</h2> */}
                    <span className="posted">
                      Posted on <Link to="#">{post.date || "Unknown Date"}</Link> by Dronum {/* Hardcoded by dronum */}
                    </span>
                    
                    <div className="post-details mt-3"> {/* Added margin-top */}
                      {/* Summary content (post.content) - Agar yeh full blog mein nahi dikhana toh hata dein */}
                      {/* {post.content && <p className="blog-summary mb-4"><em>{post.content}</em></p>} */}

                      {/* Detailed sections */}
                      {Array.isArray(post.sections) && post.sections.length > 0 ? (
                        post.sections.map((section, index) => (
                          <div key={index} className="blog-section mb-4">
                            {section.heading && section.heading.trim() !== "" && (
                              <h3 className="section-heading"><b>{section.heading}</b></h3>
                            )}
                            {section.content && (
                              // Render HTML content safely, convert newlines to <br>
                              <div className="section-content" dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }} />
                            )}
                          </div>
                        ))
                      ) : (
                        <p>No detailed content available for this post.</p>
                      )}
                    </div>
                  </div>

                  {/* Media Gallery - Yeh hardcoded hai, isko dynamic banane ke liye schema update karna hoga */}
                  {/* <ul className="media-gallery">
                    <li><img src="/assets/img/5.jpg" alt="" /></li>
                    <li><img src="/assets/img/1.jpg" alt="" /></li>
                    <li><img src="/assets/img/6.jpg" alt="" /></li>
                  </ul> */}

                  {/* Tags - Yeh bhi dynamic ho sakte hain */}
                  {/* <div className="tags-inline"></div> */}

                  {/* <div className="share-wrapper mt-4"> 
                    <div className="social">
                      <span className="post-share me-2">
                        <FaShare /> Share:
                      </span>
                      <ul className="icon d-inline-flex list-unstyled"> 
                        <li className="me-2"><Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></Link></li>
                        <li className="me-2"><Link to="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer" className="linkedin"><FaLinkedinIn /></Link></li>
                        <li className="me-2"><Link to="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer" className="pinterest"><FaPinterest /></Link></li>
                        <li><Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter"><FaTwitter /></Link></li>
                      </ul>
                    </div>
                  </div> */}

                      <div className="share-wrapper">
                                                  <div>
                                                    <Link to="" className="post-share">
                                                      <FaShare />
                                                    </Link>
                                                    <ul className="icon" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                                      <li>
                                                        <Link to="https://www.instagram.com/dronum_aviations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" >
                                                          <img src="/assets/img/instagram.png" width="40px"/>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link to="https://www.facebook.com/people/Dronum-India-Aviation/61566053652177">
                                                           <img src="/assets/img/facebook.png" width="35px"/>
                                                        </Link>
                                                      </li>
                                                      <li>
                                                        <Link to="https://www.youtube.com/@DronumIndiaAvaitions">
                                                           <img src="/assets/img/youtube.png" width="38px"/>
                                                        </Link>
                                                      </li>
                                                        <li>
                                                        <Link to="https://www.linkedin.com/company/dronum-india-aviation-private-limited/">
                                                           <img src="/assets/img/linkedin.png" width="38px"/>
                                                        </Link>
                                                      </li>
                                                    
                                                  
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
