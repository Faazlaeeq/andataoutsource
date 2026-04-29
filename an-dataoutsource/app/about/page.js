import { PageBanner } from '../components/Hero/Hero';
import StatsCounter from '../components/StatsCounter/StatsCounter';
import { CheckCircle, Target, Eye, Award, Users, Globe, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us',
  description: 'Learn about AN Dataoutsource — your trusted outsourcing partner with 15+ years of delivering excellence in data management, IT services, and business process solutions.',
};

const stats = [
  { value: 50, suffix: '%', label: 'Cost Savings' },
  { value: 99, suffix: '.9%', label: 'Accuracy Rate' },
  { value: 12, suffix: 'hr', label: 'Avg Turnaround' },
  { value: 150, suffix: '+', label: 'Team Members' },
];

const values = [
  { icon: <Target size={28} />, title: 'Mission-Driven', desc: 'We are committed to empowering businesses with scalable, secure, and cost-effective outsourcing solutions that drive growth.' },
  { icon: <Eye size={28} />, title: 'Transparent Operations', desc: 'Real-time reporting, open communication channels, and complete visibility into every process we manage for you.' },
  { icon: <Award size={28} />, title: 'Quality Assurance', desc: 'Multi-tier quality checks, industry certifications, and continuous improvement ensure we deliver nothing less than excellence.' },
  { icon: <Users size={28} />, title: 'Client-Centric', desc: 'Every solution is tailored to your unique requirements. We treat your business objectives as our own.' },
  { icon: <Globe size={28} />, title: 'Global Reach', desc: 'With delivery centers across multiple time zones, we provide round-the-clock support and seamless service continuity.' },
  { icon: <Clock size={28} />, title: 'Rapid Deployment', desc: 'Our streamlined onboarding process gets your dedicated team operational within 15 business days.' },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About AN Dataoutsource"
        subtitle="Empowering businesses with reliable, secure, and scalable outsourcing solutions since day one."
        breadcrumbs="About Us"
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      {/* Story Section */}
      <section className={`section`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <span className="section-label">Our Story</span>
              <h2>Delivering Outsourcing Excellence</h2>
              <p>
                AN Dataoutsource is a premier outsourcing services provider headquartered
                in New York, with state-of-the-art delivery centers designed to serve
                businesses of all sizes. We specialize in data management, IT services,
                contact center operations, and business process solutions.
              </p>
              <p>
                Our team of skilled professionals combines deep domain expertise with
                the latest technology to deliver measurable results. We understand that
                every business is unique, which is why we offer customized solutions
                tailored to your specific needs and objectives.
              </p>
              <p>
                From startups looking to scale efficiently to enterprises seeking to
                optimize operations, AN Dataoutsource is the partner you can trust for
                quality, reliability, and significant cost savings.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration at AN Dataoutsource"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.darkSection}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '20px' }}>
            <h2 style={{ color: 'white' }}>Our Impact in Numbers</h2>
          </div>
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Values Grid */}
      <section className={`section`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>Why Choose AN Dataoutsource?</h2>
            <p>
              We are built on a foundation of trust, transparency, and relentless
              pursuit of excellence. Here is what sets us apart.
            </p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className={`section ${styles.diffSection}`}>
        <div className="container">
          <div className={styles.diffGrid}>
            <div className={styles.diffImage}>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Modern office workspace"
              />
            </div>
            <div className={styles.diffContent}>
              <span className="section-label">Our Edge</span>
              <h2>What Makes Us Different</h2>
              <ul className={styles.diffList}>
                <li><CheckCircle size={20} /> Dedicated project managers for every engagement</li>
                <li><CheckCircle size={20} /> SOC 2 Type II certified operations</li>
                <li><CheckCircle size={20} /> HIPAA-compliant data handling</li>
                <li><CheckCircle size={20} /> 30-50% cost savings guaranteed</li>
                <li><CheckCircle size={20} /> 99.9% accuracy with multi-tier QA</li>
                <li><CheckCircle size={20} /> Scalable teams — from 1 to 100+ resources</li>
                <li><CheckCircle size={20} /> 12-24 hour turnaround times</li>
                <li><CheckCircle size={20} /> No long-term contracts required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
