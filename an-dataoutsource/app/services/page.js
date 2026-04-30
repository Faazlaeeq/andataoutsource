'use client';

import { useState } from 'react';

export default function ServicesPage() {
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
      <h1>Our Services</h1>

      <p>
        AN Dataoutsource offers a spectrum of services tailored to expedite and optimize
        the attainment of your objectives. Through strategic outsourcing, companies can
        realize cost savings in technology, hardware, human resources, and more. Our services
        encompass Data Management, Contact Center, and Virtual Assistant support.
      </p>

      <p>Our services are</p>

      <ul className="arrow-list">
        <li><a href="/services#it">IT Services</a></li>
        <li><a href="/services#rcm">Revenue Cycle Management (RCM)</a></li>
        <li><a href="/services#pds">Provider Directory Sync</a></li>
        <li><a href="/services#data">Data Management Services</a></li>
        <li><a href="/services#cc">Contact Center Services</a></li>
        <li><a href="/services#va">Virtual Assistant</a></li>
        <li><a href="/services#insurance">Insurance Agency Support Staff</a></li>
        <li><a href="/services#cred">Back-Office Credentialing Support</a></li>
        <li><a href="/services#accounting">Accounting Back-Office</a></li>
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
