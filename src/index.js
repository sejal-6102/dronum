import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'animate.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Error from "./components/Pages/Error";
import AboutOne from "./components/Pages/AboutOne";
import AllServices from "./components/Pages/AllServices";
import ServicesDetail from "./components/Pages/ServicesDetail";
import TeamListing from "./components/Pages/TeamListing";
import Faq from "./components/Pages/Faq";
import Button from "./components/Button";
import ContactUS from "./components/Pages/ContactUS";
import GalleryGrid from "./components/Pages/GalleryGrid";
import GalleryDetails from "./components/Pages/GalleryDetails";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import MyAccount from "./components/Pages/MyAccount";
import BlogDetail from "./components/Pages/BlogDetail";
import NewsGrid from "./components/Pages/NewsGrid";
import BlogGrid from "./components/Pages/BlogGrid";
import Shop from "./components/Pages/Shop";
import Privacy from "./components/Pages/Privacy";
import SingleProduct from "./components/Pages/SingleProduct";
import EnrollForm from "./components/Pages/EnrollForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutOne/>}/>
        <Route path="/all-services" element={<AllServices/>}/>
        <Route path="/services" element={<ServicesDetail/>}/>
        <Route path="/gallery-grid" element={<GalleryGrid/>}/>
        <Route path="/gallery-details" element={<GalleryDetails/>}/>
        <Route path="/team-listing" element={<TeamListing/>}/>
        <Route path="/faq" element={<Faq/> }/>
        <Route path="/contact-us" element={<ContactUS/>}/>
        <Route path="/*" element={<Error/>}/>
        {/* <Route path="/shop" element={<Shop/>}/> */}
        <Route path="/singleProduct" element={<SingleProduct/>}/>
        <Route path="/login" element={<MyAccount/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/latest-news" element={<NewsGrid/>}/>
        <Route path="/blog-grid" element={<BlogGrid/>}/>
        <Route path="/blog-details" element={<BlogDetail/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/enroll-Form" element={<EnrollForm/>}/>


      </Routes>
      <Button/>
    </BrowserRouter>
  </>
);
