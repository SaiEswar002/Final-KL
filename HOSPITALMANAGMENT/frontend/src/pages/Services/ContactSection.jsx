export function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="section-subtitle">Get in touch</h2>
      <h3 className="section-title">Contact</h3>

      <div className="contact-grid">
        <div className="contact-card emergency">
          <h4 className="card-title">Emergency</h4>
          <p className="card-text">(237) 681-812-255</p>
          <p className="card-text">(237) 666-331-894</p>
        </div>

        <div className="contact-card location">
          <h4 className="card-title">Location</h4>
          <p className="card-text">0123 Some place</p>
          <p className="card-text">9876 Some country</p>
        </div>

        <div className="contact-card email">
          <h4 className="card-title">Email</h4>
          <p className="card-text">fildineeesoe@gmil.com</p>
          <p className="card-text">myebstudios@gmail.com</p>
        </div>

        <div className="contact-card hours">
          <h4 className="card-title">Working Hours</h4>
          <p className="card-text">Mon-Sat 09:00-20:00</p>
          <p className="card-text">Sunday Emergency only</p>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          width: 100%;
          max-width: 992px;
          margin: 88px auto;
          text-align: center;
        }

        .section-subtitle {
          color: #159eec;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
        }

        .section-title {
          color: #1f2b6c;
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 32px;
          font-weight: 400;
          margin-top: 8px;
        }

        .contact-grid {
          display: flex;
          gap: 20px;
          margin-top: 64px;
        }

        .contact-card {
          flex: 1;
          border-radius: 5px;
          padding: 105px 30px 50px;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          background: #bfd2f8;
        }

        .contact-card.location {
          background: #1f2b6c;
          color: #bfd2f8;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: inherit;
        }

        .card-text {
          margin-top: 8px;
          font-size: 16px;
          line-height: 1.4;
          color: inherit;
        }

        @media (max-width: 991px) {
          .contact-section {
            margin: 40px auto;
          }

          .contact-grid {
            flex-direction: column;
            margin-top: 40px;
          }

          .contact-card {
            padding: 100px 20px 50px;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
