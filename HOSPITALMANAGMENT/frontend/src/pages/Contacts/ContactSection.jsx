"use client";
import React from "react";

export const ContactSection = () => {
  return (
    <section className="contact-section">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/c7700bf8b84024a66872f4791cdac30c96a8c810db9e45c537da49efa8701ace?placeholderIfAbsent=true"
        className="top-banner"
      />
      <div className="contact-banner-container">
        <img
          loading="lazy"
          onClick={() => window.open("https://maps.app.goo.gl/tfdbp9NobTizvwBX6")}
          src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/c5742c426a091d38880429178418bed2108dbfedd98de5a9993b7d07b5c12cfc?placeholderIfAbsent=true"
          className="contact-banner"
        />
        <span className="hover-text">CLICK TO VIEW IN MAPS</span>
      </div>

      <style jsx>{`
        .contact-section {
          background: #fcfefe;
          display: flex;
          padding-top: 0px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
        }
        .top-banner {
          aspect-ratio: 5.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .contact-banner-container {
          position: relative;
          display: inline-block;
          align-self: center;
          margin-top: 75px;
          max-width: 956px;
          cursor: pointer;
        }
        .contact-banner {
          aspect-ratio: 1.74;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .hover-text {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .contact-banner-container:hover .hover-text {
          opacity: 1;
        }
        @media (max-width: 991px) {
          .top-banner {
            max-width: 100%;
          }
          .contact-banner-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
};
