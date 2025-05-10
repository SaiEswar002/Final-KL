import * as React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              Med<span className="highlight">dical</span>
            </div>
            <p className="footer-description">
              Leading the Way in Medical Excellence, Trusted Care.
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Important Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Appointment
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <p className="footer-contact">Call: (237) 681-812-255</p>
            <p className="footer-contact">Email: fildineesoe@gmail.com</p>
            <p className="footer-contact">
              Address: 0123 Some place, Some country
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <form className="newsletter-form">
              <label for="newsletter-email" className="visually-hidden">
                Enter your email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/7c5a858c1c7f55341c8967392990fc08fa464c409722ac54a6e710ec84aa2d32?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
                  alt="Submit"
                  className="newsletter-icon"
                />
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
          </p>
          <div className="footer-social">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/6f5abbdcfeead6f2ac784af2e1ae384daa72c805be925980551233311112e6d3?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="Facebook"
              className="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/ba45ec44ad83a7369b453e900e86a67b40c39275802783224e4a88917f16663b?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="Twitter"
              className="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/a8ad1c36fc6d8cb56ec76d681152f7c1cf9ad928f0ef1222ceea1ed6392f77f1?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="LinkedIn"
              className="social-icon"
            />
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/c6310e60f0518fbb105e9e6211cc17589764d5094ac5a6ce6367dda33431bb0a?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
          alt=""
          className="footer-divider"
        />
      </footer>
      <style jsx>{`
        .footer {
          background: var(--Primary, #1f2b6c);
          color: var(--white, #fcfefe);
          padding: 72px 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 70px;
        }
        @media (max-width: 991px) {
          .footer {
            padding: 0 20px;
          }
        }
        .footer-content {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 100%;
          max-width: 992px;
        }
        @media (max-width: 991px) {
          .footer-content {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .footer-section {
          flex: 1;
        }
        .footer-logo {
          color: var(--Accent, #bfd2f8);
          font: 36px Yeseva One, sans-serif;
        }
        .highlight {
          color: var(--Accent, #bfd2f8);
        }
        .footer-description {
          margin-top: 18px;
          line-height: 25px;
          font-size: 18px;
        }
        .footer-title {
          font-size: 18px;
          font-weight: 600;
          margin-top: 33px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 39px 0 0;
        }
        .footer-link {
          display: block;
          margin-top: 7px;
          color: var(--white, #fcfefe);
          text-decoration: none;
        }
        .footer-contact {
          margin-top: 7px;
          line-height: 1.4;
        }
        .newsletter-form {
          display: flex;
          align-items: center;
          margin-top: 39px;
          background: var(--Accent, #bfd2f8);
          padding: 13px 14px;
          border-radius: 5px;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .newsletter-input {
          background: none;
          border: none;
          color: var(--Primary, #1f2b6c);
          flex-grow: 1;
        }
        .newsletter-btn {
          background: none;
          border: none;
          padding: 0;
          margin-left: 10px;
        }
        .newsletter-icon {
          width: 23px;
          aspect-ratio: 1;
        }
        .footer-divider {
          width: 100%;
          margin-top: 47px;
        }
        @media (max-width: 991px) {
          .footer-divider {
            margin-top: 40px;
          }
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 992px;
          margin-top: 43px;
        }
        @media (max-width: 991px) {
          .footer-bottom {
            flex-direction: column;
            align-items: start;
          }
        }
        .footer-copy {
          margin: auto 0;
          font: 400 16px Work Sans, sans-serif;
        }
        .footer-social {
          display: flex;
          gap: 20px;
        }
        .social-icon {
          width: 24px;
          aspect-ratio: 1;
        }
      `}</style>
    </>
  );
}

export default Footer;
