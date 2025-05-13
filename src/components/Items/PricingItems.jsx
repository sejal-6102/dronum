


import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaEnvelope, FaExternalLinkAlt  } from 'react-icons/fa';


const PricingItems = (props) => {
  const { itemData } = props;

  if (!itemData) {
    return null;
  }

  const { name, imageSrc, mobile, address,googleMapsLink } = itemData;

  return (
    <>
      <div className="item team-card-item">
        <div className="item-inner team-card-item__inner">
          {/* Image Section */}
          {imageSrc && (
            <div className="team-card-item__image-container">
              <img src={imageSrc} alt={name} className="team-card-item__image" width='100%' />
            </div>
          )}

          {/* Name Section */}
          {name && <h3 className="team-card-item__name">{name}</h3>}

         

          {/* Details Section (Mobile, Email, Address) */}
          <div className="team-card-item__details">
            {mobile && (
              <p className="team-card-item__detail">
                <FaMobileAlt className="team-card-item__icon" />
                <span>{mobile}</span>
              </p>
            )}
          
            {address && (
              <p className="team-card-item__detail">
                <FaMapMarkerAlt className="team-card-item__icon" />
                <span>{address}</span>
              </p>
            )}

             {/* --- Google Maps Link --- */}
            {googleMapsLink && (
              <div className="team-card-item__google-maps-link-container">
                <a 
                  href={googleMapsLink} 
                  target="_blank" // Naye tab mein kholne ke liye
                  rel="noopener noreferrer" // Security best practice
                  className="team-card-item__google-maps-link"
                >
                  <FaExternalLinkAlt className="team-card-item__icon" /> {/* Ya FaMapMarkedAlt */}
                  <span>View on Google Maps</span>
                </a>
              </div>
            )}
            {/* --- End Google Maps Link --- */}
          </div>
        
        </div>
      </div>
    </>
  );
};

export default PricingItems;
