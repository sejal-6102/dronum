// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const NewsPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const newsItems = [
//     {
//       image: 'assets/img/pic3-4.jpg',
//       title: 'DroneAcharaya Showcases Cutting-Edge Drone Technology at MSME Defence Expo 2024',
//       date: 'February 15, 2024',
//     },
//     {
//       image: 'assets/img/pic2-4.jpg',
//       title: 'New Drone Training Programs Launched',
//       date: 'March 10, 2024',
//     },
//   ];

//   useEffect(() => {
//     // Show popup after 10 seconds
//     const popupTimeout = setTimeout(() => {
//       setShowPopup(true);
//     }, 10000);

//     return () => clearTimeout(popupTimeout);
//   }, []);

//   useEffect(() => {
//     // Auto-slide every 5 seconds
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [newsItems.length]);

//   const handleClose = (event) => {
//     event.stopPropagation();
//     setShowPopup(false);
//   };

//   if (!showPopup) {
//     return null;
//   }

//   return (
//     <div id="news-popup-wrapper">
//       <div className="popup-content">
//         <h4>Latest News & Articles</h4>
//         <button className="close-button" onClick={handleClose}   style={{ position: 'absolute', top: '7px', right: '10px',left:'160px' }}>&times;</button>

//         {/* Slider */}
//         <div className="slider-container">
//           <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${newsItems.length * 100}%` }}>
//             {newsItems.map((item, index) => (
//               <div className="slide" key={index} style={{ width: `100%` }}>
//                 <div className="news-header">Latest News & Updates</div>
//                 <img src={item.image} alt={item.title} />
//                 <div className="slide-content">
//                   <div className="event-label">Events</div>
//                   <h3>{item.title}</h3>
//                   <p className="date">{item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="slider-dots">
//           {newsItems.map((_, index) => (
//             <span
//               key={index}
//               className={`dot ${currentSlide === index ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//             ></span>
//           ))}
//         </div>

//         {/* Button */}
//         <Link to="/blog-grid" className="check-news-button">
//   Check our News & Events &gt;
// </Link>
//       </div>
//     </div>
//   );
// };

// export default NewsPopup;

// frontend/src/components/NewsPopup.jsx (Ya jahaan bhi yeh file hai)
// frontend/src/components/NewsPopup.jsx
// frontend/src/components/NewsPopup.jsx
// frontend/src/components/NewsPopup.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Adjust import path for API_BASE_URL
import { API_BASE_URL } from './Pages/Admin/contentSchemas';

const NewsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true); setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/public/content/news_popup_items`);
        if (response.data && Array.isArray(response.data.contentValue)) {
          setNewsItems(response.data.contentValue);
        } else {
          setNewsItems([]);
        }
      } catch (err) {
        setError("Could not load news items.");
        setNewsItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);

  useEffect(() => {
    let popupTimeout;
    if (!loading && !error && newsItems.length > 0) {
      popupTimeout = setTimeout(() => { setShowPopup(true); }, 10000);
    }
    return () => clearTimeout(popupTimeout);
  }, [newsItems, loading, error]);

  useEffect(() => {
    let interval;
    if (showPopup && newsItems.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [showPopup, newsItems.length]);

  const handleClose = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  };

  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) return relativePath;
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    return `${backendRootUrl}${relativePath}`;
  };

  if (!showPopup || loading || error || newsItems.length === 0) {
    return null;
  }

  return (
    <div id="news-popup-wrapper"> {/* Styled by your external CSS */}
      <div className="popup-content"> {/* Styled by your external CSS */}
        <h4>Latest News & Articles</h4>
        <button
          className="close-button" // Styled by your external CSS
          onClick={handleClose}
          // Your original inline style for close button positioning
          style={{ position: 'absolute', top: '7px', right: '10px', left: '160px' }}
        >
          ×
        </button>

        {/* Slider */}
        <div
          className="slider-container" // Styled by your external CSS, ensure 'overflow: hidden;'
          style={{ overflow: 'hidden', width: '100%' }} // CRITICAL: overflow:hidden for slider mechanism
                                                        // width: '100%' can be in CSS too if preferred
        >
          <div
            className="slider" // Styled by your external CSS, ensure 'display: flex;'
            style={{
              display: 'flex', // CRITICAL: for horizontal layout of slides
              width: `${newsItems.length * 100}%`, // CRITICAL: Total width for all slides
              transform: `translateX(-${currentSlide * (100 / newsItems.length)}%)`, // CRITICAL: Moves the strip
              transition: 'transform 0.5s ease-in-out', // Optional: for smooth sliding animation (can be in CSS)
            }}
          >
            {newsItems.map((item, index) => (
              <div
                className="slide" // Styled by your external CSS
                key={item.title || index}
                style={{
                  width: `${100 / newsItems.length}%`, // CRITICAL: Each slide takes up its portion
                  flexShrink: 0, // CRITICAL: Prevents slides from shrinking
                  boxSizing: 'border-box', // Recommended
                }}
              >
                {/* Content of each slide as per your original structure */}
                <div className="news-header">Latest News & Updates</div>
                {item.image && (
                  <img src={getFullImageUrl(item.image)} alt={item.title} />
                )}
                <div className="slide-content">
                  <div className="event-label">Events</div>
                  <h3>{item.title}</h3>
                  <p className="date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots - Render only if more than one item */}
        {newsItems.length > 1 && (
          <div className="slider-dots"> {/* Styled by your external CSS */}
            {newsItems.map((_, index) => (
              <span
                key={`dot-${index}`}
                className={`dot ${currentSlide === index ? 'active' : ''}`} // .dot and .dot.active styled by your CSS
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        )}

        {/* Button */}
        <Link to="/blog-grid" className="check-news-button"> {/* Styled by your external CSS */}
          Check our News & Events >
        </Link>
      </div>
    </div>
  );
};

export default NewsPopup;