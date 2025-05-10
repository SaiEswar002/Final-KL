export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="brand-section">
            <h2 className="brand-title">
              <span>Med</span>
              <span>dical</span>
            </h2>
            <p className="brand-tagline">
              Leading the Way in Medical
              <br />
              Execellence, Trusted Care.
            </p>
          </div>

          <nav className="footer-links">
            <h3 className="footer-heading">Important Links</h3>
            <ul>
              <li>
                <a href="#">Appointment</a>
              </li>
              <li>
                <a href="#">Doctors</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>

          <div className="contact-section">
            <h3 className="footer-heading">Contact Us</h3>
            <p>Call: (237) 681-812-255</p>
            <p>Email: fildineesoe@gmail.com</p>
            <p>Address: 0123 Some place</p>
            <p>Some country</p>
          </div>

          <div className="newsletter-section">
            <h3 className="footer-heading">Newsletter</h3>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email address" />
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
          margin-top: 102px;
          padding: 72px 80px;
          color: #fcfefe;
        }
        .footer-content {
          max-width: 992px;
          margin: 0 auto;
        }
        .footer-grid {
          display: flex;
          gap: 20px;
          margin-bottom: 47px;
        }
        .brand-section {
          width: 27%;
        }
        .brand-title {
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
        .footer-links {
          width: 16%;
        }
        .footer-heading {
          color: #fcfefe;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 39px;
        }
        .footer-links ul {
          list-style: none;
          padding: 0;
        }
        .footer-links li {
          margin-top: 7px;
        }
        .footer-links a {
          color: #fcfefe;
          text-decoration: none;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
        }
        .contact-section {
          width: 26%;
        }
        .contact-section p {
          margin-top: 7px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
        }
        .newsletter-section {
          width: 31%;
        }
        .newsletter-input {
          display: flex;
          align-items: center;
          gap: 24px;
          background: #bfd2f8;
          border-radius: 5px;
          padding: 13px 14px;
          margin-top: 39px;
        }
        .newsletter-input input {
          border: none;
          background: transparent;
          color: #1f2b6c;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          width: 100%;
        }
        .send-icon {
          width: 23px;
          height: 23px;
          object-fit: contain;
        }
        .footer-divider {
          border: none;
          height: 1px;
          background: #bfd2f8;
          margin: 0;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 43px;
        }
        .copyright {
          color: #fcfefe;
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
          object-fit: contain;
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
          .brand-section,
          .footer-links,
          .contact-section,
          .newsletter-section {
            width: 100%;
            margin-top: 33px;
          }
          .footer-bottom {
            flex-wrap: wrap;
            gap: 20px;
          }
          .copyright {
            max-width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};
