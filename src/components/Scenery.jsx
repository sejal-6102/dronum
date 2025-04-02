import React from "react";
import { Masonry } from "@mui/lab";
import ServicesItem from "./Items/ServicesItem";

const Scenery=()=>{
    const gallery = [
        
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
    return(
        <>
            <div className="bottom">
        <Masonry columns={3}>
          {gallery.map((i) => (
            <ServicesItem value={i} />
          ))}
        </Masonry>
      </div>
        </>
    )
}

export default Scenery