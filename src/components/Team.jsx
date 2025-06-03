// frontend/src/components/Team.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import TeamItems from "./Items/TeamItems"; // Path check karein
import { API_BASE_URL } from "./Pages/Admin/contentSchemas"; 

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/public/content/team_members`);
        if (response.data && Array.isArray(response.data.contentValue)) {
          setTeamMembers(response.data.contentValue);
        } else {
          setTeamMembers([]);
        }
      } catch (err) {
        setError("Could not load team members.");
        setTeamMembers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  const getFullImageUrl = (relativePath) => {
    if (!relativePath) return '';
    if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || relativePath.startsWith('blob:')) {
      return relativePath;
    }
    const backendRootUrl = API_BASE_URL.replace('/api', '');
    return `${backendRootUrl}${relativePath.startsWith('/') ? relativePath : `/${relativePath}`}`;
  };

  if (loading) { /* ... loading UI ... */ }
  if (error) { /* ... error UI ... */ }

  return (
    <>
      <div className="team-outer">
        <div className="container">
          <div className="team-inner animate__animated animate__zoomIn">
            <div className="heading">
              {/* ... heading content ... */}
              <div className="sub-heading">
                <span className="line-left"></span>
                <span className="text">Core Team</span>
                <span className="line-right"></span>
              </div>
              <h2>OUR TEAM</h2>
              <p>At Dronum India Aviations, we believe that a skilled and dedicated team is the foundation of excellence in drone training and maintenance. Our staff comprises professionals from various roles, each playing a vital part in ensuring smooth operations, quality education, and exceptional service delivery..</p>
            </div>
            
            {teamMembers.length > 0 ? (
              <div className="content">
                {teamMembers.map((member, index) => (
                  // VVVVVV  MODIFIED PROP PASSING VVVVVV
                  <TeamItems 
                    key={member.name || index} // Use a unique key
                    name={member.name}
                    position={member.position}
                    img={getFullImageUrl(member.img)} // Processed image URL
                    // Agar member object mein aur bhi properties hain jo TeamItems use kar sakta hai,
                    // toh unhe bhi yahaan aise hi pass kar sakte hain:
                    // e.g., socialLink={member.socialLink}
                  />
                  // ^^^^^^  MODIFIED PROP PASSING ^^^^^^
                ))}
              </div>
            ) : (
              !loading && <p className="text-center py-3">No team members to display at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;