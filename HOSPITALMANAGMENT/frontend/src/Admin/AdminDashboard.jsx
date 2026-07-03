import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const admin = JSON.parse(localStorage.getItem('user') || '{}');
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, appsRes] = await Promise.all([
          axios.get('http://localhost:8091/api/users/all'),
          axios.get('http://localhost:8091/api/appointments'),
        ]);
        setUsers(usersRes.data);
        setAppointments(appsRes.data);
      } catch (err) {
        setError('Failed to load dashboard data.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const patients = users.filter(u => u.role === 'patient');
  const doctors = users.filter(u => u.role === 'doctor');
  const bookedCount = appointments.filter(a => a.status === 'booked').length;

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`http://localhost:8091/api/users/${id}`);
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

  return (
    <div className="page-wrapper">
      <div className="page-content">
        {/* Page Header */}
        <div className="dash-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p className="text-muted">Welcome back, <strong>{admin.username}</strong> — here's your hospital overview.</p>
          </div>
          <div className="dash-date">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {/* Stats Grid */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          <div className="stat-card" style={{ borderLeftColor: '#0f4c81' }}>
            <div className="stat-card-icon" style={{ background: '#dbeafe' }}>👥</div>
            <div className="stat-card-info">
              <h3>{users.length}</h3>
              <p>Total Users</p>
            </div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#10b981' }}>
            <div className="stat-card-icon" style={{ background: '#d1fae5' }}>🩺</div>
            <div className="stat-card-info">
              <h3>{doctors.length}</h3>
              <p>Registered Doctors</p>
            </div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#f59e0b' }}>
            <div className="stat-card-icon" style={{ background: '#fef3c7' }}>🏥</div>
            <div className="stat-card-info">
              <h3>{patients.length}</h3>
              <p>Registered Patients</p>
            </div>
          </div>
          <div className="stat-card" style={{ borderLeftColor: '#00b4d8' }}>
            <div className="stat-card-icon" style={{ background: '#cffafe' }}>📅</div>
            <div className="stat-card-info">
              <h3>{bookedCount}</h3>
              <p>Active Appointments</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="section-heading">
          <h2>Quick Actions</h2>
        </div>
        <div className="quick-actions grid-4" style={{ marginBottom: '2rem' }}>
          {[
            { icon: '📋', label: 'Post Appointment Slot', to: '/admin/post-appointment' },
            { icon: '📅', label: 'View All Bookings', to: '/admin/view-appointments' },
            { icon: '👥', label: 'Manage Users', to: '/admin/manage-users' },
            { icon: '🏥', label: 'Allocate Resources', to: '/admin/allocate-resources' },
          ].map((action) => (
            <Link key={action.label} to={action.to} className="quick-action-card">
              <span className="qa-icon">{action.icon}</span>
              <span className="qa-label">{action.label}</span>
            </Link>
          ))}
        </div>

        {/* Users Table */}
        <div className="section-heading">
          <h2>All Registered Users</h2>
          <Link to="/admin/manage-users" className="btn btn-primary btn-sm">Manage Users</Link>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr><td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>No users found.</td></tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={user.id}>
                    <td className="text-muted">{idx + 1}</td>
                    <td>
                      <div className="user-name-cell">
                        <div className="table-avatar">{user.username?.charAt(0).toUpperCase()}</div>
                        <span>{user.username}</span>
                      </div>
                    </td>
                    <td className="text-muted">{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'admin' ? 'badge-info' : user.role === 'doctor' ? 'badge-success' : 'badge-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="text-muted">{user.phone || '—'}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>
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
