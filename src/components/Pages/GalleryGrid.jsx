import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PagesHero from "../PagesHero";
import GaGrid from "../GaGrid";

const GalleryGrid = () => {
  return (
    <>
      <Header />
      <PagesHero
        img="assets/img/5-2.jpg"
        name="Gallery Grid"
      />
      <GaGrid/>
      <Footer />
    </>
  );
};

export default GalleryGrid;
