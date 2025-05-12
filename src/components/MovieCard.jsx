import React from "react";
import { FaCertificate, FaDrone, FaMapMarkedAlt, FaChalkboardTeacher,FaCheck,FaCreditCard,FaHotel } from "react-icons/fa";
 // Import FontAwesome icon
import "../css/MovieCard.css"; // Import CSS file

const movies = [
  {
    title: "100% Placement Assistance",
    description:
      "We provide dedicated support to help you launch a successful career in the drone industry.",
    imgSrc: "assets/img/pic-3.jpg",
     icon: <FaCheck />,
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from DGCA-certified trainers with extensive experience in drone technology and operations.",
    imgSrc: "assets/img/pic-4.jpg",
     icon: <FaChalkboardTeacher />,
  },
  {
    title: "Premier Destination for Drone Training",
    description:
      "Offering comprehensive drone pilot courses, tailored to industry demands and the latest regulations.",
    imgSrc: "assets/img/pic-5.jpg",
     icon: <FaMapMarkedAlt />,
  },
  {
    title: "DGCA-Certified Drone Pilot Certificate",
    description:
      "Earn your official certification and unlock professional opportunities in various sectors.",
    imgSrc: "assets/img/pic-6.jpg",
     icon: <FaCertificate />,
  },
    {
    title: "Flexible EMI Options",
    description:
      "Avail easy EMI plans with credit card payments, making our courses accessible to everyone.",
    imgSrc: "assets/img/pic-6.jpg",
     icon: <FaCreditCard />,
  },
    {
    title: "Hygenic Food and Accommodation",
    description:
      "Clean, comfortable accommodation with hygienic and nutritious food.",
    imgSrc: "assets/img/pic-6.jpg",
     icon: <FaHotel />,
  },
];

const MovieCard = () => {
  return (
    <div className="who-we-are">

     <div className="top" style={{paddingTop:'40px'}}>
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  <span>Partnered for Your Success</span>
                  <div className="line-right"></div>
                </div>
                <h2>Why Choose Us</h2>
               <p>At Dronum India Aviation, we proudly collaborate with a diverse network of trusted partners who share our commitment to innovation, precision, and impact in the drone aviation industry.<br></br> and impact in the drone aviation industry.From technology providers and drone manufacturers to logistics experts and <br></br>government agencies, our partners play a vital role in delivering exceptional service and cutting-edge solutions to our clients.</p>
              
              </div>
            </div>
      <h2 className="section-heading" style={{paddingTop:'40px'}}>We Are Providing Remote Pilot Certificate Courses</h2>
      <div className="wrapper">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.imgSrc} alt={movie.title} />

            {/* Always Visible Content */}
          <div className="content">
  <div className="icon-container">
    {React.cloneElement(movie.icon, { className: "icon" })}
  </div>
  <h1>{movie.title}</h1>
</div>


            {/* Hidden Description - Appears on Hover */}
            <div className="descriptions">
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;






// import React from "react";
// import "../css/MovieCard.css";


// const movies = [
//   {
//     title: "John Wick 3",
//     description:
//       "After gunning down a member of the High Table, legendary hitman John Wick finds himself stripped of protection. Now, with a $14 million bounty on his head, he must fight through New York’s ruthless killers.",
//     imgSrc:
//       "/d1.png",
//   },
//   {
//     title: "Equalizer 2",
//     description:
//       "If you have a problem and nowhere else to turn, Robert McCall delivers vigilante justice. But when thugs kill his best friend, he must take on elite assassins bent on destroying him.",
//     imgSrc:
//       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7aQx4zj1VNq3GpSdAMt7ohhcARGXdpVFgbVcJ1ASqj//Z",
//   },
// ];

// const MovieCard = () => {
//   return (
//     <div className="wrapper">
//       {movies.map((movie, index) => (
//         <div key={index} className="card">
//           <img src={movie.imgSrc} alt={movie.title} />
//           <div className="descriptions">
//             <h1>{movie.title}</h1>
//             <p>{movie.description}</p>
//             <button>
//               <i className="fab fa-youtube"></i> Play trailer on YouTube
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieCard;
