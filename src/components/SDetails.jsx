import React from "react";
import ServiceSlider from "./ServiceSlider";
import SContent from "./SContent";
const SDetails = () => {
  return (
    <>
      <div className="sede-outer">
        <div className="container">
          <div className="sede-inner">
            <ServiceSlider/>
            <SContent/>

          </div>
        </div>
      </div>
    </>
  );
};

export default SDetails;
