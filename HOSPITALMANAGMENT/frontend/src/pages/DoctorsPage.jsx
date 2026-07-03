import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DoctorsPage.css';

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8091/api/doctors')
      .then(res => setDoctors(res.data))
      .catch(() => setDoctors([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = doctors.filter(d =>
    d.username?.toLowerCase().includes(search.toLowerCase()) ||
    d.specialization?.toLowerCase().includes(search.toLowerCase()) ||
    d.department?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="page-wrapper"><div className="loading-spinner"><div className="spinner" /></div></div>;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1>Our Medical Team</h1>
          <p className="text-muted" style={{ marginTop: 8 }}>
            Meet our experienced doctors across all specializations.
          </p>
        </div>

        {/* Search */}
        <div className="filters-bar" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
          <input className="form-control" style={{ maxWidth: 400 }}
            placeholder="🔍  Search by name, specialization, or department..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state card">
            <div className="empty-state-icon">🩺</div>
            <h3>No Doctors Found</h3>
            <p className="text-muted" style={{ marginTop: 8 }}>
              {doctors.length === 0
                ? 'No doctors have registered yet. Doctors can register through the login page.'
                : 'No doctors match your search.'}
            </p>
          </div>
        ) : (
          <div className="doctors-grid">
            {filtered.map(doctor => (
              <div key={doctor.id} className="doctor-card card">
                <div className="doctor-avatar">
                  {doctor.profilePhoto
                    ? <img src={`http://localhost:8091/upload/${doctor.profilePhoto}`} alt={doctor.username} />
                    : <span>{doctor.username?.charAt(0).toUpperCase()}</span>
                  }
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">Dr. {doctor.username}</h3>
                  {doctor.specialization && (
                    <span className="badge badge-success" style={{ marginBottom: 6 }}>{doctor.specialization}</span>
                  )}
                  {doctor.department && <p className="doctor-dept text-muted text-sm">🏥 {doctor.department}</p>}
                  {doctor.phone && <p className="doctor-phone text-sm text-muted">📞 {doctor.phone}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
