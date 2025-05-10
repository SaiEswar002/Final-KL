const DoctorCard = ({ image, name, specialty }) => {
  return (
    <article className="doctor-card">
      <img loading="lazy" src={image} className="doctor-image" alt={name} />
      <div className="doctor-info">
        <div className="doctor-details">
          <h3 className="doctor-name">{name}</h3>
          <p className="doctor-specialty">{specialty}</p>
          <div className="social-links">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?placeholderIfAbsent=true"
              className="social-icon"
              alt="Social media icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?placeholderIfAbsent=true"
              className="social-icon"
              alt="Social media icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?placeholderIfAbsent=true"
              className="social-icon"
              alt="Social media icon"
            />
          </div>
        </div>
      </div>
      <div className="profile-link">
        <button className="view-profile">View Profile</button>
      </div>
      <style jsx>{`
        .doctor-card {
          flex-grow: 1;
          width: 33%;
        }
        .doctor-image {
          aspect-ratio: 0.91;
          object-fit: contain;
          object-position: center;
          width: 317px;
          border-radius: 5px 5px 0px 0px;
          max-width: 100%;
        }
        .doctor-info {
          max-width: 100%;
          width: 317px;
        }
        .doctor-details {
          background: #bfd2f8;
          display: flex;
          width: 100%;
          padding: 24px 32px;
          flex-direction: column;
          align-items: center;
        }
        .doctor-name {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
          margin: 0;
        }
        .doctor-specialty {
          color: #1f2b6c;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin: 8px 0 0 0;
        }
        .social-links {
          display: flex;
          margin-top: 16px;
          width: 112px;
          max-width: 100%;
          align-items: stretch;
          gap: 20px;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          fill: #1f2b6c;
          flex-shrink: 0;
        }
        .profile-link {
          width: 317px;
          max-width: 100%;
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          color: #bfd2f8;
          font-weight: 400;
          text-align: center;
          line-height: 1.4;
        }
        .view-profile {
          width: 100%;
          border: none;
          border-radius: 0px 0px 5px 5px;
          background: #1f2b6c;
          padding: 12px 32px;
          color: inherit;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .doctor-card {
            width: 100%;
            margin-top: 20px;
          }
          .doctor-details {
            padding: 20px;
          }
        }
      `}</style>
    </article>
  );
};

export default DoctorCard;
