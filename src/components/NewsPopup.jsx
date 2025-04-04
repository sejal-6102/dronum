import React, { useState, useEffect } from 'react';

const NewsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      image: 'assets/img/pic3-4.jpg',
      title: 'DroneAcharaya Showcases Cutting-Edge Drone Technology at MSME Defence Expo 2024',
      date: 'February 15, 2024',
    },
    {
      image: 'assets/img/pic2-4.jpg',
      title: 'New Drone Training Programs Launched',
      date: 'March 10, 2024',
    },
  ];

  useEffect(() => {
    // Show popup after 10 seconds
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(popupTimeout);
  }, []);

  useEffect(() => {
    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newsItems.length]);

  const handleClose = (event) => {
    event.stopPropagation();
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div id="news-popup-wrapper">
      <div className="popup-content">
        <h4>Latest News & Articles</h4>
        <button className="close-button" onClick={handleClose}>&times;</button>

        {/* Slider */}
        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${newsItems.length * 100}%` }}>
            {newsItems.map((item, index) => (
              <div className="slide" key={index} style={{ width: `100%` }}>
                <div className="news-header">Latest News & Updates</div>
                <img src={item.image} alt={item.title} />
                <div className="slide-content">
                  <div className="event-label">Events</div>
                  <h3>{item.title}</h3>
                  <p className="date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="slider-dots">
          {newsItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        {/* Button */}
        <button className="check-news-button">Check our News & Events &gt;</button>
      </div>
    </div>
  );
};

export default NewsPopup;
