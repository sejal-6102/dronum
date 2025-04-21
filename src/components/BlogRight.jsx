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
                    img="assets/img/blog1.png"
                    title="Master Drone Operations with DGCA-Approved "
                    date="December 04, 2024"
                  />
                </li>
                <li>
                  <RecentPostItems
                    img="assets/img/blog2.png"
                    title="Unlock Your Drone Career with Dronum India Aviation’s"
                    date="November 30, 2024"
                  />
                </li>
                <li>
                  <RecentPostItems
                    img="assets/img/blog3.png"
                    title="Fast-Track Your Drone Certification:"
                    date="November 18, 2024"
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
