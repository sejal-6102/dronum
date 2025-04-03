import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-el";
const Header = () => {
  return (
    <>
      <Sticky className="sticky-header">
        <header>
          <Navbar expand="lg" className="header-inner">
            <div className="header-container">
              <Navbar.Brand href="#home" className="logo">
                <div className="logo-inner">
                  <Link to="./">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>
                  {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/all-services">
                      All Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/services">
                      Services Details
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link href="/gallery-grid">Courses</Nav.Link>
                  
                  {/* <NavDropdown title="Why Choose Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/gallery-grid">
                      Gallery Grid
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/gallery-details">
                      Gallery Details
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link href="/all-services">Why Choose Us?</Nav.Link>

                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                  <Nav.Link href="/team-listing">Team Listing</Nav.Link>
                     <Nav.Link href="/blog-grid">Blog</Nav.Link>
                     <Nav.Link href="/blog-details">Blog</Nav.Link>

                  {/* <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/team-listing">
                      Team Listing
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="/error">Error 404</NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="/contact-us">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <NavDropdown title="Shop" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/shop">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="/login">
                      My account
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                    <NavDropdown.Item href="/checkout">
                      Checkout
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  {/* <NavDropdown title="Blog" id="basic-nav-dropdown"> */}
                    {/* <NavDropdown.Item href="/latest-news">
                      Latest News
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Item href="/blog-grid">
                      Blog Grid
                    </NavDropdown.Item>
                  </NavDropdown> */}
                    {/* <NavDropdown.Item href="/blog-details">
                      Blog Detail
                    </NavDropdown.Item> */}
                </Nav>
              </Navbar.Collapse>
              <div className="item">
                {/* <div className="user">
                  <Link to="/login" >
                    <FaUser />
                  </Link>
                </div> */}
                <div className="mobile-number">
                  <span> (+91) 7433 876 876</span>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
            </div>
          </Navbar>
        </header>
      </Sticky>
    </>
  );
};

export default Header;
