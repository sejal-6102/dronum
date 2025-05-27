// src/components/Pricing.jsx
import React, { useState, useEffect } from 'react';
import PricingItems from "./Items/PricingItems";
import { API_BASE_URL } from './Pages/Admin/contentSchemas'; // Adjust path if needed

const Pricing = () => {
  // Static data for names and images (these don't change via admin)
  const staticPlacesData = [
    {
      id: 1, // This ID must match 'locationId' from admin data
      name: "Gandhi Nagar",
      imageSrc: '/assets/img/gg.png',
    },
    {
      id: 2,
      name: "Jaipur",
      imageSrc: '/assets/img/rr.png',
    },
    {
      id: 3,
      name: "Hyderabad",
      imageSrc: '/assets/img/tt.png',
    },
  ];

  const [displayPlaces, setDisplayPlaces] = useState(staticPlacesData); // Start with static data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const contentKey = "rpto_location_details";

  useEffect(() => {
    const fetchLocationDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/api/public/content/${contentKey}`);
        if (!response.ok) {
          if (response.status === 404) {
            console.warn(`Content for key '${contentKey}' not found. Using static data only.`);
            // No dynamic details found, keep using staticPlacesData for display (which will show "Upcoming...")
            setDisplayPlaces(staticPlacesData.map(place => ({
              ...place,
              address: null, // Explicitly set to null to trigger "Upcoming..."
              mobile: null,
              googleMapsLink: null,
            })));
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        } else {
          const data = await response.json();
          if (data && data.contentValue && Array.isArray(data.contentValue)) {
            const dynamicDetailsArray = data.contentValue;

            // Merge dynamic details with static data
            const mergedPlaces = staticPlacesData.map(staticPlace => {
              const dynamicDetail = dynamicDetailsArray.find(
                detail => detail.locationId === staticPlace.id
              );
              return {
                ...staticPlace,
                address: dynamicDetail ? dynamicDetail.address : null,
                mobile: dynamicDetail ? dynamicDetail.mobile : null,
                googleMapsLink: dynamicDetail ? dynamicDetail.googleMapsLink : null,
              };
            });
            setDisplayPlaces(mergedPlaces);
          } else {
            console.warn(`Unexpected data structure for '${contentKey}'. Using static data only.`);
            setDisplayPlaces(staticPlacesData.map(place => ({ ...place, address: null, mobile: null, googleMapsLink: null })));
          }
        }
      } catch (e) {
        console.error(`Failed to fetch content for key '${contentKey}':`, e);
        setError(e.message || "Failed to load location details.");
        setDisplayPlaces(staticPlacesData.map(place => ({ ...place, address: null, mobile: null, googleMapsLink: null })));
      } finally {
        setLoading(false);
      }
    };

    fetchLocationDetails();
  }, []); // Fetch once on mount

  // UI for loading and error states
  if (loading) {
    return (
      <div className="pricing-outer team-section-outer text-center py-5">
        <p>Loading location details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pricing-outer team-section-outer text-center py-5">
        <p>Error loading details: {error}</p>
        <p>Displaying default information.</p>
        {/* Fallback to rendering static data without dynamic details if error occurs */}
        {/* This ensures the section still shows something */}
        <div className="bottom team-cards-container">
          {staticPlacesData.map((place) => (
            <PricingItems key={place.id} itemData={{...place, address: null, mobile: null, googleMapsLink: null}} />
          ))}
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="pricing-outer team-section-outer">
        <div className="container">
          <div className="pricing-inner team-section-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  <span>Exploring Our Presence</span>
                  <div className="line-right"></div>
                </div>
                <h2>Expanding Horizons</h2>
                <p>Dronum India Aviations is thrilled to announce the launch of our upcoming Remote Pilot Training Organizations (RPTOs) in:</p>
                {/* Removed the redundant paragraph from here as the cards will show the locations */}
              </div>
            </div>
            <div className="bottom team-cards-container">
              {displayPlaces.map((place) => (
                <PricingItems key={place.id} itemData={place} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;