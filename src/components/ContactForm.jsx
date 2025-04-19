import React from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://dronum-backend.vercel.app/contact", {
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
                  <p>Registered Address: C-162, 163 Hanuman Nagar, Bharat Marg, Vaishali Nagar, Jaipur, Rajasthan, 302021</p>
                </li>
              </ul>
            </div>
          </div>
          



            {/* Contact Info Section (unchanged) */}
          
          <div className="item" style={{ backgroundColor: "#020231", padding: "5px", borderRadius: "15px", color: "white" }}>
            <div className="item-inner">
              <div className="heading">
                <h2 style={{ color: "white" }}>Get In Touch</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="input-fild">
                  <p><input className="input" type="text" name="name" placeholder="Name" required /></p>
                </div>
                <div className="input-fild">
                  <p><input className="input" type="email" name="email" placeholder="Email" required /></p>
                </div>
                <div className="input-fild">
                  <p><input className="input" type="text" name="phone" placeholder="Phone Number" required /></p>
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
