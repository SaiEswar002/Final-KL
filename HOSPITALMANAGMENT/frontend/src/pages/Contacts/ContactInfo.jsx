export const ContactInfo = () => {
  return (
    <div className="info-container">
      <div className="info-grid">
        <div className="info-card emergency-card">
          <h3 className="card-title">Emergency</h3>
          <p className="card-text">(237) 681-812-255</p>
          <p className="card-text">(237) 666-331-894</p>
        </div>
        <div className="info-card location-card">
          <h3 className="card-title">Location</h3>
          <p className="card-text">0123 Some place</p>
          <p className="card-text">9876 Some country</p>
        </div>
      </div>
      <div className="info-grid">
        <div className="info-card email-card">
          <h3 className="card-title">Email</h3>
          <p className="card-text">fildineeesoe@gmil.com</p>
          <p className="card-text">myebstudios@gmail.com</p>
        </div>
        <div className="info-card hours-card">
          <h3 className="card-title">Working Hours</h3>
          <p className="card-text">Mon-Sat 09:00-20:00</p>
          <p className="card-text">Sunday Emergency only</p>
        </div>
      </div>
      <style jsx>{`
        .info-container {
          width: 100%;
        }
        .info-grid {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .info-card {
          border-radius: 5px;
          padding: 105px 30px 50px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.4;
        }
        .emergency-card,
        .email-card {
          background: #bfd2f8;
          color: #1f2b6c;
        }
        .location-card {
          background: #1f2b6c;
          color: #bfd2f8;
        }
        .hours-card {
          background: #bfd2f8;
          color: #1f2b6c;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .card-text {
          margin-top: 5px;
        }
        @media (max-width: 991px) {
          .info-container {
            max-width: 100%;
            margin-top: 20px;
          }
          .info-card {
            padding: 100px 20px 50px;
          }
        }
      `}</style>
    </div>
  );
};
