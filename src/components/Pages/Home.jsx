import React,{useEffect} from "react";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import Services from "../Services";
import Video from "../Video";
import Counter from "../Counter";
import Team from "../Team";
import Quality from "../Quality";
import News from "../News";
import Pricing from "../Pricing";
import Client from "../Client";
import Brand from "../Brand";
import Footer from "../Footer";
import NewsPopup from "../NewsPopup";
import ImageGallery from "../ImageGallery";
import Partners from "../Partners";
import GDetails from "../GDetails"

import { useLocation } from 'react-router-dom';



const Home = () => {

const location = useLocation();

    useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const element = document.getElementById(sectionId);
      if (element) {
        // Navbar ki height ko consider karein agar woh fixed hai
        // Yeh value aapke navbar ki actual height honi chahiye
        const navbarHeight = document.querySelector('.your-navbar-class')?.offsetHeight || 70; // Apne navbar ki class aur height daalein
        
        // Thoda delay de sakte hain taaki DOM poori tarah render ho jaaye
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // 100ms ka delay
      }
    }
  }, [location.state]);
  return (
    <>
      <Header />
      <NewsPopup />
       <Hero />
      <About />
      <GDetails/>
      <Services />
      <ImageGallery />
      {/* <Video /> */}
      {/* <Counter /> */}
      <Team />
      {/* <Quality /> */}
      {/* <News /> */}
      <Pricing />
      <Client />
    
        <section id="our-partners-section" > <Partners /></section>
      
      
      <Footer />
    </>
  );
};

export default Home;
