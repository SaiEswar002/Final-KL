import * as React from "react";

function DoctorCard({ imageSrc, doctorName, specialty }) {
  return (
    <>
      <div className="doctor-card">
        <img
          src={imageSrc}
          alt={`Doctor ${doctorName}`}
          className="doctor-img"
        />
        <div className="doctor-content">
          <h4 className="doctor-name">{doctorName}</h4>
          <p className="doctor-specialty">{specialty}</p>
          <div className="social-icons">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/c5568f177eacf503b920a825369a0fb65ef636c4a5118e29d732212b55aa7210?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="Facebook"
              className="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/2d813d797e99277bec26cfeb9df6d66fffdc58e70c63ea6ab99aa9395c9484a3?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="Twitter"
              className="social-icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/7e1098dee3f52b395caf54c7dacee51f74d97c03e0158a5a67705f37400d27ab?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&"
              alt="LinkedIn"
              className="social-icon"
            />
          </div>
        </div>
        <div className="view-profile-btn">View Profile</div>
      </div>
      <style jsx>{`
        .doctor-card {
          display: flex;
          flex-direction: column;
          align-items: center; /* Center items vertically */
          justify-content: center; /* Center items horizontally */
          text-align: center;
          background: var(--white, #fcfefe);
          border-radius: 5px;
          overflow: hidden;
          width: 100%;
        }
        .doctor-img {
          width: 100%;
          aspect-ratio: 0.91;
          object-fit: cover;
        }
        .doctor-content {
          background: var(--Accent, #bfd2f8);
          padding: 24px 32px;
          width: 100%;
        }
        .doctor-name {
          color: var(--Primary, #1f2b6c);
          font: 400 18px/1.4 Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .doctor-specialty {
          color: var(--Primary, #1f2b6c);
          letter-spacing: 2.88px;
          text-transform: uppercase;
          font: 700 18px Work Sans, sans-serif;
          margin-top: 8px;
        }
        .social-icons {
          display: flex;
          justify-content: center; /* Center the social icons */
          gap: 20px;
          margin-top: 16px;
        }
        .social-icon {
          width: 24px;
          aspect-ratio: 1;
        }
        .view-profile-btn {
          background: var(--Primary, #1f2b6c);
          color: var(--Accent, #bfd2f8);
          padding: 12px 32px;
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default DoctorCard;
