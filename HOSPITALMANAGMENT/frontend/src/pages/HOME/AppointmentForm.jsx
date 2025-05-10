import * as React from "react";

function AppointmentForm() {
  return (
    <>
      <form className="appointment-form">
        <label for="name" className="visually-hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="input-field"
        />

        <label for="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="input-field"
        />

        <label for="phone" className="visually-hidden">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          className="input-field"
        />

        <label for="date" className="visually-hidden">
          Date
        </label>
        <input type="date" id="date" className="input-field" />

        <label for="time" className="visually-hidden">
          Time
        </label>
        <input type="time" id="time" className="input-field" />

        <label for="doctor" className="visually-hidden">
          Doctor
        </label>
        <input
          type="text"
          id="doctor"
          placeholder="Doctor"
          className="input-field"
        />

        <label for="department" className="visually-hidden">
          Department
        </label>
        <input
          type="text"
          id="department"
          placeholder="Department"
          className="input-field"
        />

        <label for="message" className="visually-hidden">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          className="input-field"
        ></textarea>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      <style jsx>{`
        .appointment-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          background: var(--Accent, #bfd2f8);
          padding: 1.5rem;
          border-radius: 5px;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .input-field {
          background: var(--Primary, #1f2b6c);
          color: var(--white, #fcfefe);
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
        }
        .submit-btn {
          grid-column: span 2;
          background: var(--Primary, #1f2b6c);
          color: var(--Accent, #bfd2f8);
          padding: 0.75rem;
          border: none;
          border-radius: 5px;
          font-weight: 500;
          cursor: pointer;
          font-size: 1rem;
        }
      `}</style>
    </>
  );
}

export default AppointmentForm;
