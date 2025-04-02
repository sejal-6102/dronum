import React from "react";
import { Link } from "react-router-dom";
const PricingItems = (props) => {
  return (
    <>
      <div className="item">
        <div className="item-inner">
          <div className="pricing-title">
            <div className="title">
              <h2>{props.vlaue.title}</h2>
            </div>
            <div className="price">
              <h2>
                <sup>$</sup>
                {props.vlaue.price}
              </h2>
            </div>
          </div>
          <ul>
            <li>Built-in HD Camera</li>
            <li>Smartphone Control</li>
            <li>360 Degree Stunt Flip</li>
            <li>One Key Return</li>
            <li>Headless Flying </li>
          </ul>

          <Link to="/" className="button">Read More</Link>
        </div>
      </div>
    </>
  );
};

export default PricingItems;
