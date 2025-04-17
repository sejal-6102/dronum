import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ClientItems = (props) => {
  return (
    <>
      <div className="item-inner">
        <div className="text-content">
          <span>
            <FaQuoteLeft />
          </span>
          <p>
          {props.vlaue.des}
          </p>
        </div>
        <div className="img-content">
          <div className="client-img">
            <img src={props.vlaue.img} alt={props.vlaue.name} />
          </div>
          <div className="client-text">
            <span>{props.vlaue.name}</span>
            {/* <span>Designer</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientItems;
