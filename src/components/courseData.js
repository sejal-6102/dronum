export const allCourseDetails = {
    'small-class-drone-pilot': {
      // ... data for small class drone pilot ...
    },
    'advanced-drone-maneuvers': {
      // ... data for advanced maneuvers ...
    },
    // YEH WALA HISSA CHECK KAREIN:
    'drone-mapping-surveying': { // <<< Kya yeh key मौजूद hai? Spelling sahi hai?
      id: 'drone-mapping-surveying', // ID andar bhi match karna chahiye
      name: 'Drone Mapping & Surveying', // Naam sahi hai?
      rating: 4.7, // Baaki saara data bhi hai?
      reviewCount: 22,
      infoBoxes: [
        { label: 'Application', value: 'Survey & GIS' },
        { label: 'Training Period', value: '6 Days' },
        { label: 'Software', value: 'Pix4D/Metashape' },
        { label: 'Output', value: 'Orthomosaics, 3D Models' },
      ],
      aboutCourse: `Learn how to use drones for creating accurate maps and 3D models...`,
      videoThumbnail: '/assets/img/co012.jpg', // Path sahi hai?
      videoUrl: 'https://www.youtube.com/watch?v=MAPPING_VIDEO_ID',
      courseBreakdown: [
          { icon: 'FaBookOpen', label: 'Photogrammetry Theory', value: '1 Day' },
          { icon: 'FaPlaneDeparture', label: 'Flight Planning', value: '1 Day' },
          { icon: 'FaMapMarkedAlt', label: 'Data Acquisition', value: '2 Days' },
          { icon: 'FaProjectDiagram', label: 'Data Processing', value: '2 Days' },
          { icon: 'FaFileAlt', label: 'Deliverables', value: 'Included' },
      ],
      whatYouWillLearn: [
          'Principles of Photogrammetry', 'Mission Planning Software (e.g., DroneDeploy, Map Pilot Pro)',
          'Ground Control Point (GCP) Placement', 'Optimal Flight Parameters for Mapping',
          'Processing with Pix4Dmapper/Agisoft Metashape', 'Generating Orthomosaics, DSM, DTM, Point Clouds',
          'Accuracy Assessment and Reporting',
      ],
      courseContent: [
          { title: 'Module 1: Mapping Fundamentals', day: 1, details: ['Intro to Photogrammetry...', 'Coordinate Systems...'] },
          { title: 'Module 2: Flight Planning & GCPs', day: 2, details: ['Using Flight Planning Apps...', 'GCP Best Practices...'] },
          // Add more modules...
      ],
      upcomingBatches: [
          { day: '05', monthYear: 'Jan 2025', time: '9:30 AM' },
          { day: '19', monthYear: 'Feb 2025', time: '9:30 AM' },
      ]
    } // <<< Is course ki entry yahan band honi chahiye
    // ... Maybe more courses ...
  };