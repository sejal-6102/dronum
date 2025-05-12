import React from 'react';
import { Link, Outlet } from 'react-router-dom'; // Assuming you use React Router
import { contentSchemas } from './contentSchemas';

const AdminLayout = () => {
  // Create a unique list of manageable sections for navigation
  const uniqueSections = Object.values(contentSchemas).reduce((acc, schema) => {
    // Group by adminPagePath or just list all distinct contentKeys with their labels
    // This example just lists all defined contentKeys
    if (!acc.find(s => s.contentKey === schema.contentKey)) {
        acc.push({
            label: schema.label,
            path: schema.adminPagePath || `/admin/edit/${schema.contentKey}` // Fallback path
        });
    }
    return acc;
  }, []);


  return (
    <div style={{ display: 'flex' }}>
      <nav style={{ width: '250px', borderRight: '1px solid #ccc', padding: '20px', background: '#f0f0f0', minHeight: '100vh' }}>
        <h2 style={{marginTop: 0}}>Admin Panel</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/admin">Dashboard (Home)</Link></li>
          {/* Dynamically generate links based on schemas */}
          {Object.values(contentSchemas).map(schema => (
            // Ensure each path is unique or group them by a page
            // This simple example assumes adminPagePath is defined and leads to the correct editor page
            schema.adminPagePath && (
                <li key={schema.contentKey} style={{marginBottom: '8px'}}>
                    <Link to={schema.adminPagePath}>{schema.label}</Link>
                </li>
            )
          ))}
           <hr/>
           {/* Hardcoded links for specific pages if not using adminPagePath approach fully */}
           <li style={{marginBottom: '8px'}}><Link to="/admin/manage-gallery-slider">Edit Gallery Slider</Link></li>
           <li style={{marginBottom: '8px'}}><Link to="/admin/manage-video-slider">Edit Video Slider</Link></li>
           {/* Add links to other management pages */}
        </ul>
      </nav>
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet /> {/* This is where your routed admin page components will render */}
      </main>
    </div>
  );
};

export default AdminLayout;