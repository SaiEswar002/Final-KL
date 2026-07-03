import React, { useState, useEffect } from 'react';
import { bookingApi } from '../api';

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await bookingApi.getAllBookings();
        setAppointments(res.data);
      } catch {
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this appointment record?')) return;
    try {
      await bookingApi.deleteBooking(id);
      setAppointments(prev => prev.filter(a => a.id !== id));
    } catch {
      alert('Failed to delete appointment.');
    }
  };

  const handleCancel = async (id) => {
    try {
      await bookingApi.cancelBooking(id);
      setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelled' } : a));
    } catch {
      alert('Failed to cancel appointment.');
    }
  };

  const filtered = appointments.filter(a => {
    const matchSearch = a.doctor?.toLowerCase().includes(search.toLowerCase()) ||
                        a.hospital?.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'all' || a.status === filterStatus;
    return matchSearch && matchStatus;
  });

  if (loading) return <div className="page-wrapper"><div className="loading-spinner"><div className="spinner" /></div></div>;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>All Appointments</h1>
            <p className="text-muted">{appointments.length} total appointments in the system</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          {[
            { label: 'Total', count: appointments.length, color: '#0f4c81', bg: '#dbeafe', icon: '📅' },
            { label: 'Booked', count: appointments.filter(a => a.status === 'booked').length, color: '#10b981', bg: '#d1fae5', icon: '✅' },
            { label: 'Cancelled', count: appointments.filter(a => a.status === 'cancelled').length, color: '#ef4444', bg: '#fee2e2', icon: '❌' },
          ].map(s => (
            <div key={s.label} className="stat-card" style={{ borderLeftColor: s.color }}>
              <div className="stat-card-icon" style={{ background: s.bg }}>{s.icon}</div>
              <div className="stat-card-info"><h3>{s.count}</h3><p>{s.label} Appointments</p></div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="filters-bar">
          <input className="form-control search-input" placeholder="🔍  Search by doctor or hospital..."
            value={search} onChange={e => setSearch(e.target.value)} />
          <select className="form-control role-select" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="booked">Booked</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Hospital</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time Slot</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
                    No appointments found.
                  </td>
                </tr>
              ) : (
                filtered.map((a, idx) => (
                  <tr key={a.id}>
                    <td className="text-muted text-sm">{idx + 1}</td>
                    <td style={{ fontWeight: 500 }}>{a.hospital}</td>
                    <td>{a.doctor}</td>
                    <td>{a.date}</td>
                    <td className="text-sm">{a.timeSlot}</td>
                    <td>
                      <span className={`badge ${a.status === 'booked' ? 'badge-success' : a.status === 'cancelled' ? 'badge-danger' : 'badge-secondary'}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {a.status === 'booked' && (
                          <button className="btn btn-sm" style={{ background: '#fef3c7', color: '#92400e', border: '1px solid #fbbf24' }}
                            onClick={() => handleCancel(a.id)}>
                            Cancel
                          </button>
                        )}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a.id)}>Delete</button>
                      </div>
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

export default ViewAppointments;
