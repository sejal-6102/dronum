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
                    <p>(+291) 0987 654 321</p>
                  </li>
                  <li>
                    <span>Email address</span>
                    <p>info@gridvalley.net</p>
                  </li>
                  <li>
                    <span>Address info</span>
                    <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                  </li>
                  <li>
                    <span>Opening Hours</span>
                    <ul>
                      <li>Mon-Fri: 9 am – 6 pm</li>
                      <li>Saturday: 9 am – 4 pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span>You Will Love It.</span>
                  </div>
                  <h2>Get In Touch </h2>
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
                        placeholder="Subject"
                        name="subject"
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
