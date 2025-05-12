// frontend/src/components/Items/VideoItems.jsx
import React from "react";
// Agar aap FaSearchPlus aur FaLink use nahi kar rahe hain (aapke code mein commented the),
// toh inhe import karne ki zaroorat nahi.
// import { FaSearchPlus, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom"; // Agar text-content ke andar links use honge

const VideoItems = (props) => {
  // Props se value aur backendRootUrl extract karein
  // isThumbnail prop abhi use nahi ho raha neeche JSX mein, lekin agar aapki CSS
  // .item.thumbnail jaisi classes use karti hai toh ise pass karna aacha hai.
  const { value, backendRootUrl /*, isThumbnail*/ } = props;

  // Value prop check (optional, but good practice)
  if (!value) {
    // Aap yahaan ek placeholder ya null return kar sakte hain
    // Original code mein aisa check nahi tha, toh hum ise skip kar sakte hain agar aap chahein
    // return null;
  }

  // Helper function to construct the full image URL
  const getFullImageUrl = (relativePath) => {
    if (!relativePath || typeof relativePath !== 'string' || relativePath.trim() === '') {
      return ''; // Return empty string for invalid paths
    }
    if (relativePath.startsWith('http') || relativePath.startsWith('blob:')) {
      return relativePath;
    }
    if (!backendRootUrl) {
        console.error("[VideoItems] backendRootUrl prop is missing! Cannot construct full image URL.");
        return relativePath; // Fallback, but image will likely not load
    }
    return `${backendRootUrl}${relativePath}`;
  };

  // Construct the final image URL, fallback to empty string if value.img is missing
  const imageUrl = value && value.img ? getFullImageUrl(value.img) : '';

  return (
    <>
      {/* Aapka original JSX structure */}
      <div className="item">
        <div className="item-inner">
          <div className="img-content">
            {/* Image tag ab dynamic imageUrl use karega */}
            {/* Agar imageUrl empty hai, toh alt text dikhega ya broken image icon */}
            <img src={imageUrl} alt={value?.head || "Slide image"} />
          </div>
          {/* Text content, agar value.head hai toh dikhega */}
          {value && value.head && (
            <div className="text-content">
              {/* Aapke original code mein yeh ul commented tha */}
              {/* <ul>
                <li>
                  <Link to="/">
                    <FaSearchPlus />
                  </Link>
                </li>
                <li>
                  <Link to="/our-glimps">
                    <FaLink />
                  </Link>
                </li>
              </ul> */}
              <h4>{value.head}</h4>
            </div>
          )}
          {/* Agar value.head nahi hai aur aapko fir bhi text-content div chahiye, toh condition hatayein */}
          {/* {!value?.head && <div className="text-content"><h4> </h4></div>} */}
        </div>
      </div>
    </>
  );
};

export default VideoItems;