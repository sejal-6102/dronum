import React from "react";
import "../../css/Form.css"
import { API_BASE_URL } from "../Pages/Admin/contentSchemas";



const BookNowForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  // Prevent page reload on submit
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
     // const response = await fetch("https://dronum-backend.vercel.app/api/book"
      // const response = await fetch("https://dronum-backend-git-main-sejal-6102s-projects.vercel.app/api/book"
        const response = await fetch(`${API_BASE_URL}/api/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Booking submitted successfully!");
        closeModal();
      } else {
        alert("Submission failed: " + result.message);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };
  

  return (
    <div id="enroll-container" className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Book Now</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Name*" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Email*" required />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel" // Use "tel" type for semantic meaning (often brings up numeric keypad on mobile)
            id="phone"
            name="phone"
            placeholder="10-digit Phone Number*"
            required
            pattern="\d{10}" // HTML5 pattern: Exactly 10 digits (\d)
            maxLength="10"   // Prevent typing more than 10 characters
            title="Please enter exactly 10 digits (e.g., 1234567890)." // Tooltip for pattern mismatch
            inputMode="numeric" // Hint for mobile keyboards to show numbers
          />


          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="City*" required />

          <label htmlFor="drone">Drone</label>
          <select id="drone" name="drone" required>
            <option value="">Select Drone</option>
            <option value="AERIAL SURVEYING AND MAPPING">AERIAL SURVEYING AND MAPPING</option>
            <option value="AGRICULTURAL SERVICES">AGRICULTURAL SERVICES</option>
            <option value="INFRASTRUCTURE INSPECTION">INFRASTRUCTURE INSPECTION</option>
            <option value="PHOTOGRAPHY AND VIDEOGRAPHY">PHOTOGRAPHY AND VIDEOGRAPHY</option>
          
          </select>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
