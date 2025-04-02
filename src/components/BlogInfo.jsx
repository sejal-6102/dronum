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

const BlogInfo = () => {
  return (
    <>
      <div className="blog-info-outer">
        <div className="container">
          <div className="blog-info-inner animate__animated animate__zoomIn">
            <div className="post">
              <div className="img-content">
                <img src="assets/img/thum2.jpg" alt="" />
              </div>
              <div className="text-content">
                <div className="blog-full-details">
                  <div className="post-info">
                    <h2>How Drones Are Saving Our Beaches</h2>
                    <span className="posted">
                      Posted on <Link>December 12, 2020</Link> by dronza
                    </span>
                    <div className="post-details">
                      <p>
                        A collection of textile samples lay spread out on the
                        table – Samsa was a travelling sales man – and above it
                        there hung a picture that he had recently cut out of an
                        illustrated an magazine and housed in a nice, gilded
                        frame. It showed a lady fitted out with a fur hat and
                        fur boa who sat upright, raising a heavy fur muff that
                        covered the whole of her lower army towards the viewer.
                      </p>
                      <p>
                        Industro is the specialised IoT company within the
                        Industris Group, one of the world’s major mobile
                        operators. Building on almost 20 years of experience,
                        Industris provides global lots connectivity and cloud
                        services to enterprises with large fleets of connected
                        devices well as third-party service providers.
                      </p>
                      <div className="media-post">
                        <div className="media-img">
                          <img src="assets/img/1.jpg" alt="" />
                        </div>
                        <div className="media-text">
                          <p>Telenor Connexion manages more.</p>
                          <p>
                            Million connect things in more than 200 countries.
                          </p>
                          <p>For global customers including Volvo.</p>
                          <p>Hitachi, are Securitas Direct and Husqvarna. </p>
                          <p>
                            With headquarters and tech centre located in Sweden.
                          </p>
                          <p>
                            The company has regional offices in the UK, US,
                            Germany and Japan.
                          </p>
                        </div>
                      </div>
                      <p>
                        Gregor then turned to look out the window at the dull
                        weather. Pitifully thin compared with the size of the
                        rest of him, waved about helplessly as he looked.
                        “What’s happened to me?” he thought. It wasn’t a dream.
                        His room, a proper human room although a little too
                        small, lay peacefully between its four familiar
                        wallsmuff that covered the whole of her lower arm
                        towards the viewer.
                      </p>
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
                      <p>
                        An eros argumentum vel, elit diceret duo eu, quo et
                        aliquid ornatus delicatissimi. Cu nam tale ferri
                        utroque, eu habemus albucius mel, cu vidit possit
                        ornatus eum. Eu ius postulant salutatus definitionem, an
                        e trud erroribus explicari. Graeci viderer qui ut, at
                        habeo facer solet usu. Pri choro pertinax indoctum ne,
                        ad partiendo persecuti forensibus est.
                      </p>
                    </div>
                  </div>
                  <div className="tags-inline">
                    <span>
                      <Link to="">Business</Link>
                      <Link to="">Consulting</Link>
                      <Link to="">Development</Link>
                      <Link to="">Dronza</Link>
                      <Link to="">Management</Link>
                      <Link to="">Stock</Link>
                    </span>
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
                    <div className="comments">
                      <Link to="">
                        <FaComments />
                        <span>7</span>
                      </Link>
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
