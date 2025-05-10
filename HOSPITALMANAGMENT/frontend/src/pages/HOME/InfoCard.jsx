import * as React from "react";

function InfoCard({ title, line1, line2 }) {
  return (
    <>
      <button className="info-card">
        <h2 className="info-title">{title}</h2>
        <p className="info-line">{line1}</p>
        <p className="info-line">{line2}</p>
       </button>
      <style jsx>{`
        .info-card {
          background: var(--Primary, #1f2b6c);
          color: var(--white, #fcfefe);
          padding: 39px 20px;
          border-radius: 5px;
          font: 400 16px/1.4 Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .info-title {
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--Accent, #bfd2f8);
        }
        .info-line {
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}

export default InfoCard;
