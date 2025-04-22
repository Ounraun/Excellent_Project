import React from "react";
import styles from "./Multimedia.module.css";

interface ServiceItem {
  title: string;
  items: string[];
}

const Multimedia: React.FC = () => {
  const firstServices = [
    {
      title: "Control Room",
      items: [
        "Security Operation Center (SOC)",
        "Network Operation Center (NOC)",
        "Data Center",
        "Building & Enterprise",
      ],
    },
    {
      title: "Security Operation",
      items: ["Transportation Management", "Hospital", "Command Building"],
    },
    {
      title: "Digital Signage",
      items: ["Exhibition", "Department Store", "Outdoor Advertising"],
    },
  ];

  const secondServices = [
    {
      title: "Conference System",
      items: [
        "Add new content",
        "Add new content",
        "Add new content",
        "Add new content",
      ],
    },
    {
      title: "Interior & Design",
      items: [
        "Add new content",
        "Add new content",
        "Add new content",
        "Add new content",
      ],
    },
    {
      title: "Multimedia System",
      items: ["Add new content", "Add new content", "Add new content"],
    },
    {
      title: "Meeting Room Solution",
      items: [
        "Add new content",
        "Add new content",
        "Add new content",
        "Add new content",
      ],
    },
  ].slice(0, 4); // Ensure only 4 items for 2x2 grid

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span className={styles.gradientText}>MULTIMEDIA</span>
          <span className={styles.solution}>SOLUTION</span>
        </h1>
        <p className={styles.subtitle}>
          ADD NEW CONTENT NEW CONTENT NEW CONTE NTNEW CONTENT NEW CONTENT NEW
          CONTENT NEW CONTENT NEW CONTENT
        </p>
      </header>

      <div className={styles.backgroundsContainer}>
        <div className={styles.firstBackground}>
          <div className={styles.servicesGrid}>
            {firstServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.glowDot}></div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.secondBackground}>
          <div className={styles.servicesGrid}>
            {secondServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.glowDot}></div>
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className={styles.navigation}>
        <a href="/services/centralize-management" className={styles.navLink}>
          {"< CENTRALIZE MANAGEMENT"}
        </a>
        <a href="/services/data-management" className={styles.navLink}>
          {"Data management >"}
        </a>
      </nav>
    </div>
  );
};

export default Multimedia;
