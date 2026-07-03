import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookAppointment = () => {
  const [slots, setSlots] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('appointments') || '[]');
    setSlots(stored);
  }, []);

  const handleBook = (slot) => {
    navigate('/payment', { state: { appointment: slot } });
  };

  const filtered = slots.filter(s =>
    s.doctor?.toLowerCase().includes(search.toLowerCase()) ||
    s.hospital?.toLowerCase().includes(search.toLowerCase()) ||
    s.date?.includes(search)
  );

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>Book an Appointment</h1>
            <p className="text-muted">Browse available appointment slots and book one that fits your schedule.</p>
          </div>
        </div>

        {/* Search */}
        <div className="filters-bar" style={{ marginBottom: '1.5rem' }}>
          <input className="form-control search-input"
            placeholder="🔍  Search by doctor, hospital, or date..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state card">
            <div className="empty-state-icon">📅</div>
            <h3>No Appointment Slots Available</h3>
            <p className="text-muted" style={{ marginTop: 8 }}>
              The admin hasn't posted any available slots yet. Please check back later or contact us.
            </p>
          </div>
        ) : (
          <div className="slots-grid">
            {filtered.map((slot, idx) => (
              <div key={idx} className="slot-card card">
                <div className="slot-header">
                  <div className="slot-hospital">🏥 {slot.hospital}</div>
                  <span className="badge badge-success">Available</span>
                </div>
                <div className="slot-doctor">👨‍⚕️ Dr. {slot.doctor}</div>
                <div className="slot-details">
                  <div className="slot-detail"><span>📅</span> <span>{slot.date}</span></div>
                  <div className="slot-detail"><span>🕐</span> <span>{slot.timeSlot}</span></div>
                </div>
                {slot.description && (
                  <p className="slot-desc text-muted text-sm">{slot.description}</p>
                )}
                <button className="btn btn-primary btn-slot" onClick={() => handleBook(slot)}>
                  Confirm Booking →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
