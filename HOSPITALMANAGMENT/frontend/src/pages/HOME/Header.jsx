import * as React from "react";

function Header() {
  return (
    <>
      <header className="header">
        {/* Logo on the left */}
        <div className="logo">
         <b> KL-</b><span className="highlight">HOSPITALS</span>
        </div>

        {/* Contact info on the right */}
        <div className="contact-info">
          <div className="contact-block">
            <h2 className="contact-title">Emergency</h2>
            <p className="contact-detail">(+91) 92378-21832</p>
          </div>
          <div className="contact-block">
            <h2 className="contact-title">Work Hour</h2>
            <p className="contact-detail">09:00 - 20:00 Everyday</p>
          </div>
          <div className="contact-block">
            <h2 className="contact-title">Location</h2>
            <p className="contact-detail">Vaddeswaram</p>
          </div>
        </div>
      </header>

      {/* Updated CSS */}
      <style jsx>{`
        .header {
          background: #fcfefe;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          width: 99%;
        }

        @media (max-width: 991px) {
          .header {
            flex-direction: column;
            padding: 10px 20px;
          }
        }

        .logo {
          color: var(--Secondary,rgb(0, 7, 106));
          text-transform: uppercase;
          font: 400 36px Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          flex: 0 1 auto; /* Ensure the logo stays on the left */
        }

        .highlight {
          color: rgb(2, 67, 104);
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 30px 48px;
          font: 500 16px Work Sans, sans-serif;
          justify-content: flex-end; /* Align contact info to the right */
          align-items: flex-start;
          flex: 1 1 auto; /* Allow the contact-info section to grow and push to the right */
        }

        @media (max-width: 991px) {
          .contact-info {
            width: 100%;
            justify-content: center; /* Center-align for smaller screens */
          }
        }

        .contact-block {
          display: flex;
          flex-direction: column;
        }

        .contact-title {
          color: var(--Primary, #1f2b6c);
          text-transform: uppercase;
        }

        .contact-detail {
          color: var(--Secondary, #159eec);
        }
      `}</style>
    </>
  );
}

export default Header;
