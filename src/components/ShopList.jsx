import React, { useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const ShopList = ({ itemsPerPage }) => {
  const post = [
    {
      img: "assets/img/pic-1.jpg",
      title: "DJI Inspire 2",
      price: "99.00",
    },
    {
      img: "assets/img/pic-3.jpg",
      title: "DJI Mavic 2 Pro",
      price: "49.00",
    },
    { img: "assets/img/pic-3.jpg", title: "DJI Mavic 2", price: "99.00" },
    { img: "assets/img/pic-4.jpg", title: "DJI Mavic 2 Zoom", price: "199.00" },
    { img: "assets/img/pic-5.jpg", title: "DJI Mavic Air 2", price: "135.00" },
    {
      img: "assets/img/pic-8.jpg",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/5-1.jpg",
      title: "Dronezy 300X",
      price: "99.00",
    },
    {
      img: "assets/img/3-1.jpg",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/4-1.jpg",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/2-1.jpg",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/1-1.jpg",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/2.png",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/2.png",
      title: "DJI Phantom 4 Pro V2.0",
      price: "345.00",
    },
    {
      img: "assets/img/pic-6.jpg",
      title: "U49WF FPV Camera Drone",
      price: "60.00",
    },
    {
      img: "assets/img/pic-3.jpg",
      title: "DJI Mavic 2 Pro",
      price: "49.00",
    },
    {
      img: "assets/img/1.png",
      title: "Dronezy 300X",
      price: "99.00",
    },
    {
      img: "assets/img/pic-2.jpg",
      title: "Mavic Pro Platinum",
      price: "99.00",
    },
    {
      img: "assets/img/pic-3.jpg",
      title: "DJI Mavic 2 Pro",
      price: "99.00",
    },
    {
      img: "assets/img/pic-6.jpg",
      title: "U49WF FPV Camera Drone",
      price: "60.00",
    },
  ];

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = post.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(post.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % post.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="shop-outer">
        <div className="container">
          <div className="shop-inner">
            <div className="top">
              <p className="woocommerce-result-count">Showing {itemOffset+1}–{(post.length === itemOffset+1) ? (post.length) : (endOffset)} of {post.length} results</p>
              <form method="get">
                <select name="orderby" id="orderby">
                  <option value="menu_order" selected="selected">
                    Default sorting
                  </option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="rating">Sort by average rating</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </form>
            </div>
            <div className="content">
              {currentItems &&
                currentItems.map((i) => (
                  <div className="item animate__animated animate__zoomIn">
                    <div className="item-inner">
                      <div className="img-content">
                        <img src={i.img} alt="" />
                        <div className="bg-overlay">
                          <div className="icon">
                            <Link to="" >
                              <FaCartPlus/>
                            </Link>
                            <Link to="">
                              <FaHeart/>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="text-content">
                        <h3>
                          <Link to="/singleProduct">{i.title}</Link>
                        </h3>
                        <span>
                          <span>£</span>
                          {i.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              <ReactPaginate
                nextLabel={"→"}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={"←"}
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopList;
