"use client";

import React from "react";
import DoctorCard from "./DoctorCard";
import TestimonialSection from "./TestimonialSection";
import  ContactSection  from "./ContactSection";
import { Footer } from "../AboutUs/Footer";

const DoctorsSection = () => {
  return (
    <section className="doctors">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/7e28aeb77ab122df05cdb236545a8401afc25a136342bf2bbeb4b4ef296ed587?placeholderIfAbsent=true"
        className="hero-image"
      />
      <div className="doctors-grid">
        <div className="doctors-row">
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/bdc118d2fe3571dc8816367c80ef64c4ddf690841c8d7bc8e931f15459138021?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Dr.Valentin Fuster "
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/10c01619eef3a414aa4655d12e2acd9a31bd700a38d3992dcfed22ef9a293e50?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Dr.Mukesh kumar"
          />
          <DoctorCard
            image="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/a522fa64e597948571da6be9d7aa71799120ac0d854c96100591c0b953bf2ed1?placeholderIfAbsent=true"
            name="Doctor's Name"
            specialty="Dr.Priyanka"
          />
        </div>
        <div className="doctors-row">
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
      </div>
      <TestimonialSection />
      <ContactSection />
      <Footer />
      <style jsx>{`
        .doctors {
          background: #fcfefe;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }
        .hero-image {
          aspect-ratio: 5.46;
          object-fit: contain;
          object-position: center;
          width: 100%;
          align-self: stretch;
        }
        .doctors-grid {
          margin-top: 40px;
          width: 100%;
          max-width: 992px;
          padding-bottom: 70px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .doctors-row {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
          }
          .doctors-grid {
            max-width: 100%;
          }
          .doctors-row {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
      `}</style>
    </section>
  );
};

export default DoctorsSection;
