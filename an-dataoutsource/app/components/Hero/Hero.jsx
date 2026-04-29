import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

export function Hero({ label, title, titleHighlight, subtitle, ctas, backgroundImage }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <img src={backgroundImage} alt="" />
      </div>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        {label && <span className={styles.heroLabel}>{label}</span>}
        <h1 className={styles.heroTitle}>
          {title} {titleHighlight && <span>{titleHighlight}</span>}
        </h1>
        {subtitle && <p className={styles.heroSub}>{subtitle}</p>}
        {ctas && (
          <div className={styles.heroCtas}>
            {ctas.map((cta, i) => (
              <Link key={i} href={cta.href} className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}>
                {cta.label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className={styles.heroScroll}>
        <span>Scroll</span>
        <ChevronDown size={18} />
      </div>
    </section>
  );
}

export function PageBanner({ title, subtitle, backgroundImage, breadcrumbs }) {
  return (
    <section className={styles.pageBanner}>
      <div className={styles.pageBannerBg}>
        <img src={backgroundImage} alt="" />
      </div>
      <div className={styles.pageBannerOverlay} />
      <div className={styles.pageBannerContent}>
        {breadcrumbs && (
          <div className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <span>{breadcrumbs}</span>
          </div>
        )}
        <h1 className={styles.pageBannerTitle}>{title}</h1>
        {subtitle && <p className={styles.pageBannerSub}>{subtitle}</p>}
      </div>
    </section>
  );
}
