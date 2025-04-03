import React from "react";
import NewsItems from "./Items/NewsItems";
import { Link } from "react-router-dom";

const News = () => {
  const headline = [
    {
      headline: "How to Start a Drone Photography",
      backgroundImage:"assets/img/lo1.png"
    },
    {
      headline: "How Amazon is Integrating Drones",
      backgroundImage:"assets/img/lo2.png"
    },
    {
      headline: "How Amazon is Integrating Drones",
      backgroundImage:"assets/img/lo3.png"
    },
    {
      headline: "How to Start a Drone Photography",
      backgroundImage:"assets/img/lo4.png"
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
                <h2>Our Presence</h2>
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
                        <Link to="/blog-details" style={{color:'red'}}>
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
