import React from "react";

const CoomentsItem = (props) => {
  return (
    <>
      <div className="comment-body">
        <div className="user-img">
          <img src="assets/img/ae2eb90037d44e31197bcd90979d8925.jpg" alt="" />
        </div>
          <div className="comment-details">
            <h4 className="name">{props.name}</h4>
            <span>{props.date}</span>
            <p>{props.comment}</p>
            <button className="button">
              Reply
            </button>
          </div>
      </div>
    </>
  );
};

export default CoomentsItem;
