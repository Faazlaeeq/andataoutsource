import { PageBanner } from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import { Clock, CheckCircle, Headphones } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Get a Quote',
  description: 'Request a quick quote from AN Dataoutsource. Share your project requirements and receive a tailored proposal within 24 hours.',
};

const benefits = [
  { icon: <Clock size={22} />, text: 'Response within 24 hours' },
  { icon: <CheckCircle size={22} />, text: 'No obligation, free consultation' },
  { icon: <Headphones size={22} />, text: 'Dedicated expert assigned to you' },
];

export default function QuotePage() {
  return (
    <>
      <PageBanner
        title="Get a Quick Quote"
        subtitle="Tell us about your project and we will provide a customized proposal tailored to your needs."
        breadcrumbs="Quote"
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
      />

      <section className={`section`}>
        <div className="container">
          <div className={styles.quoteLayout}>
            <div className={styles.quoteInfo}>
              <span className="section-label">Let&apos;s Talk</span>
              <h2>Ready to Optimize Your Operations?</h2>
              <p className={styles.quoteDesc}>
                Share your project details and our team of experts will analyze your
                requirements and get back to you with a comprehensive, no-obligation
                quote within 24 hours.
              </p>
              <div className={styles.benefitsList}>
                {benefits.map((b, i) => (
                  <div key={i} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>{b.icon}</div>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.directContact}>
                <p>Or reach us directly:</p>
                <a href="mailto:support@andataoutsource.com">support@andataoutsource.com</a>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className={styles.quoteForm}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
