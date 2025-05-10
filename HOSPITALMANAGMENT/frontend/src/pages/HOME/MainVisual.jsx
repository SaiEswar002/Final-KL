import * as React from "react";

function MainVisual() {
  return (
    <>
      <div className="main-visual">
        <img
          //https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/26605c234810518056a0ba344fbfc8cd58e57a6a36b94b219747c8ac54db69c4?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&
          src="https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/26605c234810518056a0ba344fbfc8cd58e57a6a36b94b219747c8ac54db69c4?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712"
          alt="Hospital Exterior"
          className="main-image"
        />
        <br/>
        <div className="visual-content">
          <h1 className="visual-title">Caring for Life</h1>
          <h2 className="visual-subtitle">
            Leading the Way in Medical Excellence
          </h2>
          <button className="services-btn" >Our Services</button>
        </div>
      </div>
      <style jsx>{`
        .main-visual {
          background-color:
          display: flex;
          flex-direction: column;
          position: relative;
          min-height: 250px;
          width: 100%;
          padding: 100px 120px; /* Adjusted padding for better fit */
          font-family: Work Sans, sans-serif;
          color: var(--Primary, #1f2b6c);
        }
        @media (max-width: 991px) {
          .main-visual {
            padding: 100px 20px;
          }
        }
        .main-image {
          position: absolute;
          right: 111px; /* Position the image to the right */
          top: 0; /* Ensure the image starts from the top */
          bottom: 0; /* Ensure the image stretches to the bottom */
          max-height: 100%; /* Ensure the image does not exceed the container */
          max-width: 100%; /* Ensure the image does not exceed the container */
          object-fit: cover;
          object-position: right; /* Ensure the main image is aligned to the right */
        }
        .visual-content {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 519px;
        }
        @media (max-width: 991px) {
          .visual-content {
            width: 100%;
          }
        }
        .visual-title {
          color: var(--Secondary, #159eec);
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.88px;
        }
        .visual-subtitle {
          margin-top: 8px;
          font-size: 48px;
          font-family: Yeseva One, serif;
        }
        @media (max-width: 991px) {
          .visual-subtitle {
            font-size: 40px;
          }
        }
        .services-btn {
          border-radius: 50px;
          background: var(--Accent, #bfd2f8);
          color: var(--Primary, #1f2b6c);
          font-size: 16px;
          font-weight: 500;
          margin-top: 32px;
          padding: 13px 35px;
        }
        @media (max-width: 991px) {
          .services-btn {
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}

export default MainVisual;
