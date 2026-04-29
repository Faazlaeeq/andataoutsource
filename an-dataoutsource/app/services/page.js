import { PageBanner } from '../components/Hero/Hero';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import {
  Monitor, DollarSign, FolderSync, Database, Headphones,
  UserCheck, Shield, BookOpen, Calculator
} from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Services',
  description: 'Explore the full range of outsourcing services from AN Dataoutsource — IT, data management, contact center, virtual assistant, RCM, and more.',
};

const services = [
  {
    icon: Monitor,
    title: 'IT Services',
    description: 'From infrastructure management and cloud solutions to software development and technical support, our IT services ensure your technology ecosystem runs at peak performance. We provide 24/7 monitoring, cybersecurity, and proactive maintenance.',
  },
  {
    icon: DollarSign,
    title: 'Revenue Cycle Management (RCM)',
    description: 'Maximize your revenue with our comprehensive RCM solutions. We handle patient registration, charge capture, claim submission, payment posting, denial management, and collections — reducing your days in A/R and increasing net collections.',
  },
  {
    icon: FolderSync,
    title: 'Provider Directory Sync',
    description: 'Maintain accurate provider directories across all channels. Our team ensures that provider information — locations, specialties, contact details, and network participation — is consistently updated and compliant with CMS regulations.',
  },
  {
    icon: Database,
    title: 'Data Management Services',
    description: 'Transform your data operations with our end-to-end data management services including data entry, data processing, data mining, data cleansing, document digitization, and database management with 99.9% accuracy.',
  },
  {
    icon: Headphones,
    title: 'Contact Center Services',
    description: 'Deliver exceptional customer experiences with our omnichannel contact center solutions. We handle inbound and outbound calls, email support, live chat, and social media management with professionally trained agents.',
  },
  {
    icon: UserCheck,
    title: 'Virtual Assistant',
    description: 'Delegate administrative tasks to our skilled virtual assistants. From calendar management and email handling to research and travel planning, our VAs integrate seamlessly with your workflow to boost your productivity.',
  },
  {
    icon: Shield,
    title: 'Insurance Agency Support Staff',
    description: 'Specialized support for insurance agencies including policy issuance, endorsements, renewals, certificate management, claims processing, and customer service — all handled by industry-trained professionals.',
  },
  {
    icon: BookOpen,
    title: 'Back-Office Credentialing Support',
    description: 'Streamline provider enrollment and credentialing with our dedicated team. We manage initial applications, re-credentialing, CAQH updates, payer follow-ups, and maintain compliance with NCQA standards.',
  },
  {
    icon: Calculator,
    title: 'Accounting Back-Office',
    description: 'Professional accounting support for CPA firms and businesses. Our services include bookkeeping, accounts payable/receivable, bank reconciliation, financial reporting, payroll processing, and tax preparation assistance.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive outsourcing solutions tailored to drive efficiency, reduce costs, and accelerate your business growth."
        breadcrumbs="Our Services"
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
      />

      <section className={`section`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Solutions</span>
            <h2>What We Offer</h2>
            <p>
              AN Dataoutsource provides a broad spectrum of outsourcing services designed
              to help you achieve operational excellence while focusing on your core business.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((svc, i) => (
              <ServiceCard key={i} {...svc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Get Started?</h2>
            <p>Share your requirements and receive a customized quote within 24 hours.</p>
            <a href="/quote" className="btn btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
