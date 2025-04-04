import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Import FontAwesome icon
import "../css/MovieCard.css"; // Import CSS file

const movies = [
  {
    title: "Premier Destination for Drone Training",
    description:
      "Offering comprehensive drone pilot courses, tailored to industry demands and the latest regulations.",
    imgSrc: "assets/img/pic-3.jpg",
  },
  {
    title: "Advanced UAV Certification",
    description:
      "Master the skills of drone operation with industry-leading instructors and real-world scenarios.",
    imgSrc: "assets/img/pic-4.jpg",
  },
  {
    title: "Specialized Drone Operations",
    description:
      "Learn drone mapping, aerial cinematography, and inspection techniques from experts.",
    imgSrc: "assets/img/pic-5.jpg",
  },
  {
    title: "Enterprise-Level UAV Training",
    description:
      "Get hands-on experience with drones used in agriculture, security, and surveying industries.",
    imgSrc: "assets/img/pic-6.jpg",
  },
];

const MovieCard = () => {
  return (
    <div className="who-we-are">
      <h2 className="section-heading">We Are Providing Remote Pilot Certificate Courses</h2>
      <div className="wrapper">
        {movies.map((movie, index) => (
          <div key={index} className="card">
            <img src={movie.imgSrc} alt={movie.title} />

            {/* Always Visible Content */}
            <div className="content">
              <div className="icon-container">
                <FaMapMarkerAlt className="icon" />
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
