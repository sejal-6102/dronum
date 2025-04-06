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
      img: "assets/img/blog3.png",
      date: "November 18, 2024",
      title: "Fast-Track Your Drone Certification: 5-7 Days DGCA-Approved Training in Jaipur",
      content:"The drone industry is one of the fastest-growing sectors around the world with applications in agriculture, surveillance, filmmaking, and surveying. If you are looking to join this dynamic field, a DGCA-approved Remote Pilot Certificate, or RPC, is required."
     
    },
    {
      img: "assets/img/blog4.png",
      date: "November 16, 2024",
      title: "Sky's the Limit: Exploring India’s Drone-Powered Technological Growth",
      content:"India is witnessing a technological change powered by drones. Each industry in the country can reap the incredible potential that comes with it. Be it increasing productivity or revolutionizing areas such as agriculture, surveillance, and logistics, it is becoming impossible for the growth story of India without drones. "
      
    },
    {
      img: "assets/img/blog5.png",
      date: "November 15, 2024",
      title: "Flying High: How Drone Photography is Shaping India's Future and Boosting Earnings",
      content:"In the last few years, drone photography has seen a tremendous rise to greater heights, providing breathtaking aerial views and changing the face of industries around the world. In India, the advent of drone technology is more than just a technological revolution-it is an economic and creative boom."
      
    },
    {
      img: "assets/img/blog6.png",
      date: "November 14, 2024",
      title: "Soaring to Success: 5 Key Benefits of Drones Across Indian Industries",
      content:"Drones are no longer something of the future but rather here, revolutionizing industries and providing countless opportunities in India. From agriculture and real estate to filmmaking and logistics, drones are transforming the way businesses operate. Here's a look at five key benefits of drones across India's industries:"
    },
    {
      img: "assets/img/blog7.png",
      date: "November 13, 2024",
      title: "Launch Your Drone Career with Dronum India Aviation – Get Certified Today!",
      content:"The drone industry in India is rapidly growing, and there has never been a better time to pursue a career in this exciting field. Whether you are looking to work in agriculture, filmmaking, infrastructure, or logistics, drones are transforming industries and creating new job opportunities. Dronum India Aviation is here to help you take your first step toward a certified drone career with world-class training."
     
    },
    {
      img: "assets/img/blog8.png",
      date: "November 12, 2024",
      title: "Drones: Shaping the Future of Careers Today",
      content:"The drone industry is growing exponentially and revolutionizing careers in all sectors. Drone technology has revolutionized agriculture, film-making, logistics, construction, and many more sectors of India. With more business operations relying on drones for more efficiency and precision, the need for skilled drone professionals is in high demand. If you want to work as a drone pilot, an aerial photographer, or even an analyst, then drones open up numerous career avenues for you."
     
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
