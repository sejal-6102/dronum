import React, { useState, useEffect } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link,useLocation, useNavigate } from "react-router-dom"; // Make sure Link is imported
import Sticky from "react-sticky-el";

import { API_BASE_URL } from '../components/Pages/Admin/contentSchemas';
import axios from 'axios';

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
];

const Header = () => {


   const [dynamicCourses, setDynamicCourses] = useState([]); // State for courses from API
  const [loadingCourses, setLoadingCourses] = useState(true); // Loading state
   const location = useLocation();
  const navigate = useNavigate();

 useEffect(() => {
    const fetchCoursesForNav = async () => {
      setLoadingCourses(true);
      try {
        const fullApiUrl = `${API_BASE_URL}/api/public/content/courses-list-for-nav`;
        console.log("Header.jsx: Attempting to fetch from URL:", fullApiUrl);
        const response = await axios.get(fullApiUrl);

        if (response.data && Array.isArray(response.data)) {
          const validCourses = response.data.filter(c => c.id && c.name && c.path);
          setDynamicCourses(validCourses);
          if (validCourses.length !== response.data.length) {
            console.warn("Header: Some courses from API were filtered out due to missing id, name, or path.");
          }
        } else {
          console.warn("Header: API response for courses-list-for-nav was not an array or undefined:", response.data);
          setDynamicCourses([]);
        }
      } catch (error) {
        // VVVVVVVVVVV DETAILED ERROR LOGGING VVVVVVVVVVV
        console.error("Header: Failed to fetch courses for navigation (Raw Error Object):", error);
        if (error.response) {
          console.error("Axios Error Response Data:", error.response.data);
          console.error("Axios Error Response Status:", error.response.status);
          console.error("Axios Error Response Headers:", error.response.headers);
        } else if (error.request) {
          console.error("Axios Error Request (No response received):", error.request);
        } else {
          console.error('Axios Error Message (Setup issue):', error.message);
        }
        console.error("Axios Error Config:", error.config);
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        setDynamicCourses([]);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchCoursesForNav();
  }, []); // Empty dependency array: runs once on component mount



   const handleNavClick = (sectionId) => {
    // Agar hum pehle se homepage par hain
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        // Navbar ki height ko consider karein agar woh fixed hai
        const navbarHeight = document.querySelector('.your-navbar-class')?.offsetHeight || 70; // Apne navbar ki class aur height daalein
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // Agar dusre page par hain, toh homepage par navigate karein aur state mein sectionId pass karein
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

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
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About us</Nav.Link>

                 <NavDropdown title="Courses" id="courses-nav-dropdown">
                    {loadingCourses ? (
                      <NavDropdown.Item disabled>Loading courses...</NavDropdown.Item>
                    ) : dynamicCourses.length > 0 ? (
                      dynamicCourses.map(course => (
                        <NavDropdown.Item
                          key={course.id} // id should be unique
                          as={Link}
                          to={course.path} // This should be like /courses/your-course-id
                        >
                          {course.name}
                        </NavDropdown.Item>
                      ))
                    ) : (
                      <NavDropdown.Item disabled>No courses available at the moment.</NavDropdown.Item>
                    )}
                  </NavDropdown>
                 
                  <NavDropdown title="Why Choose Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/why-choose-us">
                      Why Choose Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/our-glimps">
                      Our Glimps
                    </NavDropdown.Item>
                  </NavDropdown>
                   <Nav.Link  onClick={() => handleNavClick('our-partners-section')} >Our Partners</Nav.Link>

                  <Nav.Link href="/team-dronum">Team Dronum</Nav.Link>
                   <Nav.Link href="/blog-grid">Updates</Nav.Link>
                  <Nav.Link href="/contact-us">Contact Us</Nav.Link>
               
              

              
                </Nav>
              </Navbar.Collapse>

              <div className="item">
               
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