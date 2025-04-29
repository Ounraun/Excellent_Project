import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DigitalTransformation.module.css";

interface Transformation {
  id: number;
  documentId: string;
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: TransformationContent[]; // อาร์เรย์ของ TransformationContent
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface TransformationContent {
  id: number;
  title: string; // ชื่อของ Transformation Item
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: string | null; // เนื้อหา (อาจเป็น null)
}
const DigitalTransformation: React.FC = () => {
  const [transformationItem, setTransformationItem] =
    useState<Transformation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/digital-transformation?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTransformationItem(data.data); // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transformation items:", error);
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
  console.log(transformationItem);

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
            {/* <p>Digital transformation is the process of using</p>
            <p>digital technologies to create new or modify existing</p>
            <p>business processes, culture,</p>
            <p>and customer experiences to meet</p>
            <p>changing business and market requirements.</p>
            <p>This reimagining of business</p>
            <p>in the digital age is digital transformation.</p> */}
            {transformationItem?.subTitle}
          </div>
        </div>

        <div className={styles.transformationList}>
          <div className={styles.listContainer}>
            {transformationItem?.content.map((item) => (
              <div key={item.id} className={styles.transformationItem}>
                <div className={styles.itemBar} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation">
        <Link to="/services/data-management" className="navLink">
          &lt;Data management
        </Link>
        <Link to="/services/data-center" className="navLink">
          Data center&gt;
        </Link>
      </div>
    </div>
  );
};

export default DigitalTransformation;
