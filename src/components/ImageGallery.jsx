import React from "react";

const images = [
  "assets/img/daas1.png",
  "assets/img/daas2.png",
  "assets/img/daas3.png",
];

const ImageBox = ({ src }) => {
  return (
    <div className="image-gallery-box">
      <div className="image-gallery-imgBx">
        <img src={src} alt="Gallery" />
      </div>
      <div className="image-gallery-content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* Book Now Button */}
        <div className="image-gallery-btn-container">
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
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
        {images.map((src, index) => (
          <ImageBox key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
