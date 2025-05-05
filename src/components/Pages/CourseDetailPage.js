// src/pages/CourseDetailPage.js
import React, { useState }  from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
// Icons - सुनिश्चित करें कि आप 'react-icons' इंस्टॉल किए हैं और सभी आवश्यक आइकॉन आयात करें
import { FaStar, FaRegStar, FaPlay, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt, FaCheck, FaClock, FaCertificate as DefaultCertificateIcon, FaUserShield, FaMapMarkedAlt, FaRulerCombined, FaCogs, FaBroadcastTower, FaPlaneDeparture, FaProjectDiagram, FaBook, FaPaperPlane, FaTractor, FaSprayCan, FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList, FaFileSignature, FaShieldAlt } from 'react-icons/fa'; // Import all potentially used icons

// Import shared components
import Header from '../Header'; // Adjust path if needed
import Footer from '../Footer'; // Adjust path if needed
import "../../css/course.css";
import PagesHero from '../PagesHero';
import EnrollForm from "./EnrollForm";
import { allCourseDetails } from '../courseData'; // Import the updated data

// आइकन नामों को वास्तविक React Icons कंपोनेंट्स से मैप करें
// NOTE: Ensure iconMap includes ALL icons used in courseData.js 'courseBreakdown'
const iconMap = {
  FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt,
  FaPlaneDeparture, FaMapMarkedAlt, FaProjectDiagram, FaBook, FaPaperPlane,
  FaCertificate: DefaultCertificateIcon, // Use the imported FaCertificate
  FaTractor, FaSprayCan, FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher,
  FaClipboardList, FaFileSignature, FaShieldAlt, FaUserShield, FaRulerCombined,
  FaCogs, FaBroadcastTower,
  FaEye: FaMapMarkedAlt, // Fallback icon if FaEye isn't available
  FaExclamationTriangle: FaClipboardList // Fallback icon
};


const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    // const hasHalfStar = rating % 1 >= 0.5; // No half stars needed if all are 5
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="rating-star filled" />);
    }
    // Removed half-star logic
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="rating-star empty" />);
    }
    return stars;
};


const CourseDetailPage = () => {
  const { courseId } = useParams();
  const course = allCourseDetails[courseId];
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- Loading / Not Found State ---
  if (!course) {
    return (
      <>
        <Header />
        <Container className="text-center" style={{ padding: '80px 0' }}>
          <h2>Course Not Found</h2>
          <p>Sorry, we couldn't find details for the course ID "{courseId}".</p>
          <Button as={Link} to="/" variant="primary">Go Back Home</Button>
        </Container>
        <Footer />
      </>
    );
  }

  // Helper to render breakdown list items with icons
  const renderBreakdownItem = (item, index) => {
     // Use the icon name from data, default to a generic icon if not found
     const IconComponent = iconMap[item.icon] || FaBook; // Default to FaBook if icon missing
     return (
        <li key={index} className="course-breakdown-item">
            {IconComponent && <IconComponent className="item-icon" />}
            <span className="item-label">{item.label}</span>
            <span className="item-value">{item.value}</span>
        </li>
     );
  }

  // Split learning points into two columns
   const midIndex = Math.ceil(course.whatYouWillLearn.length / 2);
   const learningPointsCol1 = course.whatYouWillLearn.slice(0, midIndex);
   const learningPointsCol2 = course.whatYouWillLearn.slice(midIndex);


   const openEnrollModal = () => {
    setIsModalOpen(true); // Set state to true to open
  };

  const closeEnrollModal = () => {
    setIsModalOpen(false); // Set state to false to close
  };


  return (
    <>
      <Header />
       {/* Use a generic hero or pass a specific image if needed */}
       <PagesHero name={course.name} img="/assets/img/pic3-3.jpg" />

      {/* Main Content Area */}
      <div className="course-detail-page-wrapper py-5">
        <Container>
          <Row>
            {/* --- Left Column (Course Details) --- */}
            <Col lg={8} className="course-detail-left mb-4 mb-lg-0">
              {/* Top Section */}
              <h1 className="course-title mb-2">{course.name}</h1>

              {/* ***** DGCA Approved Badge ***** */}
              {course.isDgcaApproved && (
                <div className="dgca-approved-badge mb-3">
                  <DefaultCertificateIcon className="dgca-icon me-2" /> {/* Using the imported FaCertificate */}
                  <span>DGCA Approved Training Program</span>
                </div>
              )}
              {/* ***** End DGCA Badge ***** */}


              <div className="rating-section mb-4">
                {renderStars(course.rating)} {/* Should now always show 5 stars */}
                <span className="review-count ms-2">({course.reviewCount} reviews)</span> {/* Shows random count */}
              </div>

              {/* Info Boxes */}
              <Row className="info-boxes mb-5">
                {course.infoBoxes.map((box, index) => (
                  <Col md={3} sm={6} key={index} className="info-box-item mb-3 mb-md-0">
                    <div className="info-box-label">{box.label}</div>
                    <div className="info-box-value">{box.value}</div>
                  </Col>
                ))}
              </Row>

              {/* About Course */}
              <div className="about-course mb-5">
                <h3 className="section-title">About Course</h3>
                {/* Using dangerouslySetInnerHTML can be risky if HTML isn't controlled. Consider safer alternatives if needed. */}
                <p dangerouslySetInnerHTML={{ __html: course.aboutCourse }}></p>
              </div>

              {/* What Will You Learn? */}
              <div className="what-you-learn mb-5 p-4 bg-light border rounded"> 
                <h3 className="section-title mb-3">What Will You Learn?</h3>
                <Row>
                    <Col md={6}>
                        <ul className="learn-list list-unstyled">
                            {learningPointsCol1.map((point, index) => (
                                <li key={`learn1-${index}`}><FaCheck className="check-icon me-2 "/>{point}</li> 
                            ))}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <ul className="learn-list list-unstyled">
                            {learningPointsCol2.map((point, index) => (
                                <li key={`learn2-${index}`}><FaCheck className="check-icon me-2 "/>{point}</li> 
                            ))}
                        </ul>
                    </Col>
                </Row>
              </div>

              {/* Course Content Accordion */}
              <div className="course-content-section">
                 <h3 className="section-title mb-3">Course Content</h3>
                 <Accordion defaultActiveKey="0" flush className="course-content-accordion">
                   {course.courseContent.map((module, index) => (
                     <Accordion.Item eventKey={index.toString()} key={index} className="course-content-module">
                       <Accordion.Header>
                           <span className='module-title fw-bold'>{module.title}</span> {/* Made title bold */}
                           {/* Show day/range only if available */}
                           {module.day && <span className='module-day ms-auto text-muted'>Day(s) {module.day}</span>}
                        </Accordion.Header>
                       <Accordion.Body>
                         {/* Check if details is an array before mapping */}
                         {Array.isArray(module.details) ? (
                            <ul className="list-unstyled module-details ps-3">
                              {module.details.map((detail, i) => (
                                <li key={i} className="mb-1">{detail}</li>
                              ))}
                            </ul>
                         ) : (
                            <p>{module.details}</p> // Handle cases where details might be a single string
                         )}
                       </Accordion.Body>
                     </Accordion.Item>
                   ))}
                 </Accordion>
              </div>
            </Col> {/* End Left Column */}

            {/* --- Right Sidebar --- */}
            <Col lg={4} className="course-detail-right">
              {/* Wrapper for potential stickiness */}
              <div className="sidebar-content position-sticky" style={{ top: '20px' }}> {/* Basic stickiness */}
                 {/* Image Section (Replaces Video) */}
                 <div className="image-section mb-4 shadow-sm border rounded overflow-hidden">
                    <img src={course.videoThumbnail || '/assets/img/default-course.jpg'} // Use placeholder if thumbnail is null
                         alt={`${course.name} representation`}
                         className="img-fluid course-image"/>
                 </div>


                 {/* Course Breakdown */}
                 <div className="course-breakdown-section mb-4 p-3 border rounded shadow-sm bg-white">
                    <h4 className="breakdown-title mb-3">Course Highlights</h4> {/* Added title */}
                    <ul className="list-unstyled mb-0">
                        {course.courseBreakdown.map(renderBreakdownItem)}
                    </ul>
                 </div>

                 {/* Enroll Button */}
                 <div className="d-grid mb-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="enroll-button-main w-100" // Ensure full width
                        onClick={openEnrollModal}
                        style={{backgroundColor:'rgb(3 27 94)'}}
                    >
                        Enroll Now
                    </Button>
                 </div>


                 {/* Upcoming Batches */}
                 <div className="upcoming-batches-section" >
                    <h4 className="upcoming-batches-title mb-3 text-center">Upcoming Batches</h4> {/* Centered title */}
                    {course.upcomingBatches.length > 0 ? (
                      course.upcomingBatches.map((batch, index) => (
                        <div key={index} className="batch-card mb-3 border rounded shadow-sm d-flex align-items-center overflow-hidden bg-white" style={{backgroundColor:'#ff6600'}}>>
                            <div className="batch-date text-center text-white p-2 me-3" style={{backgroundColor:'#ff6600'}}> {/* Styling date part */}
                                <span className="day d-block fs-5 fw-bold" style={{backgroundColor:'#ff6600'}}>>{batch.day}</span>
                                <span className="month-year d-block small" style={{backgroundColor:'#ff6600'}}>>{batch.monthYear}</span>
                            </div>
                            <div className="batch-info flex-grow-1 p-2">
                                {/* Removed redundant title */}
                                <p className="batch-time mb-1 small text-muted"><FaClock className="me-1"/> {batch.time}</p>
                                <Button variant="outline-primary" size="sm" className="enroll-button-batch w-100" onClick={openEnrollModal} >Enroll This Batch</Button>
                            </div>
                        </div>
                      ))
                    ) : (
                        <p className="text-center text-muted">No upcoming batches scheduled currently. Please check back later or contact us.</p>
                    )}
                 </div>
              </div>
            </Col> {/* End Right Column */}
          </Row>
        </Container>
      </div>
      <Footer />

        {/* --- Conditionally Render EnrollForm --- */}
        {isModalOpen && (
        <EnrollForm
          isOpen={isModalOpen} // Pass state to the form
          closeModal={closeEnrollModal} // Pass close function to the form
          courseName={course.name} // Pass course name
          courseId={course.id} // Pass course id
        />
      )}
      {/* --- End Conditional Rendering --- */}
    </>
  );
};

export default CourseDetailPage;