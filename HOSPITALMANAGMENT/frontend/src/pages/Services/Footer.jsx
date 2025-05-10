export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="brand-col">
            <h2 className="footer-logo">
              <span>Med</span>
              <span>dical</span>
            </h2>
            <p className="brand-tagline">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </p>
          </div>

          <div className="links-col">
            <h3 className="col-title">Important Links</h3>
            <nav className="footer-nav">
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
          </div>

          <div className="contact-col">
            <h3 className="col-title">Contact Us</h3>
            <p className="contact-info">Call: (237) 681-812-255</p>
            <p className="contact-info">Email: fildineesoe@gmail.com</p>
            <p className="contact-info">Address: 0123 Some place</p>
            <p className="contact-info">Some country</p>
          </div>

          <div className="newsletter-col">
            <h3 className="col-title">Newsletter</h3>
            <div className="newsletter-input">
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/23ffd5703ed7ebfbba975d85d85da16d9610ca44121a2fdd0dfe172c351f1963?placeholderIfAbsent=true"
                className="submit-icon"
                alt="Submit"
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
              alt="Social"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/c272d5aa51e35280d6a0c126a945a207f86438c4781f603ecb2c59221c80f59f?placeholderIfAbsent=true"
              alt="Social"
              className="social-icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e0677ce3fd1cc6523e889f8f66ef16f3fc82ef7bb77682e10bd1a8078204db17?placeholderIfAbsent=true"
              alt="Social"
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
          color: #fcfefe;
        }

        .footer-content {
          max-width: 992px;
          margin: 0 auto;
        }

        .footer-grid {
          display: flex;
          gap: 34px;
          margin-bottom: 47px;
        }

        .brand-col {
          flex: 0 0 27%;
        }

        .footer-logo {
          color: #bfd2f8;
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          text-transform: uppercase;
        }

        .brand-tagline {
          color: #fcfefe;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 25px;
          margin-top: 18px;
        }

        .links-col {
          flex: 0 0 16%;
        }

        .contact-col {
          flex: 0 0 26%;
        }

        .newsletter-col {
          flex: 0 0 31%;
        }

        .col-title {
          color: #fcfefe;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 39px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footer-link {
          color: #fcfefe;
          text-decoration: none;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
        }

        .contact-info {
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          margin-top: 7px;
        }

        .newsletter-input {
          display: flex;
          align-items: center;
          gap: 25px;
          background: #bfd2f8;
          border-radius: 5px;
          padding: 13px 14px;
        }

        .email-input {
          flex: 1;
          border: none;
          background: transparent;
          color: #1f2b6c;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
        }

        .submit-icon {
          width: 23px;
          height: 23px;
        }

        .footer-divider {
          border: none;
          height: 1px;
          background: #bfd2f8;
          margin: 0 0 43px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
        }

        .social-links {
          display: flex;
          gap: 20px;
        }

        .social-icon {
          width: 24px;
          height: 24px;
        }

        @media (max-width: 991px) {
          .footer {
            padding: 72px 20px;
          }

          .footer-grid {
            flex-direction: column;
          }

          .brand-col,
          .links-col,
          .contact-col,
          .newsletter-col {
            flex: 1;
            margin-top: 34px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
