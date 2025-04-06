import React from "react";
import { Link } from "react-router-dom";

const NewsItems = (props) => {
  return (
    <>
      <div className="news">
        <div className="news-items"
        style={{ backgroundImage: `url(${props.vlaue.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        
          <div className="title">
            <h4>
              <Link to="/blog-details">{props.vlaue.headline}</Link>
            </h4>
          </div>
          {/* <div className="text">
            <p>
              suffered alteration in some form, by injected humor, or randomize.
            </p>
          </div> */}
          {/* <Link to="/blog-details">Read More</Link> */}
          <a href={props.vlaue.maplink}  target="_blank" rel="noopener noreferrer">  View on Google Maps
</a>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
