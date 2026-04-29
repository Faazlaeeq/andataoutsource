import styles from './Timeline.module.css';

export default function Timeline({ steps }) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, i) => (
        <div key={i} className={styles.step}>
          <div className={styles.stepContent}>
            {step.icon && <div className={styles.stepIcon}>{step.icon}</div>}
            {step.day && <div className={styles.stepDay}>{step.day}</div>}
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.description}</p>
          </div>
          <div className={styles.stepMarker}>{step.marker || i + 1}</div>
        </div>
      ))}
    </div>
  );
}
