// src/components/Pages/CourseDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // React Router hooks
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'; // Bootstrap components
import axios from 'axios'; // For API calls

// Icons - Ensure 'react-icons' is installed and all necessary icons are imported
import {
  FaStar, FaRegStar, FaPlay, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping,
  FaFileAlt, FaSyncAlt, FaCheck, FaClock, FaCertificate as DefaultCertificateIcon,
  FaUserShield, FaMapMarkedAlt, FaRulerCombined, FaCogs, FaBroadcastTower,
  FaPlaneDeparture, FaProjectDiagram, FaBook, FaPaperPlane, FaTractor, FaSprayCan,
  FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList,
  FaFileSignature, FaShieldAlt, FaFilePdf
  // Add any other icons you might use in courseBreakdown.icon
} from 'react-icons/fa';

// Import shared components (Adjust paths as per your project structure)
import Header from '../Header';
import Footer from '../Footer';
import PagesHero from '../PagesHero'; // For the hero section at the top
import EnrollForm from "./EnrollForm"; // Your enrollment form modal

// Import API_BASE_URL
// Adjust path based on CourseDetailPage.jsx's location relative to contentSchemas.js
// Example: if CourseDetailPage is in src/components/Pages/ and contentSchemas is in src/components/Pages/Admin/
import { API_BASE_URL } from './Admin/contentSchemas';

import "../../css/course.css"; // Your custom CSS for course details

// Icon mapping for courseBreakdown (ensure all icons used in data are here)
const iconMap = {
  FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt,
  FaPlaneDeparture, FaMapMarkedAlt, FaProjectDiagram, FaBook, FaPaperPlane,
  FaCertificate: DefaultCertificateIcon, // Alias if needed, or use DefaultCertificateIcon directly
  FaTractor, FaSprayCan, FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher,
  FaClipboardList, FaFileSignature, FaShieldAlt, FaUserShield, FaRulerCombined,
  FaCogs, FaBroadcastTower,
  FaEye: FaMapMarkedAlt, // Fallback example
  FaExclamationTriangle: FaClipboardList, // Fallback example
  // Add more mappings if your data uses other icon names
};

// Helper function to render rating stars
const renderStars = (rating = 0) => { // Default rating to 0
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="rating-star filled" />);
    }
    const emptyStars = 5 - fullStars; // Calculate empty stars based on full stars
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="rating-star empty" />);
    }
    return stars;
};

const CourseDetailPage = () => {
  const { courseId } = useParams(); // Get courseId from URL (e.g., "pilot_training")
  const [course, setCourse] = useState(null);       // State to hold fetched course data
  const [loading, setLoading] = useState(true);     // Loading state
  const [error, setError] = useState(null);         // Error state
  const [isModalOpen, setIsModalOpen] = useState(false); // State for EnrollForm modal




  const DEFAULT_HERO_IMAGE = "/assets/img/pic2-4.jpg";



  // VVVVVV YEH FUNCTION ADD/UNCOMMENT KAREIN VVVVVV
  // Helper function to construct the full image URL
  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return ''; // Return empty string if path is not provided

    // If it's already an absolute URL (e.g., from cloud storage or starts with http/https)
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
      return relativePath;
    }

    // Construct full URL for relative paths (e.g., /uploads/image.jpg)
    // API_BASE_URL might be 'http://localhost:5000/api'.
    // Static files are often served from the backend root, not under /api.
    const backendRootUrl = API_BASE_URL.replace('/api', ''); // Gives 'http://localhost:5000'
    return `${backendRootUrl}${relativePath}`;
  };
  // ^^^^^^ YEH FUNCTION ADD/UNCOMMENT KAREIN ^^^^^^
 const getCommonBrochureUrl = () => {
    const backendRootUrl = API_BASE_URL.replace('/api', ''); // e.g., http://localhost:5000
    // --- IMPORTANT: Yeh path apne common brochure ke actual path se update karein ---
    const brochurePublicPath = "/uploads/brochures/Dronum India Aviations Student Brochure.pdf"; // Example path
    return `${backendRootUrl}${brochurePublicPath}`;
  };


  useEffect(() => {
    const fetchCourseData = async () => {
      if (!courseId) {
        setError("Course ID is missing from URL.");
        setLoading(false);
        setCourse(null);
        return;
      }

      setLoading(true);
      setError(null);
      const contentKeyForCourse = `course_details_${courseId}`; // Construct DB contentKey

      try {
        const response = await axios.get(`${API_BASE_URL}/api/public/content/${contentKeyForCourse}`);

        if (response.data && response.data.contentValue) {
          let rawData = response.data.contentValue;

          // If admin saved data as a JSON string (from textarea), parse it
          if (typeof rawData === 'string') {
            try {
              const parsedData = JSON.parse(rawData);
              setCourse(parsedData);
            } catch (parseError) {
              console.error(`Failed to parse JSON for course ${courseId}:`, parseError, "\nRaw data received:", rawData);
              setError(`Course data for "${courseId}" is improperly formatted. Please contact support or an admin.`);
              setCourse(null);
            }
          } else if (typeof rawData === 'object' && rawData !== null) {
            setCourse(rawData); // If backend already sends a parsed object
          } else {
            console.warn(`Unexpected data type received for course ${courseId}:`, typeof rawData);
            setError(`Unexpected data format for course "${courseId}".`);
            setCourse(null);
          }
        } else {
          console.warn(`No contentValue found for course key: ${contentKeyForCourse}`);
          setError(`Details for course ID "${courseId}" not found. It might not be published yet or the ID is incorrect.`);
          setCourse(null);
        }
      } catch (err) {
        console.error(`Failed to fetch course details for ${contentKeyForCourse}:`, err);
        if (err.response && err.response.status === 404) {
            setError(`Course with ID "${courseId}" not found. Please check the URL or go back.`);
        } else {
            setError(err.response?.data?.message || "Could not load course details. Please try again later.");
        }
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [courseId]); // Re-fetch if courseId changes

  // Modal handlers
  const openEnrollModal = () => setIsModalOpen(true);
  const closeEnrollModal = () => setIsModalOpen(false);

  // --- Loading State UI ---
  if (loading) {
    return (
      <>
        <Header />
        {/* You can use a more sophisticated loading spinner here */}
        <Container className="text-center" style={{ padding: '100px 0', minHeight: 'calc(100vh - 200px)' }}>
          <h2>Loading Course Details...</h2>
          <p>Please wait a moment.</p>
        </Container>
        <Footer />
      </>
    );
  }

  // --- Error or Course Not Found State UI ---
  if (error || !course) {
    return (
      <>
        <Header />
        <PagesHero name={error ? "Error" : "Course Not Found"} img="/assets/img/pic2-4.jpg" /> {/* Example error hero image */}
        <Container className="text-center" style={{ padding: '80px 0' }}>
          <h2>{error ? 'An Error Occurred' : 'Course Not Found'}</h2>
          <p>{error || `Sorry, we couldn't find details for the course ID "${courseId}". It might have been moved or the link is incorrect.`}</p>
          <Button as={Link} to="/all-courses-page" variant="primary" className="me-2">View All Courses</Button> {/* Link to a courses list page */}
          <Button as={Link} to="/" variant="outline-secondary">Go Back Home</Button>
        </Container>
        <Footer />
      </>
    );
  }

  // --- Render Course Details (if course data is available) ---

  // Helper to render course breakdown list items with icons
  const renderBreakdownItem = (item, index) => {
     const IconComponent = iconMap[item.icon] || FaBook; // Default to FaBook if icon is missing or not in map
     return (
        <li key={`breakdown-${index}-${item.label}`} className="course-breakdown-item">
            {IconComponent && <IconComponent className="item-icon" />}
            <span className="item-label">{item.label}</span>
            <span className="item-value">{item.value}</span>
        </li>
     );
  };

  // Prepare learning points for two columns, ensuring it's an array
  const learningPoints = Array.isArray(course.whatYouWillLearn) ? course.whatYouWillLearn : [];
  const midPointIndex = Math.ceil(learningPoints.length / 2);
  const learningPointsCol1 = learningPoints.slice(0, midPointIndex);
  const learningPointsCol2 = learningPoints.slice(midPointIndex);


    // VVVVVV BROCHURE URL AUR FILENAME SET KAREIN (FIXED) VVVVVV
  const brochureUrl = getCommonBrochureUrl();
  // Aap download filename ko bhi fix kar sakte hain
  const brochureFilename = "Dronum India Aviations Student Brochure.pdf"; // Ya jo bhi naam aap dena chahein
  // ^^^^^^ BROCHURE URL AUR FILENAME SET KAREIN (FIXED) ^^

  return (
    <>
      <Header />
      {/* Use course.heroImage if available, else a default */}
     <PagesHero
  name={course?.name || 'Course Details'}
  img="/assets/img/pic2-4.jpg"
/>

      <div className="course-detail-page-wrapper py-5">
        <Container>
          <Row>
            {/* --- Left Column (Main Course Information) --- */}
            <Col lg={8} className="course-detail-left mb-4 mb-lg-0">
              <h1 className="course-title mb-2">{course.name}</h1>

              {course.isDgcaApproved && (
                <div className="dgca-approved-badge mb-3">
                  <DefaultCertificateIcon className="dgca-icon me-2" />
                  <span>DGCA Approved Training Program</span>
                </div>
              )}

              <div className="rating-section mb-4">
                {renderStars(course.rating)}
                <span className="review-count ms-2">({course.reviewCount || 0} reviews)</span>
              </div>

              {Array.isArray(course.infoBoxes) && course.infoBoxes.length > 0 && (
                <Row className="info-boxes mb-5">
                  {course.infoBoxes.map((box, index) => (
                    <Col md={3} sm={6} key={`infobox-${index}-${box.label}`} className="info-box-item mb-3 mb-md-0">
                      <div className="info-box-label">{box.label}</div>
                      <div className="info-box-value">{box.value}</div>
                    </Col>
                  ))}
                </Row>
              )}

              {course.aboutCourse && (
                <div className="about-course mb-5">
                  <h3 className="section-title">About This Course</h3>
                  {/* Ensure course.aboutCourse is sanitized if it contains user-generated HTML */}
                  <div dangerouslySetInnerHTML={{ __html: course.aboutCourse }} />
                </div>
              )}

              {/* VVVVVV DOWNLOAD BROCHURE BUTTON SECTION VVVVVV */}
              {/* Button hamesha dikhega jab course data load ho gaya ho (error na ho) */}
              <div className="download-brochure-section my-4 text-center text-md-start">
                <Button
                  variant="outline-primary" // Ya 'primary', etc.
                  href={brochureUrl}
                  download={brochureFilename} // Browser ko download karne ke liye suggest karega
                  target="_blank" // Naye tab mein kholne ki koshish karega (download prefer hoga)
                  rel="noopener noreferrer" // Security best practice
                  className="download-brochure-btn"
                >
                  <FaFilePdf className="me-2" />
                  Download Our Brochure
                </Button>
              </div>
              {/* ^^^^^^ DOWNLOAD BROCHURE BUTTON SECTION ^^^^^^ */}

              {learningPoints.length > 0 && (
                <div className="what-you-learn mb-5 p-4 bg-light border rounded">
                  <h3 className="section-title mb-3">What You Will Learn</h3>
                  <Row>
                    <Col md={6}>
                      <ul className="learn-list list-unstyled">
                        {learningPointsCol1.map((point, index) => (
                          // Handles if point is a string or an object { point: "text" }
                          <li key={`learn1-${index}`}><FaCheck className="check-icon me-2" />{typeof point === 'string' ? point : point.point}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="learn-list list-unstyled">
                        {learningPointsCol2.map((point, index) => (
                          <li key={`learn2-${index}`}><FaCheck className="check-icon me-2" />{typeof point === 'string' ? point : point.point}</li>
                        ))}
                      </ul>
                    </Col>
                  </Row>
                </div>
              )}

              {Array.isArray(course.courseContent) && course.courseContent.length > 0 && (
                <div className="course-content-section">
                  <h3 className="section-title mb-3">Course Content</h3>
                  <Accordion defaultActiveKey="0" flush className="course-content-accordion">
                    {course.courseContent.map((module, index) => (
                      <Accordion.Item eventKey={index.toString()} key={`module-${index}-${module.title}`} className="course-content-module">
                        <Accordion.Header>
                          <span className='module-title fw-bold'>{module.title}</span>
                          {module.day && <span className='module-day ms-auto text-muted'>Day(s) {module.day}</span>}
                        </Accordion.Header>
                        <Accordion.Body>
                          {Array.isArray(module.details) ? (
                            <ul className="list-unstyled module-details ps-3">
                              {module.details.map((detail, i) => (
                                // Handles if detail is a string or an object { detail: "text" }
                                <li key={`detail-${i}`} className="mb-1">{typeof detail === 'string' ? detail : detail.detail}</li>
                              ))}
                            </ul>
                          ) : module.details ? ( // If details is a single string
                            <p>{module.details}</p>
                          ) : null}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              )}
            </Col>

            {/* --- Right Sidebar (Course Highlights, Enroll Button, Batches) --- */}
            <Col lg={4} className="course-detail-right">
              <div className="sidebar-content position-sticky" style={{ top: '20px' }}>
                <div className="image-section mb-4 shadow-sm border rounded overflow-hidden">
                  <img
                    src={getFullImageUrl(course.videoThumbnail) || '/assets/img/default-course-thumbnail.jpg'} // Fallback image
                    alt={`${course.name || 'Course'} Thumbnail`}
                    className="img-fluid course-image"
                  />
                </div>

                {Array.isArray(course.courseBreakdown) && course.courseBreakdown.length > 0 && (
                  <div className="course-breakdown-section mb-4 p-3 border rounded shadow-sm bg-white">
                    <h4 className="breakdown-title mb-3">Course Highlights</h4>
                    <ul className="list-unstyled mb-0">
                      {course.courseBreakdown.map(renderBreakdownItem)}
                    </ul>
                  </div>
                )}

                <div className="d-grid mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="enroll-button-main w-100"
                    onClick={openEnrollModal}
                    style={{ backgroundColor: 'rgb(3 27 94)' }} // Your custom style
                  >
                    Enroll Now
                  </Button>
                </div>

                {Array.isArray(course.upcomingBatches) && course.upcomingBatches.length > 0 && (
                  <div className="upcoming-batches-section">
                    <h4 className="upcoming-batches-title mb-3 text-center">Upcoming Batches</h4>
                    {course.upcomingBatches.map((batch, index) => (
                      <div key={`batch-${index}-${batch.day}`} className="batch-card mb-3 border rounded shadow-sm d-flex align-items-center overflow-hidden bg-white">
                        <div className="batch-date text-center text-white p-2 me-3" style={{ backgroundColor: '#ff6600' }}> {/* Your custom style */}
                          <span className="day d-block fs-5 fw-bold">{batch.day}</span>
                          <span className="month-year d-block small">{batch.monthYear}</span>
                        </div>
                        <div className="batch-info flex-grow-1 p-2">
                          <p className="batch-time mb-1 small text-muted"><FaClock className="me-1" /> {batch.time}</p>
                          <Button variant="outline-primary" size="sm" className="enroll-button-batch w-100" onClick={openEnrollModal}>
                            Enroll This Batch
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                 {Array.isArray(course.upcomingBatches) && course.upcomingBatches.length === 0 && (
                     <p className="text-center text-muted">No upcoming batches currently scheduled. Contact us for more info.</p>
                 )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />

      {/* EnrollForm Modal - Renders conditionally */}
      {isModalOpen && (
        <EnrollForm
          isOpen={isModalOpen}
          closeModal={closeEnrollModal}
          courseName={course.name || 'Selected Course'}
          courseId={course.id || courseId} // Pass course.id if available, else fallback to courseId from params
        />
      )}
    </>
  );
};

export default CourseDetailPage;