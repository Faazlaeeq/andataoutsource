'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page-content">
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=960&q=80"
          alt="Business team meeting"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <p className={styles.heroText}>
            Quality, Reliability, Security,<br />
            Scalability, and Cost Savings
          </p>
        </div>
      </div>

      {/* Our Services */}
      <h1 style={{ marginTop: '30px' }}>Our Services</h1>

      <p>
        AN Dataoutsource offers a spectrum of services tailored to expedite and optimize
        the attainment of your objectives. Through strategic outsourcing, companies can
        realize cost savings in technology, hardware, human resources, and more. Our services
        encompass Data Management, Contact Center, and Virtual Assistant support.
      </p>

      <p>Our services are</p>

      <ul className="arrow-list">
        <li><a href="/services">IT Services</a></li>
        <li><a href="/services">Revenue Cycle Management (RCM)</a></li>
        <li><a href="/services">Provider Directory Sync</a></li>
        <li><a href="/services">Data Management Services</a></li>
        <li><a href="/services">Contact Center Services</a></li>
        <li><a href="/services">Virtual Assistant</a></li>
        <li><a href="/services">Insurance Agency Support Staff</a></li>
        <li><a href="/services">Back-Office Credentialing Support</a></li>
        <li><a href="/services">Accounting Back-Office</a></li>
      </ul>

      <p>
        Thank you for your interest in our services. Please provide some details about
        the services you are interested in and our expert will call you back to discuss
        your requirements and send you a quick quote.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name (required)</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email (required)</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            style={{ maxWidth: '450px' }}
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>About your company and Project details</label>
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn-send" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="status-success">Thank you! Your message has been sent successfully.</p>
        )}
        {status === 'error' && (
          <p className="status-error">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
