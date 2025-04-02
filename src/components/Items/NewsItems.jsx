import React from "react";
import { Link } from "react-router-dom";

const NewsItems = (props) => {
  return (
    <>
      <div className="news">
        <div className="news-items">
          <div className="sub-title">
            <span>December 13, 2020</span>
          </div>
          <div className="title">
            <h4>
              <Link to="/blog-details">{props.vlaue.headline}</Link>
            </h4>
          </div>
          <div className="text">
            <p>
              suffered alteration in some form, by injected humor, or randomize.
            </p>
          </div>
          <Link to="/blog-details">Read More</Link>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
