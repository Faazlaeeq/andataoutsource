'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div className={styles.formGrid}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Your Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Your Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`form-group ${styles.fullWidth}`}>
          <label className="form-label" htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-input"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className={`form-group ${styles.fullWidth}`}>
          <label className="form-label" htmlFor="message">Project Details *</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Tell us about your company and project requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
      </button>
      {status === 'success' && (
        <div className={styles.success}>
          Thank you! Your message has been sent. Our team will get back to you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className={styles.error}>
          Something went wrong. Please try again or email us directly at support@andataoutsource.com.
        </div>
      )}
    </form>
  );
}
