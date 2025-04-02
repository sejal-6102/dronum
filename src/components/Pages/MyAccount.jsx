import React from "react";
import Header from "../Header";
import PagesHero from "../PagesHero";
import Footer from "../Footer";
import Login from "../Login";

const MyAccount = () => {
  return (
    <>
      <Header />
      <PagesHero img="assets/img/1-2.jpg" name="My Account" />
      <Login/>
      <Footer />
    </>
  );
};

export default MyAccount;
