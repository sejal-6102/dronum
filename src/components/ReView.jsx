import React from "react";
import { Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";

const ReView = () => {
  return (
    <div className="review-outer">
      <div className="comments">
        <h3 className="reviews-comments">Reviews</h3>
        <p className="noreview">There are no reviews yet.</p>
      </div>
      <div className="review-form">
        <h3>Be the first to review "DJI Inspire 2"</h3>
        <form method="POST">
          <p className="comment-notes">
            Your email address will not be published.{" "}
            <span>
              Required fields are marked <span>*</span>
            </span>
          </p>
          <div className="rating">
            <label htmlFor="">Your rating</label>
            <p>
              <Rate character={<StarOutlined />} allowHalf />
            </p>
          </div>
          <p className="comment-form-comment">
            <textarea
              id="comment"
              name="comment"
              className="form-control"
              required=""
              placeholder="Your review"
            ></textarea>
          </p>
          <p className="comment-form-author">
            <input
              className="form-control"
              id="author"
              name="author"
              placeholder="Name"
              type="text"
              required=""
            />
          </p>
          <p className="comment-form-email">
            <input
              className="form-control"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              required=""
            />
          </p>
          <p className="comment-form-cookies-consent">
            <input type="checkbox" name="cookies" id="cookies" />
            <label htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>
          </p>
          <div className="comment-form-submit">
          <input type="submit" value="SUBMIT" className="button" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReView;
