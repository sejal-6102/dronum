import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MainServices = () => {
 
  return (
    <>
    

 <MovieCard />
         <div className="gdetails-outer">
        <div className="container">
          <div className="gdetails-inner">
            {/* <p>Our team has decades of film and tech experience.</p> */}
            {/* <h3>
            DRONUM & MARUT DRONE ACADEMY
            </h3> */}
  
    
            <div className="details">
                <h3>ADVANTAGES OF DRONUM CONDUCTED DRONE TRAINING PROGRAMS </h3>
                <ul>
<li>Become a drone entrepreneur & start your entrepreneurial journey with our Support</li>
<li>Launch your career in drone flying industries with vast job opportunities And earn from 20,000 upto 1lac per month.</li>
<li>1Theory classes and live field training by highly qualified and experienced DGCA approved instructors.</li>
<li>Well-equipped classrooms with the latest flight simulator, smart classrooms & DGCA Approved Curriculam and Type Certified Drones for advanced training.</li>
<li>Practical flying with instructors & solo flying with the latest drones under DGCA approved drone flying training program.</li>
<li>Special discount on drone purchases with loan Facilitation on drone purchases.</li>
<li>Remote pilot (RPC) drone flying license validated for 10 years (DGCA approved) Hands-on experience on the latest industrial and agri progress (projects) pan India with guidance on industrial & entrepreneurial opportunities.</li>
<li>Affordable & hygienic accommodation with food facility during training.</li>
<li>Flexible fee structure with emi facility on major bank credit cards & debit Cards & no cost emi.</li>
</ul>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default MainServices;
