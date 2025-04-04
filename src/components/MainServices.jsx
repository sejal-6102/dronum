import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MainServices = () => {
  const services = [
    {
      img: "assets/img/pic1-7.jpg",
      name: "Our Mission",
      content:"At Dronum, our mission is to empower individuals and organizations through comprehensive and hands-on drone training that builds both skill and confidence. We aim to foster a new generation of certified drone pilots equipped with the knowledge and practical expertise to excel in diverse applications—whether in agriculture, infrastructure, surveillance, or environmental monitoring. We are committed to maintaining the highest standards of safety, professionalism, and innovation, ensuring each trainee understands and adheres to DGCA regulations and best practices. Through rigorous training programs, we focus on bridging the gap between theoretical knowledge and real-world application, preparing students not only to operate drones but also to become responsible stakeholders in the growing UAV ecosystem."
    },
    {
      img: "assets/img/pic2-7.jpg",
      name: "Our Vision",
      content:"Our vision is to become a leader in drone training across India and globally, creating a network of skilled drone pilots who contribute to advancing industries and enriching communities. We envision a future where drone technology is seamlessly integrated into everyday life, enhancing productivity, efficiency, and sustainability in sectors that impact millions. By expanding access to quality training, staying at the forefront of UAV advancements, and fostering partnerships, we aspire to make Dronum synonymous with excellence in drone education. Through our efforts, we hope to inspire responsible drone usage that promotes safety, environmental stewardship, and technological progress across a rapidly evolving landscape."
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
                    <span className="text">Your Premier Gateway to Drone Careers.</span>
                  </div>
                  <h2>Why Choose Us?</h2>
                </div>
                <div className="item  ">
                  <p>
                  Our team ensures seamless operations with top-notch guidance and customer service.
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
                        {i.content}{" "}
                        </p>
                       
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
      <MovieCard />
    </>
  );
};

export default MainServices;
