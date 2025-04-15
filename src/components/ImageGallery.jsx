import React, { useState } from "react";
import BookNowForm from "./Pages/BookNowForm";
import { Link } from "react-router-dom";

const images = [
  {
  src:"assets/img/daas1.png",
  title:"AERIAL SURVEYING AND MAPPING: ",
  des:"UTILIZING DRONES FOR ACCURATE AND EFFICIENT SURVEYING AND MAPPING. "
  },

  {
  src:"assets/img/daas2.png",
  title:"AGRICULTURAL SERVICES: ",
  des:" DRONES FOR CROP MONITORING, SPRAYING, AND OTHER AGRICULTURAL APPLICATIONS.  "
  },
  {
  src:"assets/img/daas3.png",
  title:"INFRASTRUCTURE INSPECTION:  ",
  des:"CONDUCTING INSPECTIONS OF INFRASTRUCTURE SUCH AS BRIDGES, TOWERS AND BUILDINGS.  "
  },
  {
    src:"assets/img/daas3.png",
    title:"PHOTOGRAPHY AND VIDEOGRAPHY:  ",
  des:"HIGH-QUALITY AERIAL PHOTOGRAPHY AND VIDEOGRAPHY FOR EVENTS, REAL ESTATE AND OTHER PURPOSES"
    },
  
];

const ImageBox = ({ src,title,des,link }) => {
  const setModal = (modal)=>{
    link(modal);
      }
  return (
    <div className="image-gallery-box">
      <div className="image-gallery-imgBx">
        <img src={src} alt="Gallery" />
      </div>
      <div className="image-gallery-content">
        <div>
          <h2>{title}</h2>
          <p>{des}</p>
        </div>
        {/* Book Now Button */}
        <div className="image-gallery-btn-container">
          {/* <button className="book-now-btn">Book Now</button> */}
        <Link to="#" className="book-now-btn" onClick={() => setModal(true)}>Book Now</Link>
      
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModal = modal=>{
    setIsModalOpen(modal);
  }

  return (
    <div className="image-gallery-wrapper">
      <div className="heading animate__animated animate__zoomIn">
        <div className="item">
          <div className="sub-heading">
            <span className="line-left"></span>
            <span className="text">You Will Love It.</span>
          </div>
          <h2>Drone As A Service (DAAS)</h2>
        </div>
        <div className="item">
          <p>
            We provide expert inspection services for your organization’s mission-critical assets using drone technology.
          </p>
        </div>
      </div>
      <div className="image-gallery-container">
  {images.map((item, index) => (
    <ImageBox
      key={index}
      src={item.src}
      title={item.title}
      des={item.des}
      link={setModal}
    />
  ))}
</div>

      <BookNowForm isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />

    </div>
  );
};

export default ImageGallery;
