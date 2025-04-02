import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const Button = () => {
  const [visible, setVisible] = useState(false) 
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  };  
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener('scroll', toggleVisible); 
  return (
    <>
      <button className="top-up"  style={{display: visible ? 'inline' : 'none'}}>
        <span onClick={scrollTop}> 
          <FaAngleUp />
        </span>
      </button>
    </>
  );
};

export default Button;
