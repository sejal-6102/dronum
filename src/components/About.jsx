import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-outer">
        <div className="container">
          <div className="about-inner animate__animated animate__zoomIn">
            <div className="item">
              <div className="item-inner">
                <div className="img-content">
                  <img src="assets/img/rtpo.jpg" alt="" />
                </div>
                <div className="text-content">
                  <span className="outline-title" style={{fontSize:'40px'}}>DGCA RPTO</span>
                  <strong style={{fontSize:'25px'}}>Approved!</strong>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">About</span>
                  </div>
                  <h2>
                  RPTO Authorization & Achievements
                  </h2>
                  <p>
                  Dronum India Aviations is a DGCA-authorized Drone Remote Pilot Training Organization (RPTO), committed to providing world-class drone training programs. Our certification & training programs ensures that we meet the
                  highest standards in drone pilot education, safety protocols, and operational expertise. With this accreditation, we empower aspiring drone professionals with industry-recognized training and licensing, making them future-ready for the rapidly growing UAV industry.                  </p>
                </div>
                <ul>
                  <li>
                    <img src="assets/img/pilot.png" alt="" />
                    Trained Numerous of Certified Drone Pilots

                  </li>
                  <li>
                    <img src="assets/img/remote-control.png" alt="" />
                    Government & Industry Collaborations
                  </li>
                  <li>
                    <img src="assets/img/game-console.png" alt="" />
                    Expansion Across Multiple States
                  </li>
                  <li>
                    <img src="assets/img/pilot.png" alt="" />
                    Cutting - Edge Drone Training Curriculum                  </li>
                </ul>
                <Link to="/about" className="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
