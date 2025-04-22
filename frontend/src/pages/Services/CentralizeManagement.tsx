import React from "react";
import { Link } from "react-router-dom";
import styles from "./CentralizeManagement.module.css";

const CentralizeManagement = () => {
  const features = [
    {
      title: "Enable continuous re-optimization",
      description:
        "of data center power, cooling expenses, or space usage. \n\nThis can help defer capital expenses for expanding data centers or building new ones.",
      icon: "🔄",
    },
    {
      title: "Integrate IT & facilities management",
      description:
        "This helps bridge the gap between the IT manager and the facilities manager by supplying each with information and analysis. \n\nBringing back together these two interrelated positions.",
      icon: "🔗",
    },
    {
      title: "Achieve greater energy",
      description:
        "Energy cost savings alone are enough to make a business case for justifying the purchase of facilities. \n\nOther benefits that are more difficult to quantify, such as improved workflow.",
      icon: "⚡",
    },
    {
      title: "EModel & Simulate",
      description:
        "Model and/or simulate the actions and the resulting the IT manager and the facilities manager to monitor and analyze. Create 'What if' scenarios to predict and optimize system performance.",
      icon: "📊",
    },
    {
      title: "Improvement",
      description:
        "Enhance resource and asset management by showing how the resources/assets are interrelated.",
      icon: "📈",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.highlight}>CENTRALIZE</span>{" "}
          <span className={styles.Management_29_186}>MANAGEMENT</span>
        </h1>
        <p className={styles.subtitle}>
          NEW CONTENT NEW CONTENT NEW CONTENT NEW CONTENT NEW CONTENT NEW
          CONTENT NEW CONTENT NEW CONTENT
        </p>
      </div>

      <div className={styles.cityBackground}></div>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <div className={styles.Rectangle_26_29_195}></div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.SolutionsCardBackground}></div>
      <div className={styles.navigation}>
        <Link to="/services/data-center" className={styles.navLink}>
          &lt; Data center
        </Link>
        <Link to="/services/multimedia-solution" className={styles.navLink}>
          MULTI MEDIA SOLUTION &gt;
        </Link>
      </div>
    </div>
  );
};

export default CentralizeManagement;
