import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const Button = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  // Use useEffect to avoid multiple event listeners on every render
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
  <>
  {/* WhatsApp Button (now on top) */}
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="top-up whatsapp-btn"
  >
    <img
      src="/assets/img/whatsapp.png"
      alt="WhatsApp"
      style={{ width: "100%", height: "100%" }}
    />
  </a>

  {/* Scroll To Top Button (below WhatsApp) */}
  <button
    className="top-up scroll-top-btn"
    style={{ display: visible ? "inline" : "none" }}
    onClick={scrollTop}
  >
    <FaAngleUp />
  </button>
</>

  );
};

export default Button;
