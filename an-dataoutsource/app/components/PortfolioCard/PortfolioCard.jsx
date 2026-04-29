import { CheckCircle } from 'lucide-react';
import styles from './PortfolioCard.module.css';

export default function PortfolioCard({ title, image, capabilities }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt={title} />
        <div className={styles.cardImageOverlay} />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.capList}>
          {capabilities.map((cap, i) => (
            <li key={i}>
              <CheckCircle size={16} className={styles.capIcon} />
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
