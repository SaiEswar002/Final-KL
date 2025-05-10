import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Make sure you installed it: npm install @emailjs/browser
import './ContactPage.css';

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hyu2qmf', 'template_rnlaojd', form.current, 'uj8z9EGSVLPtle8lT')
      .then((result) => {
          console.log('Message sent successfully:', result.text);
          alert('✅ Your message has been sent successfully!');
          form.current.reset(); // Clear the form
      }, (error) => {
          console.error('Failed to send message:', error.text);
          alert('❌ Failed to send message. Please try again later.');
      });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        We are here to assist you. Feel free to reach out to us through any of the following methods.
      </p>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong> 123 Healthcare Street, City, Country</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Email:</strong> contact@hospitalmanagement.com</p>
          <p><strong>Working Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>

      {/* Why Contact Us Section */}
      <div className="why-contact-us">
        <h2>Why Contact Us?</h2>
        <ul>
          <li>Get answers to your healthcare-related queries.</li>
          <li>Schedule appointments with our specialists.</li>
          <li>Provide feedback to help us improve our services.</li>
          <li>Learn more about our facilities and offerings.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
