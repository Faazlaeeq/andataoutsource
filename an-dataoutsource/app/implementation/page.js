import { PageBanner } from '../components/Hero/Hero';
import Timeline from '../components/Timeline/Timeline';
import { FileSearch, Users, Settings, Rocket, CheckCircle, ClipboardList, GraduationCap, BarChart } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Implementation',
  description: 'Learn about our streamlined 15-day implementation process. From discovery to go-live, AN Dataoutsource gets your team operational fast.',
};

const timelineSteps = [
  {
    day: 'Day 1 – 5',
    marker: '01',
    icon: <FileSearch size={24} />,
    title: 'Discovery & Planning',
    description: 'We begin with a thorough analysis of your requirements, workflows, and objectives. Our team conducts stakeholder interviews, documents processes, and creates a detailed implementation roadmap.',
  },
  {
    day: 'Day 5 – 10',
    marker: '02',
    icon: <Users size={24} />,
    title: 'Team Assembly & Training',
    description: 'We handpick team members with the right skills and domain expertise for your project. Intensive training on your processes, systems, and quality standards ensures readiness from day one.',
  },
  {
    day: 'Day 10 – 15',
    marker: '03',
    icon: <Settings size={24} />,
    title: 'Setup & Pilot Run',
    description: 'Infrastructure setup, system access configuration, and security protocols are established. A controlled pilot run validates processes and identifies any adjustments before full-scale operations.',
  },
  {
    day: 'Day 15+',
    marker: '04',
    icon: <Rocket size={24} />,
    title: 'Go Live & Continuous Improvement',
    description: 'Full operations commence with real-time monitoring and quality checks. Regular performance reviews, feedback sessions, and process optimization ensure sustained excellence.',
  },
];

const onboardingSteps = [
  { icon: <ClipboardList size={22} />, title: 'Requirements Documentation', desc: 'Comprehensive capture of all technical and operational requirements.' },
  { icon: <Users size={22} />, title: 'Resource Allocation', desc: 'Skilled professionals matched to your specific project needs.' },
  { icon: <GraduationCap size={22} />, title: 'Training Program', desc: 'Custom training modules covering your tools, processes, and standards.' },
  { icon: <BarChart size={22} />, title: 'Performance Monitoring', desc: 'KPIs, SLAs, and regular reporting to ensure quality and accountability.' },
];

export default function ImplementationPage() {
  return (
    <>
      <PageBanner
        title="Implementation Process"
        subtitle="Our proven 15-day onboarding framework gets your dedicated team operational quickly and efficiently."
        breadcrumbs="Implementation"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
      />

      {/* Timeline */}
      <section className={`section`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>15-Day Implementation Timeline</h2>
            <p>
              Our structured approach ensures a smooth transition with minimal disruption
              to your existing operations. Every step is designed for speed and precision.
            </p>
          </div>
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Onboarding */}
      <section className={`section ${styles.onboardingSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Onboarding</span>
            <h2>30-Day Employee Onboarding Plan</h2>
            <p>
              Beyond initial setup, our comprehensive 30-day onboarding plan ensures
              every team member is fully ramped up and delivering at full capacity.
            </p>
          </div>
          <div className={styles.onboardingGrid}>
            {onboardingSteps.map((step, i) => (
              <div key={i} className={styles.onboardingCard}>
                <div className={styles.onboardingIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className={styles.guaranteeSection}>
        <div className="container">
          <div className={styles.guaranteeGrid}>
            <div>
              <span className="section-label" style={{ color: 'var(--primary-light)' }}>Our Guarantee</span>
              <h2 style={{ color: 'white', marginBottom: '20px' }}>Commitment to Your Success</h2>
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                We stand behind our implementation process with a satisfaction guarantee.
                If your team is not fully operational and meeting quality standards within
                30 days, we will extend the onboarding period at no additional cost.
              </p>
            </div>
            <div className={styles.guaranteeList}>
              {[
                'Dedicated project manager throughout',
                'Daily progress updates during setup',
                'No hidden costs or surprise fees',
                'Flexible scaling at any stage',
                'Risk-free trial period available',
              ].map((item, i) => (
                <div key={i} className={styles.guaranteeItem}>
                  <CheckCircle size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
