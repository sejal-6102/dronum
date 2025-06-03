// frontend/src/components/Items/TeamItems.jsx
import React from "react";
// import { Link } from "react-router-dom"; // Agar social links hain toh

const TeamItems = (props) => {
  // Destructuring props for cleaner access (optional, but good practice)
  const { name, position, img /*, facebook_url, twitter_url, linkedin_url */ } = props; 
  // Agar aapne social media links schema aur Team.jsx mein pass kiye hain, toh unhe yahaan destructure karein

  return (
    <>
      <div className="item">
        <div className="item-inner">
          <div className="img-content">
            {/* Use destructured 'img' or props.img */}
            {img && <img src={img} alt={name || "Team member"} />} 
          </div>
          <div className="text-content">
            <div className="detail">
              {/* Use destructured 'position' or props.position */}
              <span>{position}</span> 
              {/* Use destructured 'name' or props.name */}
              <h6>{name}</h6> 
            </div>
            {/* Agar social media links hain: */}
            {/* <ul className="socil-media">
              {facebook_url && <li><Link to={facebook_url} target="_blank" rel="noopener noreferrer">Facebook</Link></li>}
              {twitter_url && <li><Link to={twitter_url} target="_blank" rel="noopener noreferrer">Twitter</Link></li>}
              {linkedin_url && <li><Link to={linkedin_url} target="_blank" rel="noopener noreferrer">Linkedin</Link></li>}
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamItems;