import React from "react";
import "../../css/Form.css"
import { API_BASE_URL } from "../Pages/Admin/contentSchemas";



const EnrollForm = ({ isOpen, closeModal }) => {
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
      // const response = await fetch("https://dronum-backend-git-main-sejal-6102s-projects.vercel.app/api/enroll"
        const response = await fetch(`${API_BASE_URL}/api/enroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        closeModal(); // Optional: Close modal on success
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
        <h2>Enroll Now</h2>
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

          <label htmlFor="course">Course</label>
          <select id="course" name="course" required>
            <option value="">Select Course</option>
            <option value="Small Remote Pilot Certification Course (RPC) – 5-7 Days">Small Remote Pilot Certification Course (RPC) – 5-7 Days</option>
            <option value="Remote Pilot Certification (RPC) with Agri – 8 Days">Remote Pilot Certification (RPC) with Agri – 8 Days</option>
            <option value="Drone Technician Course – 9 Days">Drone Technician Course – 9 Days</option>
            <option value="Medium Remote Pilot Certification Course – 7 Days">Medium Remote Pilot Certification Course – 7 Days</option>
            <option value="RPC + Remote Pilot Instructor Course (RPI/TTT) – 15 Days">RPC + Remote Pilot Instructor Course (RPI/TTT) – 15 Days</option>
            <option value="Drone Security Officer Training – 20 Days">Drone Security Officer Training – 20 Days</option>
            <option value="Survey & Mapping with RPC – 8 Days">Survey & Mapping with RPC – 8 Days</option>
            <option value="PV Drones ( Build & Pilot Training) - 15 Days ">FPV Drones ( Build & Pilot Training) - 15 Days </option>
          
          </select>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
