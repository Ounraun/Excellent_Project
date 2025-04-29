import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NetworkSolution.module.css";
import ContentCard from "../../components/NetworkSolutions/Card";
// import cityImage from "../../assets/NetworkSolution/city.webp";

interface ImageFormat {
  url: string; // URL ของรูปภาพในขนาดต่าง ๆ
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number; // ขนาดไฟล์ (KB)
}

interface MainImage {
  id: number;
  url: string; // URL ของรูปภาพหลัก
  alternativeText: string | null; // ข้อความอธิบายรูปภาพ (อาจเป็น null)
  caption: string | null; // คำบรรยายรูปภาพ (อาจเป็น null)
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  }; // รูปภาพในขนาดต่าง ๆ
  ext: string; // นามสกุลไฟล์
  mime: string; // ประเภท MIME
  size: number; // ขนาดไฟล์ (KB)
  createdAt: string; // วันที่สร้าง
  updatedAt: string; // วันที่อัปเดต
}
interface NetworkSolution {
  id: number;
  documentId: string;
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  subTitle2: string | null; // คำบรรยายเพิ่มเติม (อาจเป็น null)
  mainImage: MainImage; // URL ของรูปภาพหลัก
  content: NetworkContent[]; // อาร์เรย์ของ NetworkContent
  createdAt: string; // วันที่สร้าง
  updatedAt: string; // วันที่อัปเดต
  publishedAt: string; // วันที่เผยแพร่
}

export interface NetworkContent {
  id: number;
  title: string; // ชื่อของหัวข้อ
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: string; // เนื้อหา (ข้อความ)
}

const NetworkSolution: React.FC = () => {
  const [networkData, setNetworkData] = useState<NetworkSolution | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/network-solution?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setNetworkData(data.data); // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: {...} }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching network solution data:", error);
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
  if (!networkData) return null; // ถ้าไม่มีข้อมูลให้แสดง null

  const items = networkData.content;

  return (
    <div className={styles.container}>
      {/* ส่วนหัว */}
      <header className={styles.header}>
        <h1>
          <span className={styles.network}>NETWORK</span>{" "}
          <span className={styles.solution}>SOLUTION</span>
        </h1>
        <p className={styles.subtitle}>{networkData?.subTitle}</p>
      </header>

      {/* ส่วนภาพหลัก */}
      <div className={styles.mainImageContainer}>
        <img
          src={`${apiUrl}${networkData?.mainImage?.url}`}
          alt={networkData?.mainImage?.alternativeText || "Default Image"}
          className={styles.mainImage}
        />
      </div>

      {/* ส่วนคำอธิบาย */}
      <div className={styles.description}>
        <p>{networkData?.subTitle2}</p>
      </div>

      <div className={styles.contentSections}>
        {/* 1) Wire & Wireless */}
        <div className={styles.fullWrapper}>
          <ContentCard item={items[0]} />
        </div>

        {/* 2) Security + Surveillance */}
        <div className={styles.groupWrapper}>
          <ContentCard item={items[1]} isGrouped />
          <ContentCard item={items[2]} isGrouped />
        </div>

        {/* 3) Data Collection */}
        <div className={styles.fullWrapper}>
          <ContentCard item={items[3]} />
        </div>
      </div>

      {/* ส่วนการนำทาง */}
      <nav className="navigation">
        <Link to="/services/data-center" className="navLink">
          &lt; Data Center
        </Link>
        <Link to="/services/centralize-management" className="navLink">
          Centralize Management &gt;
        </Link>
      </nav>
    </div>
  );
};

export default NetworkSolution;
