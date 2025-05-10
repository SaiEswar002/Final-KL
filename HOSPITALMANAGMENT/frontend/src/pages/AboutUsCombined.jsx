import React from "react";
import { DoctorCard } from "./AboutUs/DoctorCard";
import { ContactInfo } from "./AboutUs/ContactInfo";
// import { Footer } from "./AboutUs/Footer";
import { WelcomeSection } from "./AboutUs/WelcomeSection";
import { TestimonialSection } from "./AboutUs/TestimonialSection";

export default function AboutUsCombined() {
  return (
    <main className="about-us">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/d157cc29ecb3965c5db80004814b07466299e2bc976592dd7ad036ab9722bdb7?placeholderIfAbsent=true"
        className="hero-image"
      />

      <WelcomeSection />
      <TestimonialSection />

      <section className="doctors-section">
        <h3 className="section-subtitle">Trusted Care</h3>
        <h2 className="section-title">Our Doctors</h2>

        <div className="doctors-grid">
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/bdc118d2fe3571dc8816367c80ef64c4ddf690841c8d7bc8e931f15459138021?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Neurology"
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/10c01619eef3a414aa4655d12e2acd9a31bd700a38d3992dcfed22ef9a293e50?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Neurology"
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/a522fa64e597948571da6be9d7aa71799120ac0d854c96100591c0b953bf2ed1?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Neurology"
          />
        </div>
      </section>

      <section className="contact-section">
        <h3 className="section-subtitle">Get in touch</h3>
        <h2 className="section-title">Contact</h2>
        <ContactInfo />
      </section>

      <Footer />

      <style jsx>{`
        .about-us {
          background: #fcfefe;
          display: flex;
          padding-top: 0px;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }
        .hero-image {
          aspect-ratio: 5.43;
          object-fit: contain;
          object-position: center;
          width: 100%;
          align-self: stretch;
        }
        .section-subtitle {
          color: #159eec;
          text-align: center;
          font-family: Work Sans, sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 2.88px;
          text-transform: uppercase;
          margin-top: 64px;
        }
        .section-title {
          color: #1f2b6c;
          text-align: center;
          font-family: Yeseva One, serif;
          font-size: 32px;
          font-weight: 400;
          margin-top: 8px;
        }
        .doctors-grid {
          display: flex;
          gap: 20px;
          margin-top: 64px;
          width: 100%;
          max-width: 992px;
        }
        .contact-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 991px) {
          .about-us {
            padding-top: 100px;
          }
          .hero-image {
            max-width: 100%;
          }
          .doctors-grid {
            flex-direction: column;
            max-width: 100%;
            margin-top: 40px;
          }
          .section-subtitle {
            margin-top: 40px;
          }
        }
      `}</style>
    </main>
  );
}
