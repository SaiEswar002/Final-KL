import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const features = [
  {
    icon: '🩺',
    title: 'Doctor Management',
    desc: 'View and manage doctor profiles, specializations, and schedules across all departments.'
  },
  {
    icon: '📅',
    title: 'Appointment Booking',
    desc: 'Patients can browse available slots and book appointments with their preferred doctors.'
  },
  {
    icon: '🏥',
    title: 'Bed Allocation',
    desc: 'Track ward beds in real time. Admins can allocate and release beds to patients instantly.'
  },
  {
    icon: '👥',
    title: 'Staff Management',
    desc: 'Manage hospital staff, assign departments, and monitor attendance and availability.'
  },
  {
    icon: '📋',
    title: 'Booking History',
    desc: 'Patients have full visibility into their appointment history and booking statuses.'
  },
  {
    icon: '📊',
    title: 'Admin Dashboard',
    desc: 'A centralized dashboard with statistics, user management, and system overview for admins.'
  }
];

const stats = [
  { label: 'Departments', value: '12+' },
  { label: 'Doctors', value: '50+' },
  { label: 'Patients Served', value: '1,200+' },
  { label: 'Beds Available', value: '300+' },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">🏥 Hospital Management System</div>
          <h1 className="hero-title">
            Streamlined Healthcare,<br />
            <span className="hero-highlight">Delivered with Precision</span>
          </h1>
          <p className="hero-desc">
            A comprehensive digital platform for managing hospital operations — appointments, staff, resources,
            and patient care — all in one place.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary btn-lg">
              Patient Login
            </Link>
            <Link to="/doctors" className="btn btn-outline-white btn-lg">
              View Doctors
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-float-card card-1">
              <span className="card-emoji">📅</span>
              <div>
                <div className="card-label">Next Appointment</div>
                <div className="card-value">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="hero-float-card card-2">
              <span className="card-emoji">🩺</span>
              <div>
                <div className="card-label">Available Doctors</div>
                <div className="card-value">24 Online Now</div>
              </div>
            </div>
            <div className="hero-float-card card-3">
              <span className="card-emoji">🏥</span>
              <div>
                <div className="card-label">Bed Occupancy</div>
                <div className="card-value">78% Capacity</div>
              </div>
            </div>
            <div className="hero-center-badge">
              <span>KL</span>
              <small>Hospital</small>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="stats-strip">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-label">SYSTEM MODULES</div>
        <h2 className="section-title">Everything Your Hospital Needs</h2>
        <p className="section-subtitle">
          Our system covers every aspect of hospital management, from patient bookings to resource allocation.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Create your patient account in minutes and book your first appointment today.</p>
          <div className="cta-actions">
            <Link to="/login" className="btn btn-primary btn-lg">
              Register as Patient
            </Link>
            <Link to="/contact" className="btn btn-outline-cta btn-lg">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
