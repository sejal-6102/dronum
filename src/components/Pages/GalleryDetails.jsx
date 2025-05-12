import React from "react";
import Header from "../Header";
import PagesHero from "../PagesHero";
import Footer from "../Footer";
import GallerySlider from "../GallerySlider";
import GDetails from "../GDetails";
import Video from "../Video";

const GalleryDetails = () => {
  return <>
  <Header/>
  <PagesHero img="assets/img/1-2.jpg" name="Our Glimps"/>
  <GallerySlider/>
  {/* <GDetails/> */}
  <br></br>
  <Video />
  <br></br>
  <Footer />
  </>;
};

export default GalleryDetails;
