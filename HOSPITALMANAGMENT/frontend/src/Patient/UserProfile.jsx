import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const PatientDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      navigate('/login');
      return;
    }
    try {
      setUser(JSON.parse(stored));
    } catch {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) return <div className="loading-spinner"><div className="spinner" /></div>;

  const info = user?.data ?? user;

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ maxWidth: 900 }}>
        <h1 style={{ marginBottom: '2rem' }}>My Profile</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', alignItems: 'start' }}>
          {/* Left: Avatar Card */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div className="profile-avatar-circle">
              {info.profilePhoto
                ? <img src={`http://localhost:8091/upload/${info.profilePhoto}`} alt="Profile" className="profile-photo" />
                : <span className="avatar-initial">{info.username?.charAt(0).toUpperCase()}</span>
              }
            </div>
            <h2 className="profile-name">{info.username}</h2>
            <span className={`badge ${info.role === 'doctor' ? 'badge-success' : 'badge-info'}`} style={{ marginBottom: '1rem' }}>
              {info.role}
            </span>
            <p className="profile-email">{info.email}</p>
          </div>

          {/* Right: Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Personal Info */}
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Personal Information</h3>
              <div className="profile-info-grid">
                <div className="profile-info-item">
                  <span className="info-label">📞 Phone</span>
                  <span className="info-value">{info.phone || 'Not provided'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">📍 Address</span>
                  <span className="info-value">{info.address || 'Not provided'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">⚧ Gender</span>
                  <span className="info-value">{info.gender || 'Not provided'}</span>
                </div>
                <div className="profile-info-item">
                  <span className="info-label">🎂 Age</span>
                  <span className="info-value">{info.age ? `${info.age} years` : 'Not provided'}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card">
              <h3 style={{ marginBottom: '1rem' }}>Quick Actions</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => navigate('/book-appointment')}>
                  📅 Book Appointment
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/booking-history')}>
                  📋 View My Bookings
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/contact')}>
                  📞 Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
