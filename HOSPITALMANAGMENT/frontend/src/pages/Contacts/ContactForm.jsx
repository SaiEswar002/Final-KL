"use client";
import React from "react";

export const ContactForm = () => {
  return (
    <div className="form-container">
      <h3 className="highlight-text">Get in touch</h3>
      <h2 className="section-title">Contact</h2>
      <form className="contact-form">
        <div className="input-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input name-input"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input email-input"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="form-input subject-input"
        />
        <textarea placeholder="Message" className="form-input message-input" />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <style jsx>{`
        .form-container {
          display: flex;
          flex-direction: column;
          align-items: start;
          font-family: Work Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 400;
        }
        .highlight-text {
          color: #159eec;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
        }
        .section-title {
          color: #1f2b6c;
          text-align: center;
          font-family: Yeseva One, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 32px;
          margin-top: 8px;
        }
        .contact-form {
          border-radius: 5px;
          background: #bfd2f8;
          width: 100%;
          margin-top: 32px;
        }
        .input-row {
          display: flex;
          gap: 1px;
        }
        .form-input {
          background: #1f2b6c;
          color: #fcfefe;
          padding: 14px 20px;
          font-size: 16px;
          border: none;
          width: 100%;
        }
        .name-input {
          border-radius: 5px 0 0 0;
        }
        .email-input {
          border-radius: 0 5px 0 0;
        }
        .message-input {
          min-height: 200px;
          resize: vertical;
        }
        .submit-button {
          width: 100%;
          padding: 16px;
          background: #bfd2f8;
          color: #1f2b6c;
          font-weight: 500;
          text-transform: uppercase;
          border: none;
          border-radius: 0 0 5px 5px;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .form-container {
            max-width: 100%;
            margin-top: 20px;
          }
          .submit-button {
            padding: 16px 20px;
          }
        }
      `}</style>
    </div>
  );
};
