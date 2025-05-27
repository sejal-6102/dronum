// src/components/Pages/CourseDetailPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import axios from 'axios';

import {
  FaStar, FaRegStar, FaPlay, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping,
  FaFileAlt, FaSyncAlt, FaCheck, FaClock, FaCertificate as DefaultCertificateIcon,
  FaUserShield, FaMapMarkedAlt, FaRulerCombined, FaCogs, FaBroadcastTower,
  FaPlaneDeparture, FaProjectDiagram, FaBook, FaPaperPlane, FaTractor, FaSprayCan,
  FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList,
  FaFileSignature, FaShieldAlt, FaFilePdf, FaSpinner // Added FaSpinner
} from 'react-icons/fa';

import Header from '../Header';
import Footer from '../Footer';
import PagesHero from '../PagesHero';
import EnrollForm from "./EnrollForm";
import { API_BASE_URL } from './Admin/contentSchemas';
import "../../css/course.css";

// Icon mapping - Ensure admin uses these names for 'icon' field in courseBreakdown
const iconMap = {
  FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt,
  FaPlaneDeparture, FaMapMarkedAlt, FaProjectDiagram, FaBook, FaPaperPlane,
  FaCertificate: DefaultCertificateIcon, FaTractor, FaSprayCan, FaWrench, 
  FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList, FaFileSignature, 
  FaShieldAlt, FaUserShield, FaRulerCombined, FaCogs, FaBroadcastTower, FaClock,
  // Add more icons here if needed, or ensure admin uses exact names from react-icons/fa
};

const renderStars = (rating = 0) => {
    const stars = [];
    const validRating = Math.max(0, Math.min(5, Number(rating) || 0)); // Ensure rating is a number between 0-5
    const fullStars = Math.floor(validRating);
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-${i}`} className="rating-star filled" />);
    }
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="rating-star empty" />);
    }
    return stars;
};

const CourseDetailPage = () => {
  const { courseId } = useParams(); // This will be the unique ID/slug like 'small-rpc-agri-10day'
  const navigate = useNavigate();

  const [allCoursesData, setAllCoursesData] = useState(null); // Holds the array of all courses
  const [course, setCourse] = useState(null); // Holds the specific course object for this page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const DEFAULT_HERO_IMAGE = "/assets/img/pic2-4.jpg";

  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
      return relativePath;
    }
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    return `${backendRootUrl}${relativePath.startsWith('/') ? '' : '/'}${relativePath}`;
  };

  const getCommonBrochureUrl = () => {
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    const brochurePublicPath = "/uploads/brochures/Dronum India Aviations Student Brochure.pdf";
    return `${backendRootUrl}${brochurePublicPath}`;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      setError(null);
      setCourse(null); // Reset course on courseId change
      
      try {
        // Fetch all courses if not already fetched or if forcing a refresh
        // For simplicity, fetching every time. Cache if this becomes a performance issue.
        const response = await axios.get(`${API_BASE_URL}/api/public/content/all_courses_data`);
        
        if (response.data && response.data.contentValue) {
          let coursesArray = response.data.contentValue;
          if (typeof coursesArray === 'string') {
            try {
              coursesArray = JSON.parse(coursesArray);
            } catch (parseError) {
              console.error("Failed to parse all_courses_data:", parseError);
              setError("Course data is improperly formatted.");
              setLoading(false);
              return;
            }
          }

          if (Array.isArray(coursesArray)) {
            setAllCoursesData(coursesArray); // Store all courses
            const foundCourse = coursesArray.find(c => c.id === courseId);
            if (foundCourse) {
              setCourse(foundCourse);
            } else {
              setError(`Course with ID "${courseId}" not found.`);
            }
          } else {
            setError("Course data format is invalid (not an array).");
          }
        } else {
          setError("No courses data found from the server.");
        }
      } catch (err) {
        console.error(`Failed to fetch courses:`, err);
        setError(err.response?.data?.message || "Could not load course details.");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourses();
    } else {
      setError("No Course ID provided in URL.");
      setLoading(false);
    }
  }, [courseId]); // Re-fetch if courseId changes

  const openEnrollModal = () => setIsModalOpen(true);
  const closeEnrollModal = () => setIsModalOpen(false);
  
  const pageHeroImage = useMemo(() => 
    getFullImageUrl(course?.heroImage) || DEFAULT_HERO_IMAGE, 
    [course]
  );

  const courseVideoThumbnail = useMemo(() => 
    getFullImageUrl(course?.videoThumbnail) || '/assets/img/default-course-thumbnail.jpg',
    [course]
  );
  
  // Memoize learning points to avoid re-computation
  const learningPoints = useMemo(() => 
    (Array.isArray(course?.whatYouWillLearn) ? course.whatYouWillLearn : []).map(item => item.point || item),
    [course]
  );

  const midPointIndex = useMemo(() => Math.ceil(learningPoints.length / 2), [learningPoints]);
  const learningPointsCol1 = useMemo(() => learningPoints.slice(0, midPointIndex), [learningPoints, midPointIndex]);
  const learningPointsCol2 = useMemo(() => learningPoints.slice(midPointIndex), [learningPoints, midPointIndex]);


  if (loading) {
    return (
      <>
        <Header />
        <Container className="text-center" style={{ padding: '100px 0', minHeight: 'calc(100vh - 200px)' }}>
          <h2><FaSpinner className="fa-spin me-2" />Loading Course Details...</h2>
          <p>Please wait a moment.</p>
        </Container>
        <Footer />
      </>
    );
  }

  if (error || !course) {
    return (
      <>
        <Header />
        <PagesHero name={error ? "Error" : "Course Not Found"} img={DEFAULT_HERO_IMAGE} />
        <Container className="text-center" style={{ padding: '80px 0', minHeight: 'calc(100vh - 400px)' }}>
          <h2>{error ? 'An Error Occurred' : 'Course Not Found'}</h2>
          <p>{error || `Sorry, we couldn't find details for the course ID "${courseId}". It might have been moved, the ID is incorrect, or the course data is missing.`}</p>
          <Button as={Link} to="/all-courses-page" variant="primary" className="me-2">View All Courses</Button>
          <Button as={Link} to="/" variant="outline-secondary">Go Back Home</Button>
        </Container>
        <Footer />
      </>
    );
  }

  // --- Render Course Details (if course data is available) ---
  const renderBreakdownItem = (item, index) => {
     const IconComponent = iconMap[item.icon] || FaBook; // Default icon
     return (
        <li key={`breakdown-${index}-${item.label}`} className="course-breakdown-item">
            {IconComponent && <IconComponent className="item-icon me-2" />}
            <span className="item-label">{item.label}: </span>
            <span className="item-value fw-bold">{item.value}</span>
        </li>
     );
  };

  const brochureUrl = getCommonBrochureUrl(); // Assuming common brochure for now
  const brochureFilename = "Dronum India Aviations Student Brochure.pdf";
  // If you implement per-course brochures:
  // const brochureUrl = course.specificBrochureUrl ? getFullImageUrl(course.specificBrochureUrl) : getCommonBrochureUrl();
  // const brochureFilename = course.specificBrochureFilename || "Course_Brochure.pdf";

  return (
    <>
      <Header />
      <PagesHero
        name={course.name || 'Course Details'}
        img={pageHeroImage}
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
                    <Col md={4} sm={6} key={`infobox-${index}-${box.label}`} className="info-box-item mb-3">
                      <div className="info-box-card p-3 border rounded h-100">
                        <div className="info-box-label fw-bold">{box.label}</div>
                        <div className="info-box-value">{box.value}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              )}

              {course.aboutCourse && (
                <div className="about-course mb-5">
                  <h3 className="section-title">About This Course</h3>
                  <div dangerouslySetInnerHTML={{ __html: course.aboutCourse }} />
                </div>
              )}
              
              <div className="download-brochure-section my-4 text-center text-md-start">
                <Button
                  variant="outline-primary"
                  href={brochureUrl}
                  download={brochureFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-brochure-btn"
                >
                  <FaFilePdf className="me-2" />
                  Download Our Brochure
                </Button>
              </div>

              {learningPoints.length > 0 && (
                <div className="what-you-learn mb-5 p-4 bg-light border rounded">
                  <h3 className="section-title mb-3">What You Will Learn</h3>
                  <Row>
                    <Col md={6}>
                      <ul className="learn-list list-unstyled">
                        {learningPointsCol1.map((pointText, index) => (
                          <li key={`learn1-${index}`}><FaCheck className="check-icon me-2 text-success" />{pointText}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul className="learn-list list-unstyled">
                        {learningPointsCol2.map((pointText, index) => (
                          <li key={`learn2-${index}`}><FaCheck className="check-icon me-2 text-success" />{pointText}</li>
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
                          {module.day && <span className='module-day ms-auto text-muted small'>Day(s): {module.day}</span>}
                        </Accordion.Header>
                        <Accordion.Body>
                          {Array.isArray(module.details) && module.details.length > 0 ? (
                            <ul className="list-unstyled module-details ps-3">
                              {module.details.map((item, i) => (
                                <li key={`detail-${index}-${i}`} className="mb-1">{item.detail}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-muted">Details for this module will be available soon.</p>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              )}
            </Col>

            {/* --- Right Sidebar --- */}
            <Col lg={4} className="course-detail-right">
              <div className="sidebar-content position-sticky" style={{ top: '90px' }}> {/* Adjusted top for sticky */}
                <div className="image-section mb-4 shadow-sm border rounded overflow-hidden">
                  <img
                    src={courseVideoThumbnail}
                    alt={`${course.name || 'Course'} Thumbnail`}
                    className="img-fluid course-image"
                  />
                  {/* You could add a play button overlay here if it's a video link */}
                </div>

                {Array.isArray(course.courseBreakdown) && course.courseBreakdown.length > 0 && (
                  <div className="course-breakdown-section mb-4 p-3 border rounded shadow-sm bg-white">
                    <h4 className="breakdown-title mb-3 border-bottom pb-2">Course Highlights</h4>
                    <ul className="list-unstyled mb-0">
                      {course.courseBreakdown.map(renderBreakdownItem)}
                    </ul>
                  </div>
                )}

                <div className="d-grid mb-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="enroll-button-main w-100 py-3" // Added padding
                    onClick={openEnrollModal}
                    style={{ backgroundColor: 'rgb(3 27 94)', border: 'none' }}
                  >
                    Enroll Now
                  </Button>
                </div>

                {Array.isArray(course.upcomingBatches) && course.upcomingBatches.length > 0 ? (
                  <div className="upcoming-batches-section p-3 border rounded shadow-sm bg-white">
                    <h4 className="upcoming-batches-title mb-3 text-center border-bottom pb-2">Upcoming Batches</h4>
                    {course.upcomingBatches.map((batch, index) => (
                      <div key={`batch-${index}-${batch.day}`} className="batch-card mb-3 border rounded shadow-sm d-flex align-items-center overflow-hidden bg-light">
                        <div className="batch-date text-center text-white p-3 me-3" style={{ backgroundColor: '#ff6600', minWidth: '80px' }}>
                          <span className="day d-block fs-4 fw-bold">{batch.day}</span>
                          <span className="month-year d-block small">{batch.monthYear}</span>
                        </div>
                        <div className="batch-info flex-grow-1 p-2">
                          <p className="batch-time mb-1 small text-muted"><FaClock className="me-1" /> {batch.time}</p>
                          <Button variant="outline-primary" size="sm" className="enroll-button-batch w-100 mt-1" onClick={openEnrollModal}>
                            Enroll This Batch
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                     <div className="upcoming-batches-section p-3 border rounded shadow-sm bg-white text-center">
                        <h4 className="upcoming-batches-title mb-2">Upcoming Batches</h4>
                        <p className="text-muted mb-0">No upcoming batches currently scheduled. Please contact us for more information.</p>
                     </div>
                 )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />

      {isModalOpen && course && (
        <EnrollForm
          isOpen={isModalOpen}
          closeModal={closeEnrollModal}
          courseName={course.name || 'Selected Course'}
          courseId={course.id || courseId} 
        />
      )}
    </>
  );
};

export default CourseDetailPage;