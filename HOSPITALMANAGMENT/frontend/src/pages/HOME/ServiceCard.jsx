import * as React from "react";

function ServiceCard({ imageSrc, imageAlt, serviceName }) {
  return (
    <>
      <div className="service-card">
        <img src={imageSrc} alt={imageAlt} className="service-icon" />
        <h4 className="service-name">{serviceName}</h4>
      </div>
      <style jsx>{`
        .service-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 51px 50px;
          border: 1px solid rgba(0, 0, 0, 0.19);
          border-radius: 5px;
          background: var(--white, #fcfefe);
          font: 400 16px Work Sans, sans-serif;
          color: black;
          
        }
        .service-icon {
          width: 50px;
          aspect-ratio: 1.14;
        }
        .service-name {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}

export default ServiceCard;
