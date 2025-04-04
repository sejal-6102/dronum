import React from "react";
import "../css/CoreTeam.css"; // Import CSS

const teamMembers = [
  {
    name: "John Doe",
    designation: "CEO",
    imgSrc: "/assets/img/pic4-5.jpg", // Ensure this exists in "public"
    details: "John is an experienced entrepreneur with expertise in business growth.",
  },
  {
    name: "Jane Smith",
    designation: "CTO",
    imgSrc: "https://via.placeholder.com/300x400",
    details: "Jane is a tech enthusiast, leading our software development.",
  },
  {
    name: "David Wilson",
    designation: "Project Manager",
    imgSrc: "https://via.placeholder.com/300x400",
    details: "David ensures smooth project execution and team collaboration.",
  },
  {
    name: "Emma Brown",
    designation: "Designer",
    imgSrc: "https://via.placeholder.com/300x400",
    details: "Emma creates stunning designs for our products and marketing.",
  },
  {
    name: "Michael Lee",
    designation: "Marketing Head",
    imgSrc: "https://via.placeholder.com/300x400",
    details: "Michael leads the marketing strategies for brand growth.",
  },
  {
    name: "Sophia Johnson",
    designation: "HR Manager",
    imgSrc: "https://via.placeholder.com/300x400",
    details: "Sophia manages talent acquisition and employee well-being.",
  },
];

const CoreTeam = () => {
  return (
    <div className="coreteam-container">
      <h2 className="coreteam-heading">Core Team</h2>
      <p className="coreteam-subheading">Meet our team of experts leading the way</p>

      <div className="coreteam-wrapper">
        {teamMembers.map((member, index) => (
          <div key={index} className="coreteam-card">
            <div className="coreteam-inner">
              {/* Front Side */}
              <div
                className="coreteam-front"
                style={{
                  backgroundImage: `url(${member.imgSrc})`,
                }}
              >
                <div className="overlay">
                  <h3>{member.name}</h3>
                  <p>{member.designation}</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="coreteam-back">
                <h3>{member.name}</h3>
                <p>{member.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
