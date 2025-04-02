import React from "react";
import { Link } from "react-router-dom";

const RecentPostItems = (props) => {
  return (
    <>
      <div className="img-content">
        <img src={props.img} alt="" />
      </div>
      <div className="text-content">
        <span>12 December</span>
        <Link to="/blog-details">
          {props.title}
        </Link>
      </div>
    </>
  );
};

export default RecentPostItems;
