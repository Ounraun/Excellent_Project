import React, { useState, useEffect } from "react";
import styles from "./Multimedia.module.css";

interface MultimediaService {
  id: number;
  documentId: string;
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: ServiceContent[]; // อาร์เรย์ของ ServiceContent
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ServiceContent {
  id: number;
  title: string; // ชื่อของบริการ
  subTitle: string | null; // คำบรรยายย่อย (อาจเป็น null)
  content: string; // เนื้อหา
}

const Multimedia: React.FC = () => {
  const [MultimediaService, setContent] = useState<MultimediaService | null>(
    null
  );
  // const [secondServices, setSecondServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/multimedie-solution?populate=*`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // สมมติว่า API ส่งข้อมูลในรูปแบบ { data: { firstServices: [...], secondServices: [...] } }
        setContent(data.data);
        // setSecondServices(data.data.secondServices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching multimedia services:", error);
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

  console.log(MultimediaService);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          <span className={styles.gradientText}>MULTIMEDIA</span>
          <span className={styles.solution}>SOLUTION</span>
        </h1>
        <p className={styles.subtitle}>{MultimediaService?.subTitle}</p>
      </header>

      <div className={styles.backgroundsContainer}>
        <div className={styles.firstBackground}>
          <div className={styles.servicesGrid}>
            {MultimediaService?.content.slice(0, 3).map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                {/* <div className={styles.glowDot}></div> */}
                <h3>{service.title}</h3>
                <ul>
                  {service.content
                    .split("\n")
                    .filter((item) => item.trim().startsWith("-"))
                    .map((filteredItem, index) => (
                      <li key={index}>{filteredItem}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.secondBackground}>
          <div className={styles.servicesGrid}>
            {MultimediaService?.content.slice(3, 7).map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                {/* <div className={styles.glowDot}></div> */}
                <h3>{service.title}</h3>
                <ul>
                  {service.content
                    .split("\n")
                    .filter((item) => item.trim().startsWith("-"))
                    .map((filteredItem, index) => (
                      <li key={index}>{filteredItem}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="navigation">
        <a href="/services/centralize-management" className="navLink">
          {"< CENTRALIZE MANAGEMENT"}
        </a>
        <a href="/services/data-management" className="navLink">
          {"Data management >"}
        </a>
      </nav>
    </div>
  );
};

export default Multimedia;
