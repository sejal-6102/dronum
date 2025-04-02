import React from "react";
import CountUp from "react-countup";

const CounterItems = (props) => {
  return (
    <>
      <div className="item">
        <div className="item-inner">
          <h2>
            <CountUp end={props.value.number} duration={10} separator="" />
          </h2>
          <span>{props.value.name}</span>
        </div>
      </div>
    </>
  );
};

export default CounterItems;
