import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi, bookingApi, doctorApi } from '../api';
import './HomePage.css';

/* ---- Feature data (no emojis — using labels + index for styling) ---- */
const features = [
  {
    title: 'Doctor Management',
    desc: 'View and manage doctor profiles, specializations, and schedules across all departments.'
  },
  {
    title: 'Appointment Booking',
    desc: 'Patients can browse available slots and book appointments with their preferred doctors.'
  },
  {
    title: 'Bed Allocation',
    desc: 'Track ward beds in real time. Admins can allocate and release beds to patients instantly.'
  },
  {
    title: 'Staff Management',
    desc: 'Manage hospital staff, assign departments, and monitor attendance and availability.'
  },
  {
    title: 'Booking History',
    desc: 'Patients have full visibility into their appointment history and booking statuses.'
  },
  {
    title: 'Admin Dashboard',
    desc: 'A centralized dashboard with live statistics, user management, and system overview.'
  }
];

const HomePage = () => {
  const [stats, setStats] = useState({ doctors: '—', patients: '—', appointments: '—' });

  useEffect(() => {
    /* Fetch real counts for the stats strip */
    Promise.allSettled([
      doctorApi.getAllDoctors(),
      bookingApi.getAllBookings(),
    ]).then(([doctorsRes, appsRes]) => {
      const doctorCount = doctorsRes.status === 'fulfilled' ? doctorsRes.value.data.length : '—';
      const appsCount   = appsRes.status   === 'fulfilled' ? appsRes.value.data.length   : '—';
      setStats({
        doctors:      doctorCount,
        appointments: appsCount,
      });
    });
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Hospital Management System</div>
          <h1 className="hero-title">
            Streamlined Healthcare,<br />
            <span className="hero-highlight">Delivered with Precision</span>
          </h1>
          <p className="hero-desc">
            A comprehensive digital platform for managing hospital operations — appointments,
            staff, resources, and patient care — all in one place.
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
              <div className="hero-card-dot" />
              <div>
                <div className="card-label">Next Appointment</div>
                <div className="card-value">Today, 10:30 AM</div>
              </div>
            </div>
            <div className="hero-float-card card-2">
              <div className="hero-card-dot accent" />
              <div>
                <div className="card-label">Registered Doctors</div>
                <div className="card-value">{stats.doctors} Active</div>
              </div>
            </div>
            <div className="hero-float-card card-3">
              <div className="hero-card-dot navy" />
              <div>
                <div className="card-label">Total Appointments</div>
                <div className="card-value">{stats.appointments} Booked</div>
              </div>
            </div>
            <div className="hero-center-badge">
              <span>KL</span>
              <small>Hospital</small>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip — real data from API */}
      <section className="stats-strip">
        <div className="stat-item">
          <span className="stat-value">{stats.doctors}</span>
          <span className="stat-label">Registered Doctors</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{stats.appointments}</span>
          <span className="stat-label">Appointments Booked</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">6</span>
          <span className="stat-label">Hospital Departments</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">24/7</span>
          <span className="stat-label">System Availability</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-label">SYSTEM MODULES</div>
        <h2 className="section-title">Everything Your Hospital Needs</h2>
        <p className="section-subtitle">
          Our system covers every aspect of hospital management, from patient bookings to resource allocation.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={f.title} className="feature-card">
              <div className="feature-num">{String(i + 1).padStart(2, '0')}</div>
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
