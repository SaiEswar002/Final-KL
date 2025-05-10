export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="brand-column">
            <h2 className="brand-name">
              <span className="brand-highlight">Med</span>
              <span className="brand-highlight">dical</span>
            </h2>
            <p className="brand-tagline">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </p>
          </div>

          <nav className="links-column">
            <h3 className="footer-heading">Important Links</h3>
            <a href="#" className="footer-link">
              Appointment
            </a>
            <a href="#" className="footer-link">
              Doctors
            </a>
            <a href="#" className="footer-link">
              Services
            </a>
            <a href="#" className="footer-link">
              About Us
            </a>
          </nav>

          <div className="contact-column">
            <h3 className="footer-heading">Contact Us</h3>
            <p className="footer-text">Call: (237) 681-812-255</p>
            <p className="footer-text">Email: fildineesoe@gmail.com</p>
            <p className="footer-text">Address: 0123 Some place</p>
            <p className="footer-text">Some country</p>
          </div>

          <div className="newsletter-column">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-input">
              <span className="input-placeholder">
                Enter your email address
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/7c5a858c1c7f55341c8967392990fc08fa464c409722ac54a6e710ec84aa2d32?placeholderIfAbsent=true"
                className="send-icon"
              />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright">
            © 2021 Hospital's name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="social-links">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/6f5abbdcfeead6f2ac784af2e1ae384daa72c805be925980551233311112e6d3?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/ba45ec44ad83a7369b453e900e86a67b40c39275802783224e4a88917f16663b?placeholderIfAbsent=true"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/a8ad1c36fc6d8cb56ec76d681152f7c1cf9ad928f0ef1222ceea1ed6392f77f1?placeholderIfAbsent=true"
              className="social-icon"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #1f2b6c;
          width: 100%;
          padding: 72px 80px;
          margin-top: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .footer-content {
          width: 100%;
          max-width: 992px;
        }
        .footer-grid {
          display: flex;
          gap: 20px;
        }
        .brand-column {
          width: 27%;
        }
        .brand-name {
          color: #bfd2f8;
          font-family: Yeseva One, serif;
          font-size: 36px;
          font-weight: 400;
          text-transform: uppercase;
        }
        .brand-highlight {
          color: #bfd2f8;
        }
        .brand-tagline {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          line-height: 25px;
          margin-top: 18px;
        }
        .links-column {
          width: 16%;
          display: flex;
          flex-direction: column;
        }
        .footer-heading {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 600;
        }
        .footer-link {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 7px;
          text-decoration: none;
        }
        .footer-link:first-of-type {
          margin-top: 39px;
        }
        .contact-column {
          width: 26%;
        }
        .footer-text {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          margin-top: 7px;
        }
        .footer-text:first-of-type {
          margin-top: 39px;
        }
        .newsletter-column {
          width: 31%;
        }
        .newsletter-input {
          background: #bfd2f8;
          border-radius: 5px;
          display: flex;
          margin-top: 39px;
          padding: 13px 14px;
          align-items: center;
          gap: 25px;
        }
        .input-placeholder {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          flex-grow: 1;
        }
        .send-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 23px;
        }
        .footer-divider {
          width: 100%;
          stroke-width: 1px;
          stroke: #bfd2f8;
          margin: 47px 0 43px;
          border: none;
          border-top: 1px solid #bfd2f8;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .copyright {
          color: #fcfefe;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
        .social-links {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          width: 24px;
          fill: #bfd2f8;
        }
        @media (max-width: 991px) {
          .footer {
            padding: 72px 20px;
            margin-top: 40px;
          }
          .footer-content {
            max-width: 100%;
          }
          .footer-grid {
            flex-direction: column;
          }
          .brand-column,
          .links-column,
          .contact-column,
          .newsletter-column {
            width: 100%;
            margin-top: 34px;
          }
          .footer-divider {
            margin: 40px 0;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
          .copyright {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
