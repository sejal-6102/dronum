// import React from "react";
// import PricingItems from "./Items/PricingItems";

// const Pricing = () => {
//   const price = [
//     { title: "SPORTS", price: "145" },
//     { title: "SHOOTING", price: "285" },
//     { title: "TRAVELS", price: "375" },
    
//   ];
//   return (
//     <>
//       <div className="pricing-outer">
//         <div className="container">
//           <div className="pricing-inner animate__animated animate__zoomIn">
//             <div className="top">
//               <div className="heading">
//                 <div className="sub-heading">
//                   <div className="line-left"></div>
//                   <span>Comfortable</span>
//                   <div className="line-right"></div>
//                 </div>
//                 <h2>Pricing Table</h2>
//               </div>
//             </div>
//             <div className="bottom">
//               {
//                 price.map((i) => <PricingItems vlaue={i} />)
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Pricing;


// src/components/Pricing.jsx
import React from "react";
import PricingItems from "./Items/PricingItems"; // Your PricingItems component

// --- IMAGES ---
// Agar aapke images `src` folder ke andar hain (e.g., src/assets/images/)
// toh aapko unhe import karna hoga.
// Example:


// Agar aapke images `public` folder mein hain (e.g., public/images/)
// toh aap seedha path use kar sakte hain, import ki zaroorat nahi.
// Example: const member1Img = "/images/member1.jpg";

const Pricing = () => {
  // Data structure ko image aur details ke liye update kiya gaya hai
  const places = [
    {
      id: 1,
      name: "gujrat", // Pehle 'title' tha
      imageSrc: '/assets/img/gujrat.png',    // Image path
    mobile: "+91 98765 43210",
      address: "123 Aero Lane, New Delhi",
       googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat"
   
    },
    {
      id: 2,
      name: "jaipur",
      imageSrc: '/assets/img/gujrat.png',
      mobile: "+91 87654 32109",
      address: "456 Cloud Street, Mumbai",
      googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat"
    },
    {
      id: 3,
      name: "Maharastra",
      imageSrc:'/assets/img/gujrat.png',
    mobile: "+91 76543 21098",
      address: "789 Geo Point, Bangalore",
       googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Ahmedabad+Gujarat"
      
    },
  ];

  return (
    <>
      {/* Outer class ko 'team-section-outer' ya similar naam de sakte hain */}
      <div className="pricing-outer team-section-outer">
        <div className="container">
          {/* Inner class ko 'team-section-inner' ya similar naam de sakte hain */}
          <div className="pricing-inner team-section-inner animate__animated animate__zoomIn">
            <div className="top">
              <div className="heading">
                <div className="sub-heading">
                  <div className="line-left"></div>
                  {/* Sub-heading text update karein */}
                  <span>Exploring Our Presence</span>
                  <div className="line-right"></div>
                </div>
                {/* Heading text update karein */}
                <h2>Our Presence</h2>
                   <p>At Dronum Aviation, our footprint extends across key regions where innovation meets execution.
                 With a growing network of operations, training hubs, and service points, we are redefining how drone technology
                  is accessed and applied across India.</p>
              <p>From aerial surveying in remote landscapes to training future drone pilots in state-of-the-art 
              facilities, our presence is not just about location—it's about impact. Whether it's agriculture, defense, 
              logistics, or education, Dronum Aviation is actively building a smarter, safer, and more connected aerial ecosystem.</p>
              </div>
            </div>
            {/* Bottom class ab cards ka container hoga */}
            <div className="bottom team-cards-container">
              {
                places.map((place) => (
                  // `key` prop zaroori hai
                  // `vlaue` prop ko `item` ya `memberData` jaise naam se pass karein
                  <PricingItems key={place.id} itemData={place} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;