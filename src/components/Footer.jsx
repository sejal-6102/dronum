import React from "react";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import RecentPostItems from "./Items/RecentPostItems";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="top">
            <div className="top-inner">
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Get in Touch</h4>
                  <ul>
                    <li>
                      <span>
                        <FaLocationDot />
                      </span>
                      <Link to="https://www.google.com/maps/dir//B-229,+Vaishali+Marg,+opposite+Karnataka+Bank,+Shivraj+Niketan+Colony,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021/@26.915,75.6590385,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6805f3e7833b77a7:0xeef7ca56bebad0!2m2!1d75.74144!2d26.9150239?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" style={{color:'white'}}>
                      Registered Address : C-162, 163 Hanuman Nagar, Bharat Marg, Vaishali Nagar, Jaipur, Jaipur, Rajasthan, 302021
                      </Link>
                    </li>
                    <li>
                      <span>
                        <FaEnvelope />
                      </span>
                      info@dronum.in
                    </li>
                    <li>
                      <span>
                        <FaPhone />
                      </span>
                      (+91) 7433 876 876<br></br>
                      (+91) 766 587 6876
                    </li>
                  </ul>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">Useful Links</h4>
                  <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    {/* <li>
                      <Link to="/shop">Shop</Link>
                    </li> */}
                    <li>
                      <Link to="/team-listing">Team Dronum</Link>
                    </li>
                    <li>
                      <Link to="/blog-grid">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="item">
                <div className="item-inner">
                  <h4 className="title">Recent Post</h4>
                  <ul>
                    <li>
                      <RecentPostItems
                        img="assets/img/thum1-150x150.jpg"
                        title="Planning approved for restoration town hall."
                      />
                    </li>
                    <li>
                      <RecentPostItems
                        img="assets/img/thum2-150x150.jpg"
                        title="How to Start a Drone Photography Business"
                      />
                    </li>
                  </ul>
                </div>
              </div> */}
              <div className="item">
                <div className="item-inner">
                  <h4 className="title">About</h4>
                  <p>
                  Dronum India Aviation is Jaipur, Rajasthan-based remote pilot training organization. Dronum India Aviation is a remote pilot training organization approved by DGCA. </p>
                  {/* <p>We help you attain high-quality, hand-on-the-throttle theoretical knowledge about drones, from flight hours to drone manufacturer approved certification for flying in several states and cities of our country. 
                  </p> */}

                  {/* <div className="input-group">
                    <input type="text" placeholder="Enter your email" />
                    <button className="button">Subscribe</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="middle">
            <div className="middle-inner">
              <div className="logo">
                <Link to="/">
                  <img src="/assets\img\logo.png" alt="" />
                </Link>
              </div>
              <ul className="copyright-menu">
                <li>
                  <Link to="/"> Home </Link>
                </li>
                {/* <li>
                  <Link to="/privacy"> Privacy Policy </Link>
                </li> */}
                <li>
                  <Link to="/contact-us"> Contact Us </Link>
                </li>
              </ul>
              <ul className="soical-media">
                <li>
                  <Link to="https://www.linkedin.com/company/dronum-india-aviation-private-limited/">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/dronum_aviations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.facebook.com/people/Dronum-India-Aviation/61566053652177/">
                    <FaFacebookF />
                  </Link>
                </li>
                  <li>
                  <Link to="https://www.youtube.com/@DronumIndiaAvaitions">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-inner">
              <span>© DRONUM INDIA AVIATIONS PRIVATE LIMITED All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
