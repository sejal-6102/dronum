import React from "react";
import { Link } from "react-router-dom";

const MainServices = () => {
  const services = [
    {
      img: "assets/img/pic1-7.jpg",
      name: "Event photography",
    },
    {
      img: "assets/img/pic2-7.jpg",
      name: "Aerial Survey & Inspection",
    },
    {
      img: "assets/img/pic3-6.jpg",
      name: "Professional Photography",
    },
    {
      img: "assets/img/pic4-6.jpg",
      name: "360 VR Services",
    },
    {
      img: "assets/img/pic5-4.jpg",
      name: "Delivery Services",
    },
    {
      img: "assets/img/pic6-2.jpg",
      name: "Public Safety",
    },
  ];
  return (
    <>
      <div className="main-services-outer">
        <div className="container">
          <div className="main-services-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="item  ">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">The Best Drone Services</span>
                  </div>
                  <h2>Explore Our Main Services</h2>
                </div>
                <div className="item  ">
                  <p>
                    We provide expert inspection services for your
                    organization’s mission critical assets using drone
                    technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom">
              {services.map((i) => {
                return (
                  <div className="item  ">
                    <div className="item-inner">
                      <div className="img-content">
                        <img src={i.img} alt="" />
                      </div>
                      <div className="text-content">
                        <h4>{i.name}</h4>
                        <p>
                          Our team has decades of film and tech experience. We
                          know how to deliver amazing results every time.
                          Concerned with the development, improvement, and
                          implementation of integrated system of people, money{" "}
                        </p>
                        <Link to={"/services"}>Read More</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <div className="item  ">
                <div className="item-inner">
                  <div className="text-content">
                    <h4>Aerial Survey & Inspection</h4>
                    <p>
                      Our team has decades of film and tech experience. We know
                      how to deliver amazing results every time. Concerned with
                      the development, improvement, and implementation of
                      integrated system of people, money{" "}
                    </p>
                    <Link to={"/services"}>Read More</Link>
                  </div>
                  <div className="img-content">
                    <img src="assets/img/pic2-7.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="item  ">
                <div className="item-inner">
                  <div className="img-content">
                    <img src="assets/img/pic3-6.jpg" alt="" />
                  </div>
                  <div className="text-content">
                    <h4>Professional Photography</h4>
                    <p>
                      Our team has decades of film and tech experience. We know
                      how to deliver amazing results every time. Concerned with
                      the development, improvement, and implementation of
                      integrated system of people, money{" "}
                    </p>
                    <Link to={"/services"}>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="item  ">
                <div className="item-inner">
                  <div className="text-content">
                    <h4>360 VR Services</h4>
                    <p>
                      Our team has decades of film and tech experience. We know
                      how to deliver amazing results every time. Concerned with
                      the development, improvement, and implementation of
                      integrated system of people, money{" "}
                    </p>
                    <Link to={"/services"}>Read More</Link>
                  </div>
                  <div className="img-content">
                    <img src="assets/img/pic4-6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="item  ">
                <div className="item-inner">
                  <div className="img-content">
                    <img src="assets/img/pic5-4.jpg" alt="" />
                  </div>
                  <div className="text-content">
                    <h4>Delivery Services</h4>
                    <p>
                      Our team has decades of film and tech experience. We know
                      how to deliver amazing results every time. Concerned with
                      the development, improvement, and implementation of
                      integrated system of people, money{" "}
                    </p>
                    <Link to={"/services"}>Read More</Link>
                  </div>
                </div>
              </div>
              <div className="item  ">
                <div className="item-inner">
                  <div className="text-content">
                    <h4>Public Safety</h4>
                    <p>
                      Our team has decades of film and tech experience. We know
                      how to deliver amazing results every time. Concerned with
                      the development, improvement, and implementation of
                      integrated system of people, money{" "}
                    </p>
                    <Link to={"/services"}>Read More</Link>
                  </div>
                  <div className="img-content">
                    <img src="assets/img/pic6-2.jpg" alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainServices;
