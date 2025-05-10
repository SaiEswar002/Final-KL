import * as React from "react";

function AboutSection() {
  return (
    <>
      <section className="about-section">
        <h2 className="section-title">Welcome to Meddical</h2>
        <h3 className="section-subtitle">A Great Place to Receive Care</h3>
        <p className="section-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <div className="learn-more">
          <a href="#" className="learn-more-link">
            Learn More
          </a>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/2fc11632f7ba2ed6c136a89dcdf8a1599bf336972e5c0ed2dd3e4c2cf774e6bb?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
            alt=""
            className="learn-more-icon"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/eec58fa65510b984144aee056e0236ed2c878e609a6f82090a6a7c5197f04b2e?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
          alt="Hospital Interior"
          className="about-image"
        />
      </section>
      <style jsx>{`
        .about-section {
          background-color: rgba(21, 158, 236, 0.01);
          padding: 64px 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (max-width: 991px) {
          .about-section {
            padding: 0 20px;
          }
        }
        .section-title {
          color: var(--Secondary, #159eec);
          letter-spacing: 2.88px;
          text-transform: uppercase;
          font: 700 18px Work Sans, sans-serif;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .section-title {
            margin-top: 40px;
          }
        }
        .section-subtitle {
          color: var(--Primary, #1f2b6c);
          font: 400 32px Yeseva One, -apple-system, Roboto, Helvetica,
            sans-serif;
          margin-top: 8px;
        }
        .section-paragraph {
          color: var(--Black, #212124);
          margin-top: 15px;
          width: 658px;
          font: 400 16px/22px Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .section-paragraph {
            width: 100%;
          }
        }
        .learn-more {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--Secondary, #159eec);
          margin-top: 32px;
          font: 400 16px/1.4 Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .learn-more-link {
          color: inherit;
          text-decoration: none;
        }
        .learn-more-icon {
          aspect-ratio: 1.1;
          width: 11px;
        }
        .about-image {
          aspect-ratio: 3.97;
          width: 100%;
          margin-top: 61px;
        }
        @media (max-width: 991px) {
          .about-image {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default AboutSection;
