import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookingApi } from '../api';

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointment } = location.state || {};

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const handleConfirm = async (e) => {
    e.preventDefault();

    if (!appointment) {
      alert('Invalid appointment data. Please go back and select a slot.');
      return;
    }

    try {
      const bookingData = {
        userId: user.id || 1,
        hospital: appointment.hospital,
        doctor: appointment.doctor,
        date: appointment.date,
        timeSlot: appointment.timeSlot,
        description: appointment.description || null,
      };

      await bookingApi.createBooking(bookingData);

      navigate('/booking-history', { replace: true });
    } catch (error) {
      alert('Failed to confirm booking. Please try again.');
    }
  };

  if (!appointment) {
    return (
      <div className="page-wrapper">
        <div className="page-content" style={{ maxWidth: 600 }}>
          <div className="empty-state card">
            <div className="empty-state-icon">❌</div>
            <h3>No Appointment Selected</h3>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/book-appointment')}>
              Browse Appointments
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ maxWidth: 600 }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Confirm Booking</h1>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>Review your appointment details before confirming.</p>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem' }}>
            📅 Appointment Details
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { icon: '🏥', label: 'Hospital', value: appointment.hospital },
              { icon: '🩺', label: 'Doctor', value: `Dr. ${appointment.doctor}` },
              { icon: '📅', label: 'Date', value: appointment.date },
              { icon: '🕐', label: 'Time', value: appointment.timeSlot },
              ...(appointment.description ? [{ icon: '📝', label: 'Notes', value: appointment.description }] : []),
            ].map(({ icon, label, value }) => (
              <div key={label} className="profile-info-item">
                <span className="info-label">{icon} {label}</span>
                <span className="info-value">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '0.5rem' }}>Booked by</h3>
          <p className="text-muted text-sm">{user.username} — {user.email}</p>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '1.5rem' }}>
          <button className="btn btn-primary btn-lg" onClick={handleConfirm}>
            ✅ Confirm Appointment
          </button>
          <button className="btn btn-outline btn-lg" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;