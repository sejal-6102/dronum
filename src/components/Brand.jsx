import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Brand = () => {
  const options = {
    items: 6,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1200: {
        items: 6,
      },
    },
  };
  return (
    <>
      <div className="brand-outer animate__animated animate__zoomIn">
        <div className="container-fuild">
          <div className="brand-inner">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w1.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w2.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w3.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w4.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w5.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w6.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="img-content">
                    <Link to="/">
                      <img src="assets/img/w7.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
