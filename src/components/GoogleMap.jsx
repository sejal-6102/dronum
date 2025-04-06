import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-outer" style={{marginTop:"80px"}}>
        <div className="container">
          <div className="map-inner animate__animated animate__zoomIn" style={{overflow:"hidden"}}>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe 
                title="map"
                  className="gmap_iframe"
                  width="100%"
                  height="480px"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2392126363775!2d75.7388628752586!3d26.91502387664637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4642bfc12b5%3A0xeef7ca56bebad0!2sDronum%20India%20Aviations%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1712400000000!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
