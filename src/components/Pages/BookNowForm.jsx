import React from "react";
import "../../css/Form.css"



const BookNowForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  // Prevent page reload on submit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const data = Object.fromEntries(formData.entries());
  
  //   try {
  //     const response = await fetch("http://localhost:5000/api/book", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  
  //     const result = await response.json();
  //     if (response.ok) {
  //       alert("Booking submitted successfully!");
  //       closeModal();
  //     } else {
  //       alert("Submission failed: " + result.message);
  //     }
  //   } catch (error) {
  //     alert("Error submitting form: " + error.message);
  //   }
  // };
  

  return (
    <div id="enroll-container" className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Book Now</h2>
        <form 
        // onSubmit={handleSubmit}
        >
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Name*" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email*" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Phone Number*" required />

          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="City*" required />

       

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
