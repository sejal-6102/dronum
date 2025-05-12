// frontend/src/components/GallerySlider.jsx
import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel"; // Library for the carousel
import "owl.carousel/dist/assets/owl.carousel.css"; // Default styles for Owl Carousel
import "owl.carousel/dist/assets/owl.theme.default.css"; // Default theme for Owl Carousel
import axios from 'axios'; // For making API requests

// Adjust this import path based on the actual location of GallerySlider.jsx
// relative to contentSchemas.js.
// This example assumes GallerySlider.jsx is in 'src/components/' and contentSchemas.js
// is in 'src/components/Pages/Admin/'.
import { API_BASE_URL } from './Pages/Admin/contentSchemas';

const GallerySlider = () => {
  // State variables
  const [sliderImages, setSliderImages] = useState([]); // Holds the array of image objects from API
  const [loading, setLoading] = useState(true); // Tracks if data is being loaded
  const [error, setError] = useState(null); // Stores any error during data fetching

  // Owl Carousel options from your original code
  const owlOptions = {
    loop: true,       // Enables continuous loop mode
    margin: 30,       // Margin between items
    items: 3,         // Default number of items to display
    nav: true,        // Shows navigation arrows (next/prev)
    dots: false,      // Hides pagination dots
    responsive: {     // Responsive settings for different screen sizes
      0: { items: 1 },   // 1 item on screens < 540px
      540: { items: 2 }, // 2 items on screens >= 540px
      990: { items: 3 }, // 3 items on screens >= 990px
    },
  };

  // useEffect hook to fetch images when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null);   // Clear any previous errors
      try {
        // API call to get gallery slider images
        const response = await axios.get(`${API_BASE_URL}/public/content/gallery_slider_images`);

        // Check if response contains data and contentValue is an array
        if (response.data && Array.isArray(response.data.contentValue)) {
          setSliderImages(response.data.contentValue); // Update state with fetched images
        } else {
          // Log a warning if data is not in expected format
          console.warn("GallerySlider: API response for gallery_slider_images was not an array or undefined:", response.data);
          setSliderImages([]); // Default to an empty array
        }
      } catch (err) {
        // Handle errors during API call
        console.error("GallerySlider: Failed to fetch slider images:", err);
        setError("Could not load gallery images. Please try again later.");
        setSliderImages([]); // Default to an empty array on error
      } finally {
        setLoading(false); // Set loading to false after fetching (success or failure)
      }
    };

    fetchImages(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs only once after initial render

  // Helper function to construct the full image URL
  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return ''; // Return empty string if path is not provided

    // If it's already an absolute URL (e.g., from cloud storage)
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
      return relativePath;
    }

    // Construct full URL for relative paths (e.g., /uploads/image.jpg)
    // API_BASE_URL might be 'http://localhost:5000/api'.
    // Static files are often served from the backend root, not under /api.
    const backendRootUrl = API_BASE_URL.replace('/api', ''); // Gives 'http://localhost:5000'
    return `${backendRootUrl}${relativePath}`;
  };

  // Conditional rendering for loading state
  if (loading) {
    return (
      <div className="gallery-slider-outer">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '50px 0', fontSize: '1.2em' }}>
            Loading Event Glimpse...
          </p>
        </div>
      </div>
    );
  }

  // Conditional rendering for error state
  if (error) {
    return (
      <div className="gallery-slider-outer">
        <div className="container">
          <p style={{ color: 'red', textAlign: 'center', padding: '50px 0', fontSize: '1.2em' }}>
            Error: {error}
          </p>
        </div>
      </div>
    );
  }

  // Main component render
  return (
    <>
      {/* Static introductory text part of the component */}
      <div className="main-services-outer" style={{ marginBottom: "0px" }}>
        <div className="container">
          <div className="main-services-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="item">
                  <div className="sub-heading">
                    <span className="line-left"></span>
                    <span className="text">Event Glimpse</span>
                  </div>
                  <h3>DRONUM & MARUT DRONE ACADEMY</h3>
                </div>
                <div className="item">
                  <p>Our team ensures seamless operations with top-notch guidance and customer service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Owl Carousel part: Render only if images are available */}
      {sliderImages && sliderImages.length > 0 ? (
        <div className="gallery-slider-outer animate__animated animate__zoomIn">
          <div className="container">
            <div className="gallery-slider-inner">
              {/*
                The 'key' prop on OwlCarousel is crucial.
                When 'sliderImages.length' (or another value derived from sliderImages) changes,
                React sees it as a new component instance and forces a re-mount,
                which helps OwlCarousel re-initialize correctly with the new items.
              */}
              <OwlCarousel
                className="owl-theme" // Standard Owl Carousel theme class
                {...owlOptions}        // Spread Owl Carousel options
                key={sliderImages.map(s => s.img).join(',')} // A more robust key that changes if image URLs change or order changes
                                                             // Using just sliderImages.length also works in many cases.
              >
                {sliderImages.map((slide, index) => (
                  // Each item in OwlCarousel should ideally be a div with class "item"
                  // and must have a unique "key" prop for React's rendering.
                  <div className="item" key={slide.img || index}> {/* Use a unique ID from slide if available, else index */}
                    <img
                      src={getFullImageUrl(slide.img)} // Get full image URL
                      alt={`Event Glimpse ${index + 1}`}
                      // Basic inline styling for consistent image display
                      style={{
                        width: '100%',
                        height: '250px', // Example fixed height, adjust as needed or use auto
                        objectFit: 'cover', // Ensures image covers the area without distortion
                        borderRadius: '8px' // Optional: rounded corners
                      }}
                    />
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      ) : (
        // Display this message if there are no images to show (and not in loading/error state)
        <div className="gallery-slider-outer">
          <div className="container">
            <p style={{ textAlign: 'center', padding: '50px 0', fontSize: '1.1em' }}>
              No images to display in the gallery at the moment.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySlider;