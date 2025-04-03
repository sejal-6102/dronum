import React from "react";
import { Link } from "react-router-dom";


const ServicesItem = (props) => {

  const setModal = (modal)=>{
props.link(modal);
  }
  return (
    <>
      <div className={"item"}>
        <div className="item-inner animate__animated animate__zoomIn">
          <img src={props.value.img} alt={props.value.title} />
          <h2>{props.value.description}</h2>
          <div className="text-content">
            <div className="text-inner">
              <h4>{props.value.title}</h4>
              <p>
              {props.value.description}
              </p>
              <Link to="#" onClick={() => setModal(true)}>Enroll Now</Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
