import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ClientItems from "./Items/ClientItems";
const Client = () => {
  const client = [
    {
      img: "assets/img/rev1.png",
      name: "Jay Chawda",
      des:"I had the opportunity to experience the training at Dronum India Aviations, and overall, it has been a great experience.The instructors are knowledgeable and supportive, making it easy to learn the basics of drone flying."
    },
    {
      img: "assets/img/rev2.png",
      name: "hrushikesh khaladkar",
      des:"I recently completed my training at dronum, and I must say it was an outstanding experience!The instructors were highly knowledgeable, patient, and professional, ensuring that every student gained both theoretical and practical expertise "
    },
    {
      img: "assets/img/rev3.png",
      name: "VIRENKUMAR DUDHAT",
      des:"My experience at Dronum's drone pilot training program in Jaipur was highly positive. The instructors demonstrated a strong command of the subject matter, effectively conveying both theoretical knowledge and practical flight skills."
    },
    {
      img: "assets/img/rev4.png",
      name: "99 Rohan Ahir",
      des:"It was an amazing experience with Dronum India Aviations..The instructor's and all the faculty members were polite and friendly.Everything was perfectly managed by them.Everything was perfectly managed by them.Very good everthing"
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
                  <h2>Our Testimonial</h2>
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
