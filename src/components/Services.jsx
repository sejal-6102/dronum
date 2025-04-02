import React from "react";
import ServicesItem from "./Items/ServicesItem";

const Services = () => {
  const service = [
    {
      img: "assets/img/co1.png",
      title: "Duration: 5-7 Days",
      description:"Small Remote Pilot Certification Course"

    },
    {
      img: "assets/img/co10.png",
      title: "Duration : 7 Days",
       description:"Medium Remote Pilot Certification Course"
    },
    {
      img: "assets/img/co11.png",
      title: "Duration : 15 Days",
       description:"Small TTT Course"
    },
    {
      img: "assets/img/co2.png",
      title: "Duration : 7-9 Days",
       description:"Only TTT"
    },
    {
      img: "assets/img/co4.png",
      title: "Duration : 2 Months",
       description:"Kisaan Drone Operator/ Agri Drone Entrepreneur Course"
    },
    {
      img: "assets/img/co5.png",
      title: "Duration : 8 Days",
       description:"Small and Medium Remote Pilot Certification Course"
    },
    {
      img: "assets/img/co6.png",
      title: "Duration : 8 Days",
       description:"Survey & Mapping with RPC"
    },
    {
      img: "assets/img/co7.png",
      title: "Duration : 3 Days",
       description:"Agri Spraying Course"
    },
    {
      img: "assets/img/co8.png",
      title: "Duration : 8 Days",
       description:"Agriculture with RPC"
    },
    {
      img: "assets/img/co9.png",
      title: "Duration : 9 Days",
       description:"SDrone Technician Course"
    },
    {
      img: "assets/img/co1.png",
      title: "Duration : 2 Days",
       description:"Crash Course for Enhancing Your Instructor Skills"
    },
    {
      img: "assets/img/co2.png",
      title: "Duration : 3 Days",
       description:"Drone Software Course"
    },
  ];
  return (
    <>
      <div className="service-outer">
        <div className="container">
          <div className="service-inner ">
            <div className="heading animate__animated animate__zoomIn">
              <div className="item">
                <div className="sub-heading">
                  <span className="line-left"></span>
                  <span className="text">You Will Love It.</span>
                </div>
                <h2>Courses Offered</h2>
              </div>
              <div className="item">
                <p>
                  We provide expert inspection services for your organization’s
                  mission critical assets using drone technology.
                </p>
              </div>
            </div>

            <div className="content">
              {service.map((i) =><ServicesItem value={i}/>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
