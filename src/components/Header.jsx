import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
// FaUser is commented out in your original code, keeping it that way
// import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure Link is imported
import Sticky from "react-sticky-el";

// --- Define your courses list here (or import it) ---
const myCourses = [
  { id:'small-rpc-agri-10day', name: 'Small RPC With Agri Focus' },
  { id: 'medium-rpc-agri-10day', name: 'Medium RPC With Agri Focus' },
  { id: 'drone-technician-15day', name: 'Drone Repair & Maintenance Course' },
  {id:'small-rpc-basic-7day',name:'Drone Train the Trainer (TTT)'},
  {id:'medium-rpc-basic-7day',name:'Medium Remote Pilot Certification Course'},
  {id:'rpc-agri-8day',name:'Remote Pilot Certification (RPC) with Agri'},
  {id:'drone-technician-9day',name:'Drone Technician Course'},
  {id:'rpc-instructor-15day',name:'RPC + Remote Pilot Instructor Course'},
  {id:'drone-security-officer-20day',name:'Drone Security Officer Training'},
  {id:'survey-mapping-rpc-8day',name:'Survey & Mapping with RPC'},
  {id:'fpv-build-pilot-15day',name:'FPV Drones '},
  { id: 'drone-mapping-surveying', name: 'Drone Mapping & Surveying' },
  // Add all your course names and unique IDs here
];
// --- End of courses list ---

const Header = () => {
  return (
    <>
      <Sticky className="sticky-header">
        <header>
          <Navbar expand="lg" className="header-inner">
            <div className="header-container">
              {/* --- Logo Section (Original - Keeping nested Link for now as requested) --- */}
              <Navbar.Brand href="#home" className="logo">
                <div className="logo-inner">
                  <Link to="./">
                    <img src="/assets/img/logo-png.png" alt="Logo" />
                  </Link>
                </div>
              </Navbar.Brand>
              {/* --- Navbar Collapse Start (Original) --- */}
              <Navbar.Collapse id="basic-navbar-nav">
                {/* --- Navigation Links Start (Original) --- */}
                {/* Note: For SPA behavior, these should ideally use 'as={Link}' and 'to', but leaving as 'href' per request */}
                <Nav className="">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>

                  {/* === Courses Dropdown Section (MODIFIED) === */}
                  <NavDropdown title="Courses" id="basic-nav-dropdown">
                    {/* Map over the myCourses array */}
                    {myCourses.map(course => (
                      <NavDropdown.Item
                        key={course.id} // Essential key prop
                        as={Link} // Use React Router Link via 'as' prop
                        to={`/courses/${course.id}`} // Use 'to' prop for dynamic route
                      >
                        {course.name} {/* Display the course name */}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                  {/* === End of Courses Dropdown Section === */}

                  {/* --- Why Choose Us Dropdown (Original) --- */}
                  {/* Keeping href as requested */}
                  <NavDropdown title="Why Choose Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/who-we-are">
                      Who we are
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/our-glimps">
                      Our Glimps
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* --- Other Links (Original) --- */}
                  {/* Keeping href as requested */}
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                  <Nav.Link href="/team-listing">Team Listing</Nav.Link>
                  <Nav.Link href="/blog-grid">Blog</Nav.Link>

                  {/* --- Commented out Blog Dropdown (Original) --- */}
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
                 {/* --- Navigation Links End (Original) --- */}
              </Navbar.Collapse>
               {/* --- Navbar Collapse End (Original) --- */}

              {/* --- Right Side Items (Original) --- */}
              <div className="item">
                 {/* --- Commented out User Icon (Original) --- */}
                {/* <div className="user">
                  <Link to="/login" >
                    <FaUser />
                  </Link>
                </div> */}
                {/* --- Mobile Number Div (Original with inline style) --- */}
                <div
                  className="mobile-number"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontSize: 'clamp(14px, 1.8vw, 18px)',
                    lineHeight: '1.6',
                    padding: '10px 20px',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    wordBreak: 'keep-all',
                  }}
                >
                  <span> (+91) 7433 876 876</span>
                  <span> (+91) 7665876876</span>
                </div>
                {/* --- Navbar Toggle (Original) --- */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
               {/* --- Right Side Items End (Original) --- */}
            </div>
          </Navbar>
        </header>
      </Sticky>
    </>
  );
};

export default Header;