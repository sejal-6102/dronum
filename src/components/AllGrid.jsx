import React from "react";
import { Masonry } from "@mui/lab";
import ServicesItem from "./Items/ServicesItem";

const AllGrid = ({setModal}) => {
  const gallery = [
    {
      class: "nature",
      img: "assets/img/pic1-9.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic3-7.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic3-8.jpg",
      title: "Event photography",
    },
    {
      class: "nature",
      img: "assets/img/pic1-8.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic2-9.jpg",
      title: "Event photography",
    },

    {
      class: "nature",
      img: "assets/img/pic5-5.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic4-8.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic11.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic9.jpg",
      title: "Event photography",
    },
    {
      class: "",
      img: "assets/img/pic6-4.jpg",
      title: "Event photography",
    },
  ];
  return (
    <>
      <div className="bottom">
        <Masonry columns={3}>
          {gallery.map((i) => (
            <ServicesItem value={i} link={setModal} />
          ))}
        </Masonry>
      </div>
    </>
  );
};

export default AllGrid;
