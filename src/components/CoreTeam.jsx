import React from "react";
import "../css/CoreTeam.css"; // Import CSS

const teamMembers = [
  {
    name: "Smt. Sheetal Mahajan ji",
    designation: "",
    imgSrc:"/assets/img/footprints.jpg", // Ensure this exists in "public"
    details: "Padma Shri Awardee Sky Diver",
  },
    {
    name: "Hawa Mahal Jaipur",
    designation: "",
    imgSrc:"/assets/img/footprints1.jpg", // Ensure this exists in "public"
    details: "परम पूूजनीय हाथोज़ धाम महंंत बालमुकुंद आचाय  जी MLA",
  },
    {
    name: "Smt. Sheetal Mahajan ji",
    designation: "",
    imgSrc:"/assets/img/footprints15.png", // Ensure this exists in "public"
    details: "Shri B.L. Soni ji",
  },
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
      <div className="heading">
              <div className="sub-heading">
                <span className="line-left"></span>
                <span className="text">Core Team</span>
                <span className="line-right"></span>
              </div>
              <h2>Creating Our Footprints</h2>
              <p>At Dronum Aviation, our core team is the backbone of every innovation, flight, and milestone we achieve. Comprising passionate aviators, skilled engineers, visionary entrepreneurs, and strategic thinkers, our team is united by a single mission — to shape the future of drone technology in India.</p>
            </div>

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
