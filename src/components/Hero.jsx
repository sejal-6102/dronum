import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-outer">
        <div className="bg-video animate__animated animate__slideInRight">
          <video autoPlay muted loop preload="auto">
            <source src="assets/video/dronum.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container">
          <div className="hero-inner">
            <div className="item">
              <div className="item-inner">
                <div className="text">
                  {/* <h2 className="animate__animated animate__fadeInUp" style={{textTransform:'uppercase'}}>Unlock the future of drone technology with us</h2> */}
                </div>
                <div className="left-square">
                  <span className="animate__animated animate__fadeInUp"></span>
                </div>
                <div className="right-square">
                  <span className="animate__animated animate__fadeInUp"></span>
                </div>
              </div>
              <div className="drone-img animate__animated animate__slideInRight">
                {/* <img className="" src="assets/img/d-1.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
