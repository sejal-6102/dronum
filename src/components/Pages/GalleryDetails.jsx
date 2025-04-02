import React from "react";
import Header from "../Header";
import PagesHero from "../PagesHero";
import Footer from "../Footer";
import GallerySlider from "../GallerySlider";
import GDetails from "../GDetails";

const GalleryDetails = () => {
  return <>
  <Header/>
  <PagesHero img="assets/img/1-2.jpg" name="Gallery Details"/>
  <GallerySlider/>
  <GDetails/>
  <Footer />
  </>;
};

export default GalleryDetails;
