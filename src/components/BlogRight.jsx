import React from "react";
import RecentPostItems from "./Items/RecentPostItems";
import { Link } from "react-router-dom";

const BlogRight = () => {
  return (
    <>
      <div className="right">
        <div className="right-inner">
          <div className="side-bar">
            <div className="widget  search">
              <form>
                <div className="input-group">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Type to search"
                  />
                  <span>
                    <button className="button">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
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
            <div className="widget categories">
              <h4>Categories</h4>
              <ul>
                <li>
                  <Link to={"#"}>Drons Life</Link>
                  (5)
                </li>
                <li>
                  <Link to={"#"}>Latest News</Link>
                  (3)
                </li>
                <li>
                  <Link to={"#"}>Recent Post</Link>
                  (2)
                </li>
              </ul>
            </div>
            <div className="widget popular">
              <h4>Popular Products</h4>
              <ul>
                <li>
                  <div className="img-content">
                    <img src="assets/img/pic-9.jpg" alt="" />
                  </div>
                  <div className="text-content">
                    <Link to={"/shop"}>Skydio 2</Link>
                    <span>£120.00</span>
                  </div>
                </li>
                <li>
                  <div className="img-content">
                    <img src="assets/img/pic-3.jpg" alt="" />
                  </div>
                  <div className="text-content">
                    <Link to={"/shop"}>DJI Mavic 2 Pro</Link>
                    <span>£99.00</span>
                  </div>
                </li>
                <li>
                  <div className="img-content">
                    <img src="assets/img/pic-7.jpg" alt="" />
                  </div>
                  <div className="text-content">
                    <Link to={"/shop"}>F111WF Folding Drone</Link>
                    <span>£238.00</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="widget meta-info">
              <h4>Meta Info</h4>
              <ul>
                <li>
                  <Link to={"/login"}>Log in</Link>
                </li>
                <li>
                  <Link to={""}>Entries feed</Link>
                </li>
                <li>
                  <Link to={""}>Comments feed</Link>
                </li>
                <li>
                  <Link to={"/https://wordpress.org/"}>WordPress.org</Link>
                </li>
              </ul>
            </div>
            <div className="widget tags">
            <h4>Tags</h4>
            <div className="tag-cloud">
                <Link to={""}>Analytics</Link>
                <Link to={""}>Business</Link>
                <Link to={""}>Consulting</Link>
                <Link to={""}>Development</Link>
                <Link to={""}>Dronza</Link>
                <Link to={""}>Management</Link>
                <Link to={""}>Stock</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRight;
