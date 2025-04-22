import React from "react";
import { Link } from "react-router-dom";
import styles from "./NetworkSolution.module.css";
import cityImage from "../../assets/NetworkSolution/city.webp";

const NetworkSolution: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.network}>NETWORK</span>{" "}
          <span className={styles.solution}>SOLUTION</span>
        </h1>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.cityImageContainer}>
          <img src={cityImage} alt="City" className={styles.cityImage} />
        </div>

        <div className={styles.topBox}>
          <div className={styles.introText}>
            <p>
              The success of an organisation today will depend on it's ability
              to deliver the services that it's customers need.
            </p>
          </div>
          <div className={styles.description}>
            <p>
              In today's world of the ever fast moving information overload,
              computer networking is the essential element that any organization
              will need to incorporate if it is to succeed. Global and customer
              service is what any organization needs to survive, and computer
              networking is the blood cells that carry the all to its essential
              vital parts.
            </p>
          </div>
        </div>

        <div className={styles.wireSection}>
          <h2>WIRE AND WIRELESS</h2>
          <div className={styles.sectionContent}>
            <p>
              Communication is essential for modern society and
              technology-driven environments.
            </p>
            <p>Two primary methods of communication: "Wire" and "Wireless."</p>
            <p>
              Both wired and wireless communication have their strengths and
              weaknesses. The
            </p>
            <p>
              choice depends on specific needs, environments, and use cases.
            </p>
            <p>
              The evolving technology landscape continues to offer innovative
              solutions for seamless
            </p>
            <p>communication.</p>
          </div>
        </div>

        <div className={styles.securitySection}>
          <div className={styles.securityContent}>
            <h2>SECURITY SYSTEM</h2>
            <div className={styles.sectionContent}>
              <p>Securing the data on your network may not seem very</p>
              <p>important to you yet you lose your data on the privacy of</p>
              <p>your data content because you have no security on your</p>
              <p>network.</p>
              <p>Network data security should be a high priority when</p>
              <p>considering a network setup due to the growing threat of</p>
              <p>hackers trying to infect and compromise peoples and</p>
              <p>corporations, security is important to prevent industry</p>
              <p>sabotage and theft.</p>
              <p>The success of an organization today will depend on the</p>
              <p>ability to deliver the services that its customers need.</p>
            </div>
          </div>
        </div>

        <div className={styles.surveillanceSection}>
          <h2>SURVEILLANCE SYSTEM</h2>
          <div className={styles.sectionContent}>
            <p>Surveillance system an essential part of</p>
            <p>securing your home or business.</p>
            <p>These systems can range from wireless</p>
            <p>home security cameras to sophisticated</p>
            <p>systems that notify law enforcement</p>
            <p>at the first sign of trouble whether you're</p>
            <p>experiencing problems related to theft,</p>
            <p>vandalism, or productivity, your security</p>
            <p>cameras can provide you with the solutions</p>
            <p>you need to keep your employees, customers,</p>
            <p>and office from becoming easy targets.</p>
          </div>
        </div>

        <div className={styles.dataSection}>
          <h2>DATA COLLECTION</h2>
          <div className={styles.sectionContent}>
            <p>
              Logging and monitoring is a process that organizations perform by
              examining electronic
            </p>
            <p>
              audit logs for indications that unauthorized security-related
              activities have been
            </p>
            <p>processed, transmitted, or stores confidential information.</p>
            <p>
              When properly designed and implemented, system event logging and
              monitoring
            </p>
            <p>
              assists organizations to determine what has been recorded on their
              systems for follow-
            </p>
            <p>up investigation and if necessary remediation.</p>
          </div>
        </div>
      </div>

      <div className={styles.navigation}>
        <Link to="/services/data-center" className={styles.navLink}>
          &lt;data center
        </Link>
        <Link to="/services/centralize-management" className={styles.navLink}>
          CENTRALIZE MANAGEMENT&gt;
        </Link>
      </div>
    </div>
  );
};

export default NetworkSolution;
