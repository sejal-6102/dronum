import React from "react";
import CoomentsItem from "./Items/CoomentsItem";

const Comments = () => {
  return (
    <>
      <div className="comments-outer">
        <div className="container">
          <div className="comments-inner">
            <h2>3 Comments</h2>

            <ol className="comment-list">
              <li>
                <CoomentsItem
                  name="JANICE BROWN"
                  date="December 12, 2020 at 12:37 pm	"
                  comment="Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.magni doloreeos qui ratione voluptatem."
                />
                <ul className="reply-comment">
                  <li>
                    <CoomentsItem
                      name="Betty Riley"
                      date="December 12, 2020 at 12:38 pm	"
                      comment="Quick service, quick delivery, easy to contact – what more can you ask for from a retailer Rey is always helpful – would buy again!"
                    />
                  </li>
                </ul>
              </li>
              <li>
              <CoomentsItem
                  name="JANICE BROWN"
                  date="December 12, 2020 at 12:40 pm	"
                  comment="I absolutely love it. I’ve been talking about one these sense they first came out and now I finally have my own, I’m overjoyed with it.”"
                />
              </li>
            </ol>

          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
