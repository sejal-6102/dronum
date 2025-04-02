import React from "react";
import FaqItems from "./Items/FaqItems";

const FaqDetails = () => {
  const faq = [
    {
      key:'0',
      title: "What is the best drone for beginners?",
      des: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
    },
    {
      key:'1',
      title: "How do you fly a drone?",
      des: "Monday – Friday: 9 to 7pm Saturday: 8 to 6pm Sunday: Closed",
    },
    {
      key:'2',
      title: "What is the best camera drone?",
      des: "You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate.",
    },
    {
      key:'3',
      title: "How do you register a drone?",
      des: "No special clothing is required; come as you are! If you are enjoying several services, you will be provided with a robe and slippers. Towels for the eucalyptus steam shower are available. Your personal comfort is always most important to us! Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables. Efficiently unleash cross-media information without cross-media value. Quickly maximize maximized timely deliverables for real-time schemas. Dramatically maintain solutions. Dramatically maintain solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely fixed deliverables for real-time functional schemas.",
    },
    {
      key:'4',
      title: "What do I need to get a drone?",
      des: "Your certificate is considered the same as cash. It is necessary to keep track of this valuable property.",
    },
  ];

  return (
    <>
      <div className="faq-outer animate__animated animate__zoomIn">
        <div className="container">
          <div className="faq-inner">
          <div className="acordian">

                {faq.map((i) =><FaqItems value={i}/>)}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqDetails;
