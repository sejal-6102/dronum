import React from "react";
import PricingItems from "./Items/PricingItems";

const Pricing = () => {
  const price = [
    { title: "SPORTS", price: "145" },
    { title: "SHOOTING", price: "285" },
    { title: "TRAVELS", price: "375" },
    
  ];
  return (
    <>
      <div className="pricing-outer">
        <div className="container">
          <div className="pricing-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  <span>Comfortable</span>
                  <div className="line-right"></div>
                </div>
                <h2>Pricing Table</h2>
              </div>
            </div>
            <div className="bottom">
              {
                price.map((i) => <PricingItems vlaue={i} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
