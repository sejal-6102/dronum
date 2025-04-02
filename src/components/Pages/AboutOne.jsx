import React from "react";
import About from "../About";
import Quality from "../Quality";
import Team from "../Team";
import Video from "../Video";
import Brand from "../Brand";
import PagesHero from "../PagesHero";
import Header from "../Header";
import Footer from "../Footer";

const AboutOne = () => {
  return (
    <>
      <Header />
      <PagesHero name="About" img="assets/img/3-2.jpg"/>
      <About />
      <Quality />
      <Team />
      <Video />
      <Brand />
      <Footer />
    </>
  );
};

export default AboutOne;
