import React from "react";
import CounterItems from "./Items/CounterItems";

const Counter = () => {
  const count=[
    {
      number:'50', name:"Satisfied Clients"
    },
    {
      number:'2160', name:"4K Resolution"
    },
    {
      number:'45', name:"Flight Time"
    },
    {
      number:'10', name:"Project done"
    },
  ]
  return (
    <>
      <div className="counter-outer animate__animated animate__zoomIn">
        <div className="container">
            <div className="counter-inner">
               {count.map((i) =><CounterItems value={i}/>)}
            </div>
        </div>
      </div>
    </>
  );
};

export default Counter