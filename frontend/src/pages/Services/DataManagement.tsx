import React from "react";
import styles from "./DataManagement.module.css";
import descriptionIcon from "../../assets/DataManagement/87.png";

const DataManagement: React.FC = () => {
  const services = [
    {
      title: "INSTALLATION",
      content: "Add more content",
    },
    {
      title: "DESIGN, CONSULT AND CORRECTIVE",
      content: "Add more content",
    },
    {
      title: "WARRANTY RENEWAL & SPARE PART",
      content: "Add more content",
    },
    {
      title: "PM: PREVENTIVE MAINTENANCE",
      content: "Monthly, Yearly Maintenance Devices on-site service scheduled",
    },
    {
      title: "CM: CORRECTIVE MAINTENANCE",
      content:
        "On-call / On-site to troubleshoot and solve any kind of problem",
    },
    {
      title: "SLA CONTACT GUARANTEED",
      content: "Add more content",
    },
    {
      title: "SUPPORT AREA: NATIONWIDE SERVICE",
      content: "Add more content",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.data}>DATA</span>{" "}
          <span className={styles.management}>MANAGEMENT</span>
        </h1>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <img
            src={descriptionIcon}
            alt="Data Management"
            className={styles.mainImage}
          />
        </div>

        <div className={styles.rightSection}>
          <div className={styles.descriptionBox}>
            <p>Data Analysis Is The Process Of Systematically</p>
            <p>Applying Statistical And Logical Techniques</p>
            <p>To Describe And Illustrate,</p>
            <p>Condense, Recap And Evaluate Data</p>
          </div>

          <div className={styles.separator}></div>

          <div className={styles.descriptionBox}>
            <p>A Technology-Driven Process</p>
            <p>That Systematically Applies Statistical</p>
            <p>And Logical Techniques To Analyze Actionable</p>
            <p>Data Insights, Enabling Executives,</p>
            <p>Managers, And Employees</p>
            <p>To Make Positive Business Decisions.</p>
          </div>
        </div>
      </div>

      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>OUR SERVICES</h2>
        <div className={styles.servicesList}>
          <div className={styles.leftContent}>
            ADD NEW CONTENT NEW
            <br />
            CONTENT NEW CONTE NTNEW
            <br />
            CONTENT NEW
            <br />
            CONTENT NEW CONTENT NEW
            <br />
            CONTENT NEW CONTENT
          </div>
          <div className={styles.rightContent}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div
                  className={styles.serviceBar}
                  style={{ height: `${(index + 1) * 5}px` }}
                />
                <div className={styles.serviceContent}>
                  <h3>{service.title}</h3>
                  <p>{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <a href="/services/multimedia-solution" className={styles.navLink}>
          {"<MULTI MEDIA SOLUTION"}
        </a>
        <a href="/services/digital-transformation" className={styles.navLink}>
          {"Digital transformation>"}
        </a>
      </div>
    </div>
  );
};

export default DataManagement;
