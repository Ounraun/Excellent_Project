import React from "react";
import { Link } from "react-router-dom";
import styles from "./DigitalTransformation.module.css";

const DigitalTransformation: React.FC = () => {
  const transformationItems = [
    "Paper Abolition In Section Communications",
    "Data Storage Transforming Into Digital",
    "Changing The Meeting Into Online Meeting",
    "Turning Information Systems Into Collecting Data For Analysis",
    "Workflow Automatization",
    "Changing Measurement Topics Or Adding Knowledge Type In The Organization",
    "Customer Relationship Management",
    "Automatization Customer Management System Both Presentation And Service",
    "Data Analytics System To Find New Sales Opportunities",
    "Sales Forecasting System",
    "Adding Tool For Automation Such As Greeting Information Or Interacting With Customers",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.digital}>DIGITAL</span>{" "}
          <span className={styles.transformation}>TRANSFORMATION</span>
        </h1>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <img
              src="/src/assets/DigitalTransformation/Maskgroup.png"
              alt="Digital Transformation"
              className={styles.mainImage}
            />
          </div>
          <div className={styles.description}>
            <p>Digital transformation is the process of using</p>
            <p>digital technologies to create new or modify existing</p>
            <p>business processes, culture,</p>
            <p>and customer experiences to meet</p>
            <p>changing business and market requirements.</p>
            <p>This reimagining of business</p>
            <p>in the digital age is digital transformation.</p>
          </div>
        </div>

        <div className={styles.transformationList}>
          <div className={styles.listContainer}>
            {transformationItems.map((item, index) => (
              <div key={index} className={styles.transformationItem}>
                <div className={styles.itemBar} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/services/data-management" className={styles.navLink}>
          &lt;Data management
        </Link>
        <Link to="/services/data-center" className={styles.navLink}>
          Data center&gt;
        </Link>
      </div>
    </div>
  );
};

export default DigitalTransformation;
