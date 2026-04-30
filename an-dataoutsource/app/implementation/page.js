import styles from './page.module.css';

export const metadata = {
  title: 'Implementation',
  description: 'Our 30-day employee onboarding plan ensures a smooth transition from requirements to go-live.',
};

export default function ImplementationPage() {
  return (
    <div className="page-content">
      <h1>Implementation</h1>

      <h2 className={styles.implTitle}>Implementation : 30 Day Employee Onboarding Plan</h2>

      {/* Timeline Banner Image */}
      <div className={styles.timelineBanner}>
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=960&q=80"
          alt="Implementation timeline"
          className={styles.timelineImage}
        />
        <div className={styles.timelineOverlay}>
          <div className={styles.timelineStep}>
            <div className={styles.stepCircle}>5 Days</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.stepCircle}>10 Days</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.stepCircle}>15 Days</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.stepCircle}>Go Live</div>
          </div>
        </div>
      </div>

      {/* Step Descriptions */}
      <div className={styles.stepsGrid}>
        <div className={styles.stepDesc}>
          <h3>Requirements &amp; Contracting</h3>
          <p>
            Client discusses HR requirements and signs contract to proceed
          </p>
        </div>
        <div className={styles.stepDesc}>
          <h3>Employee Allocation</h3>
          <p>
            Best suited employee is screened and allocated to the client with their agreement
          </p>
        </div>
        <div className={styles.stepDesc}>
          <h3>Employee Training</h3>
          <p>
            Employee is trained on client business rules and processes
          </p>
        </div>
        <div className={styles.stepDesc}>
          <h3>Go Live</h3>
          <p>
            Employee is now managed by client directly and HR manages administration.
          </p>
        </div>
      </div>
    </div>
  );
}
