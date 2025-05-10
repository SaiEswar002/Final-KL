import * as React from "react";
import InfoCard from "./InfoCard.jsx";

function InfoSection() {
  return (
    <>
      <section className="info-section">
        <InfoCard
          title="Book an Appointment"
          line1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut augue orci."
          line2="Pellentesque egestas neque."
        />
        <InfoCard
          title="Emergency Service"
          line1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat aliquam velit."
          line2="Alqsa placerat scelerisque tortor ornare ornare."
        />
        <InfoCard
          title="24/7 Support"
          line1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."
          line2="Sed cursus ante dapibus."
        />
      </section>
      <style jsx>{`
        .info-section {
          display: flex;
          gap: 20px;
          justify-content: space-around;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .info-section {
            flex-direction: column;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default InfoSection;
