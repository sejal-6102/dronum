import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import VideoItems from "./Items/VideoItems";

const ServiceSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const slide = [
    {
      img: "assets/img/dcga1.png",
    },
    {
      img: "assets/img/dcga2.png",
    },
    {
      img: "assets/img/dcga3.png",
    },
    {
      img: "assets/img/dcga4.png",
    },
  ];

  return (
    <>
   <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', textAlign: 'center', margin: '10px 0',color:"red" }}>
   <b>DGCA REMOTE PILOT CERTIFICATION (RPC) COURSE FOR SMALL/ MEDIUM CLASS - ( 5 - 7 DAYS EACH )</b>
</h1>
   <p style={{ fontSize:'25px', textAlign: 'center', margin: '10px 0' }}>
   <b>DGCA Approved Drone Pilots Trained at DRONUM </b>
</p>

    <div className="content animate__animated animate__zoomIn">
      <div className="items">
        <div className="items-inner">
       
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            arrows={false}
          >
            {slide.map((i) => (
              <VideoItems value={i} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="items">
        <div className="items-inner">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {slide.map((i) => (
              <VideoItems value={i} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceSlider;
