// Sidebar.jsx
import React from 'react';
import styles from '../css/Dashboard.module.css'; // Use the same CSS module

function Sidebar({ sections, activeSection, setActiveSection }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        Admin {/* Or your App Name */}
      </div>
      <nav className={styles.sidebarNav}>
        <ul>
          {sections.map((section) => (
            <li key={section.key}>
              <button
                className={`${styles.navButton} ${
                  activeSection === section.key ? styles.active : ''
                }`}
                onClick={() => setActiveSection(section.key)}
              >
                {/* Add icons here if desired */}
                {section.label}
              </button>
            </li>
          ))}
           {/* Example of other links */}
           {/*
           <li><button className={styles.navButton}>Settings</button></li>
           <li><a href="/" className={styles.navButton} target="_blank" rel="noopener noreferrer">Go To Website</a></li>
           */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;