// src/pages/CourseDetailPage.js
import React, { useState }  from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
// Icons - Make sure you have 'react-icons' installed
import { FaStar, FaRegStar, FaPlay, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt, FaCheck, FaClock } from 'react-icons/fa';

// Import shared components
import Header from '../Header'; // Adjust path if needed
import Footer from '../Footer'; // Adjust path if needed
import "../../css/course.css";
import PagesHero from '../PagesHero';
import EnrollForm from "./EnrollForm";
import { allCourseDetails } from '../courseData';

const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5; // Check if half star needed
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="rating-star filled" />);
    }
    if (hasHalfStar) {
        // Using full star for simplicity, replace with FaStarHalfAlt if you prefer
         stars.push(<FaStar key="half" className="rating-star filled" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="rating-star empty" />);
    }
    return stars;
};

// Map icon names from data to actual React Icons components
const iconMap = { FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt };

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
     const IconComponent = iconMap[item.icon];
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
       <PagesHero name={course.name} img="/assets/img/2-2.jpg" />  
      {/* Removed PagesHero, title is now inside the main content */}

      {/* Main Content Area */}
      <div className="course-detail-page-wrapper py-5">
        <Container>
          <Row>
            {/* --- Left Column (Course Details) --- */}
            <Col lg={8} className="course-detail-left mb-4 mb-lg-0">
              {/* Top Section */}
              <h1 className="course-title mb-2">{course.name}</h1>
              <div className="rating-section mb-4">
                {renderStars(course.rating)}
                <span className="review-count ms-2">({course.reviewCount} reviews)</span>
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
                <p dangerouslySetInnerHTML={{ __html: course.aboutCourse }}></p>
              </div>

              {/* What Will You Learn? */}
              <div className="what-you-learn mb-5 p-4">
                <h3 className="section-title mb-3">What Will You Learn?</h3>
                <Row>
                    <Col md={6}>
                        <ul className="learn-list list-unstyled">
                            {learningPointsCol1.map((point, index) => (
                                <li key={`learn1-${index}`}><FaCheck className="check-icon me-2"/>{point}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col md={6}>
                        <ul className="learn-list list-unstyled">
                            {learningPointsCol2.map((point, index) => (
                                <li key={`learn2-${index}`}><FaCheck className="check-icon me-2"/>{point}</li>
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
                           <span className='module-title'>{module.title}</span>
                           <span className='module-day ms-auto'>Day {module.day}</span>
                        </Accordion.Header>
                       <Accordion.Body>
                         <ul className="list-unstyled module-details ps-3"> {/* Added padding */}
                           {module.details.map((detail, i) => (
                             <li key={i} className="mb-1">{detail}</li>
                           ))}
                         </ul>
                       </Accordion.Body>
                     </Accordion.Item>
                   ))}
                 </Accordion>
              </div>
            </Col> {/* End Left Column */}

            {/* --- Right Sidebar --- */}
            <Col lg={4} className="course-detail-right">
              {/* Wrapper for potential stickiness (requires extra CSS/JS) */}
              <div className="sidebar-content">
                 {/* Video Section */}
                 {/* <div className="video-section mb-4 shadow-sm">
                    <img src={course.videoThumbnail} alt={`${course.name} Preview`} className="img-fluid video-thumbnail"/>
                    <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="play-button" aria-label="Play Video">
                        <FaPlay />
                    </a>
                 </div> */}

                 {/* Course Breakdown */}
                 <img src={course.videoThumbnail} alt={`${course.name} Preview`} className="img-fluid video-thumbnail"/>
                 <div className="course-breakdown-section mb-4 p-3 border rounded shadow-sm">
                    <ul className="list-unstyled mb-0"> {/* Removed margin bottom */}
                        {course.courseBreakdown.map(renderBreakdownItem)}
                    </ul>
                 </div>

                 {/* Enroll Button */}
                 <div className="d-grid mb-4">
                    <Button
                        variant="primary"
                        size="lg"
                        className="enroll-button-main"
                        onClick={openEnrollModal} // <-- Call open function on click
                    >
                        Enroll Now
                    </Button>
                 </div>


                 {/* Upcoming Batches */}
                 <div className="upcoming-batches-section">
                    <h4 className="upcoming-batches-title mb-3">Upcoming Batches</h4> {/* Changed to h4 */}
                    {course.upcomingBatches.map((batch, index) => (
                        <div key={index} className="batch-card mb-3 border rounded shadow-sm d-flex align-items-center overflow-hidden">
                            <div className="batch-date me-3">
                                <span className="day">{batch.day}</span>
                                <span className="month-year">{batch.monthYear}</span>
                            </div>
                            <div className="batch-info flex-grow-1 p-2"> {/* Added padding */}
                                <h6 className="batch-title mb-1">{course.name}</h6> {/* Changed to h6 */}
                                <p className="batch-time mb-2"><FaClock className="me-1"/> {batch.time}</p>
                                <Button variant="primary" size="sm" className="enroll-button-batch"  onClick={openEnrollModal}>Enroll Now</Button>
                            </div>
                        </div>
                    ))}
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
          courseName={course.name} // Pass course name (optional, but useful)
          // Pass any other data the form might need, like courseId={course.id}
        />
      )}
      {/* --- End Conditional Rendering --- */}
    </>
  );
};

export default CourseDetailPage;