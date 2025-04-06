import React from "react";

const ContactForm = () => {
  return (
    <>
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
                  <h2>Our Full Info</h2>
                </div>
                <ul className="contact-info">
                  <li>
                    <span>Phone number</span>
                    <p>(+91)7433 876 876</p>
                    <p>0141 4789966</p>
                  </li>
                 
                  <li>
                    <span>Email Address</span>
                    <p>info@dronum.in</p>
                  </li>
                  <li>
                    <span>Address info</span>
                    <p>B/229, 2nd Floor, Shivraj Niketan Colony, Vaishali Nagar, Jaipur 302021</p>
                    <p> Registered Address : C-162, 163 Hanuman Nagar, Bharat Marg, Vaishali Nagar, Jaipur, Jaipur, Rajasthan, 302021</p>
                  </li>
                  {/* <li>
                    <span>Opening Hours</span>
                    <ul>
                      <li>Mon-Fri: 9 am – 6 pm</li>
                      <li>Saturday: 9 am – 4 pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="item" style={{ backgroundColor: "#020231", padding:"5px",borderRadius:"15px", color:"white"}}
>
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                   
                   
                  </div>
                  <h2 style={{color:"white"}}>Get In Touch </h2>
                </div>

                <form method="POST">
                  <div className="input-fild">
                    <p>
                      <input
                        className="input"
                        type="text"
                        size="40"
                        placeholder="Name"
                        name="name"
                      />
                    </p>
                  </div>
                  <div className="input-fild">
                    <p>
                      <input
                        className="input"
                        type="email"
                        size="40"
                        placeholder="Email"
                        name="email"
                      />
                    </p>
                  </div>
                  <div className="input-fild">
                    <p>
                      <input
                        className="input"
                        type="text"
                        size="40"
                        placeholder="Phone Number"
                        name="Phone Number"
                      />
                    </p>
                  </div>
                  <div className="input-fild">
                    <p>
                      <input
                        className="input"
                        type="text"
                        size="40"
                        placeholder="City"
                        name="City"
                      />
                    </p>
                  </div>
                  <div className="input-fild">
                    <p>
                      <textarea
                        className="input"
                        name="message"
                        cols="40"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </p>
                  </div>
                  <div className="input-fild">
                    <input
                      className="button"
                      type="submit"
                      value={"Submit Now"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
