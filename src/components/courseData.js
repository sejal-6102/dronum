// src/courseData.js (या जहाँ भी आप इसे रखते हैं)
import { FaCertificate, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt, FaPlaneDeparture, FaMapMarkedAlt, FaProjectDiagram, FaBook, FaPaperPlane, FaTractor, FaSprayCan, FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList, FaFileSignature, FaShieldAlt, FaUserShield, FaRulerCombined, FaCogs, FaBroadcastTower } from 'react-icons/fa'; // <-- सुनिश्चित करें कि सभी आवश्यक आइकन आयातित हैं

// रैंडम वैल्यू जनरेट करने के लिए हेल्पर फंक्शन
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDate = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const futureMonthIndex = getRandomInt(0, 5); // अगले 6 महीनों में
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const targetMonthIndex = (currentMonth + futureMonthIndex) % 12;
    const targetYear = currentYear + Math.floor((currentMonth + futureMonthIndex) / 12);
    const day = getRandomInt(1, 28); // सिंप्लिसिटी के लिए 28 तक
    const hour = getRandomInt(9, 11);
    const minute = getRandomInt(0, 1) === 0 ? '00' : '30';

    return {
        day: day.toString().padStart(2, '0'),
        monthYear: `${monthNames[targetMonthIndex]} ${targetYear}`,
        time: `${hour}:${minute} AM`
    };
};

export const allCourseDetails = {

  // ========= Original Entry (Updated) ==========
  'drone-mapping-surveying': {
    id: 'drone-mapping-surveying',
    name: 'Drone Mapping & Surveying',
    rating: 5, // Updated
    reviewCount: getRandomInt(40, 180), // Updated
    isDgcaApproved: false, // Assuming this specific course isn't directly RPC certified based on first PDF context
    infoBoxes: [
      { label: 'Application', value: 'Survey & GIS' },
      { label: 'Training Period', value: '6 Days' }, // Assuming this duration is still valid
      { label: 'Software', value: 'Pix4D/Metashape' },
      { label: 'Output', value: 'Orthomosaics, 3D Models' },
    ],
    aboutCourse: `Learn how to use drones for creating accurate maps and 3D models. This course covers photogrammetry principles, flight planning, data acquisition, processing, and analysis using industry-standard software. Ideal for surveyors, engineers, and GIS professionals.`,
    videoThumbnail: '/assets/img/ca1.jpg', // Generic placeholder
    videoUrl: null,
    courseBreakdown: [
        { icon: 'FaBookOpen', label: 'Photogrammetry Theory', value: '1 Day' },
        { icon: 'FaPlaneDeparture', label: 'Flight Planning', value: '1 Day' },
        { icon: 'FaMapMarkedAlt', label: 'Data Acquisition', value: '2 Days' },
        { icon: 'FaProjectDiagram', label: 'Data Processing', value: '2 Days' },
        { icon: 'FaFileAlt', label: 'Deliverables & Reports', value: 'Included' },
    ],
    whatYouWillLearn: [
        'Principles of Photogrammetry', 'Mission Planning Software (e.g., DroneDeploy, Map Pilot Pro)',
        'Ground Control Point (GCP) Placement', 'Optimal Flight Parameters for Mapping',
        'Processing with Pix4Dmapper/Agisoft Metashape', 'Generating Orthomosaics, DSM, DTM, Point Clouds',
        'Accuracy Assessment and Reporting', 'GIS Integration Basics',
    ],
    courseContent: [
        { title: 'Module 1: Mapping Fundamentals', day: 1, details: ['Intro to Photogrammetry & Geomatics', 'Coordinate Systems & Projections', 'Drone Components for Mapping'] },
        { title: 'Module 2: Flight Planning & GCPs', day: 2, details: ['Using Flight Planning Apps (Web & Mobile)', 'GCP Types & Best Practices', 'Overlap & Altitude Settings'] },
        { title: 'Module 3: Data Acquisition', day: 3, details: ['Field Safety Procedures', 'Executing Automated Flights', 'Manual Data Capture Techniques'] },
        { title: 'Module 4: Data Acquisition Practice', day: 4, details: ['Multiple Site Scenarios', 'Troubleshooting Field Issues', 'Data Management'] },
        { title: 'Module 5: Data Processing', day: 5, details: ['Intro to Pix4D/Metashape', 'Processing Steps: Alignment, Dense Cloud, Mesh, Ortho', 'Quality Checks'] },
        { title: 'Module 6: Outputs & Analysis', day: 6, details: ['Generating DSM, DTM, Contours', 'Volume Calculations', 'Creating Deliverables', 'Accuracy Reports'] },
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()] // Updated
  },

  // ========= Courses from PDF 1 (Updated) ==========
   // Note: Small/Medium RPC Basic are replaced by entries from PDF 2 below

  'small-rpc-agri-10day': { // Renamed slightly for clarity vs 8-day version
    id: 'small-rpc-agri-10day',
    name: 'Small RPC With Agri Focus (9-10 Days)',
    rating: 5,
    reviewCount: getRandomInt(35, 160),
    isDgcaApproved: true, // RPC Base is approved
    infoBoxes: [
      { label: 'Duration', value: '9 to 10 Days' },
      { label: 'Drone Class', value: 'Small (2 - 25 kg)' },
      { label: 'Eligibility', value: 'Min 10th Pass, 18-65 yrs' },
      { label: 'Focus', value: 'Basic Piloting + Agri Spraying' }
    ],
    aboutCourse: "Builds upon the DGCA Small RPC course with additional specialized training focused on agricultural drone operations, including spraying techniques, payload handling, safety, and relevant regulations as per the initial brochure.",
    videoThumbnail: '/assets/img/ca10.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'Small RPC Core Modules', value: '~7 Days' },
      { icon: 'FaTractor', label: 'Agri Drone Theory', value: '~2 Days' },
      { icon: 'FaSprayCan', label: 'Agri Drone Practical', value: '~1 Day' }
    ],
    whatYouWillLearn: [
      "All content from Small RPC Basic Course",
      "Introduction to Agri Drones & Use Cases", "Types of Agricultural Spraying Drones",
      "Loading & Handling Liquid Payloads", "Calibration for Agricultural Operations",
      "Spraying Techniques & Patterns", "Field Mapping and Survey Basics for Agriculture",
      "Safety Measures in Pesticide Spraying", "Maintenance of Agri Drones",
      "Demo Practice on Agricultural Fields", "Compliance with Agri Spray Regulations"
    ],
    courseContent: [
      { title: 'Module 1: Small RPC Core', day: '1-7', details: ["Covers all content from the 5-7 Day Small RPC course."] },
      { title: 'Module 2: Agri Drone Specifics', day: '8-10', details: ["Agri Drone Intro & Types", "Payload Handling & Calibration", "Spraying Techniques & Safety", "Agri Regulations", "Field Practice & Maintenance"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

   'medium-rpc-agri-10day': { // Renamed slightly
    id: 'medium-rpc-agri-10day',
    name: 'Medium RPC With Agri Focus (9-10 Days)',
    rating: 5,
    reviewCount: getRandomInt(30, 140),
    isDgcaApproved: true, // RPC Base is approved
    infoBoxes: [
      { label: 'Duration', value: '9 to 10 Days' },
      { label: 'Drone Class', value: 'Medium' },
      { label: 'Eligibility', value: 'Min 10th Pass, 18-65 yrs' },
      { label: 'Focus', value: 'Medium Piloting + Advanced Agri Ops' }
    ],
    aboutCourse: "Combines DGCA Medium RPC training with specialized modules for advanced agricultural drone operations, focusing on large-area spraying, payload optimization, GIS mapping, and advanced mission programming.",
    videoThumbnail: '/assets/img/ca12.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'Medium RPC Core Modules', value: '~7 Days' },
      { icon: 'FaTractor', label: 'Medium Agri Drone Theory', value: '~2 Days' },
      { icon: 'FaSprayCan', label: 'Medium Agri Drone Practical', value: '~1 Day' }
    ],
    whatYouWillLearn: [
      "All content from Medium RPC Basic Course", "Large Area Agricultural Spraying",
      "Payload Optimization techniques", "Flight Planning for Large Fields",
      "Field Surveying Techniques for Agriculture", "GIS Mapping Basics for Agri",
      "Nozzle Calibration for Agri Sprays", "Troubleshooting Agri Drones",
      "Crop-Specific Spraying Patterns", "Advanced Agri Mission Programming"
    ],
    courseContent: [
       { title: 'Module 1: Medium RPC Core', day: '1-7', details: ["Covers all content from the 5-7 Day Medium RPC course."] },
       { title: 'Module 2: Advanced Agri Drone Ops', day: '8-10', details: ["Large Area Spraying & Planning", "Payload Optimization & GIS Basics", "Advanced Mission Programming", "Troubleshooting & Calibration", "Field Practice"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'drone-technician-15day': { // Renamed
    id: 'drone-technician-15day',
    name: 'Drone Repair & Maintenance Course (15 Days)',
    rating: 5,
    reviewCount: getRandomInt(50, 200),
    isDgcaApproved: false, // Repair course itself isn't a DGCA pilot cert
    infoBoxes: [
      { label: 'Duration', value: '15 Days' },
      { label: 'Focus', value: 'Repair, Assembly, Troubleshooting' },
      { label: 'Level', value: 'Beginner to Experienced' },
      { label: 'Outcome', value: 'Technician Certification' }
    ],
    aboutCourse: "Comprehensive 15-day course on drone systems, covering assembly, troubleshooting, repair, maintenance, soldering, and firmware updates. Includes hands-on workshops simulating real-world scenarios. Ideal for aspiring technicians.",
    videoThumbnail: '/assets/img/ca11.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaBook', label: 'Theory & Electronics', value: 'Day 1-3' },
      { icon: 'FaTools', label: 'Soldering & Assembly', value: 'Day 4-6, 8-11' },
      { icon: 'FaMicrochip', label: 'Troubleshooting & Software', value: 'Day 6, 12, 14' },
      { icon: 'FaPlane', label: 'Testing & Flight', value: 'Day 6, 7, 13' },
      { icon: 'FaCertificate', label: 'Final Test & Certification', value: 'Day 15' }
    ],
    whatYouWillLearn: [
      "Drone Technology & Aviation Basics", "Electronics & Components", "Propulsion & Battery Systems",
      "Soldering Techniques", "Drone Assembly (F450 Example)", "Programming & Configuration",
      "Flight Testing & Troubleshooting", "Flight Calculations & Parts ID", "Mechanical Assembly",
      "Electrical Assembly & Wiring", "Software Flashing", "Autonomous Flight Basics",
      "Maintenance Procedures (AG365S Example)"
    ],
    courseContent: [ // Using details from PDF 1 Page 9/10
       { title: 'Day 1: Intro to Aviation Subjects'},
       { title: 'Day 2: Basic Electronics & Aviation Components'},
       { title: 'Day 3: Propulsion Systems & Battery Management'},
       { title: 'Day 4: Soldering Methods & Practice'},
       { title: 'Day 5: F450 Assembly & Programming'},
       { title: 'Day 6: F450 Flight Testing & Troubleshooting'},
       { title: 'Day 7: Flight Calculations & Parts Identification'},
       { title: 'Day 8, 9: Mechanical Assembly'},
       { title: 'Day 10-11: Electrical Assembly & Soldering'},
       { title: 'Day 12: Electrical Assembly Part 3 & Software Flashing'},
       { title: 'Day 13: Pre-Flight & Autonomous Flight'},
       { title: 'Day 14: Troubleshooting & Maintenance of AG365S'},
       { title: 'Day 15: Practical Test & Closing Ceremony'}
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'drone-ttt-11day': { // Renamed
    id: 'drone-ttt-11day',
    name: 'Drone Train the Trainer (TTT) Course (9-11 Days)',
    rating: 5,
    reviewCount: getRandomInt(25, 120),
    isDgcaApproved: true, // Based on RPC + Instructor elements
    infoBoxes: [
      { label: 'Duration', value: '9 to 11 Days' },
      { label: 'Level', value: 'Advanced (For Certified Pilots)' },
      { label: 'Eligibility', value: 'Min Graduation Pass, 18-65 yrs' },
      { label: 'Focus', value: 'Become a Drone Instructor' }
    ],
    aboutCourse: "Advanced DGCA-aligned course to prepare certified pilots as drone instructors. Covers Small RPC syllabus plus teaching methodology, curriculum delivery, advanced flying, student evaluation, and RPTO compliance.",
    videoThumbnail: '/assets/img/ca2.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'Small RPC Core Content', value: 'Covered' },
      { icon: 'FaChalkboardTeacher', label: 'Teaching & Curriculum', value: '~2 Days' },
      { icon: 'FaPlaneDeparture', label: 'Advanced Flying & Sim', value: '~1 Day' },
      { icon: 'FaClipboardList', label: 'Evaluation & Compliance', value: '~1 Day' }
    ],
    whatYouWillLearn: [
      "All content from Small RPC Basic Course", "Teaching methodology", "Curriculum delivery techniques",
      "Advanced flying skills", "Advanced simulator & field training techniques", "Student evaluation methods",
      "Regulatory compliance and SOPs", "Knowledge About RPTO Documentation", "Batch Planning Session techniques", "Viva Exam Preparation"
    ],
    courseContent: [
      { title: 'Module 1: Small RPC Core Recap & Advanced Theory', day: '1-5', details: ["Review of RPC syllabus", "Advanced Regulations", "Instructional Theory"] },
      { title: 'Module 2: Teaching Methodology & Practice', day: '6-7', details: ["Curriculum Delivery", "Classroom Management", "Practical Instruction Techniques"] },
      { title: 'Module 3: Advanced Flying & Evaluation', day: '8-9', details: ["Complex Maneuvers Instruction", "Simulator Scenarios", "Student Assessment Methods"] },
      { title: 'Module 4: RPTO Procedures & Final Prep', day: '10-11', details: ["Documentation & Compliance", "Batch Planning", "Viva Exam Practice", "Certification"] }
    ],
    upcomingBatches: [getRandomDate()] // Upcoming status noted in PDF 1
  },

 // ========= Courses Added/Updated from PDF 2 ==========

  'small-rpc-basic-7day': { // Replaces 'small-rpc-basic' from PDF 1
    id: 'small-rpc-basic-7day',
    name: 'Small Remote Pilot Certification (RPC) Course (5-7 Days)',
    rating: 5,
    reviewCount: getRandomInt(50, 250),
    isDgcaApproved: true,
    infoBoxes: [
      { label: 'Duration', value: '5 to 7 Days' },
      { label: 'Drone Class', value: 'Small (2 - 25 kg)' },
      { label: 'Eligibility', value: 'Min 10th Pass, 18-65 yrs' },
      { label: 'Certification', value: 'DGCA RPC (Small)' }
    ],
    aboutCourse: "Official DGCA-approved Remote Pilot Certificate (RPC) course for operating Small class drones (2-25kg) legally in India. Equips aspiring pilots with essential knowledge, skills, and certification covering regulations, safety, and practical flying.",
    videoThumbnail: '/assets/img/ca5.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [ // Based on PDF 2, Pages 6-8
      { icon: 'FaBook', label: 'Theory Sessions', value: 'Day 1-2' },
      { icon: 'FaLaptopCode', label: 'Theory Test & Simulation', value: 'Day 3' },
      { icon: 'FaPaperPlane', label: 'Practical Flying', value: 'Day 4-6' },
      { icon: 'FaFileSignature', label: 'Documentation & Test', value: 'Day 6-7' },
      { icon: 'FaCertificate', label: 'Certification', value: 'Day 7' }
    ],
    whatYouWillLearn: [ // Combined from PDF 2, Page 6 & 8
        "Drone Rules 2021 & Stakeholders", "Basic Principles of Flight", "ATC Procedures",
        "UAV Classification & Categories", "Fixed Wing & Aerodynamics", "Rotorcraft & Hybrid Systems",
        "Drone Maintenance", "Weather & Meteorology", "Emergency Procedures", "Payload Management",
        "Data & Analysis Basics", "Simulator Flying", "Drone Assembly/Disassembly", "Digital Sky Platform",
        "Flight Checks (Pre, In, Post)", "Take-Off, Landing, Hovering", "Solo & Instructor-Guided Flying",
        "Flight Patterns & Shapes", "Flying in Various Conditions", "Night Flying", "Mission Planning",
        "Emergency Recovery", "Log Book Filling"
    ],
    courseContent: [ // Based on PDF 2, Pages 6-8
        { title: 'Day 1 & 2: Theory Sessions', day: '1-2', details: ["Rules 2021, Flight Principles, ATC", "UAV Categories, Aerodynamics", "Maintenance, Weather, Emergency", "Payload, Data Analysis"] },
        { title: 'Day 3: Theory Test & Simulation', day: '3', details: ["Written Theory Test", "Simulator Training", "Drone Assembly/Disassembly Knowledge", "Digital Sky Platform Intro"] },
        { title: 'Day 4, 5 & 6: Hands-on Practical Training', day: '4-6', details: ["Pre/In/Post-Flight Checks", "Basic Maneuvers (Take-off, Hover, Land)", "Solo & Guided Flight Practice", "Pattern Flying (Shapes)", "Night Flying Practice", "Different Drone Modes", "Mission Planning Basics", "Emergency Drills"] },
        { title: 'Day 6 & 7: Documentation, Final Test & Certification', day: '6-7', details: ["Log Book Filling Practice", "Q&A Session", "Final Practical Flight Test", "Documentation Completion", "Certification Issuance"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate(), getRandomDate()]
  },

   'medium-rpc-basic-7day': { // Replaces 'medium-rpc-basic' from PDF 1
    id: 'medium-rpc-basic-7day',
    name: 'Medium Remote Pilot Certification Course (7 Days)',
    rating: 5,
    reviewCount: getRandomInt(45, 220),
    isDgcaApproved: true,
    infoBoxes: [
      { label: 'Duration', value: '7 Days' },
      { label: 'Drone Class', value: 'Medium (25-150 kg)' }, // Standard DGCA definition assumed
      { label: 'Eligibility', value: 'Min 10th Pass, 18-65 yrs' },
      { label: 'Certification', value: 'DGCA RPC (Medium)' }
    ],
    aboutCourse: "Official DGCA-approved Remote Pilot Certificate (RPC) course for operating Medium class drones (25-150kg). Covers advanced maneuvers, mission planning, in-depth regulations, and real-world applications alongside core piloting skills.",
    videoThumbnail: '/assets/img/ca3.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [ // Assumed similar structure to Small RPC based on PDF2 structure
      { icon: 'FaBook', label: 'Theory Sessions (Incl. Advanced)', value: 'Day 1-2' },
      { icon: 'FaLaptopCode', label: 'Theory Test & Simulation', value: 'Day 3' },
      { icon: 'FaPaperPlane', label: 'Practical Flying (Medium Class)', value: 'Day 4-6' },
      { icon: 'FaFileSignature', label: 'Mission Planning & Test', value: 'Day 6-7' },
      { icon: 'FaCertificate', label: 'Certification', value: 'Day 7' }
    ],
    whatYouWillLearn: [ // From PDF 2 Page 5 & inferred additions for Medium
        "All Small RPC topics", "Advanced Flight Maneuvers specific to Medium Class",
        "Detailed Mission Planning & Execution", "In-depth study of DGCA Drone Regulations for Medium Class",
        "Real-world Flight Applications (e.g., advanced mapping/inspection prep)",
        "Payload Management for heavier drones", "Risk Assessment for complex operations"
    ],
    courseContent: [ // Extrapolated based on PDF 2 RPC structure + Medium specific points
        { title: 'Day 1 & 2: Theory Sessions', day: '1-2', details: ["Review Small RPC Theory", "Medium Class Regulations & Aerodynamics", "Advanced Mission Planning Theory", "Payload Integration"] },
        { title: 'Day 3: Theory Test & Simulation', day: '3', details: ["Medium Class Theory Test", "Advanced Simulator Scenarios", "Medium Drone Systems Overview"] },
        { title: 'Day 4, 5 & 6: Hands-on Practical Training', day: '4-6', details: ["Medium Drone Pre-flight & Handling", "Advanced Maneuvers Practice", "Simulated Payload Operations", "Real-world Scenario Flying"] },
        { title: 'Day 7: Final Test & Certification', day: '7', details: ["Mission Execution Test", "Final Practical Flight Test (Medium)", "Documentation & Debrief", "Certification"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'rpc-agri-8day': { // New entry from PDF 2
    id: 'rpc-agri-8day',
    name: 'Remote Pilot Certification (RPC) with Agri (8 Days)',
    rating: 5,
    reviewCount: getRandomInt(40, 170),
    isDgcaApproved: true,
    infoBoxes: [
      { label: 'Duration', value: '8 Days' },
      { label: 'Drone Class', value: 'Small/Medium (Implied)' },
      { label: 'Eligibility', value: 'Min 10th Pass, 18-65 yrs' },
      { label: 'Focus', value: 'RPC + Agricultural Ops' }
    ],
    aboutCourse: "Combines the general DGCA Remote Pilot Certification with focused training on agricultural drone operations. Includes hands-on experience with Agri-drones, covering spraying, safety, and specific techniques.",
    videoThumbnail: '/assets/img/ca7.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'General RPC Modules', value: '~5-6 Days' },
      { icon: 'FaTractor', label: 'Agri Drone Theory & Practice', value: '~2-3 Days' }
    ],
    whatYouWillLearn: [
        "Core DGCA RPC syllabus (Small or Medium, specify if known)",
        "Specifics of Agricultural Drone Operations",
        "Hands-on Flying with Agri-Drones",
        "Spraying techniques and calibration",
        "Safety protocols for agricultural environments",
        "Basic maintenance for Agri-drones"
    ],
    courseContent: [
        { title: 'Module 1: General RPC Training', day: '1-5/6', details: ["Covers theory, simulation, and basic practical flying as per DGCA RPC syllabus."] },
        { title: 'Module 2: Agricultural Drone Operations', day: '6/7-8', details: ["Intro to Agri Drones", "Payloads & Spraying Systems", "Field Operations & Safety", "Hands-on Agri-Drone Flying", "Regulations & Maintenance"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'drone-technician-9day': { // New entry from PDF 2
    id: 'drone-technician-9day',
    name: 'Drone Technician Course (9 Days)',
    rating: 5,
    reviewCount: getRandomInt(45, 190),
    isDgcaApproved: false,
    infoBoxes: [
      { label: 'Duration', value: '9 Days' },
      { label: 'Focus', value: 'Repair, Maintenance, Troubleshooting' },
      { label: 'Level', value: 'Comprehensive' },
      { label: 'Outcome', value: 'Technician Skills' }
    ],
    aboutCourse: "A 9-day comprehensive drone repair and maintenance training program. Covers hardware/software troubleshooting, drone assembly, calibration, and practical repair skills.",
    videoThumbnail: '/assets/img/ca4.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [ // Based on PDF 2, Page 5 - less detail than 15day course page
      { icon: 'FaTools', label: 'Repair & Maintenance Fundamentals', value: 'Intro' },
      { icon: 'FaWrench', label: 'Hardware Troubleshooting', value: 'Core' },
      { icon: 'FaLaptopCode', label: 'Software Troubleshooting', value: 'Core' },
      { icon: 'FaMicrochip', label: 'Assembly & Calibration', value: 'Practical' },
      { icon: 'FaCertificate', label: 'Skills Assessment', value: 'Final' }
    ],
    whatYouWillLearn: [
        "Comprehensive Drone Repair Techniques",
        "Hardware and Software Troubleshooting",
        "Component Level Diagnostics",
        "Drone Assembly Procedures",
        "System Calibration",
        "Maintenance Best Practices"
    ],
    courseContent: [ // Using details from PDF 2 Page 10 breakdown for structure
       { title: 'Day 1: Intro & Basic Electronics', day: '1-2', details: ["Aviation Basics, Drone Tech Intro", "Electronic Components ID", "Safety Measures"] },
       { title: 'Day 2-3: Systems & Soldering', day: '2-4', details: ["Propulsion, ESCs, Motors", "Battery Management", "Soldering Basics & Practice"] },
       { title: 'Day 4-5: Assembly & Programming', day: '4-5', details: ["F450 Assembly (Example)", "Flight Controller Programming Intro", "Mechanical Assembly Practice"] },
       { title: 'Day 6: Flight Testing & Basic Troubleshooting', day: '6', details: ["Post-Assembly Test Flights", "Identifying Common Issues", "Basic Fault Finding"] },
       { title: 'Day 7: Advanced Troubleshooting & Maintenance', day: '7-8', details: ["Electrical Systems Check", "Software/Firmware Issues", "Maintenance Schedules (AG365S Example)", "Advanced Fault Diagnosis"] },
       { title: 'Day 9: Final Practice & Assessment', day: '9', details: ["Practical Repair Task", "Calibration Checks", "Final Q&A and Assessment"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'rpc-instructor-15day': { // New entry from PDF 2 (TTT)
    id: 'rpc-instructor-15day',
    name: 'RPC + Remote Pilot Instructor Course (RPI/TTT - 15 Days)',
    rating: 5,
    reviewCount: getRandomInt(30, 130),
    isDgcaApproved: true,
    infoBoxes: [
      { label: 'Duration', value: '15 Days' },
      { label: 'Level', value: 'Advanced (For RPC Holders)' },
      { label: 'Eligibility', value: 'DGCA RPC + Experience (Implied)' },
      { label: 'Focus', value: 'Become Drone Instructor' }
    ],
    aboutCourse: "Designed for certified pilots aspiring to become drone training instructors. This 15-day program covers advanced instructional techniques, teaching methodologies, simulator/field training leadership, and DGCA requirements for instructors.",
    videoThumbnail: '/assets/img/ca8.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'RPC Knowledge Review', value: 'Foundation' },
      { icon: 'FaChalkboardTeacher', label: 'Instructional Techniques', value: 'Core Teaching' },
      { icon: 'FaLaptopCode', label: 'Teaching Methodologies', value: 'Pedagogy' },
      { icon: 'FaPaperPlane', label: 'Simulator & Field Training Leadership', value: 'Practical Instruction' },
      { icon: 'FaClipboardList', label: 'Assessment & Compliance', value: 'Evaluation & Rules' }
    ],
    whatYouWillLearn: [
        "Advanced DGCA Regulations for Training",
        "Effective Instructional Techniques",
        "Modern Teaching Methodologies",
        "How to Conduct Simulator Training Sessions",
        "Leading Practical Field Training Safely",
        "Student Assessment and Evaluation",
        "RPTO Operations and Compliance",
        "Curriculum Development Basics"
    ],
    courseContent: [
        { title: 'Module 1: Foundations & Regulations', day: '1-3', details: ["RPC Syllabus Deep Dive", "Advanced Air Law & Procedures", "Role of a Drone Instructor"] },
        { title: 'Module 2: Teaching Principles', day: '4-6', details: ["Learning Theories", "Instructional Design Basics", "Classroom Management", "Communication Skills"] },
        { title: 'Module 3: Practical Instruction - Simulator', day: '7-9', details: ["Simulator Setup & Scenarios", "Guiding Students on Simulators", "Assessing Simulator Performance", "Debriefing Techniques"] },
        { title: 'Module 4: Practical Instruction - Field', day: '10-12', details: ["Field Safety Management", "Conducting Practical Flight Lessons", "Demonstrating Maneuvers", "Handling Student Errors", "Emergency Drill Leadership"] },
        { title: 'Module 5: Assessment & RPTO Ops', day: '13-15', details: ["Developing Assessment Tools", "Conducting Practical Tests", "Providing Feedback", "RPTO Documentation & Compliance", "Final Instructor Assessment"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'drone-security-officer-20day': { // New entry from PDF 2
    id: 'drone-security-officer-20day',
    name: 'Drone Security Officer Training (20 Days)',
    rating: 5,
    reviewCount: getRandomInt(20, 100),
    isDgcaApproved: false, // Specific security focus, likely not a direct DGCA pilot cert focus
    infoBoxes: [
      { label: 'Duration', value: '20 Days' },
      { label: 'Focus', value: 'Surveillance, Security Ops' },
      { label: 'Target Audience', value: 'Security Personnel, Law Enforcement' },
      { label: 'Skills', value: 'Advanced Handling, Risk Assessment' }
    ],
    aboutCourse: "A specialized 20-day training program focused on using drones for surveillance, security, and law enforcement applications. Covers advanced drone handling for security personnel, risk assessment, and emergency protocols.",
    videoThumbnail: '/assets/img/course-security.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaUserShield', label: 'Security Drone Applications', value: 'Intro' },
      { icon: 'FaEye', label: 'Surveillance Techniques', value: 'Core Skill' }, // FaEye might not be in standard react-icons/fa
      { icon: 'FaPlaneDeparture', label: 'Advanced Drone Handling', value: 'Practical Skill' },
      { icon: 'FaShieldAlt', label: 'Risk Assessment & Protocols', value: 'Procedure' },
      { icon: 'FaExclamationTriangle', label: 'Emergency Response', value: 'Critical Skill' } // FaExclamationTriangle might not be in standard react-icons/fa
    ],
    whatYouWillLearn: [
        "Drone Use in Surveillance Operations",
        "Security Protocols for Drone Deployment",
        "Law Enforcement Drone Applications",
        "Advanced Drone Handling for Tactical Situations",
        "Night Operations with Drones",
        "Thermal Imaging Payloads Usage",
        "Risk Assessment for Security Missions",
        "Developing Emergency Protocols",
        "Evidence Collection using Drones",
        "Counter-Drone Awareness (Basic)"
    ],
    courseContent: [
        { title: 'Module 1: Intro to Drones in Security', day: '1-3', details: ["Drone Types for Security", "Legal Framework (Security Ops)", "Basic Flight Refresher"] },
        { title: 'Module 2: Surveillance Techniques', day: '4-7', details: ["Mission Planning for Surveillance", "Payloads (Optical, Thermal)", "Covert Observation Techniques", "Data Management & Analysis"] },
        { title: 'Module 3: Advanced Handling & Tactics', day: '8-12', details: ["Confined Space Flying", "Dynamic Environment Operations", "Team Coordination", "Night Flying Techniques"] },
        { title: 'Module 4: Risk, Protocols & Emergencies', day: '13-16', details: ["Threat Assessment", "Risk Mitigation Strategies", "Developing SOPs", "Emergency Response Drills", "Communication Protocols"] },
        { title: 'Module 5: Scenario Training & Assessment', day: '17-20', details: ["Real-world Security Scenarios", "Evidence Handling Simulation", "Counter-UAS Basics", "Final Assessment (Practical & Theory)"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'survey-mapping-rpc-8day': { // New entry from PDF 2
    id: 'survey-mapping-rpc-8day',
    name: 'Survey & Mapping with RPC (8 Days)',
    rating: 5,
    reviewCount: getRandomInt(35, 150),
    isDgcaApproved: true, // Includes RPC
    infoBoxes: [
      { label: 'Duration', value: '8 Days' },
      { label: 'Focus', value: 'Geospatial Data, Mapping' },
      { label: 'Includes', value: 'DGCA RPC + Mapping' },
      { label: 'Skills', value: 'GIS Integration, Survey Projects' }
    ],
    aboutCourse: "Combines DGCA Remote Pilot Certification with specialized training in drone-based surveying and mapping. Learn to use drones for geospatial data collection, GIS integration, analysis, and executing real-world survey projects.",
    videoThumbnail: '/assets/img/ca3.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCertificate', label: 'DGCA RPC Training', value: '~5-6 Days' },
      { icon: 'FaMapMarkedAlt', label: 'Surveying & Mapping Theory', value: '~1 Day' },
      { icon: 'FaProjectDiagram', label: 'Practical Mapping Projects', value: '~1-2 Days' },
      { icon: 'FaRulerCombined', label: 'GIS Integration & Analysis', value: 'Integrated' }
    ],
    whatYouWillLearn: [
        "Core DGCA RPC Syllabus",
        "Principles of Aerial Surveying & Photogrammetry",
        "Using Drones for Geospatial Data Collection",
        "Flight Planning for Mapping Missions",
        "Data Processing for Orthomosaics & 3D Models",
        "GIS Integration and Basic Analysis",
        "Conducting Real-world Surveying Projects",
        "Accuracy Assessment"
    ],
    courseContent: [
        { title: 'Module 1: DGCA RPC Training', day: '1-5/6', details: ["Covers standard DGCA RPC syllabus for chosen class (Small/Medium)."] },
        { title: 'Module 2: Surveying & Mapping Fundamentals', day: '6/7', details: ["Photogrammetry Basics Recap", "Geospatial Data Concepts", "Mapping Flight Planning Apps", "GCP Theory"] },
        { title: 'Module 3: Practical Mapping & Processing', day: '7/8', details: ["Field Data Acquisition Practice", "Data Processing Workflow (Pix4D/Metashape)", "Generating Outputs (Ortho, DSM)", "GIS Integration Basics", "Project Reporting"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  },

  'fpv-build-pilot-15day': { // New entry from PDF 2
    id: 'fpv-build-pilot-15day',
    name: 'FPV Drones (Build & Pilot Training - 15 Days)',
    rating: 5,
    reviewCount: getRandomInt(25, 110),
     isDgcaApproved: false, // FPV often falls outside standard RPC, focus is build/skill
    infoBoxes: [
      { label: 'Duration', value: '15 Days' },
      { label: 'Focus', value: 'FPV Build, Flying Modes' },
      { label: 'Skills', value: 'Immersive FPV Piloting' },
      { label: 'Level', value: 'Comprehensive FPV' }
    ],
    aboutCourse: "A comprehensive 15-day course covering First-Person View (FPV) drone building and piloting. Learn to assemble your own FPV drone, understand different FPV modes (Acro, Angle), and master the piloting techniques needed for immersive and precise FPV flying.",
    videoThumbnail: '/assets/img/ca8.jpg', // Placeholder
    videoUrl: null,
    courseBreakdown: [
      { icon: 'FaCogs', label: 'FPV Drone Components & Theory', value: 'Foundation' },
      { icon: 'FaTools', label: 'Hands-on FPV Drone Build', value: 'Practical Build' },
      { icon: 'FaLaptopCode', label: 'Configuration & Setup', value: 'Software' },
      { icon: 'FaBroadcastTower', label: 'FPV Flying Modes & Simulator', value: 'Skill Development' }, // FaBroadcastTower might not be standard
      { icon: 'FaPaperPlane', label: 'Practical FPV Flying', value: 'Mastery' }
    ],
    whatYouWillLearn: [
        "FPV Drone Components (Motors, ESCs, FC, VTX, Camera)",
        "Frame Assembly and Component Soldering",
        "Flight Controller Software (e.g., Betaflight) Configuration",
        "Radio Transmitter Setup and Binding",
        "FPV Goggle Setup and Usage",
        "Understanding FPV Flight Modes (Angle, Horizon, Acro)",
        "Simulator Training for FPV Control",
        "Basic FPV Piloting Techniques",
        "Intermediate Acro Mode Maneuvers",
        "FPV Safety Procedures and Regulations (where applicable)"
    ],
    courseContent: [
        { title: 'Module 1: FPV Fundamentals & Components', day: '1-3', details: ["Intro to FPV", "Component Selection & Theory", "Tools & Safety", "Basic Electronics & Soldering Intro"] },
        { title: 'Module 2: FPV Drone Assembly', day: '4-7', details: ["Frame Assembly", "Motor & ESC Installation/Soldering", "Flight Controller & PDB Wiring", "VTX & Camera Installation"] },
        { title: 'Module 3: Software Configuration', day: '8-9', details: ["Connecting to Configurator (Betaflight)", "Firmware Flashing", "Port Setup, PID Tuning Basics", "OSD Setup", "Radio Setup & Binding"] },
        { title: 'Module 4: Simulator & Basic Piloting', day: '10-12', details: ["FPV Simulator Practice (Angle/Horizon)", "Introduction to Acro Mode (Sim)", "Basic Line-of-Sight FPV Flying", "Getting Used to Goggles"] },
        { title: 'Module 5: Advanced FPV Flying & Practice', day: '13-15', details: ["Acro Mode Practice (Real World)", "Basic Flips & Rolls", "Obstacle Navigation", "Troubleshooting Common Issues", "Final Flight Assessment"] }
    ],
    upcomingBatches: [getRandomDate(), getRandomDate()]
  }

}; // End of allCourseDetails object

// Ensure all used icons are imported at the top
export const iconMap = { FaCertificate, FaBookOpen, FaLaptopCode, FaTools, FaHandsHelping, FaFileAlt, FaSyncAlt, FaPlaneDeparture, FaMapMarkedAlt, FaProjectDiagram, FaBook, FaPaperPlane, FaTractor, FaSprayCan, FaWrench, FaMicrochip, FaPlane, FaChalkboardTeacher, FaClipboardList, FaFileSignature, FaShieldAlt, FaUserShield, FaRulerCombined, FaCogs, FaBroadcastTower, FaEye: FaMapMarkedAlt, FaExclamationTriangle: FaClipboardList }; // Added mappings for potentially missing icons