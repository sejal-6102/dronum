// Services.js
import React, { useState } from "react";
import ServicesItem from "./Items/ServicesItem";
import EnrollForm from "./Pages/EnrollForm";

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Modal को अब भी कोर्स का नाम चाहिए होगा
    const [selectedCourseName, setSelectedCourseName] = useState(null);

    // --- आपका मूल सर्विस ऐरे + जोड़ी गई डिटेल्स ---
    const service = [
        {
            id: 'rpc-small', // जोड़ा गया
            img: "assets/img/co01.jpg",
            title: "Duration: 5-7 Days", // मूल: ड्यूरेशन
            description:"Small Remote Pilot Certification Course", // मूल: कोर्स नाम
            location: "Jaipur",   // जोड़ा गया
            rating: 5,          // जोड़ा गया
            isDGCACertified: true, // जोड़ा गया
        },
        {
            id: 'rpc-medium',
            img: "assets/img/co002.jpg",
            title: "Duration : 7 Days",
            description:"Medium Remote Pilot Certification Course",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'rpc-instructor-15day',
            img: "assets/img/co003.jpg",
            title: "Duration : 15 Days", // ड्यूरेशन
            description:"RPC + Remote Pilot Instructor (TTT)", // स्पष्ट नाम रखा
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'ttt-only-11day',
            img: "assets/img/co004.jpg",
            title: "Duration : 9-11 Days", // PDF से अवधि ली
            description:"Drone Train the Trainer Add-on (TTT Only)", // स्पष्ट नाम
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'kisaan-drone-operator',
            img: "assets/img/co005.jpg",
            title: "Duration : 2 Months",
            description:"Kisaan Drone Operator / Agri Drone Entrepreneur",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'rpc-small-medium-combo',
            img: "assets/img/co006.jpg",
            title: "Duration : 8 Days",
            description:"Small & Medium RPC Combo",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'survey-mapping-rpc-8day',
            img: "assets/img/co007.jpg",
            title: "Duration : 8 Days",
            description:"Survey & Mapping with RPC",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'agri-spraying-3day',
            img: "assets/img/co008.jpg",
            title: "Duration : 3 Days",
            description:"Agri Spraying Course",
            location: "Jaipur",
            rating: 4,
            isDGCACertified: false,
        },
        {
            id: 'agriculture-rpc-8day',
            img: "assets/img/co009.jpg",
            title: "Duration : 8 Days",
            description:"Agriculture with RPC",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: true,
        },
        {
            id: 'drone-technician-9day',
            img: "assets/img/co010.jpg",
            title: "Duration : 9 Days",
            description:"Drone Technician Course",
            location: "Jaipur",
            rating: 5,
            isDGCACertified: false,
        },
        {
            id: 'instructor-enhancement',
            img: "assets/img/co011.jpg",
            title: "Duration : 2 Days",
            description:"Instructor Skills Enhancement Crash Course",
            location: "Jaipur",
            rating: 4,
            isDGCACertified: false,
        },
        {
            id: 'drone-software-course',
            img: "assets/img/co012.jpg",
            title: "Duration : 3 Days",
            description:"Drone Software Course",
            location: "Jaipur",
            rating: 4,
            isDGCACertified: false,
        },
        // --- आप चाहें तो यहाँ और कोर्स ऑब्जेक्ट्स जोड़ सकते हैं ---
    ];
    // --- एंड सर्विस डेटा ---

    // Modal खोलने वाला फंक्शन अब description (कोर्स नाम) लेगा
    const handleEnrollClick = (courseDescription) => {
        setSelectedCourseName(courseDescription); // अब description सेट करें
        setIsModalOpen(true); // Modal खोलें
    }

    // setModal फंक्शन (आपके मूल कोड से)
    const setModal = modalState => {
        setIsModalOpen(modalState);
    }


    return (
      <>
        <div className="service-outer">
          <div className="container-fluid"> {/* कंटेनर फ्लूइड रखा */}
          
            <div className="service-inner ">
              <div className="heading animate__animated animate__zoomIn">
                 <div className="item">
                   <div className="sub-heading"><span className="line-left"></span><span className="text">You Will Love It.</span></div>
                   <h2>Courses Offered</h2>
                 </div>
                 <div className="item"><p> We offer a range of dynamic and industry-relevant courses designed to equip you with the skills needed</p>
                 </div>
              </div>

              <div className="content service-grid">
                {service.map((itemData) => (
                  <ServicesItem
                    key={itemData.id || itemData.description} // ID या description को key मानें
                    value={itemData} // पूरा अपडेटेड डेटा ऑब्जेक्ट पास करें
                    // अब onEnroll की जगह आपके मूल link prop को पास करें
                    // और handleEnrollClick को कॉल करने के लिए रैपर बनाएं
                    link={() => handleEnrollClick(itemData.description)}
                  />
                ))}
              </div>
              <EnrollForm
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
                // Modal को कोर्स नाम पास करें
                courseName={selectedCourseName}
               />
            </div>
            </div>
          </div>
      
      </>
    );
};

export default Services;