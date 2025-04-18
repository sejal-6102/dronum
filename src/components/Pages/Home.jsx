import React from "react";
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



const Home = () => {
  return (
    <>
      <Header />
      <NewsPopup />
       <Hero />
      <About />
      <Services />
      <ImageGallery />
      <Video />
      {/* <Counter /> */}
      <Team />
      {/* <Quality /> */}
      <News />
      {/* <Pricing /> */}
      <Client />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
