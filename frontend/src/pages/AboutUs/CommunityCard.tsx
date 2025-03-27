import React from "react";
import styles from "./CommunityCard.module.css"; // Ensure CSS module is typed

interface CommunityCardProps {
  // Define the expected props here
  title?: string; // Example property
}

const CommunityCard: React.FC<CommunityCardProps> = ({ title }) => {
  console.log(title);
  const handleRadioChange = () => {
    // Toggle class "blue" ใน body เมื่อมีการเปลี่ยนแปลง
    document.body.classList.toggle("blue");
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        zIndex: 99,
        position: "relative",
        top: "28%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={styles.container}>
        <input
          type="radio"
          name="slider"
          id="item-1"
          defaultChecked
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-2"
          onChange={handleRadioChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-3"
          onChange={handleRadioChange}
        />
        <div className="cards">
          <label className={styles.cardLayout} htmlFor="item-1" id="song-1">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  className={styles.myImage}
                  src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80"
                  alt="song"
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.description}>
                  The most anticipated event for office workers! This year, TEC
                  Outing takes us on an exciting trip to the Pearl Island of
                  Vietnam – Phu Quoc Island.
                </p>
                <p className={styles.date}>25 December 2024</p>
                <a href="#" className={styles.readMore}>
                  Read more
                </a>
              </div>
            </div>
            <div className={styles.cardTitle}>Company events</div>
          </label>
          

          <label className={styles.cardLayout} htmlFor="item-2" id="song-2">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <img
                  className={styles.myImage}
                  src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
                  alt="song"
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.description}>
                  The most anticipated event for office workers! This year, TEC
                  Outing takes us on an exciting trip to the Pearl Island of
                  Vietnam – Phu Quoc Island.
                </p>
                <p className={styles.date}>25 December 2024</p>
                <a href="#" className={styles.readMore}>
                  Read more
                </a>
              </div>
            </div>
            <div className={styles.cardTitle}>Knowledge</div>
          </label>
          <label className={styles.cardLayout} htmlFor="item-3" id="song-3">
            <div className={styles.card}>
              {/* ส่วนรูปภาพด้านบน + ชื่อ GrandWorld */}
              <div className={styles.cardHeader}>
                {/* <div className={styles.cardTitle}>GRANDWORLD</div> */}
                <img
                  className={styles.myImage}
                  src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                  alt="song"
                />
              </div>

              {/* ส่วนเนื้อหา (คำอธิบาย, วันที่, ลิงก์) */}
              <div className={styles.cardBody}>
                <p className={styles.description}>
                  The most anticipated event for office workers! This year, TEC
                  Outing takes us on an exciting trip to the Pearl Island of
                  Vietnam – Phu Quoc Island.
                </p>
                <p className={styles.date}>25 December 2024</p>
                <a href="#" className={styles.readMore}>
                  Read more
                </a>
              </div>
            </div>
            <div className={styles.cardTitle}>Society</div>

            {/* <img
              className={styles.myImage}
              src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="song"
            />
            <div>sdfdsf</div> */}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
