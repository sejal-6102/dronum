import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ClientItems from "./Items/ClientItems";
const Client = () => {
  const client = [
    {
      img: "assets/img/pic4-2.jpg",
      name: "Trained Numerous of Certified Drone Pilots",
      des:"Successfully trained and certified numerous students under DGCA guidelines, contributing to India’s skilled UAV workforce."
    },
    {
      img: "assets/img/pic3-2.jpg",
      name: "Government & Industry Collaborations",
      des:"Collaborating with government, semi- government & Private bodies to conduct drone training programs under initiatives such as Drone Didi Yojana, Kisan Drone Operator Program, Skill India and many more.."
    },
    {
      img: "assets/img/pic2-3.jpg",
      name: "Expansion Across Multiple States",
      des:"Established a strong presence in Rajasthan, with upcoming RPTO centers in Gujarat, Maharashtra & Uttar Pradesh to cater the increasing demand."
    },
    {
      img: "assets/img/pic1-3.jpg",
      name: "Cutting - Edge Drone Training Curriculum",
      des:"Offers specialized courses, including Drone Repair & Maintenance, Agriculture Drone, Aerial Survey & Mapping, Security & Surveillance, FPV Drones"
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
                    <span> Achievements</span>
                  </div>
                  <h2>RPTO Authorization & Achievements</h2>
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
