import { Masonry } from "@mui/lab";
import React from "react";
import ServicesItem from "./Items/ServicesItem";

const Environment = () => {
  const gallery = [
    {
      img: "assets/img/pic1-8.jpg",
      title: "Event photography",
    },
    {
      img: "assets/img/pic2-9.jpg",
      title: "Event photography",
    },

    {
      img: "assets/img/pic7.jpg",
      title: "Event photography",
    },
    {
      img: "assets/img/pic5-6.jpg",
      title: "Event photography",
    },
  ];
  return (
    <>
      <div className="bottom">
        <Masonry columns={3}>
          {gallery.map((i) => (
            <ServicesItem value={i} />
          ))}
        </Masonry>
      </div>
    </>
  );
};
export default Environment;
