import React from "react";


const EnrollForm = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Enroll Now</h2>
        <form>
          <label>Your Name</label>
          <input type="text" placeholder="Name*" required />

          <label>Email Address</label>
          <input type="email" placeholder="Email*" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Phone Number*" required />

          <label>City</label>
          <input type="text" placeholder="City*" required />

          <label>Course</label>
          <select required>
            <option value="">Select Course</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="ui-ux">UI/UX Design</option>
          </select>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollForm;
