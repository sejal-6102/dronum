import React, { useState, useEffect } from 'react';


const NewsPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    {
      image: 'assets/img/pic3-4.jpg',
      title: 'DroneAcharaya Showcases Cutting-Edge Drone Technology at MSME Defence Expo 2024',
      date: 'February 15, 2020',
    },
    {
      image: 'assets/img/pic2-4.jpg',
      title: 'New Drone Training Programs Launched',
      date: 'March 10, 2024',
    },
  ];

  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show popup after 10 seconds

    return () => clearTimeout(popupTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems]);

  const handleClose = (event) => {
    event.stopPropagation(); // Prevents event bubbling
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="news-popup">
      <div className="popup-content">
      <h4>Latest News & Article</h4>
        <button className="close-button" onClick={handleClose}>&times;</button>

        <div className="slider-container">
          <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {newsItems.map((item, index) => (
              <div className="slide" key={index}>
                <div className="news-header">Latest News & Updates</div>
                <img src={item.image} alt={item.title} style={{ position: 'relative', zIndex: 0 }} />
                <div className="slide-content">
                  <div className="event-label">Events</div>
                  <h3>{item.title}</h3>
                  <p className="date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-dots">
          {newsItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        <button className="check-news-button">Check our News & Events &gt;</button>
      </div>
    </div>
  );
};

export default NewsPopup;
