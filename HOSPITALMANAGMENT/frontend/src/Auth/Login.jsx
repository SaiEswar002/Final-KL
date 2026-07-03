import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../api';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'patient',
    phone: '',
    address: '',
    gender: '',
    age: '',
    specialization: '',
    department: '',
    profilePhoto: null,
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    setFormData((prev) => ({ ...prev, profilePhoto: e.target.files[0] }));
  };

  const validate = () => {
    if (!formData.email || !formData.password) {
      setMessage({ text: 'Email and password are required.', type: 'error' });
      return false;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(formData.email)) {
      setMessage({ text: 'Please enter a valid email address.', type: 'error' });
      return false;
    }
    if (!isLogin && !formData.username) {
      setMessage({ text: 'Username is required.', type: 'error' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      if (isLogin) {
        const res = await userApi.loginUser(formData.email, formData.password);
        // Backend returns AuthResponse: { token, id, username, email, role, ... }
        const user = res.data;
        if (user?.token) {
          // Store full AuthResponse (includes JWT token for subsequent API calls)
          localStorage.setItem('user', JSON.stringify(user));
          setMessage({ text: 'Login successful! Redirecting...', type: 'success' });
          setTimeout(() => {
            if (user.role === 'admin') navigate('/admin/dashboard');
            else if (user.role === 'doctor') navigate('/doctor/dashboard');
            else navigate('/patient/dashboard');
          }, 800);
        }
      } else {
        const form = new FormData();
        form.append('username', formData.username);
        form.append('email', formData.email);
        form.append('password', formData.password);
        form.append('role', formData.role);
        if (formData.phone) form.append('phone', formData.phone);
        if (formData.address) form.append('address', formData.address);
        if (formData.gender) form.append('gender', formData.gender);
        if (formData.age) form.append('age', formData.age);
        if (formData.specialization) form.append('specialization', formData.specialization);
        if (formData.department) form.append('department', formData.department);
        if (formData.profilePhoto) form.append('profilePhoto', formData.profilePhoto);

        const res = await userApi.registerUser(form);
        if (res.data?.email) {
          setMessage({ text: 'Registration successful! Please sign in.', type: 'success' });
          setIsLogin(true);
          setFormData({ username: '', email: '', password: '', role: 'patient', phone: '', address: '', gender: '', age: '', specialization: '', department: '', profilePhoto: null });
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.';
      setMessage({ text: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setMessage({ text: '', type: '' });
  };

  return (
    <div className="login-page">
      {/* Left Panel */}
      <div className="login-left">
        <div className="login-left-content">
          <span className="login-logo-icon">🏥</span>
          <h2>KL Hospital<br />Management System</h2>
          <p>Your health, our priority. Manage appointments, doctors, and hospital resources — all in one platform.</p>
          <div className="login-features">
            <div className="login-feature">✅ Easy Appointment Booking</div>
            <div className="login-feature">✅ Real-time Doctor Availability</div>
            <div className="login-feature">✅ Secure Patient Records</div>
            <div className="login-feature">✅ 24/7 System Access</div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="login-right">
        <div className="login-box">
          <h1 className="login-title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="login-subtitle">
            {isLogin ? "Don't have an account? " : 'Already registered? '}
            <button type="button" className="toggle-mode-btn" onClick={switchMode}>
              {isLogin ? 'Register here' : 'Sign in'}
            </button>
          </p>

          {message.text && (
            <div className={`alert alert-${message.type === 'error' ? 'error' : 'success'}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            {/* Register-only fields */}
            {!isLogin && (
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input name="username" className="form-control" placeholder="Your full name" value={formData.username} onChange={handleChange} required />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email Address *</label>
              <input name="email" type="email" className="form-control" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label className="form-label">Password *</label>
              <input name="password" type="password" className="form-control" placeholder="••••••••" value={formData.password} onChange={handleChange} required />
            </div>

            {!isLogin && (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Role *</label>
                    <select name="role" className="form-control" value={formData.role} onChange={handleChange}>
                      <option value="patient">Patient</option>
                      <option value="doctor">Doctor</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select name="gender" className="form-control" value={formData.gender} onChange={handleChange}>
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input name="phone" className="form-control" placeholder="+91 9xxxxxxxx" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Age</label>
                    <input name="age" type="number" className="form-control" placeholder="Age" value={formData.age} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Address</label>
                  <input name="address" className="form-control" placeholder="City, State" value={formData.address} onChange={handleChange} />
                </div>

                {formData.role === 'doctor' && (
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Specialization</label>
                      <input name="specialization" className="form-control" placeholder="e.g. Cardiology" value={formData.specialization} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Department</label>
                      <input name="department" className="form-control" placeholder="e.g. OPD" value={formData.department} onChange={handleChange} />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Profile Photo</label>
                  <input type="file" className="form-control" accept="image/*" onChange={handlePhotoChange} />
                </div>
              </>
            )}

            <button type="submit" className="btn btn-primary btn-submit" disabled={loading}>
              {loading ? <><span className="btn-spinner" /> Processing...</> : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;