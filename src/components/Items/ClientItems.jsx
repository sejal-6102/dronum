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
            Aliquam sit amet eleifend odio. Donec at dictum mi. Duis auctor,
            tellus a elementum pharetra, sapien magna rhoncus velit, id blandit
            mauris dolor eu turpis. Aenean aliquam nisl aliquam, suscipit ligula
            sit amet, mattis libero.
          </p>
        </div>
        <div className="img-content">
          <div className="client-img">
            <img src={props.vlaue.img} alt={props.vlaue.name} />
          </div>
          <div className="client-text">
            <span>{props.vlaue.name}</span>
            <span>Designer</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientItems;
