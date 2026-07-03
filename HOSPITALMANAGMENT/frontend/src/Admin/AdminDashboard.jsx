import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userApi, bookingApi } from '../api';
import './AdminDashboard.css';

/* ---- Inline SVG icons ---- */
const Icon = {
  Users:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Doctor:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4m0 4h.01"/></svg>,
  Patient:  () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Slot:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Manage:   () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  Resource: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
};

/* ---- Mini bar chart component ---- */
const MiniChart = ({ data, label, color }) => {
  const max = Math.max(...data.map(d => d.value), 1);
  return (
    <div className="mini-chart">
      <div className="mini-chart-bars">
        {data.map((d, i) => (
          <div key={i} className="mini-bar-col">
            <div
              className="mini-bar-fill"
              style={{
                height: `${(d.value / max) * 100}%`,
                background: color,
              }}
              title={`${d.label}: ${d.value}`}
            />
          </div>
        ))}
      </div>
      <p className="mini-chart-label">{label}</p>
    </div>
  );
};

const AdminDashboard = () => {
  const admin = JSON.parse(localStorage.getItem('user') || '{}');
  const [users, setUsers]               = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, appsRes] = await Promise.all([
          userApi.getAllUsers(),
          bookingApi.getAllBookings(),
        ]);
        setUsers(usersRes.data);
        setAppointments(appsRes.data);
      } catch {
        setError('Failed to load dashboard data. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const patients    = users.filter(u => u.role === 'patient');
  const doctors     = users.filter(u => u.role === 'doctor');
  const booked      = appointments.filter(a => a.status === 'booked');
  const cancelled   = appointments.filter(a => a.status === 'cancelled');

  /* Role distribution for chart */
  const roleData = [
    { label: 'Patients', value: patients.length },
    { label: 'Doctors',  value: doctors.length  },
    { label: 'Admins',   value: users.filter(u => u.role === 'admin').length },
  ];

  /* Appointment status distribution */
  const apptData = [
    { label: 'Booked',    value: booked.length },
    { label: 'Cancelled', value: cancelled.length },
  ];

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Permanently delete this user? This action cannot be undone.')) return;
    try {
      await userApi.deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch {
      alert('Failed to delete user.');
    }
  };

  if (loading) return (
    <div className="page-wrapper">
      <div className="loading-spinner"><div className="spinner" /></div>
    </div>
  );

  const statCards = [
    { label: 'Total Users',    value: users.length,        icon: Icon.Users,    color: '#0D2B4E', bg: '#E8EEF5' },
    { label: 'Doctors',        value: doctors.length,      icon: Icon.Doctor,   color: '#0EA5A0', bg: '#E6F7F7' },
    { label: 'Patients',       value: patients.length,     icon: Icon.Patient,  color: '#2563EB', bg: '#DBEAFE' },
    { label: 'Active Bookings',value: booked.length,       icon: Icon.Calendar, color: '#16A34A', bg: '#DCFCE7' },
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content">

        {/* Header */}
        <div className="dash-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p className="text-muted" style={{ marginTop: 4 }}>
              Welcome back, <strong>{admin.username}</strong> — hospital overview for today.
            </p>
          </div>
          <div className="dash-date">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {/* Stat Cards — real data */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          {statCards.map(s => (
            <div key={s.label} className="stat-card" style={{ borderLeft: `3px solid ${s.color}` }}>
              <div className="stat-card-icon" style={{ background: s.bg, color: s.color }}>
                <s.icon />
              </div>
              <div className="stat-card-info">
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid-2" style={{ marginBottom: '2rem' }}>

          {/* Users by Role chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Users by Role</h3>
              <span className="badge badge-secondary">{users.length} total</span>
            </div>
            <div className="role-bars">
              {roleData.map(r => (
                <div key={r.label} className="role-bar-row">
                  <span className="role-bar-label">{r.label}</span>
                  <div className="role-bar-track">
                    <div
                      className="role-bar-fill"
                      style={{
                        width: users.length ? `${(r.value / users.length) * 100}%` : '0%',
                        background: r.label === 'Patients' ? '#0D2B4E' : r.label === 'Doctors' ? '#0EA5A0' : '#2563EB',
                      }}
                    />
                  </div>
                  <span className="role-bar-count">{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Appointment Status chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Appointment Status</h3>
              <span className="badge badge-secondary">{appointments.length} total</span>
            </div>
            <div className="role-bars">
              {[
                { label: 'Booked',    value: booked.length,    color: '#16A34A' },
                { label: 'Cancelled', value: cancelled.length, color: '#DC2626' },
              ].map(r => (
                <div key={r.label} className="role-bar-row">
                  <span className="role-bar-label">{r.label}</span>
                  <div className="role-bar-track">
                    <div
                      className="role-bar-fill"
                      style={{
                        width: appointments.length ? `${(r.value / appointments.length) * 100}%` : '0%',
                        background: r.color,
                      }}
                    />
                  </div>
                  <span className="role-bar-count">{r.value}</span>
                </div>
              ))}
            </div>

            {/* Cancellation rate */}
            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <p className="text-muted text-sm">Cancellation Rate</p>
              <p style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginTop: 2 }}>
                {appointments.length
                  ? `${((cancelled.length / appointments.length) * 100).toFixed(1)}%`
                  : '—'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Actions — SVG icons only */}
        <div className="section-heading">
          <h2>Quick Actions</h2>
        </div>
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          {[
            { icon: Icon.Slot,     label: 'Post Appointment Slot', to: '/admin/post-appointment' },
            { icon: Icon.Calendar, label: 'View All Bookings',     to: '/admin/view-appointments' },
            { icon: Icon.Manage,   label: 'Manage Users',          to: '/admin/manage-users' },
            { icon: Icon.Resource, label: 'Allocate Resources',    to: '/admin/allocate-resources' },
          ].map((action) => (
            <Link key={action.label} to={action.to} className="quick-action-card">
              <div className="qa-icon-wrap"><action.icon /></div>
              <span className="qa-label">{action.label}</span>
            </Link>
          ))}
        </div>

        {/* Users Table */}
        <div className="section-heading">
          <h2>All Registered Users</h2>
          <Link to="/admin/manage-users" className="btn btn-sm btn-primary">Manage Users</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th><th>Name</th><th>Email</th><th>Role</th><th>Phone</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan="6" className="empty-state">No users registered yet.</td></tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={user.id}>
                    <td className="text-muted text-sm">{idx + 1}</td>
                    <td>
                      <div className="user-name-cell">
                        <div className="table-avatar">{user.username?.charAt(0).toUpperCase()}</div>
                        <span style={{ fontWeight: 500 }}>{user.username}</span>
                      </div>
                    </td>
                    <td className="text-muted">{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'admin' ? 'badge-info' : user.role === 'doctor' ? 'badge-accent' : 'badge-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="text-muted">{user.phone || '—'}</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
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

export default AdminDashboard;
