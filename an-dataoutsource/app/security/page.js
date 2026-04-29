import { PageBanner } from '../components/Hero/Hero';
import { ShieldCheck, Lock, Server, Eye, FileCheck, Users, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Security & Privacy',
  description: 'Learn about AN Dataoutsource\'s commitment to security, compliance, and data privacy including SOC 2 Type II certification and HIPAA compliance.',
};

const securityFeatures = [
  {
    icon: <ShieldCheck size={28} />,
    title: 'SOC 2 Type II Certified',
    desc: 'Our operations are SOC 2 Type II certified, demonstrating our commitment to the highest standards of security, availability, processing integrity, confidentiality, and privacy.',
  },
  {
    icon: <Lock size={28} />,
    title: 'HIPAA Compliant',
    desc: 'All healthcare data handling follows strict HIPAA guidelines. Our staff undergoes regular HIPAA training and our systems are designed with PHI protection at every layer.',
  },
  {
    icon: <Server size={28} />,
    title: 'Infrastructure Security',
    desc: 'Enterprise-grade firewalls, encrypted communications, multi-factor authentication, and regular penetration testing protect your data at rest and in transit.',
  },
  {
    icon: <Eye size={28} />,
    title: 'Access Controls',
    desc: 'Role-based access controls, biometric authentication, and comprehensive audit logging ensure that only authorized personnel can access sensitive information.',
  },
  {
    icon: <FileCheck size={28} />,
    title: 'Data Privacy',
    desc: 'Strict data handling policies, NDAs for all employees, clean-desk policies, and regular audits ensure your confidential information remains protected.',
  },
  {
    icon: <Users size={28} />,
    title: 'Employee Screening',
    desc: 'Comprehensive background checks, reference verification, and ongoing security awareness training for all team members working on your projects.',
  },
];

const protocols = [
  'AES-256 encryption for all data at rest',
  'TLS 1.3 for all data in transit',
  'Multi-factor authentication (MFA) required',
  'Regular third-party security audits',
  'Incident response plan with 1-hour SLA',
  'Business continuity & disaster recovery plans',
  'GDPR-compliant data processing procedures',
  'Annual security awareness training',
  'Automated vulnerability scanning',
  'Physical security with 24/7 surveillance',
];

export default function SecurityPage() {
  return (
    <>
      <PageBanner
        title="Security & Privacy"
        subtitle="Your data security is our highest priority. We maintain rigorous standards to protect your most sensitive information."
        breadcrumbs="Security & Privacy"
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      />

      <section className={`section`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Commitment</span>
            <h2>Enterprise-Grade Security</h2>
            <p>
              At AN Dataoutsource, security is not an afterthought — it is embedded into
              every aspect of our operations, from infrastructure to people.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {securityFeatures.map((feat, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.protocolsSection}>
        <div className="container">
          <div className={styles.protocolsGrid}>
            <div>
              <span className="section-label" style={{ color: 'var(--primary-light)' }}>Protocols</span>
              <h2 style={{ color: 'white', marginBottom: '16px' }}>Security Protocols & Standards</h2>
              <p style={{ color: 'var(--text-on-dark-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                We implement comprehensive security protocols that meet and exceed
                industry standards, ensuring your data is protected at every touchpoint.
              </p>
            </div>
            <div className={styles.protocolsList}>
              {protocols.map((p, i) => (
                <div key={i} className={styles.protocolItem}>
                  <CheckCircle size={18} />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
