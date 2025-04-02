import React from "react";
import { FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Quality = () => {
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
                  <h2>
                    Dronum India Aviation – Your Premier RPTO for Drone Training
                    in Jaipur, Rajasthan
                  </h2>
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
    </>
  );
};

export default Quality;
