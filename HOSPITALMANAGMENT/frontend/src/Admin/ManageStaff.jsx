import React, { useState, useEffect } from 'react';
import { userApi } from '../api';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // userApi.getAllUsers() sends Authorization: Bearer <token> automatically
        const res = await userApi.getAllUsers();
        setUsers(res.data);
      } catch (err) {
        const msg = err?.response?.status === 403
          ? 'Access denied. Admin privileges required.'
          : 'Failed to load users.';
        setError(msg);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this user? This action cannot be undone.')) return;
    try {
      await userApi.deleteUser(id);
      setUsers(prev => prev.filter(u => u.id !== id));
    } catch {
      alert('Failed to delete user.');
    }
  };

  const filtered = users.filter(u => {
    const matchSearch = u.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        u.email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRole = filterRole === 'all' || u.role === filterRole;
    return matchSearch && matchRole;
  });

  if (loading) return <div className="page-wrapper"><div className="loading-spinner"><div className="spinner" /></div></div>;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>Manage Users</h1>
            <p className="text-muted">{users.length} total users registered in the system</p>
          </div>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        {/* Filters */}
        <div className="filters-bar">
          <input
            className="form-control search-input"
            placeholder="🔍  Search by name or email..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <select className="form-control role-select" value={filterRole} onChange={e => setFilterRole(e.target.value)}>
            <option value="all">All Roles</option>
            <option value="patient">Patients</option>
            <option value="doctor">Doctors</option>
            <option value="admin">Admins</option>
          </select>
        </div>

        {/* Stats */}
        <div className="grid-3" style={{ marginBottom: '1.5rem' }}>
          {['patient', 'doctor', 'admin'].map(role => (
            <div key={role} className="stat-card" style={{ borderLeftColor: role === 'doctor' ? '#10b981' : role === 'admin' ? '#3b82f6' : '#f59e0b' }}>
              <div className="stat-card-icon" style={{ background: role === 'doctor' ? '#d1fae5' : role === 'admin' ? '#dbeafe' : '#fef3c7', fontSize: '22px' }}>
                {role === 'doctor' ? '🩺' : role === 'admin' ? '🔐' : '🏥'}
              </div>
              <div className="stat-card-info">
                <h3>{users.filter(u => u.role === role).length}</h3>
                <p style={{ textTransform: 'capitalize' }}>{role}s</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Specialization</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan="8" className="empty-state">No users found.</td></tr>
              ) : (
                filtered.map((user, idx) => (
                  <tr key={user.id}>
                    <td className="text-muted text-sm">{idx + 1}</td>
                    <td>
                      <div className="user-name-cell">
                        <div className="table-avatar">{user.username?.charAt(0).toUpperCase()}</div>
                        <div>
                          <div style={{ fontWeight: 600 }}>{user.username}</div>
                          {user.department && <div className="text-muted text-xs">{user.department}</div>}
                        </div>
                      </div>
                    </td>
                    <td className="text-muted text-sm">{user.email}</td>
                    <td>
                      <span className={`badge ${user.role === 'admin' ? 'badge-info' : user.role === 'doctor' ? 'badge-success' : 'badge-secondary'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="text-muted text-sm">{user.phone || '—'}</td>
                    <td className="text-muted text-sm">{user.gender || '—'}</td>
                    <td className="text-muted text-sm">{user.specialization || '—'}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
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

export default ManageUsers;