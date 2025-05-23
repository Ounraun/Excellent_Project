import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./DataCenter.module.css";
import type { Facility } from "../../types/dataCenter";
import { getDataCenter } from "../../services/strapi";

const DataCenter: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [facility, setFacility] = useState<Facility | null>(null);
  const { t, i18n } = useTranslation(["common", "dataCenter"]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    getDataCenter()
      .then((res) => setFacility(res.data))
      .catch((err) => console.error("Failed fetching Data Center:", err));
  }, [i18n.language]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.data}>{t("dataCenter:data")}</span>{" "}
          <span className={styles.center}>{t("dataCenter:center")}</span>
        </h1>
        <p className={styles.subtitle}>{facility?.subTitle || "Loading..."}</p>
      </div>

      <div className={styles.line}></div>

      <div className={styles.facilitiesSection}>
        <h2 className={styles.facilitiesTitle}>Facilities System</h2>

        <div className={styles.facilitiesGrid}>
          <div className={styles.leftColumn}>
            {facility?.content.slice(0, 5).map((item) => (
              <div key={item.id} className={styles.facilityCard}>
                {/* <span className={styles.facilityNumber}>{item.id}.</span> */}
                <h3 className={styles.facilityTitle}>{item.title}</h3>
                <p className={styles.facilityContent}>{item.content}</p>
              </div>
            ))}
          </div>

          <div className={styles.rightColumn}>
            {facility?.content.slice(5).map((item) => (
              <div key={item.id} className={styles.facilityCard}>
                {/* <span className={styles.facilityNumber}>{item.id}.</span> */}
                <h3 className={styles.facilityTitle}>{item.title}</h3>
                <p className={styles.facilityContent}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation">
        <Link to="/services/digital-transformation" className="navLink">
          &lt; DIGITAL TRANSFORMATION
        </Link>
        <Link to="/services/network-solution" className="navLink">
          NETWORK SOLUTION &gt;
        </Link>
      </div>
    </div>
  );
};

export default DataCenter;
