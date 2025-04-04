import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Partners.css"; // Import the CSS file

const images = [
  "assets/img/w1.png",
  "assets/img/w2.png",
  "assets/img/w3.png",
  "assets/img/w4.png",
  "assets/img/w5.png",
  "assets/img/w6.png",
  "assets/img/w7.png",
];

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partners-container">
      {/* Heading and Subheading */}
      <div className="partners-header">
        <h2>Our Partners</h2>
        <p>Meet the brands and businesses that support our journey</p>
      </div>

      <div className="partners-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`partners-item ${index === activeIndex ? "active" : ""}`}
          >
            <Link to="/">
              <img src={img} alt={`Partner ${index + 1}`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
