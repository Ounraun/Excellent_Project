import React from "react";
import { Link } from "react-router-dom";
import styles from "./DataCenter.module.css";

const DataCenter: React.FC = () => {
  const facilities = [
    {
      id: 1,
      title: "Uninterruptible Power Supply (UPS)",
      content: "ADD new content",
    },
    {
      id: 2,
      title: "Cabling System",
      content: "ADD new content",
    },
    {
      id: 3,
      title: "Cabling System",
      content: "ADD new content",
    },
    {
      id: 4,
      title: "Power Distribution Unit",
      content: "ADD new content",
    },
    {
      id: 5,
      title: "Smart Rack",
      content: "ADD new content",
    },
    {
      id: 6,
      title: "Precision Air",
      content: "ADD new content",
    },
    {
      id: 7,
      title: "Raised Floor",
      content: "ADD new content",
    },
    {
      id: 8,
      title: "NOC Room",
      content: "ADD new content",
    },
    {
      id: 9,
      title: "Environmental Monitoring Systems",
      content: "ADD new content",
    },
    {
      id: 10,
      title: "Fire Suppression System",
      content: "ADD new content",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.data}>DATA</span>{" "}
          <span className={styles.center}>CENTER</span>
        </h1>
        <p className={styles.subtitle}>
          ADD NEW CONTENT NEW CONTENT NEW CONTENT NEW CONTENT NEW CONTENT NEW
          CONTENT NEW CONTENT NEW CONTENT ADD NEW CONTENT NEW CONTENT NEW
          CONTENT NEW CONTENT NEW CONTENT
        </p>
      </div>

      <div className={styles.facilitiesSection}>
        <h2 className={styles.facilitiesTitle}>Facilities System</h2>

        <div className={styles.facilitiesGrid}>
          <div className={styles.leftColumn}>
            {facilities.slice(0, 5).map((facility) => (
              <div key={facility.id} className={styles.facilityCard}>
                <span className={styles.facilityNumber}>{facility.id}.</span>
                <h3 className={styles.facilityTitle}>{facility.title}</h3>
                <p className={styles.facilityContent}>{facility.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.rightColumn}>
            {facilities.slice(5).map((facility) => (
              <div key={facility.id} className={styles.facilityCard}>
                <span className={styles.facilityNumber}>{facility.id}.</span>
                <h3 className={styles.facilityTitle}>{facility.title}</h3>
                <p className={styles.facilityContent}>{facility.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/services/digital-transformation" className={styles.navLink}>
          &lt;Digital transformation
        </Link>
        <Link to="/services/network-solution" className={styles.navLink}>
          NETWORK SOLUTION&gt;
        </Link>
      </div>
    </div>
  );
};

export default DataCenter;
