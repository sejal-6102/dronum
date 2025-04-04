import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import PagesHero from "../PagesHero";
import Team from "../Team";
import CoreTeam from "../CoreTeam";

const TeamListing = () => {
  return (
    <>
      <Header />
      <PagesHero
        name="Team Listing"
        img='assets/img/7.jpg'
      />
      <Team/>
      <CoreTeam />
      <Footer />
    </>
  );
};

export default TeamListing;
