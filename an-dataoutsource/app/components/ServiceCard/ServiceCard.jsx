import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon: Icon, title, description, href = '/services' }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon size={28} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={href} className={styles.link}>
        Learn More <ArrowRight size={16} />
      </Link>
    </div>
  );
}
