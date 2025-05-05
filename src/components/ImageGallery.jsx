import React, { useState } from "react";
import BookNowForm from "./Pages/BookNowForm";
import { Link } from "react-router-dom";

const images = [
  {
  src:"assets/img/daas01.jpg",
  title:"Aerial Surveying And Mapping ",
  des:"Utilizing Drones For Accurate And Efficient Surveying And Mapping "
  },

  {
  src:"assets/img/daas02.jpg",
  title:"AGRICULTURAL SERVICES ",
  des:"Drones For Crop Monitoring,Spraying,And Other Agricultural Applications "
  },
  {
  src:"assets/img/daas03.jpg",
  title:"INFRASTRUCTURE INSPECTION  ",
  des:"Conducting Inspections Of Infrastructure Such As Bridges,Towers And Buildings  "
  },
  {
    src:"assets/img/daas04.jpg",
    title:"PHOTOGRAPHY AND VIDEOGRAPHY ",
  des:"High-Quality Aerial Photography And Videography For Events ,Real Estate And Other Purposes"
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
      <div className="heading animate__animated animate__zoomIn" style={{ width: '100%', textAlign: 'center' }}> {/* <-- Add text-align here */}
  {/* Removed redundant item div around sub-heading/h3 as they can be centered directly */}
  <div className="sub-heading" style={{ display: 'inline-block', marginBottom: '10px' }}> {/* Adjust display/margin as needed */}
    <span className="line-left"></span> {/* You might need specific styling for the line */}
    <span className="text">You Will Love It.</span>
    <span className="line-right"></span> {/* Assuming you might want a line on the right too */}
  </div>
  <h2>Drone As A Service (DAAS)</h2>

  {/* Keep the paragraph in its own item div if needed for other styling, but center text */}
  <div className="item" style={{ marginTop: '15px' }}> {/* Add margin for spacing */}
    <p>
    Discover a smarter, faster, and more efficient way to leverage aerial technology. With Drone as a Service <b>(DaaS)</b>, you gain access <br></br>to professional drone operations without the need to buy, maintain, or manage the equipment yourself. Whether you're in agriculture, <br></br>logistics, infrastructure, surveillance, real estate, or emergency response — our drone services are tailored to fit your needs.
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
