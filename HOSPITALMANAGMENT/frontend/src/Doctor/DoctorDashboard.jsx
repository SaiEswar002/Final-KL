import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        setDoctor(user);
        // Fetch appointments assigned to this doctor
        axios.get('http://localhost:8091/api/appointments')
          .then(res => {
            const myAppointments = res.data.filter(a => a.doctor === user.username);
            setAppointments(myAppointments);
          })
          .catch(() => {})
          .finally(() => setLoading(false));
      } catch {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="page-wrapper"><div className="loading-spinner"><div className="spinner" /></div></div>;

  const today = new Date().toISOString().split('T')[0];
  const todayAppointments = appointments.filter(a => a.date === today);
  const bookedCount = appointments.filter(a => a.status === 'booked').length;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>Doctor Dashboard</h1>
            <p className="text-muted">
              Welcome, <strong>Dr. {doctor?.username}</strong>
              {doctor?.specialization ? ` — ${doctor.specialization}` : ''}
              {doctor?.department ? ` | ${doctor.department}` : ''}
            </p>
          </div>
          <div className="dash-date">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid-3" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ borderLeftColor: '#0f4c81' }}>
            <div className="stat-card-icon" style={{ background: '#dbeafe' }}>📅</div>
            <div className="stat-card-info"><h3>{appointments.length}</h3><p>Total Appointments</p></div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#10b981' }}>
            <div className="stat-card-icon" style={{ background: '#d1fae5' }}>✅</div>
            <div className="stat-card-info"><h3>{bookedCount}</h3><p>Active Bookings</p></div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#f59e0b' }}>
            <div className="stat-card-icon" style={{ background: '#fef3c7' }}>🗓️</div>
            <div className="stat-card-info"><h3>{todayAppointments.length}</h3><p>Today's Appointments</p></div>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="section-heading">
          <h2>Today's Schedule</h2>
        </div>
        {todayAppointments.length === 0 ? (
          <div className="empty-state card" style={{ marginBottom: '2rem' }}>
            <div className="empty-state-icon">🗓️</div>
            <h3>No appointments scheduled for today</h3>
          </div>
        ) : (
          <div className="slots-grid" style={{ marginBottom: '2rem' }}>
            {todayAppointments.map((a, idx) => (
              <div key={idx} className="slot-card card">
                <div className="slot-header">
                  <span style={{ fontWeight: 600, color: 'var(--primary)' }}>🏥 {a.hospital}</span>
                  <span className={`badge ${a.status === 'booked' ? 'badge-success' : 'badge-danger'}`}>{a.status}</span>
                </div>
                <div className="slot-detail"><span>🕐</span><span>{a.timeSlot}</span></div>
                {a.description && <p className="slot-desc text-muted text-sm">{a.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* All Appointments Table */}
        <div className="section-heading">
          <h2>All My Appointments</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Hospital</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length === 0 ? (
                <tr><td colSpan="5" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No appointments assigned yet.</td></tr>
              ) : (
                appointments.map((a, idx) => (
                  <tr key={a.id}>
                    <td className="text-muted text-sm">{idx + 1}</td>
                    <td style={{ fontWeight: 500 }}>{a.hospital}</td>
                    <td>{a.date}</td>
                    <td className="text-sm">{a.timeSlot}</td>
                    <td><span className={`badge ${a.status === 'booked' ? 'badge-success' : 'badge-danger'}`}>{a.status}</span></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
