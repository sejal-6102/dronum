import React from "react";
import TeamItems from "./Items/TeamItems";

const Team = () => {
  const team = [
    {
      img: "assets/img/footprints.jpg",
      position: "Smt. Sheetal Mahajan ji",
      name:"Padma Shri Awardee Sky Diver",
    },
    {
      img: "assets/img/footprints1.jpg",
      position: "हवा महल जयपुुर",
      name: "परम पूूजनीय हाथोज़ धाम महंंत बालमुकुंद आचाय  जी MLA",
    },
    {
      img: "assets/img/footprints1.jpg",
      position: "Ex. DG ACB IAS officer",
      name: "Shri B.L. Soni ji",
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
              <h3>Creating Our Footprints</h3>
            </div>
            <div className="content">
              {team.map((i,index) => (
                <TeamItems key ={index} vlaue={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
