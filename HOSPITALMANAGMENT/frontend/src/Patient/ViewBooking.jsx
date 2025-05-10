import React, { useEffect, useState } from 'react';
import './ViewBooking.css'; // Assuming you're importing the CSS file

const ViewAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (index) => {
    // Remove the selected appointment
    const updatedAppointments = appointments.filter((_, i) => i !== index);

    // Update localStorage and state
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);

    alert('Appointment deleted successfully!');
  };

  return (
    <div className="view-booking-container">
      <h2 className="booking-title">View Appointments</h2>
      {appointments.length === 0 ? (
        <p className="no-bookings">No appointments available.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr className="table-header">
              <th>Hospital</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.hospital}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.timeSlot}</td>
                <td>{appointment.description}</td>
                <td>
                  <button
                    onClick={() => handleDelete(index)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginRight: '5px',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAppointments;
