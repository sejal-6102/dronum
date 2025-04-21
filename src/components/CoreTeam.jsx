import React from "react";
import "../css/CoreTeam.css"; // Import CSS

const teamMembers = [
  {
    name: "MOU & Joint Venture",
    designation: "",
    imgSrc:"/assets/img/footprint11.jpg", // Ensure this exists in "public"
    details: "MOU & Joint Venture Signed Between Dronum & CISS Academy For RPTO Setup",
  },
  {
    name: "Shree Deepak Bhargav Sir",
    designation: "",
    imgSrc:"/assets/img/footprint12.jpg",
    details: "Jane is a tech enthusiast, leading our software development.",
  },
  {
    name: "Shree R.K. Tyagi Ji ",
    designation: "",
    imgSrc: "/assets/img/footprint13.jpg",
    details: "Director - CISS Academy for Skill Human Development Pvt. Ltd. ",
  },
  {
    name: "CI Uday Singh ji",
    designation: "",
    imgSrc: "/assets/img/footprint14.jpg",
    details: "(Police Station - Muhana, Jaipur)",
  },
  {
    name: "Smt. Anju Gupta ji ",
    designation: "",
    imgSrc: "assets/img/footprint15.jpg",
    details: "Principal, KVGIT College, Jaipur",
  },
  {
    name: "MOU & SLA ",
    designation: "",
    imgSrc: "assets/img/footprint16.jpg",
    details: "MOU & SLA Signed Between Dronum & Marut Drone Academy For Training and R & M Course.",
  },
];

const CoreTeam = () => {
  return (
    <div className="coreteam-container">
      <h2 className="coreteam-heading">Our Footprints</h2>
      <p className="coreteam-subheading">Our Footprints reflect the journey we've taken—marked by impact, innovation, and a commitment to creating lasting change.</p>

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
