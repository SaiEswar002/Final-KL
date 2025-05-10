import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // Hook to navigate

  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            About us
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Services
          </NavLink>
          <NavLink 
            to="/doctors" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Doctors
          </NavLink>
          <NavLink 
            to="/contacts" 
            className={({ isActive }) => `nav-link ${isActive ? 'highlight' : ''}`}
          >
            Contact
          </NavLink>
        </div>
        <div className="auth-buttons">
          <button className="login-btn" onClick={() => navigate("/Login" , "_blank")}>
            Login
          </button>
          <button className="signup-btn" onClick={() => navigate("/Register")}>
            Register
          </button>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          background: var(--Primary, #1f2b6c);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 5px 20px;
          color: var(--white, #fcfefe);
          font-family: Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .navbar {
            padding: 0 20px;
          }
        }
        .nav-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          align-items: start;
          margin: auto 0;
        }
        .nav-link {
          color: var(--white, #fcfefe);
          font-size: 18px;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: var(--Accent, #bfd2f8);
        }
        .highlight {
          color: var(--Accent, #bfd2f8);
          font-weight: 600;
        }
        .auth-buttons {
          display: flex;
          gap: 15px;
        }
        .login-btn {
          border-radius: 50px;
          background: var(--Accent, #bfd2f8);
          color: var(--Primary, #1f2b6c);
          font-weight: 500;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          margin-top:15px;
          transition: background-color 0.3s ease;
        }
        .login-btn:hover{
          background: var(--Secondary, #159eec);
          color: var(--white, #fcfefe);
        }
        .signup-btn {
          border-radius: 50px;
          background: #42b72a;
          color: var(--Primary, rgb(244, 245, 255));
          font-weight: 500;
          padding: 14px 36px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top:10px;
        }
        .signup-btn:hover {
          background: var(--Secondary, rgb(7, 96, 148));
          color: var(--white, #fcfefe);
        }
      `}</style>
    </>
  );
}

export default Navbar;
