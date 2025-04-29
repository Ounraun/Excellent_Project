import React, { useState, useEffect } from "react";
import styles from "./DataManagement.module.css";
import descriptionIcon from "../../assets/DataManagement/87.png";

interface Service {
  id: number;
  documentId: string;
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: ServiceContent[]; // อาร์เรย์ของ ServiceContent
  serviceContent1: string;
  serviceContent2: string;
  subTitle1: string;
  subTitle2: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ServiceContent {
  id: number;
  title: string;
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: string | null; // เนื้อหา (อาจเป็น null)
}

const DataManagement: React.FC = () => {
  const [services, setServices] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/data-management?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setServices(data.data); // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
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
  console.log(services);
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
          <div className={styles.descriptionBox}>{services?.subTitle1}</div>

          <div className={styles.separator}></div>

          <div className={styles.descriptionBox}>{services?.subTitle2}</div>
        </div>
      </div>

      <div className={styles.servicesContainer}>
        <h2 className={styles.servicesTitle}>OUR SERVICES</h2>
        <div className={styles.servicesList}>
          <div className={styles.leftContent}>
            {services?.serviceContent1}
            <br></br>
            <br></br>
            {services?.serviceContent2}
          </div>

          <div className={styles.rightContent}>
            {/* {services.map((service, index) => (
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
            ))} */}
            {services?.content.map((item) => (
              <div key={item.id} className={styles.serviceItem}>
                <div
                  className={styles.serviceBar}
                  // style={{ height: `${(item.id + 1) * 5}px` }}
                />
                <div className={styles.serviceContent}>
                  <h3>{item.title}</h3>
                  <p>{item.content || "No content available"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="navigation">
        <a href="/services/multimedia-solution" className="navLink">
          {"<MULTI MEDIA SOLUTION"}
        </a>
        <a href="/services/digital-transformation" className="navLink">
          {"Digital transformation>"}
        </a>
      </div>
    </div>
  );
};

export default DataManagement;
