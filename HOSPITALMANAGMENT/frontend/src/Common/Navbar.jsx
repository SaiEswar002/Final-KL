import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

/* ---- SVG icon components (no emojis) ---- */
const CrosshairIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const Navbar = () => {
  const [user, setUser]       = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      try { setUser(JSON.parse(stored)); }
      catch { localStorage.removeItem('user'); }
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  const isActive = (path) =>
    location.pathname === path ? 'nav-link active' : 'nav-link';

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar-header">
      <nav className="navbar-inner">

        {/* Brand */}
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <CrosshairIcon />
          </div>
          <div className="brand-text">
            <span className="brand-name">KL Hospital</span>
            <span className="brand-sub">Management System</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {!user && (
            <>
              <li><Link className={isActive('/')}        to="/"        onClick={closeMenu}>Home</Link></li>
              <li><Link className={isActive('/doctors')} to="/doctors"  onClick={closeMenu}>Doctors</Link></li>
              <li><Link className={isActive('/contact')} to="/contact"  onClick={closeMenu}>Contact</Link></li>
            </>
          )}

          {user?.role === 'admin' && (
            <>
              <li><Link className={isActive('/admin/dashboard')}         to="/admin/dashboard"         onClick={closeMenu}>Dashboard</Link></li>
              <li><Link className={isActive('/admin/manage-users')}      to="/admin/manage-users"      onClick={closeMenu}>Manage Users</Link></li>
              <li><Link className={isActive('/admin/post-appointment')}  to="/admin/post-appointment"  onClick={closeMenu}>Post Slot</Link></li>
              <li><Link className={isActive('/admin/view-appointments')} to="/admin/view-appointments" onClick={closeMenu}>All Bookings</Link></li>
              <li><Link className={isActive('/admin/allocate-resources')} to="/admin/allocate-resources" onClick={closeMenu}>Resources</Link></li>
            </>
          )}

          {user?.role === 'doctor' && (
            <>
              <li><Link className={isActive('/doctor/dashboard')} to="/doctor/dashboard" onClick={closeMenu}>Dashboard</Link></li>
              <li><Link className={isActive('/contact')}          to="/contact"           onClick={closeMenu}>Contact</Link></li>
            </>
          )}

          {user?.role === 'patient' && (
            <>
              <li><Link className={isActive('/patient/dashboard')}  to="/patient/dashboard"  onClick={closeMenu}>My Profile</Link></li>
              <li><Link className={isActive('/book-appointment')}   to="/book-appointment"   onClick={closeMenu}>Book Appointment</Link></li>
              <li><Link className={isActive('/booking-history')}    to="/booking-history"    onClick={closeMenu}>My Bookings</Link></li>
              <li><Link className={isActive('/contact')}            to="/contact"             onClick={closeMenu}>Contact</Link></li>
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
              <button className="btn btn-sm logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-accent">
              Sign In
            </Link>
          )}

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
