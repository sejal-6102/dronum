import React, { useState } from "react";
import ServicesItem from "./Items/ServicesItem";
import EnrollForm from "./Pages/EnrollForm";

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
  const service = [
    {
      img: "assets/img/co01.jpg",
      title: "Duration: 5-7 Days",
      description:"Small Remote Pilot Certification Course"

    },
    {
      img: "assets/img/co002.jpg",
      title: "Duration : 7 Days",
       description:"Medium Remote Pilot Certification Course"
    },
    {
      img: "assets/img/co003.jpg",
      title: "Duration : 15 Days",
       description:"Small TTT Course"
    },
    {
      img: "assets/img/co004.jpg",
      title: "Duration : 7-9 Days",
       description:"Only TTT"
    },
    {
      img: "assets/img/co005.jpg",
      title: "Duration : 2 Months",
       description:"Kisaan Drone Operator/ Agri Drone Entrepreneur Course"
    },
    {
      img: "assets/img/co006.jpg",
      title: "Duration : 8 Days",
       description:"Small and Medium Remote Pilot Certification Course"
    },
    {
      img: "assets/img/co007.jpg",
      title: "Duration : 8 Days",
       description:"Survey & Mapping with RPC"
    },
    {
      img: "assets/img/co008.jpg",
      title: "Duration : 3 Days",
       description:"Agri Spraying Course"
    },
    {
      img: "assets/img/co009.jpg",
      title: "Duration : 8 Days",
       description:"Agriculture with RPC"
    },
    {
      img: "assets/img/co010.jpg",
      title: "Duration : 9 Days",
       description:"Drone Technician Course"
    },
    {
      img: "assets/img/co011.jpg",
      title: "Duration : 2 Days",
       description:"Crash Course for Enhancing Your Instructor Skills"
    },
    {
      img: "assets/img/co012.jpg",
      title: "Duration : 3 Days",
       description:"Drone Software Course"
    },
  ];

  const setModal = modal=>{
    setIsModalOpen(modal);
  }
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
                <h3>Courses Offered</h3>
              </div>
              <div className="item">
                <p>
                  We provide expert inspection services for your organization’s
                  mission critical assets using drone technology.
                </p>
              </div>
            </div>

            <div className="content">
              {service.map((i) =><ServicesItem value={i} link={setModal} />)}
            </div>
            <EnrollForm isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
