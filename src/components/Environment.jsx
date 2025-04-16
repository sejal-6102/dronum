import { Masonry } from "@mui/lab";
import React,{useState} from "react";
import ServicesItem from "./Items/ServicesItem";

const Environment = ({setModal}) => {
  
  const gallery = [
    {
      img: "assets/img/day1.png",
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
            <ServicesItem value={i}  link={setModal} />
          ))}

        </Masonry>
     </div>
    </>
  );
};
export default Environment;
