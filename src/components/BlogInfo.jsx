import React from "react";
import {
  FaComments,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaShare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogInfo = ({ post }) => {
  if (!post) return <h2>No Blog Data Available</h2>;
  return (
    <>
      <div className="blog-info-outer">
        <div className="container">
          <div className="blog-info-inner animate__animated animate__zoomIn">
            <div className="post">
              <div className="img-content">
              <img src={post.img} alt={post.title} />
              </div>
              <div className="text-content">
                <div className="blog-full-details">
                  <div className="post-info">
                  <h2>{post.title}</h2>
                    <span className="posted">
                    Posted on <Link>{post.date}</Link> by dronum
                    </span>
                    <div className="post-details">
                      <p>
                      <p>{post.content}</p>
                      </p>
                    
                      <div className="media-post">
                       
                      
                        <div className="post-details">
                    {post.sections &&
                      post.sections.map((section, index) => (
                        <div key={index}>
                          <h3><b>{section.heading}</b></h3>
                          <p>{section.content}</p>
                        </div>
                      ))}
                  </div>
                        
                      </div>
                  
                      <ul className="media-gallery">
                        <li>
                          <img src="assets/img/5.jpg" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/1.jpg" alt="" />
                        </li>
                        <li>
                          <img src="assets/img/6.jpg" alt="" />
                        </li>
                      </ul>
                  
                    </div>
                  </div>
                  <div className="tags-inline">
               
                  </div>
                  <div className="share-wrapper">
                    <div className="social">
                      <Link to="" className="post-share">
                        <FaShare />
                      </Link>
                      <ul className="icon">
                        <li>
                          <Link to="https://www.facebook.com/" className="facebook">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://in.linkedin.com/" className="linkedin">
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://in.pinterest.com/x" className="pinterest">
                            <FaPinterest />
                          </Link>
                        </li>
                        <li>
                          <Link to="https://twitter.com/" className="twitter">
                            <FaTwitter />
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
