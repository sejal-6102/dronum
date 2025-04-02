import React, { useState } from 'react'
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const BgridItems = ({ itemsPerPage }) => {
        
const post = [
    {
      img: "assets/img/thum3.jpg",
      date: "December 13, 2020",
      title: "How Amazon is Integrating Drones",
    },
    {
      img: "assets/img/thum2.jpg",
      date: "December 13, 2020",
      title: "Drone videography price",
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
        currentItems.map((i) => (
          <div className="blog-post">
            <div className="img-content">
              <img src={i.img} alt="" />
            </div>
            <div className="text-content">
              <span>{i.date}</span>
              <h3 className="post-title">
                <Link to="">{i.title}</Link>
              </h3>
              <p>
                A collection of textile samples lay spread out on the table –
                Samsa was a travelling sales man – and above it there hung a
                picture that he had recently cut out of an illustrated an
                magazine
              </p>
              <Link to="" className='site-button'>Read More</Link>
            </div>
          </div>
        ))}

                <ReactPaginate
                
                  nextLabel={<FaAngleDoubleRight/>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel={<FaAngleDoubleLeft/>}
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
    </>
  )
}

export default BgridItems