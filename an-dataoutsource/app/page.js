import Link from 'next/link';
import { Hero } from './components/Hero/Hero';
import ServiceCard from './components/ServiceCard/ServiceCard';
import ContactForm from './components/ContactForm/ContactForm';
import StatsCounter from './components/StatsCounter/StatsCounter';
import {
  Monitor, DollarSign, FolderSync, Database, Headphones,
  UserCheck, Shield, BookOpen, Calculator, ArrowRight, CheckCircle
} from 'lucide-react';
import styles from './page.module.css';

const services = [
  {
    icon: Monitor,
    title: 'IT Services',
    description: 'Comprehensive IT support and infrastructure management to keep your technology running seamlessly and securely.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management',
    description: 'Streamline your billing processes, reduce denials, and maximize revenue with our end-to-end RCM solutions.',
  },
  {
    icon: FolderSync,
    title: 'Provider Directory Sync',
    description: 'Ensure accurate provider data across all platforms with automated synchronization and validation services.',
  },
  {
    icon: Database,
    title: 'Data Management Services',
    description: 'Transform raw data into actionable insights with our comprehensive data entry, processing, and analytics solutions.',
  },
  {
    icon: Headphones,
    title: 'Contact Center Services',
    description: 'Deliver exceptional customer experiences with our professional inbound and outbound contact center operations.',
  },
  {
    icon: UserCheck,
    title: 'Virtual Assistant',
    description: 'Boost productivity with dedicated virtual assistants handling administrative tasks, scheduling, and communications.',
  },
  {
    icon: Shield,
    title: 'Insurance Agency Support',
    description: 'Specialized back-office support for insurance agencies including policy management and claims processing.',
  },
  {
    icon: BookOpen,
    title: 'Credentialing Support',
    description: 'Streamline provider credentialing with thorough verification, enrollment, and ongoing maintenance services.',
  },
  {
    icon: Calculator,
    title: 'Accounting Back-Office',
    description: 'Professional bookkeeping, accounts payable/receivable, and financial reporting to keep your finances in order.',
  },
];

const stats = [
  { value: 50, suffix: '%', label: 'Cost Savings' },
  { value: 99, suffix: '.9%', label: 'Accuracy Rate' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 24, suffix: '/7', label: 'Support Available' },
];

const whyUs = [
  'Dedicated teams tailored to your needs',
  'Enterprise-grade security & compliance',
  'Transparent reporting & communication',
  'Rapid 15-day implementation',
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        label="Your Trusted Outsourcing Partner"
        title="Excellence, Reliability, Security, Scalability &"
        titleHighlight="Cost Efficiency"
        subtitle="AN Dataoutsource delivers a comprehensive suite of outsourcing services designed to accelerate your business growth while reducing operational costs."
        ctas={[
          { label: 'Explore Services', href: '/services' },
          { label: 'Get a Quote', href: '/quote' },
        ]}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
      />

      {/* Stats Bar */}
      <section className={styles.statsSection}>
        <div className="container">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Our Services</h2>
            <p>
              AN Dataoutsource offers a spectrum of services tailored to expedite and
              optimize the attainment of your objectives. Through strategic outsourcing,
              companies can realize significant savings in technology, resources, and operations.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <ServiceCard key={i} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyImage}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Professional team collaboration"
              />
              <div className={styles.whyImageOverlay} />
              <div className={styles.whyImageBadge}>
                <span className={styles.badgeNumber}>15+</span>
                <span className={styles.badgeText}>Years of Excellence</span>
              </div>
            </div>
            <div className={styles.whyContent}>
              <span className="section-label">Why AN Dataoutsource</span>
              <h2>Your Strategic Outsourcing Partner</h2>
              <p className={styles.whyDesc}>
                We combine deep industry expertise with cutting-edge technology to deliver
                outsourcing solutions that drive measurable results. Our commitment to quality,
                security, and client satisfaction sets us apart.
              </p>
              <ul className={styles.whyList}>
                {whyUs.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={20} className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Get Started</span>
            <h2>Request a Quick Quote</h2>
            <p>
              Interested in our services? Share your project details and our experts will
              reach out to discuss requirements and provide a tailored quote.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
