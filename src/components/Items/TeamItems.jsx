import React from "react";
import { Link } from "react-router-dom";

const TeamItems = (props) => {
  return (
    <>
      <div className="item">
        <div className="item-inner">
          <div className="img-content">
            <img src={props.vlaue.img} alt="" />
          </div>
          <div className="text-content">
            <div className="detail">
              <span>{props.vlaue.position}</span>
              <h6>{props.vlaue.name}</h6>
            </div>
            {/* <ul className="socil-media">
              <li>
                <Link to="https://www.facebook.com/">Facebook</Link>
              </li>
              <li>
                <Link to="https://twitter.com/">Twitter</Link>
              </li>
              <li>
                <Link to="https://in.linkedin.com/">Linkedin</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItems;
