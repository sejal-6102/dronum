// import React, { useEffect, useRef, useState } from "react";
// import VideoItems from "./Items/VideoItems";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Video = () => {
//   const [nav1, setNav1] = useState(null);
//   const [nav2, setNav2] = useState(null);

//   let sliderRef1 = useRef(null);
//   let sliderRef2 = useRef(null);

//   useEffect(() => {
//     setNav1(sliderRef1);
//     setNav2(sliderRef2);
//   }, []);

//   const slide = [
//     {
//       img: "assets/img/pic4-3.jpg",
//       head:"Drone Inspection Before Flight- DRONUM Team"
//     },
//     {
//       img: "assets/img/pic3-3.jpg",
//       head:'Simulator Training Classes- Where Expertise Takes Flight '
//     },
//     {
//       img: "assets/img/pic2-4.jpg",
//       head:"Empowering the next generation of drone pilots-Dronum India Aviation"
//     },
//     {
//       img: "assets/img/pic1-4.jpg",
//       head:'State-of-the-art drone flying base'
//     },
//   ];
//   return (
//     <>
//       <div className="video-outer">
//         <div className="container">
//           <div className="video-inner animate__animated animate__zoomIn">
//             <div className="heading">
//               <div className="item">
//                 <div className="sub-heading">
//                   <span className="line-left"></span>
//                   <span className="text">Gallery</span>
//                 </div>
//                 <h3>Dronum at Glance

//                 </h3>
//               </div>
//               <div className="item">
//                 <p>
//                   There are many variations of passages of lorem Ipsum
//                   available, but the majority have suffered alteration in some
//                   form, by injected humor, or randomized words which don't look
//                   even slightly.
//                 </p>
//               </div>
//             </div>

//             <div className="content">
//               <div className="items">
//                 <div className="items-inner">
//                   <Slider
//                     asNavFor={nav2}
//                     ref={(slider) => (sliderRef1 = slider)}
//                     arrows={false}
//                   >
//                     {slide.map((i) => (
//                       <VideoItems value={i} />
//                     ))}
//                   </Slider>
//                 </div>
//               </div>
//               <div className="items">
//                 <div className="items-inner">
//                   <Slider
//                     asNavFor={nav1}
//                     ref={(slider) => (sliderRef2 = slider)}
//                     slidesToShow={4}
//                     swipeToSlide={true}
//                     focusOnSelect={true}
//                     arrows={false}
//                   >
//                     {slide.map((i) => (
//                       <VideoItems value={i} />
//                     ))}
//                   </Slider>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Video;

// frontend/src/components/Video.jsx
import React, { useEffect, useRef, useState } from "react";
import VideoItems from "./Items/VideoItems"; // Ensure this path is correct
import Slider from "react-slick"; // React Slick Carousel library
import "slick-carousel/slick/slick.css"; // Base styles for react-slick
import "slick-carousel/slick/slick-theme.css"; // Theme styles for react-slick
import axios from 'axios'; // For making API calls

// Adjust import path for API_BASE_URL based on Video.jsx's location
// relative to contentSchemas.js
// Example: If Video.jsx is in src/components/ and contentSchemas.js is in src/components/Pages/Admin/
import { API_BASE_URL } from '../components/Pages/Admin/contentSchemas';

const Video = () => {
  // State for react-slick slider navigation synchronization
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  // Refs for the two slick slider instances
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // State for dynamic content fetched from API
  const [slides, setSlides] = useState([]); // Holds slide data (image, heading)

  // Hardcoded text content (as per your requirement to only make slides dynamic)
  const hardcodedSubHeading = "Gallery";
  const hardcodedMainHeading = "Dronum at Glance";
  const hardcodedParagraph = "There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly.";

  // Fallback slides (optional, if API fails or returns no data)
  const defaultSlides = [
    { img: "assets/img/pic4-3.jpg", head:"Default: Drone Inspection" },
    { img: "assets/img/pic3-3.jpg", head:'Default: Simulator Training' },
  ];

  // Loading and error states for API calls
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to set up navigation between the two Slick sliders
  // This effect runs when the component mounts and when 'slides' state changes (to re-sync if sliders re-initialize)
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
    console.log("[Video.jsx] Slider refs set/updated for asNavFor.");
  }, [slides]); // Re-run if 'slides' changes, as sliders might re-render

  // useEffect to fetch video slide data from the API
  useEffect(() => {
    const fetchVideoSlides = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/public/content/video_section_slides_data`);
        console.log("[Video.jsx] API Response for video_section_slides_data:", response.data); // LOG 1

        if (response.data && Array.isArray(response.data.contentValue)) {
          if (response.data.contentValue.length > 0) {
            setSlides(response.data.contentValue);
            console.log("[Video.jsx] 'slides' state successfully set to API data:", response.data.contentValue); // LOG 2
          } else {
            console.warn("[Video.jsx] API returned an empty array for slides. Using default slides or showing 'no slides'.");
            // setSlides(defaultSlides); // Option 1: Fallback to default slides
            setSlides([]);            // Option 2: Show "no slides" message
          }
        } else {
          console.warn("Video.jsx: No slides data from API or data is not an array. Using default/empty.", response.data);
          // setSlides(defaultSlides); // Option 1
          setSlides([]);            // Option 2
        }
      } catch (err) {
        console.error("Video.jsx: Failed to fetch video slides:", err);
        setError("Could not load video slides. Please check connection or try again.");
        // setSlides(defaultSlides); // Option 1: Fallback on error
        setSlides([]);            // Option 2: Show error and no slides
      } finally {
        setLoading(false);
      }
    };

    fetchVideoSlides();
  }, []); // Empty dependency array: fetch data only once when component mounts

  // Helper function to get the backend root URL (for constructing image paths)
  const getBackendRootUrl = () => {
    // Assumes API_BASE_URL is 'http://localhost:5000/api'
    // and static image files are served from 'http://localhost:5000/uploads/...'
    return API_BASE_URL.replace('/api', '');
  };

  // Decide which slides to display (API fetched or default fallback)
  // If API fails or returns no slides, and you want to show defaults:
  // const currentSlidesToDisplay = (slides.length > 0) ? slides : defaultSlides;
  // If you only want to show API slides or "no slides" message:
  const currentSlidesToDisplay = slides;

  // --- UI for Loading State ---
  if (loading) {
    return (
      <div className="video-outer">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0', minHeight: '300px' }}>
          <p style={{ fontSize: '1.2em' }}>Loading Video Showcase...</p>
          {/* You can add a spinner component here */}
        </div>
      </div>
    );
  }

  // --- UI for Error State ---
  if (error) {
    return (
      <div className="video-outer">
        <div className="container" style={{ textAlign: 'center', padding: '60px 0', minHeight: '300px' }}>
          <p style={{ color: 'red', fontSize: '1.2em' }}>Error: {error}</p>
          <p>Default content might be shown below if available, or please try refreshing.</p>
          {/* Optionally, render default slides here if you want a fallback on error */}
        </div>
      </div>
    );
  }

  // Slick Slider settings
  const mainSliderSettings = {
    asNavFor: nav2, // Syncs this slider with the nav2 (thumbnail) slider
    arrows: false,  // Hides default arrows for the main slider
    fade: true,     // Enables fade transition between slides
    // lazyLoad: 'ondemand', // Optional: for performance with many images
  };

  const thumbnailSliderSettings = {
    asNavFor: nav1, // Syncs this slider with the nav1 (main) slider
    slidesToShow: Math.min(4, currentSlidesToDisplay.length > 0 ? currentSlidesToDisplay.length : 1), // Show up to 4 thumbnails
    swipeToSlide: true,     // Allows swiping directly to a slide
    focusOnSelect: true,    // Clicking a thumbnail focuses the main slider on it
    arrows: false,          // Hides default arrows for thumbnails (can be enabled)
    centerMode: currentSlidesToDisplay.length > 3, // Centers active thumbnail if many items
    infinite: currentSlidesToDisplay.length > 3,   // Enables infinite loop for thumbnails if many items
    // lazyLoad: 'ondemand', // Optional
  };

  // --- Main JSX Render ---
  return (
    <>
      <div className="video-outer">
        <div className="container">
          <div className="video-inner animate__animated animate__zoomIn">
            {/* Heading Section with Hardcoded Text */}
            <div className="heading">
              <div className="item">
                <div className="sub-heading">
                  <span className="line-left"></span>
                  <span className="text">{hardcodedSubHeading}</span>
                </div>
                <h3>{hardcodedMainHeading}</h3>
              </div>
              <div className="item">
                <p>{hardcodedParagraph}</p>
              </div>
            </div>

            {/* Content Section with Dynamic react-slick Sliders */}
            {/* Render sliders only if there are slides to display */}
            {currentSlidesToDisplay && currentSlidesToDisplay.length > 0 ? (
              <div className="content">
                {/* Main Slider */}
                <div className="items">
                  <div className="items-inner">
                    <Slider {...mainSliderSettings} ref={sliderRef1}>
                      {currentSlidesToDisplay.map((slideItem, index) => {
                        console.log(`[Video.jsx] Rendering MAIN SLIDER item ${index}:`, slideItem); // LOG 3
                        if (slideItem) {
                            console.log(`  => Main slideItem.img: ${slideItem.img}, slideItem.head: ${slideItem.head}`);
                        }
                        return (
                          // Use a more unique key if slideItem.img can be duplicated or null
                          <VideoItems key={`main-vid-${index}-${slideItem?.img || 'no-img'}`} value={slideItem} backendRootUrl={getBackendRootUrl()} />
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                {/* Thumbnail Slider */}
                <div className="items">
                  <div className="items-inner">
                    <Slider {...thumbnailSliderSettings} ref={sliderRef2}>
                      {currentSlidesToDisplay.map((slideItem, index) => {
                        console.log(`[Video.jsx] Rendering THUMBNAIL SLIDER item ${index}:`, slideItem); // LOG 4
                         if (slideItem) {
                            console.log(`  => Thumb slideItem.img: ${slideItem.img}`);
                        }
                        return (
                          <VideoItems key={`thumb-vid-${index}-${slideItem?.img || 'no-img'}`} value={slideItem} backendRootUrl={getBackendRootUrl()} isThumbnail={true} />
                        );
                      })}
                    </Slider>
                  </div>
                </div>
              </div>
            ) : (
              // Show message if no slides are available (and not loading/error)
              <p style={{ textAlign: 'center', padding: '50px 0', fontSize: '1.1em' }}>
                No video slides to display at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
