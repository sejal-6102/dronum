import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const GallerySlider = () => {
  const options = {
    loop: true,
    margin: 30,
    items: 3,
    nav :true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      540: {
        items: 2,
      },
      990:{
        items: 3,
      }
    },
  };
  const slides = [
    {
      img: "assets/img/pic4-4.jpg",
    },
    {
      img: "assets/img/pic5-2.jpg",
    },
    {
      img: "assets/img/pic6.jpg",
    },
    {
      img: "assets/img/pic1-5.jpg",
    },
    {
      img: "assets/img/pic2-5.jpg",
    },
    {
      img: "assets/img/pic3-4.jpg",
    },
  ];
  return (
    <>
     <div className="main-services-outer" style={{marginBottom:"0px"}}>
        <div className="container">
          <div className="main-services-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="item  ">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">Event Glimps</span>
                  </div>
                  <h2>DRONUM & MARUT DRONE ACADEMY</h2>
                </div>
                <div className="item  ">
                  <p>
                  Our team ensures seamless operations with top-notch guidance and customer service.
                  </p>
                </div>
              </div>
            </div>
           
          
          </div>
        </div>
      </div>
      <div className="gallery-slider-outer animate__animated animate__zoomIn">
        <div className="container">
          <div className="gallery-slider-inner">
            <OwlCarousel className="owl-theme" {...options}>
              {slides.map((i) => (
                <img src={i.img} alt="" />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySlider;
