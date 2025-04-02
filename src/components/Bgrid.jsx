import React from "react";
import BgridItems from "./Items/BgridItems";
import BlogRight from "./BlogRight";

const Bgrid = () => {
  return (
    <>
      <div className="bgrid-outer">
        <div className="container">
          <div className="bgrid-inner animate__animated animate__zoomIn">
            <BgridItems itemsPerPage={4} />
            <BlogRight/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bgrid;
