import React from "react";
import { Masonry } from "@mui/lab";
import ServicesItem from "./Items/ServicesItem";

const Scenery=({setModal})=>{
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
        <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', textAlign: 'center', margin: '0.5em 0' }}>
  Our Training Programs
</h1>  

<h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)', textAlign: 'center', margin: '0.5em 0' }}>
Small Remote Pilot Certification Course (RPC) – 5 to 7 Days

</h3> 

<p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', textAlign: 'center', margin: '0.5em 0' }}>
<b>Drone Class:</b> Small drones (2 - 25 kg)
</p> 
            <div className="bottom">
        <Masonry columns={3}>
          {gallery.map((i) => (
            <ServicesItem value={i} link={setModal} />
          ))}
        </Masonry>
      </div>
        </>
    )
}

export default Scenery