import React, { useEffect, useState } from 'react';
import { bookingApi } from '../api';

const BookingHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (user?.id) {
          const res = await bookingApi.getBookingsByUserId(user.id);
          setAppointments(res.data);
        }
      } catch {
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [user?.id]);

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this booking from your history?')) return;
    try {
      await bookingApi.deleteBooking(id);
      setAppointments(prev => prev.filter(a => a.id !== id));
    } catch {
      alert('Failed to remove booking.');
    }
  };

  if (loading) return <div className="page-wrapper"><div className="loading-spinner"><div className="spinner" /></div></div>;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="dash-header">
          <div>
            <h1>My Booking History</h1>
            <p className="text-muted">{appointments.length} appointment{appointments.length !== 1 ? 's' : ''} found for your account.</p>
          </div>
        </div>

        {appointments.length === 0 ? (
          <div className="empty-state card">
            <div className="empty-state-icon">📋</div>
            <h3>No Bookings Yet</h3>
            <p className="text-muted" style={{ marginTop: 8 }}>You haven't booked any appointments. Browse available slots to get started.</p>
          </div>
        ) : (
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
                {appointments.map((a, idx) => (
                  <tr key={a.id}>
                    <td className="text-muted text-sm">{idx + 1}</td>
                    <td style={{ fontWeight: 500 }}>{a.hospital}</td>
                    <td>Dr. {a.doctor}</td>
                    <td>{a.date}</td>
                    <td className="text-sm text-muted">{a.timeSlot}</td>
                    <td>
                      <span className={`badge ${a.status === 'booked' ? 'badge-success' : a.status === 'cancelled' ? 'badge-danger' : 'badge-secondary'}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingHistory;
