import React from "react";
import styles from "../../pages/Services/NetworkSolution.module.css";
import type { NetworkContent } from "../../pages/Services/NetworkSolution";

interface Props {
  item: NetworkContent;
  isGrouped?: boolean;
}

const ContentCard: React.FC<Props> = ({ item, isGrouped }) => (
  <div
    className={isGrouped ? `${styles.card} ${styles.groupedCard}` : styles.card}
  >
    <h2 className={styles.cardTitle}>{item.title}</h2>
    {item.subTitle && <h3 className={styles.cardSubtitle}>{item.subTitle}</h3>}
    <div className={styles.cardContent}>
      {item.content.split("\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  </div>
);

export default ContentCard;
