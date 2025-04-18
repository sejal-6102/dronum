import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ClientItems from "./Items/ClientItems";
const Client = () => {
  const client = [
    {
      img: "assets/img/pic4-2.jpg",
      name: "name 1",
      des:"review 1"
    },
    {
      img: "assets/img/pic3-2.jpg",
      name: "name 2",
      des:"review 2"
    },
    {
      img: "assets/img/pic2-3.jpg",
      name: "name 3",
      des:"review 3"
    },
    {
      img: "assets/img/pic1-3.jpg",
      name: "name 4",
      des:"review 4"
    },
  ];

  return (
    <>
      <div className="client-outer">
        <div className="container">
          <div className="client-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="item">
                <div className="heading">
                  <div className="sub-heading">
                    <div className="line-left"></div>
                    <span> Reviews</span>
                  </div>
                  <h2>Feed Backs</h2>
                  {/* <p>Dronum India Aviations is a DGCA-authorized Drone Remote Pilot Training Organization (RPTO), committed to providing world-class drone training programs. Our certification & training programs ensures that we meet the
                  highest standards in drone pilot education, safety protocols, and operational expertise. With this accreditation, we empower aspiring drone professionals with industry-recognized training and licensing, making them future-ready for the rapidly growing UAV industry.</p> */}
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <img src="assets/img/d-testimonial.png" alt="" />
                  </div>
                </div>
              </div>

              <div className="item">
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  items={1}
                  nav
                >
                  {
                client.map((i) => <ClientItems vlaue={i} />)
              }
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
