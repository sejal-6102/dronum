// src/components/Items/PricingItems.jsx
import React from "react";
import { FaMobileAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const PricingItems = (props) => {
  const { itemData } = props;
  const upcomingText = "Upcoming...";

  if (!itemData) {
    return null;
  }

  // Destructure with fallback for potentially missing dynamic fields
  const {
    name,
    imageSrc,
    mobile = null, // Default to null if not provided
    address = null,
    googleMapsLink = null
  } = itemData;

  // Check if a field is empty or null to display "Upcoming..."
  // An empty string "" from admin input should also be treated as "Upcoming..."
  const displayMobile = mobile && mobile.trim() !== "" ? mobile : upcomingText;
  const displayAddress = address && address.trim() !== "" ? address : upcomingText;
  const displayGoogleMapsLink = googleMapsLink && googleMapsLink.trim() !== "" ? googleMapsLink : null; // If no link, don't show the link section

  return (
    <>
      <div className="item team-card-item">
        <div className="item-inner team-card-item__inner">
          {imageSrc && (
            <div className="team-card-item__image-container">
              <img src={imageSrc} alt={name} className="team-card-item__image" width='100%' />
            </div>
          )}

          {name && <h3 className="team-card-item__name">{name}</h3>}

          <div className="team-card-item__details">
            <p className="team-card-item__detail">
              <FaMobileAlt className="team-card-item__icon" />
              <span>{displayMobile}</span>
            </p>

            <p className="team-card-item__detail">
              <FaMapMarkerAlt className="team-card-item__icon" />
              <span>{displayAddress}</span>
            </p>

            {/* Only show Google Maps link if it exists AND is not "Upcoming..." */}
            {displayGoogleMapsLink && displayGoogleMapsLink !== upcomingText ? (
              <div className="team-card-item__google-maps-link-container">
                <a
                  href={displayGoogleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team-card-item__google-maps-link"
                >
                  <FaExternalLinkAlt className="team-card-item__icon" />
                  <span>View on Google Maps</span>
                </a>
              </div>
            ) : (
              // Optionally, show "Map: Upcoming..." if the link is missing
              <p className="team-card-item__detail">
                  <FaExternalLinkAlt className="team-card-item__icon" /> {/* Or FaMapMarkedAlt */}
                  <span>Map: {upcomingText}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingItems;