export function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          About us
        </a>
        <a href="#" className="nav-link active">
          Services
        </a>
        <a href="#" className="nav-link">
          Doctors
        </a>
        <a href="#" className="nav-link">
          News
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>

      <div className="appointment-wrapper">
        <button className="appointment-btn">Appointment</button>
      </div>

      <style jsx>{`
        .navbar {
          background: #1f2b6c;
          width: 100%;
          padding: 17px 186px 18px 141px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          font-size: 18px;
          color: #fcfefe;
        }

        .nav-link {
          color: #fcfefe;
          text-decoration: none;
          font-weight: 400;
        }

        .nav-link.active {
          color: #bfd2f8;
          font-weight: 600;
        }

        .appointment-wrapper {
          margin-left: 50px;
        }

        .appointment-btn {
          background: #bfd2f8;
          color: #1f2b6c;
          font-size: 16px;
          font-weight: 500;
          padding: 13px 35px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .navbar {
            padding: 17px 20px;
            flex-wrap: wrap;
          }

          .nav-links {
            flex-wrap: wrap;
          }

          .appointment-btn {
            padding: 13px 20px;
          }
        }
      `}</style>
    </nav>
  );
}
