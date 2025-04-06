import React from "react";
import RecentPostItems from "./Items/RecentPostItems";
import { Link } from "react-router-dom";

const BlogRight = () => {
  return (
    <>
      <div className="right">
        <div className="right-inner">
          <div className="side-bar">
     
            <div className="widget recent-post">
              <h4>Recent Posts</h4>
              <ul>
                <li>
                  <RecentPostItems
                    img="assets/img/thum1-150x150.jpg"
                    title="How Drones Are Saving Our Beaches"
                  />
                </li>
                <li>
                  <RecentPostItems
                    img="assets/img/thum2-150x150.jpg"
                    title="How to Start a Drone Photography Business"
                  />
                </li>
                <li>
                  <RecentPostItems
                    img="assets/img/thum4-150x150.jpg"
                    title="How Amazon is Integrating Drones into Their Supply"
                  />
                </li>
              </ul>
            </div>
           
           </div>
        </div>
      </div>
    </>
  );
};

export default BlogRight;
