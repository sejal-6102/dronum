import React from "react";
import NewsItems from "./Items/NewsItems";
import { Link } from "react-router-dom";

const News = () => {
  const headline = [
    {
      headline: "Sonipat",
      backgroundImage:"assets/img/lo1.png",
      maplink:"https://www.google.com/maps/place/Puran+Murti+Campus/@29.0506023,77.01168,17z/data=!3m1!4b1!4m6!3m5!1s0x390d01bc20a49e2d:0x5d67fbdc25584c4a!8m2!3d29.0506023!4d77.01168!16s%2Fg%2F1hm5q17jl?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      headline: "Sirsa",
      backgroundImage:"assets/img/lo2.png",
      maplink:"https://www.google.com/maps/place/AVPL+Drone+training+centre+SPH+AVIATION+RPTO/@29.5575973,75.0611554,17z/data=!3m1!4b1!4m6!3m5!1s0x39114ff58335579f:0xc1876fefb3fdadb!8m2!3d29.5575973!4d75.0611554!16s%2Fg%2F11vkqnp__c?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      headline: "Gurugram",
      backgroundImage:"assets/img/lo3.png",
      maplink:"https://www.google.com/maps/place/SPH+Aviation+Private+Limited/@28.4478598,76.9930211,17z/data=!3m1!4b1!4m6!3m5!1s0x390d170009f982f3:0x802336efeefca2ce!8m2!3d28.4478598!4d76.9930211!16s%2Fg%2F11vrhgjpch?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      headline: "Jaipur",
      backgroundImage:"assets/img/lo4.png",
      maplink:"https://www.google.com/maps/place/Dronum+India+Aviations+Pvt.+Ltd/@26.9150788,75.7413633,15z/data=!4m6!3m5!1s0x6805f3e7833b77a7:0xeef7ca56bebad0!8m2!3d26.9150239!4d75.74144!16s%2Fg%2F11wfxvfh19?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
    },
  ];
  return (
    <>
      <div className="news-outer">
        <div className="container">
          <div className="news-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  <span>Exploring Our Presence</span>
                  <div className="line-right"></div>
                </div>
                <h3>Our Presence</h3>
              </div>
            </div>

            <div className="bottom">
              <div className="item">
                <div className="item-inner">
                  <div className="img-content"></div>
                  <div className="text-content">
                    {/* <div className="sub-title">
                      <span>December 13, 2020</span>
                    </div> */}
                    <div className="title">
                      <h4>
                        <Link to="/blog-details" style={{color:'red',fontSize:'15px'}}>
                        RPTO's in line up - Uttar Pradesh, Gujrat, Maharashtra, Andhrapradesh
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  {headline.map((i) => (
                    <NewsItems vlaue={i} />
                  ))}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
