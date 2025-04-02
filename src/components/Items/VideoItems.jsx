import React from "react";
import { FaSearchPlus, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const VideoItems = (props) => {
  return (
    <>
      <div className="item">
        <div className="item-inner">
          <div className="img-content">
            <img src={props.value.img} alt="" />
          </div>
          <div className="text-content">
            {/* <ul>
              <li>
                <Link to="/">
                  <FaSearchPlus />
                </Link>
              </li>
              <li>
                <Link to="gallery-details">
                  <FaLink />
                </Link>
              </li>
            </ul> */}
            <h4>{props.value.head}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItems;
