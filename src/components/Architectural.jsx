import React from "react";
import { Masonry } from "@mui/lab";
import ServicesItem from "./Items/ServicesItem";
const Architectural=({setModal})=>{
    const gallery = [
        {
          class: "nature",
          img: "assets/img/pic1-9.jpg",
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
        
      ];
    return(
        <>
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', textAlign: 'center', margin: '0.5em 0' }}>
  Our Training Programs
</h1>  

<h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', textAlign: 'center', margin: '0.5em 0' }}>
Medium Remote Pilot Certification Course (RPC) 5 to 7 Days
</h3> 
 
        <div className="bottom">
        <Masonry columns={3}>
          {gallery.map((i) => (
            <ServicesItem value={i} link={setModal}/>
          ))}
        </Masonry>
      </div>
        </>
    )
}

export default Architectural