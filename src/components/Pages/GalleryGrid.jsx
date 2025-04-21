import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PagesHero from "../PagesHero";
import GaGrid from "../GaGrid";
import Services from "../Services"

const GalleryGrid = () => {
  return (
    <>
      <Header />
      <PagesHero
        img="assets/img/5-2.jpg"
        name=" All Courses"
      />
      {/* <GaGrid/> */}
      <Services />
      <Footer />
    </>
  );
};

export default GalleryGrid;
