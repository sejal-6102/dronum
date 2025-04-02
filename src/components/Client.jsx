import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ClientItems from "./Items/ClientItems";
const Client = () => {
  const client = [
    {
      img: "assets/img/pic4-2.jpg",
      name: "Tamika Clark",
    },
    {
      img: "assets/img/pic3-2.jpg",
      name: "Clara John",
    },
    {
      img: "assets/img/pic2-3.jpg",
      name: "James Smith",
    },
    {
      img: "assets/img/pic1-3.jpg",
      name: "John Casey",
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
                    <span> Client Feedback</span>
                  </div>
                  <h2>What Some People Say About Us.</h2>
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
