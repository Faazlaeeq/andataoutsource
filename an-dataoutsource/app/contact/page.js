import { PageBanner } from '../components/Hero/Hero';
import ContactForm from '../components/ContactForm/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with AN Dataoutsource. Contact us for inquiries, support, or to schedule a consultation about our outsourcing services.',
};

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Visit Us',
    lines: ['123 Business Avenue, Suite 500', 'New York, NY 10001'],
  },
  {
    icon: <Phone size={24} />,
    title: 'Call Us',
    lines: ['Main: +1 (555) 123-4567', 'Toll Free: +1 (800) 555-0199'],
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Us',
    lines: ['support@andataoutsource.com', 'sales@andataoutsource.com'],
  },
  {
    icon: <Clock size={24} />,
    title: 'Business Hours',
    lines: ['Mon – Fri: 9:00 AM – 6:00 PM EST', '24/7 Support Available'],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out and let us discuss how we can help your business grow."
        breadcrumbs="Contact"
        backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
      />

      {/* Contact Cards */}
      <section className={`section`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {contactInfo.map((info, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.contactIcon}>{info.icon}</div>
                <h3>{info.title}</h3>
                {info.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className={`section ${styles.formSection}`}>
        <div className="container">
          <div className={styles.formLayout}>
            <div>
              <span className="section-label">Send a Message</span>
              <h2 style={{ marginBottom: '8px' }}>Get In Touch</h2>
              <p style={{ marginBottom: '32px', color: 'var(--text-secondary)' }}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
            <div className={styles.mapWrapper}>
              <div className={styles.mapPlaceholder}>
                <iframe
                  title="AN Dataoutsource Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={styles.socialSection}>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
