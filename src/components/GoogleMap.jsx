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
                  src="https://maps.google.com/maps?width=800&amp;height=500&amp;hl=en&amp;q=lastminute.com London Eye&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
