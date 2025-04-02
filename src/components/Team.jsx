import React from "react";
import TeamItems from "./Items/TeamItems";

const Team = () => {
  const team = [
    {
      img: "assets/img/pic1-2.jpg",
      position: "Photographer",
      name: "Stephan Humbert",
    },
    {
      img: "assets/img/pic2-2.jpg",
      position: "Creative Director",
      name: "Leo Simon",
    },
    {
      img: "assets/img/pic3-1.jpg",
      position: "Photographer",
      name: "John Casey",
    },
  ];
  return (
    <>
      <div className="team-outer">
        <div className="container">
          <div className="team-inner animate__animated animate__zoomIn">
            <div className="heading">
              <div className="sub-heading">
                <span className="line-left"></span>
                <span className="text">Core Team</span>
                <span className="line-right"></span>
              </div>
              <h2>Our Dedicated Team</h2>
            </div>
            <div className="content">
              {team.map((i) => (
                <TeamItems vlaue={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
