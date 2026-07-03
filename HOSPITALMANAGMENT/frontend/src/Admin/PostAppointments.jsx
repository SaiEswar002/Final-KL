import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TIME_SLOTS = [
  '09:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '02:00 PM – 03:00 PM',
  '03:00 PM – 04:00 PM',
  '04:00 PM – 05:00 PM',
];

const PostAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    hospital: 'KL Hospital, Tadepalle',
    doctor: '',
    date: '',
    timeSlot: '',
    description: '',
  });
  const [bookedSlots, setBookedSlots] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8091/api/doctors').then(res => setDoctors(res.data)).catch(() => {});
  }, []);

  useEffect(() => {
    if (form.doctor && form.date) {
      const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
      const taken = existing
        .filter(a => a.doctor === form.doctor && a.date === form.date)
        .map(a => a.timeSlot);
      setBookedSlots(taken);
    }
  }, [form.doctor, form.date]);

  const availableSlots = TIME_SLOTS.filter(slot => !bookedSlots.includes(slot));

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setMessage({ text: '', type: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.doctor || !form.date || !form.timeSlot) {
      setMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }
    setLoading(true);
    const existing = JSON.parse(localStorage.getItem('appointments') || '[]');
    const updated = [...existing, { ...form, id: Date.now() }];
    localStorage.setItem('appointments', JSON.stringify(updated));
    setMessage({ text: 'Appointment slot posted successfully! Patients can now book it.', type: 'success' });
    setForm(prev => ({ ...prev, doctor: '', date: '', timeSlot: '', description: '' }));
    setLoading(false);
  };

  return (
    <div className="page-wrapper">
      <div className="page-content" style={{ maxWidth: 700 }}>
        <div className="dash-header">
          <div>
            <h1>Post Appointment Slot</h1>
            <p className="text-muted">Create available appointment slots for patients to book.</p>
          </div>
        </div>

        {message.text && (
          <div className={`alert alert-${message.type === 'error' ? 'error' : 'success'}`}>
            {message.text}
          </div>
        )}

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Hospital *</label>
              <input name="hospital" className="form-control" value={form.hospital} onChange={handleChange} required />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">Doctor *</label>
                <select name="doctor" className="form-control" value={form.doctor} onChange={handleChange} required>
                  <option value="">— Select Doctor —</option>
                  {doctors.map(d => (
                    <option key={d.id} value={d.username}>
                      {d.username} {d.specialization ? `(${d.specialization})` : ''}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Date *</label>
                <input name="date" type="date" className="form-control" value={form.date} onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]} required />
              </div>
            </div>

            {form.doctor && form.date && (
              <div className="slots-info">
                {availableSlots.length > 0
                  ? <span className="badge badge-success">✅ {availableSlots.length} slots available</span>
                  : <span className="badge badge-danger">❌ No slots available for this selection</span>
                }
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Time Slot *</label>
              <select name="timeSlot" className="form-control" value={form.timeSlot} onChange={handleChange} required>
                <option value="">— Select Time Slot —</option>
                {availableSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Description / Notes</label>
              <textarea name="description" className="form-control" rows="3"
                placeholder="Optional: Add consultation notes or instructions"
                value={form.description} onChange={handleChange} style={{ resize: 'vertical' }} />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
              {loading ? 'Posting...' : '📋 Post Appointment Slot'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAppointment;