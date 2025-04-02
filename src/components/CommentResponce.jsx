import React from "react";

const CommentResponce = () => {
  return (
    <div>
      <div className="responce-outer">
        <div className="container">
          <div className="responce-inner">
            <h2>3 Comments</h2>

            <form method="post" className="row">
              <div className="from-group col-md-12">
                <textarea
                  name="comment"
                  id="comment"
                  className="control"
                  placeholder="Your comment"
                ></textarea>
              </div>
              <div className="from-group col-md-4">
                <input
                  id="author"
                  className="control"
                  placeholder="Full Name"
                  name="author"
                  type="text"
                  value=""
                />
              </div>
              <div className="from-group col-md-4">
                <input
                  id="email"
                  className="control"
                  placeholder="Email"
                  name="email"
                  type="text"
                  value=""
                />
              </div>
              <div className="from-group col-md-4">
                <input
                  id="url"
                  className="control"
                  placeholder="Website"
                  name="url"
                  type="text"
                  value=""
                />
              </div>
              <p className="cookies">
              <input id="cookies" name="wp-comment-cookies-consent" type="checkbox" value="yes"/>
              <label for="cookies">Save my name, email, and website in this browser for the next time I comment.</label>
              </p>
              <p className="submit">
              <input name="submit" type="submit" id="submit" className="button" value="Submit"/>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentResponce;
