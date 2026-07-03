import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-icon">🏥</span>
          <div>
            <h3>KL Hospital Management System</h3>
            <p>Delivering quality healthcare management solutions with compassion and technology.</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Patient Services</h4>
            <ul>
              <li><Link to="/login">Patient Login</Link></li>
              <li><Link to="/book-appointment">Book Appointment</Link></li>
              <li><Link to="/booking-history">My Bookings</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li>📍 Tadepalle, Andhra Pradesh</li>
              <li>📞 0866-2536535</li>
              <li>✉️ info@klhospital.com</li>
              <li>🕒 Mon–Sat: 9:00 AM – 6:00 PM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} KL Hospital Management System. All rights reserved.</p>
        <p className="footer-credit">Final Year Engineering Project</p>
      </div>
    </footer>
  );
};

export default Footer;
