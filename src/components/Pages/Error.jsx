import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error-outer ">
        <div className="error-inner ">
          <div className="error-container">
            <div className="item animate__animated animate__slideInUp">
              <div className="item-inner">
                <div className="img-content">
                  <img src="assets/img/d-testimonial.png" alt="" />
                </div>
                <h3 className="title-style-2">Error</h3>
                <strong>404</strong>
                <h4 className="title-style-2">
                  Oops! Looks like the page is gone.{" "}
                </h4>
                <p>
                  We’re sorry but we can’t seem to find the page you requested.
                  This might be because you have typed the web address
                  incorrectly.
                </p>
                <Link to="/" className="button">
                  GO TO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
