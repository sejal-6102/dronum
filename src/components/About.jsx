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
                  <img src="assets/img/bg-1-1.jpg" alt="" />
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
                  Dronum India Aviation – Your Premier RPTO for Drone Training in Jaipur, Rajasthan
                  </h2>
                  <p>
                  We help you attain high-quality, hand-on-the-throttle theoretical knowledge about drones, from flight hours to drone manufacturer approved certification for flying in several states and cities of our country. Dedicated to safety and innovation, Dronum trains aspiring drone pilots & instructor, allowing them to pursue different career and entrepreneurship opportunities in various industries.
                  </p>
                </div>
                <ul>
                  <li>
                    <img src="assets/img/pilot.png" alt="" />
                    Mobile Device Supported
                  </li>
                  <li>
                    <img src="assets/img/remote-control.png" alt="" />
                    Easy integrative control
                  </li>
                  <li>
                    <img src="assets/img/game-console.png" alt="" />
                    Customized Commands
                  </li>
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
