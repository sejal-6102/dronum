import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
// FaUser is commented out in your original code, keeping it that way
// import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure Link is imported
import Sticky from "react-sticky-el";

import { API_BASE_URL } from '../components/Pages/Admin/contentSchemas';
import axios from 'axios';

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


   const [dynamicCourses, setDynamicCourses] = useState([]); // State for courses from API
  const [loadingCourses, setLoadingCourses] = useState(true); // Loading state
  // Optional: You can add an error state for courses if needed
  // const [errorCourses, setErrorCourses] = useState(null);

  useEffect(() => {
    const fetchCoursesForNav = async () => {
      setLoadingCourses(true);
      // setErrorCourses(null); // Reset error
      try {
        // Backend endpoint: /api/public/courses-list
        // API_BASE_URL is 'http://localhost:5000/api'
        // Full URL will be 'http://localhost:5000/api/public/courses-list'
        const response = await axios.get(`${API_BASE_URL}/public/content/courses-list`);

        if (response.data && Array.isArray(response.data)) {
          setDynamicCourses(response.data);
          // Expected data format: [{ id: 'course_id', name: 'Course Name', path: '/courses/course_id' }, ...]
        } else {
          console.warn("Header: API response for /public/courses-list was not an array or undefined:", response.data);
          setDynamicCourses([]); // Default to empty array
        }
      } catch (error) {
        console.error("Header: Failed to fetch courses for navigation:", error);
        // setErrorCourses("Could not load courses from server.");
        setDynamicCourses([]); // Fallback to empty array on error
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCoursesForNav();
  }, []); // Empty dependency array: runs once on component mount

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
                    <img src="/assets/img/logo-png1.png" alt="Logo" />
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
                  {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
                    {myCourses.map(course => (
                      <NavDropdown.Item
                        key={course.id} 
                        as={Link} 
                        to={`/courses/${course.id}`} 
                      >
                        {course.name} 
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown> */}

                                    {/* === Courses Dropdown Section (DYNAMIC) === */}
                  <NavDropdown title="Courses" id="courses-nav-dropdown">
                    {loadingCourses ? (
                      <NavDropdown.Item disabled>Loading courses...</NavDropdown.Item>
                    ) : dynamicCourses.length > 0 ? (
                      dynamicCourses.map(course => (
                        <NavDropdown.Item
                          key={course.id || course.name} // Use a unique key, course.id is preferred
                          as={Link}
                          to={course.path} // Path from API e.g., /courses/pilot_training
                        >
                          {course.name}
                        </NavDropdown.Item>
                      ))
                    ) : (
                      <NavDropdown.Item disabled>No courses available at the moment.</NavDropdown.Item>
                    )}
                    {/* You can add a static "View All Courses" link if you have a page for it */}
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/all-courses">View All Courses</NavDropdown.Item> */}
                  </NavDropdown>
                  {/* === End of Courses Dropdown Section === */}
                  {/* === End of Courses Dropdown Section === */}

                  {/* --- Why Choose Us Dropdown (Original) --- */}
                  {/* Keeping href as requested */}
                  <NavDropdown title="Why Choose Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/who-we-are">
                      Why Choose Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/our-glimps">
                      Our Glimps
                    </NavDropdown.Item>
                  </NavDropdown>
                   {/* <Nav.Link href="/contact-us">Our Partners</Nav.Link> */}
                   <Nav.Link href="/#our-partners">Our Partners</Nav.Link>

                  {/* --- Other Links (Original) --- */}
                  {/* Keeping href as requested */}
                  <Nav.Link href="/team-listing">Team Dronum</Nav.Link>
                   <Nav.Link href="/blog-grid">Updates</Nav.Link>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
               
              

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
                  <span> (+91) 766 587 6876</span>
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