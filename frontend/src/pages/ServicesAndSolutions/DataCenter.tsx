import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./DataCenter.module.css";

interface Facility {
  id: number;
  documentId: string;
  subTitle: string | null; // subTitle อาจเป็น null ได้
  content: FacilityContent[]; // content เป็นอาร์เรย์ของ FacilityContent
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface FacilityContent {
  id: number;
  title: string;
  subTitle: string | null; // subTitle อาจเป็น null ได้
  content: string;
}
const DataCenter: React.FC = () => {
  // const facilities = [
  //   {
  //     id: 1,
  //     title: "Uninterruptible Power Supply (UPS)",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 2,
  //     title: "Cabling System",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 3,
  //     title: "Cabling System",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 4,
  //     title: "Power Distribution Unit",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 5,
  //     title: "Smart Rack",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 6,
  //     title: "Precision Air",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 7,
  //     title: "Raised Floor",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 8,
  //     title: "NOC Room",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 9,
  //     title: "Environmental Monitoring Systems",
  //     content: "ADD new content",
  //   },
  //   {
  //     id: 10,
  //     title: "Fire Suppression System",
  //     content: "ADD new content",
  //   },
  // ];

  const [facility, setFacility] = useState<Facility | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/data-center?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setFacility(data.data); // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching facilities:", error);
        setError("เกิดข้อผิดพลาดในการโหลดข้อมูล");
        setLoading(false);
      });
  }, [apiUrl]);

  console.log(facility);
  if (loading) {
    return <div className={styles.container}>กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <span className={styles.data}>DATA</span>{" "}
          <span className={styles.center}>CENTER</span>
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
          &lt;Digital transformation
        </Link>
        <Link to="/services/network-solution" className="navLink">
          NETWORK SOLUTION&gt;
        </Link>
      </div>
    </div>
  );
};

export default DataCenter;
