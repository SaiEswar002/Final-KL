import * as React from "react";
import InfoCard from "./InfoCard.jsx";

function InfoSection() {
  return (
    <>
      <section className="info-section">
        <InfoCard
          title="Book an Appointment"
          line1="Nullam tincidunt, nisl eget vestibulum tempor, sapien justo cursus nunc, vel laoreet nibh erat at erat."
          line2="Pellentesque egestas neque."
        />
        <InfoCard
          title="Emergency Service"
          line1="Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet"
          line2="Alqsa placerat scelerisque tortor ornare ornare."
        />
        <InfoCard
          title="24/7 Support"
          line1="Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet"
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
