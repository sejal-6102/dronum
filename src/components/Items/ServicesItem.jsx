// Items/ServicesItem.js
import React from "react";
import { FaClock, FaMapMarkerAlt, FaStar, FaCertificate } from 'react-icons/fa';

// --- CSS कोड स्ट्रिंग ---
// इसमें अपडेटेड ग्रिड लेआउट ब्रेकपॉइंट है
const styles = `
  .service-grid {
    display: grid;
    grid-template-columns: 1fr; /* डिफ़ॉल्ट: मोबाइल पर 1 कॉलम */
    gap: 30px;
    padding: 20px 0;
  }

  /* मध्यम स्क्रीन (टैबलेट) - 2 कॉलम */
  @media (min-width: 768px) {
    .service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* बड़ी स्क्रीन (लैपटॉप/डेस्कटॉप) - 3 कॉलम */
  /* --- ब्रेकपॉइंट को 992px से 1200px किया गया --- */
  @media (min-width: 1200px) {
    .service-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .service-card-hover-container {
    box-sizing: border-box;
    height: 100%;
  }

  .item-inner-hover-effect {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    background-color: #f8f9fa;
    height: 100%;
    display: block;
    border: 1px solid #eee;
     transition: box-shadow 0.3s ease;
  }

   .item-inner-hover-effect:hover {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }

  .service-item-image-hover {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 8px 8px 0 0;
  }

  .course-label-on-image-top {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 60%, transparent 100%);
      color: white;
      padding: 10px 15px;
      box-sizing: border-box;
      font-size: 0.95rem;
      font-weight: 600;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      z-index: 1;
      border-radius: 0;
  }

  .details-content-slide-up {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    padding: 15px 20px;
    box-sizing: border-box;
    text-align: left;
    border-top: 1px solid #eee;
    border-radius: 0 0 8px 8px;

    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: opacity 0.35s ease, visibility 0.35s ease, transform 0.35s ease;
    z-index: 2;
     display: flex;
    flex-direction: column;
    min-height: 190px;
  }

  .item-inner-hover-effect:hover .details-content-slide-up {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .item-inner-hover-effect:hover .service-item-image-hover {
     transform: scale(1.03);
  }

  .details-content-slide-up .dgca-badge-static {
    display: inline-flex; align-items: center; border: 1px solid #0d6efd;
    color: #0d6efd; background-color: #fff; padding: 4px 10px;
    border-radius: 15px; font-size: 0.75rem; font-weight: 500;
    margin-bottom: 10px; width: fit-content;
  }
  .details-content-slide-up .dgca-badge-static .badge-icon { margin-right: 4px; }

  .details-content-slide-up .course-title-static {
    font-size: 1rem; font-weight: 700; color: #212529;
    margin-bottom: 10px; line-height: 1.3;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
    overflow: hidden; text-overflow: ellipsis;
  }

  .details-content-slide-up .info-row-static {
    display: flex; gap: 15px; align-items: center; margin-bottom: 8px;
    color: #495057; font-size: 0.85rem;
  }
  .details-content-slide-up .info-item-static { display: flex; align-items: center; white-space: nowrap; }
  .details-content-slide-up .info-icon { color: #0d6efd; margin-right: 5px; flex-shrink: 0; }

  .details-content-slide-up .rating-row-static { display: flex; align-items: center; margin-bottom: 12px; }
  .details-content-slide-up .stars-static { display: flex; margin-right: 6px; }
  .details-content-slide-up .star-icon-static { color: #ffc107; font-size: 1rem; margin-right: 1px; }
  .details-content-slide-up .rating-text-static { font-size: 0.85rem; color: #495057; }

  .details-content-slide-up .enroll-button-static {
    background-color: #0d6efd; color: #ffffff; border: none;
    border-radius: 5px; padding: 10px 15px; font-size: 0.9rem;
    font-weight: 600; cursor: pointer; width: 100%; text-align: center;
    transition: background-color 0.2s ease;
    margin-top: auto;
  }
  .details-content-slide-up .enroll-button-static:hover { background-color: #0b5ed7; }
  .details-content-slide-up .enroll-button-static:active { background-color: #0a58ca; }
`;
// --- एंड CSS कोड स्ट्रिंग ---

const ServicesItem = ({value,link}) => {
  // ... बाकी JSX और लॉजिक पहले जैसा ही ...

  const handleEnrollClick = () => {
    if (typeof link === 'function') {
        // अब props.link सीधे Services.js में handleEnrollClick(description) को कॉल करेगा
        link();
    } else {
        console.error("props.link is not a function in ServicesItem");
    }
};

  const {
    img,
    description ,
    title,
    location,
    rating,
    isDGCACertified,
  } = value;

  const renderStars = (count) => {
    let stars = [];
    const validRating = Math.max(0, Math.min(5, count || 0));
    for (let i = 0; i < validRating; i++) {
      stars.push(<FaStar key={i} className="star-icon-static" />);
    }
    return stars;
  };


  return (
    <>
      <style>{styles}</style>
      <div className={"item service-card-hover-container"}>
        <div className="item-inner-hover-effect">
          <img src={img} alt={description} className="service-item-image-hover" />
          <div className="course-label-on-image-top">
             {description}
          </div>
          <div className="details-content-slide-up">
            {isDGCACertified && (
              <div className="dgca-badge-static">
                <FaCertificate className="badge-icon"/> DGCA Certified
              </div>
            )}
            {/* आप चाहें तो टाइटल यहाँ भी दिखा सकते हैं, या सिर्फ लेबल में */}
             <h4 className="course-title-static">{description}</h4>
            <div className="info-row-static">
              <div className="info-item-static">
                <FaClock className="info-icon" />
                <span>{title}</span>
              </div>
              <div className="info-item-static">
                <FaMapMarkerAlt className="info-icon" />
                <span>{location}</span>
              </div>
            </div>
            <div className="rating-row-static">
              <div className="stars-static">
                {renderStars(rating)}
              </div>
              <span className="rating-text-static">Rating {rating} Star</span>
            </div>
            <button className="enroll-button-static" onClick={handleEnrollClick}>
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;