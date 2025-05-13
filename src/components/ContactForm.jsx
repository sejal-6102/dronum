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
import { API_BASE_URL } from '../components/Pages/Admin/contentSchemas';

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());


    const phoneRegex = /^\d{10}$/; // Regular expression for exactly 10 digits
    if (!phoneRegex.test(data.phone)) {
      // Check if the phone number from the form data matches the pattern
      alert("Please enter a valid 10-digit phone number (digits only).");
      return; // Stop the submission if validation fails
    }

    try {
      //  const response = await fetch("https://dronum-backend-git-main-sejal-6102s-projects.vercel.app/api/contact" 
      const response = await fetch(`${API_BASE_URL}/api/contact`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="contact-outer">
      <div className="container">
        <div className="contact-inner">
          <div className="item">
          <div className="item-inner">
              <div className="heading">
                <div className="sub-heading">
                  <span className="line-left"></span>
                  <span>Contact here</span>
                </div>
                <h3>Our Full Info</h3>
              </div>
              <ul className="contact-info">
                <li>
                  <span>Phone number <i style={{ fontSize: "0.8em"}}>(Head Office)</i></span>
                  <p>(+91)7433 876 876</p>
                  <p>(+91)766 587 6876</p>
                  {/* <p>0141 4789966</p> */}
                </li>
                <li>
                  <span>Email Address</span>
                  <p>info@dronum.in</p>
                </li>
                <li>
                  <span>Address info <i style={{ fontSize: "0.8em"}}>(Jaipur)</i></span>
                  <p>B/229, 2nd Floor, Shivraj Niketan Colony, Vaishali Nagar, Jaipur 302021</p>
                 
                </li>

                <li>
                <span>Socila Media </span>
                   <div className="share-wrapper">
                                <div className="social">
                                  <Link to="" className="post-share">
                                    <FaShare />
                                  </Link>
                                  <ul className="icon" style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                    <li>
                                      <Link to="https://www.instagram.com/dronum_aviations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="facebook">
                                        <img src="/assets/img/instagram.png" width="40px"/>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="https://www.facebook.com/people/Dronum-India-Aviation/61566053652177/" className="linkedin">
                                         <img src="/assets/img/facebook.png" width="35px"/>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="https://www.youtube.com/@DronumIndiaAvaitions" className="pinterest">
                                         <img src="/assets/img/youtube.png" width="38px"/>
                                      </Link>
                                    </li>
                                      <li>
                                      <Link to="https://www.linkedin.com/company/dronum-india-aviation-private-limited/" className="pinterest">
                                         <img src="/assets/img/linkedin.png" width="38px"/>
                                      </Link>
                                    </li>
                                  
                                
                                  </ul>
                                </div>
                             
                              </div>
                </li>
                  <li>
                                     <span>Google My Busniess</span> 
                                     <p> 
                                     <Link to="https://g.co/kgs/4chjTMz"><img src="/assets/img/gmb1.png" width="40px"/></Link></p>
                                    </li>
              </ul>

               
            </div>
           
          </div>
          



            {/* Contact Info Section (unchanged) */}
          
          <div className="item" style={{ backgroundColor: "#020231", padding: "5px", borderRadius: "15px", color: "white" }}>
            <div className="item-inner">
              <div className="heading">
                <h3 style={{ color: "white",paddingTop:'10px',alignItems:'center'}}>Get In Touch</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-fild">
                  <p><input className="input" type="text" name="name" placeholder="Name" required /></p>
                </div>
                <div className="input-fild">
                  <p><input className="input" type="email" name="email" placeholder="Email" required /></p>
                </div>
                <div className="input-fild">
                  <p>
                  
                  
                  
                  <input
            type="tel" // Use "tel" type for semantic meaning (often brings up numeric keypad on mobile)
            id="phone"
            className="input"
            name="phone"
            placeholder="10-digit Phone Number*"
            required
            pattern="\d{10}" // HTML5 pattern: Exactly 10 digits (\d)
            maxLength="10"   // Prevent typing more than 10 characters
            title="Please enter exactly 10 digits (e.g., 1234567890)." // Tooltip for pattern mismatch
            inputMode="numeric" // Hint for mobile keyboards to show numbers
          /></p>
                </div>
                <div className="input-fild">
                  <p><input className="input" type="text" name="city" placeholder="City" required /></p>
                </div>
                <div className="input-fild">
                  <p><textarea className="input" name="message" rows="5" placeholder="Message" required></textarea></p>
                </div>
                <div className="input-fild">
                  <input className="button" type="submit" value="Submit Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
