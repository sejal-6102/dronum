import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const BgridItems = ({ itemsPerPage }) => {
  const post = [
    {
      img: "assets/img/blog1.png",
      date: "December 04, 2024",
      title: "Master Drone Operations with DGCA-Approved Training and Certification in Jaipur",
      content:"The drone industry is growing at an unprecedented rate, and skilled drone operators are in high demand across sectors such as agriculture, surveying, media production, and many more"
    
    },
    {
      img: "assets/img/blog2.png",
      date: "November 30, 2024",
      title: "Unlock Your Drone Career with Dronum India Aviation’s RPC Certification Course in Jaipur, Rajasthan",
      content:"The drone industry is growing at an incredibly rapid pace, bringing new career opportunities for anyone who has an interest in pursuing a UAV technology career. Dronum India Aviation's Remote Pilot Certificate course is designed to help aspirants achieve success in this emerging field of UAV technology, providing comprehensive skills and certification to them"
    },
    {
      img: "assets/img/thum3.jpg",
      date: "December 13, 2020",
      title: "How to Start a Drone Photography",
     
    },
    {
      img: "assets/img/thum4.jpg",
      date: "December 13, 2020",
      title: "How Amazon is Integrating Drones into Their Supply",
      
    },
    {
      img: "assets/img/thum1.jpg",
      date: "December 13, 2020",
      title: "How to Start a Drone Photography Business",
      
    },
    {
      img: "assets/img/thum2.jpg",
      date: "December 13, 2020",
      title: "How Drones Are Saving Our Beaches",
      
    },
    {
      img: "assets/img/bg1.jpg",
      date: "December 13, 2020",
      title: "Drone videography price makes you surprises",
     
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
      <div className="left">
        <div className="left-inner">
          {currentItems &&
            currentItems.map((i, index) => (
              <div className="blog-post" key={index}>
                <div className="img-content">
                  <img src={i.img} alt={i.title} />
                </div>
                <div className="text-content">
                  <span>{i.date}</span>
                  <h3 className="post-title">
                    <Link to={`/blog-details/${encodeURIComponent(i.title)}`}>
                      {i.title}
                    </Link>
                  </h3>
                  <p>{i.content ? i.content.substring(0, 100) + "..." : "No content available"}</p>

                  <Link
                    to={`/blog-details/${encodeURIComponent(i.title)}`}
                    className="site-button"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}

          <ReactPaginate
            nextLabel={<FaAngleDoubleRight />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<FaAngleDoubleLeft />}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
};

export default BgridItems;
