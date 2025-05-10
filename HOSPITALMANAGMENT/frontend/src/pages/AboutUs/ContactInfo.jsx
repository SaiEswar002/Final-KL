export function ContactInfo() {
  return (
    <div className="contact-grid">
      <ContactCard
        type="emergency"
        title="Emergency"
        items={["(237) 681-812-255", "(237) 666-331-894"]}
      />
      <ContactCard
        type="location"
        title="Location"
        items={["0123 Some place", "9876 Some country"]}
      />
      <ContactCard
        type="email"
        title="Email"
        items={["fildineeesoe@gmil.com", "myebstudios@gmail.com"]}
      />
      <ContactCard
        type="hours"
        title="Working Hours"
        items={["Mon-Sat 09:00-20:00", "Sunday Emergency only"]}
      />

      <style jsx>{`
        .contact-grid {
          display: flex;
          gap: 20px;
          margin-top: 64px;
          width: 100%;
          max-width: 1000px;
        }
        @media (max-width: 991px) {
          .contact-grid {
            flex-direction: column;
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </div>
  );
}

function ContactCard({ type, title, items }) {
  const isLocation = type === "location";

  return (
    <div className={`contact-card ${type}`}>
      <h3 className="card-title">{title}</h3>
      {items.map((item, index) => (
        <p key={index} className="card-text" style={{ marginTop: index === 0 ? "8px" : "5px" }}>
          {item}
        </p>
      ))}

      <style jsx>{`
        .contact-card {
          flex: 1;
          border-radius: 5px;
          background: #bfd2f8;
          color:rgb(0, 20, 59);
          padding: 105px 30px 50px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .location {
          background: #bfd2f8;
        }
        .card-title {
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          text-transform: uppercase;
          color: ${isLocation ? "#bfd2f8" : "#1f2b6c"};
        }
        .card-text {
          font-family: Work Sans, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          color: ${isLocation ? "#bfd2f8" : "#1f2b6c"};
        }
        @media (max-width: 991px) {
          .contact-card {
            margin-top: 20px;
            padding: 100px 20px 50px;
          }
        }
      `}</style>
    </div>
  );
}
