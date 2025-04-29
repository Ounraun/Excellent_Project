import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CentralizeManagement.module.css";

const CentralizeManagement = () => {
  interface Feature {
    id: number;
    documentId: string;
    mainSubTitle: string; // mainSubTitle เป็นสตริง
    content: ContentItem[]; // content เป็นอาร์เรย์ของ ContentItem
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }

  interface ContentItem {
    id: number;
    title: string;
    subtitle: string | null; // subtitle อาจเป็น null ได้
    content: string;
  }

  const [feature, setFeature] = useState<Feature | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // ดึงข้อมูลจาก API
    fetch(`${apiUrl}/api/centralize-management?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setFeature(data.data); // สมมติว่า Strapi ส่งข้อมูลในรูปแบบ { data: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching features:", error);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) {
    return <div className={styles.container}>กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }
  console.log(feature);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.highlight}>CENTRALIZE</span>{" "}
          <span className={styles.Management_29_186}>MANAGEMENT</span>
        </h1>
        <p className={styles.subtitle}>
          {feature?.mainSubTitle || "Loading..."}
        </p>
      </div>

      <div className={styles.cityBackground}></div>

      <div className={styles.featuresGrid}>
        {feature?.content.map((item) => (
          <div key={item.id} className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{item.title}</h3>
            <p className={styles.featureSubtitle}>
              {item.subtitle || "No subtitle"}
            </p>
            <p className={styles.featureContent}>{item.content}</p>
          </div>
        ))}
      </div>

      <div className={styles.SolutionsCardBackground}></div>
      <div className="navigation">
        <Link to="/services/data-center" className="navLink">
          &lt; Data center
        </Link>
        <Link to="/services/multimedia-solution" className="navLink">
          MULTI MEDIA SOLUTION &gt;
        </Link>
      </div>
    </div>
  );
};

export default CentralizeManagement;
