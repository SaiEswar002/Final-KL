import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hyu2qmf', 'template_rnlaojd', form.current, 'uj8z9EGSVLPtle8lT')
      .then(() => {
        alert('✅ Your message has been sent successfully!');
        form.current.reset();
      })
      .catch(() => {
        alert('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="page-wrapper">
      <div className="page-content contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="text-muted">We are here to help. Reach out through the form or use the details below.</p>
        </div>

        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info-panel">
            <h2>Get In Touch</h2>
            <div className="contact-info-list">
              {[
                { icon: '📍', label: 'Address', value: 'Tadepalle (Near Kanaka Durga Varadhi), Andhra Pradesh' },
                { icon: '📞', label: 'Phone', value: '0866-2536535' },
                { icon: '✉️', label: 'Email', value: 'info@klhospital.com' },
                { icon: '🕒', label: 'Hours', value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="contact-info-item">
                  <span className="contact-icon">{icon}</span>
                  <div>
                    <div className="contact-item-label">{label}</div>
                    <div className="contact-item-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-emergency">
              <h3>🚨 Emergency?</h3>
              <p>For medical emergencies, please call our 24/7 helpline immediately.</p>
              <a href="tel:08662536535" className="btn btn-danger" style={{ marginTop: '12px' }}>
                Call Now: 0866-2536535
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="card contact-form-panel">
            <h2 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input type="text" name="name" className="form-control" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input type="email" name="email" className="form-control" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-control" placeholder="How can we help?" />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea name="message" className="form-control" rows="5"
                  placeholder="Describe your query..." required style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
