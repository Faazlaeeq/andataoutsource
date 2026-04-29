import { PageBanner } from '../components/Hero/Hero';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Portfolio',
  description: 'Explore our industry experience across healthcare, contact centers, media, consulting, and accounting.',
};

const industries = [
  {
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    capabilities: [
      'Revenue Cycle Management',
      'Medical Billing & Coding',
      'Provider Credentialing',
      'Claims Processing',
      'Patient Scheduling',
      'HIPAA-Compliant Data Handling',
    ],
  },
  {
    title: 'Contact Centers',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80',
    capabilities: [
      'Inbound Customer Support',
      'Outbound Sales Campaigns',
      'Technical Help Desk',
      'Live Chat & Email Support',
      'Quality Monitoring',
      'Multi-language Support',
    ],
  },
  {
    title: 'Media & Information',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80',
    capabilities: [
      'Content Moderation',
      'Data Entry & Digitization',
      'Research & Analytics',
      'Document Processing',
      'Database Management',
      'Metadata Tagging',
    ],
  },
  {
    title: 'Consulting Firms',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    capabilities: [
      'Back-Office Operations',
      'Market Research Support',
      'Presentation Design',
      'Financial Modeling',
      'Data Analysis',
      'Report Generation',
    ],
  },
  {
    title: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    capabilities: [
      'Policy Administration',
      'Claims Management',
      'Certificate Issuance',
      'Underwriting Support',
      'Renewal Processing',
      'Compliance Reporting',
    ],
  },
  {
    title: 'Accounting & CPA',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    capabilities: [
      'Bookkeeping Services',
      'Tax Preparation Support',
      'Accounts Payable/Receivable',
      'Bank Reconciliation',
      'Financial Reporting',
      'Payroll Processing',
    ],
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageBanner
        title="Industry Experience"
        subtitle="Proven expertise across diverse industries, delivering tailored solutions that meet sector-specific requirements."
        breadcrumbs="Portfolio"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className={`section`}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Portfolio</span>
            <h2>Industries We Serve</h2>
            <p>
              With deep domain expertise across multiple sectors, AN Dataoutsource
              delivers industry-specific solutions that drive measurable outcomes.
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {industries.map((ind, i) => (
              <PortfolioCard key={i} {...ind} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
