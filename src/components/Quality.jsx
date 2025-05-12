import React from "react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Quality = () => {

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
      <div className="quality-outer">
        <div className="container">
          <div className="quality-inner animate__animated animate__zoomIn">
            <div className="item">
              <div className="item-inner">
                <div className="img-content">
                  <div className="circle">
                    <div className="dot one"></div>
                    <div className="dot two"></div>
                    <div className="dot three"></div>
                  </div>
                  <div className="video-content">
                    <img src="assets/img/video-2.jpg" alt="" />
                    <Link to="https://www.youtube.com/watch?v=F_byCj4geZQ&t=2s&ab_channel=DronumIndiaAviations">
                      <span className="play">
                        <FaPlay />
                      </span>
                      <span className="ripple"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <div className="heading">
                  <div className="sub-heading">
                    <div className="line-left"></div>
                    <span> Who We Are</span>
                  </div>
                  <h3 style={{color:"white",paddingBottom:'10px'}}>
                    Dronum India Aviation – Your Premier RPTO for Drone Training
                    in Jaipur, Rajasthan
                  </h3>
                  <p>
                    Dronum India Aviation is Jaipur, Rajasthan-based remote
                    pilot training organization. Dronum India Aviation is a
                    remote pilot training organization approved by DGCA. We help
                    you attain high-quality, hand-on-the-throttle theoretical
                    knowledge about drones, from flight hours to drone
                    manufacturer approved certification for flying in several
                    states and cities of our country. Dedicated to safety and
                    innovation, Dronum trains aspiring drone pilots &
                    instructor, allowing them to pursue different career and
                    entrepreneurship opportunities in various industries.
                  </p>
                  <p>
                    Dronum also provides Drone as a service, offering various
                    drone related services to businesses and individuals in
                    Aerial surveying and mapping, Agricultural services for crop
                    monitoring and spraying, high quality aerial photography and
                    videography.
                  </p>
                  <p>
                    At Dronum, we acknowledge the incredible potential that
                    drones have in various sectors of industries ranging from
                    agriculture and cinematography to surveillance and disaster
                    management. Our mission is to enable individuals and
                    businesses to tap this potential safely and effectively. We
                    have a full suite of courses designed for all levels of
                    learners, from beginners taking their first step into drone
                    piloting to advanced operators looking for specialized
                    certifications.
                  </p>
                  <p>
                    <b>
                      Dronum has also enrolled Its presence across states like
                      Haryana in Gurugram, Sirsa, Sonipat and has upcoming
                      academies in Uttar Pradesh, Gujarat and Maharashtra.
                    </b>
                  </p>
                  <p>
                    <b>
                      Dronum is in contact with various Government &
                      semi-government bodies to conduct drone training programs
                      under various government initiatives such as Drone didi
                      programme, kisan drone operator programme, Skill India,
                      NABARD etc., along with potentials tie ups with several
                      prestigious Colleges, Universities and Rural Kisan Unions.
                    </b>
                  </p>
                  <p>
                    <b>
                      Let's join hands to make aviation with drones, shaping its
                      future together, and taking flight.
                    </b>
                  </p>
                </div>
                {/* <Link to="/about" className="button">
                  Read More
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>


       <div className="main-services-outer">
        <div className="container">
          <div className="main-services-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="item  ">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">Driven by Purpose and Innovation</span>
                  </div>
                  <h2>Our Commitment</h2>
                </div>
                <div className="item  ">
                  <p>
                 We strive to empower individuals and organizations with the highest quality drone training, ensuring safety and excellence in every flight
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

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
