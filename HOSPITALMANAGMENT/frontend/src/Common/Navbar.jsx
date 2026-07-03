import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link';

  return (
    <header className="navbar-header">
      <nav className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🏥</span>
          <div className="brand-text">
            <span className="brand-name">KL Hospital</span>
            <span className="brand-sub">Management System</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {/* Public */}
          {!user && (
            <>
              <li><Link className={isActive('/')} to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link className={isActive('/doctors')} to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link></li>
              <li><Link className={isActive('/contact')} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </>
          )}

          {/* Admin links */}
          {user?.role === 'admin' && (
            <>
              <li><Link className={isActive('/admin/dashboard')} to="/admin/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
              <li><Link className={isActive('/admin/manage-users')} to="/admin/manage-users" onClick={() => setMenuOpen(false)}>Manage Users</Link></li>
              <li><Link className={isActive('/admin/post-appointment')} to="/admin/post-appointment" onClick={() => setMenuOpen(false)}>Post Slot</Link></li>
              <li><Link className={isActive('/admin/view-appointments')} to="/admin/view-appointments" onClick={() => setMenuOpen(false)}>All Bookings</Link></li>
              <li><Link className={isActive('/admin/allocate-resources')} to="/admin/allocate-resources" onClick={() => setMenuOpen(false)}>Resources</Link></li>
            </>
          )}

          {/* Doctor links */}
          {user?.role === 'doctor' && (
            <>
              <li><Link className={isActive('/doctor/dashboard')} to="/doctor/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
              <li><Link className={isActive('/contact')} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </>
          )}

          {/* Patient links */}
          {user?.role === 'patient' && (
            <>
              <li><Link className={isActive('/patient/dashboard')} to="/patient/dashboard" onClick={() => setMenuOpen(false)}>My Profile</Link></li>
              <li><Link className={isActive('/book-appointment')} to="/book-appointment" onClick={() => setMenuOpen(false)}>Book Appointment</Link></li>
              <li><Link className={isActive('/booking-history')} to="/booking-history" onClick={() => setMenuOpen(false)}>My Bookings</Link></li>
              <li><Link className={isActive('/contact')} to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </>
          )}
        </ul>

        {/* Right Side */}
        <div className="navbar-right">
          {user ? (
            <div className="navbar-user">
              <div className="user-avatar-circle">
                {user.username?.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <span className="user-name">{user.username}</span>
                <span className="user-role-badge">{user.role}</span>
              </div>
              <button className="btn btn-sm btn-outline logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">
              Sign In
            </Link>
          )}

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
