// MainContent.jsx
import React from 'react';
import styles from '../css/Dashboard.module.css'; // Use the same CSS module

// --- Helper Function to Render Tables ---
const DataTable = ({ data, columns }) => {
  if (!data || data.length === 0) {
    return <p className={styles.noData}>No data available for this section.</p>;
  }

  return (
    <div className={styles.tableContainer}> {/* Wrapper for horizontal scroll */}
      <table className={styles.dataTable}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
             {/* Optional: Add Action column header if needed */}
             {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id || index}> {/* Use a unique ID if available */}
              {columns.map((col) => (
                <td key={col.key} data-label={col.header}> {/* data-label for mobile */}
                   {/* Basic rendering, you might want formatting (dates, etc.) */}
                   {item[col.key]}
                 </td>
              ))}
              {/* Optional: Add Action buttons */}
              {/*
              <td>
                  <button className={styles.actionButtonView}>View</button>
                  <button className={styles.actionButtonDelete}>Delete</button>
              </td>
              */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// --- End Helper Function ---


function MainContent({ activeSection, data, loading, error }) {

  const getSectionData = () => {
    switch (activeSection) {
      case 'bookings':
        return {
          title: 'Browse Drone Bookings',
          columns: [
           // Or use index if no _id
            { header: 'Name', key: 'name' },
            { header: 'Email', key: 'email' },
            { header: 'Phone', key: 'phone' },
            { header: 'City', key: 'city' },
            { header: 'drone', key: 'drone' },
             // Add other relevant booking fields
          ],
          items: data.bookings,
        };
      case 'contacts':
        return {
          title: 'Browse Contact Enquiries',
          columns: [
           
            { header: 'Name', key: 'name' },
            { header: 'Email', key: 'email' },
            { header: 'Phone', key: 'phone' },
            { header: 'City', key: 'city' },
            { header: 'Message', key: 'message' },
              // Add other relevant contact fields
          ],
          items: data.contacts,
        };
      case 'enrollments':
        return {
          title: 'Browse Course Enrollments',
          columns: [
           
            { header: 'Name', key: 'name' },
            { header: 'Email', key: 'email' },
            { header: 'Phone', key: 'phone' },
            { header: 'City', key: 'city' },
            { header: 'Course', key: 'course' },
             // Add other relevant enrollment fields
          ],
          items: data.enrollments,
        };
      default:
        return { title: 'Dashboard', columns: [], items: [] };
    }
  };

  const { title, columns, items } = getSectionData();

  return (
    <main className={styles.mainContent}>
      <div className={styles.mainHeader}>
        <h2>{title}</h2>
        {/* Add maybe a refresh button or other controls */}
      </div>

      <div className={styles.contentArea}>
        {loading && <div className={styles.loading}>Loading data...</div>}
        {error && <div className={styles.error}>Error: {error}</div>}
        {!loading && !error && <DataTable data={items} columns={columns} />}
      </div>
    </main>
  );
}

export default MainContent;