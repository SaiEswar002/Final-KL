"use client";

import React from "react";
// import { Logo } from "./Logo";
// import { ContactInfo } from "./ContactInfo";
// import { Navigation } from "./Navigation";
import { ServiceCard } from "./ServiceCard";
// import { ContactSection } from "./ContactSection";
// import { Footer } from "./Footer";

export default function MedicalServices() {
  return (
    <main className="services">
      <header className="header">
        <div className="header-content">
          {/* <Logo /> */}
          {/* <ContactInfo /> */}
        </div>
        {/* <Navigation /> */}
      </header>

      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/6fc3c4deab101d8a666e9d7177f1fa6fd431c13ac667959fcb15be31b33f95ac?placeholderIfAbsent=true"
        className="hero-image"
        alt="Medical services hero"
      />

      <section className="service-grid">
        <div className="service-row">
          {[
            {
              title: "NEUROLOGY",
              image:
                "https://img.freepik.com/free-psd/brain-outline-illustration_23-2150761744.jpg?t=st=1741234264~exp=1741237864~hmac=a6b4001a82cf234b114b053adec4c276286e6cfd4784825984f794bea5a7ea4d&w=900",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "UROLOGY",
              image:
                "https://img.freepik.com/free-vector/hand-drawn-kidney-drawing-illustration_23-2151325550.jpg?t=st=1741234133~exp=1741237733~hmac=d29fcb8ad9388d29a0c35a77722b4fb517870c7b9c2283c9991dfa26efd96f08&w=900",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "CARDIOLOGY",
              image:
                "https://img.freepik.com/free-vector/hand-drawn-heart-drawing-illustration_23-2151325547.jpg?t=st=1741234362~exp=1741237962~hmac=702ee6d1485a4d770a617d302cf7653d0bd091cfb257b2711bbcae4912a15176&w=900",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "GASTROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DERMATOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DENTISTRY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/efa674753a43c2943fc0e80a747c73f2a248f131691ea1cc701aebce105a299f?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "NEUROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/e3b91bd8eacb2e93a206d84b2b9d14fa2f96729de1bb560416d319435bc3b8bf?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "UROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "CARDIOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>

        <div className="service-row">
          {[
            {
              title: "GASTROLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DERMATOLOGY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
            {
              title: "DENTISTRY",
              image:
                "https://cdn.builder.io/api/v1/image/assets/cf44c0ce78c240a28faac630188f1a27/3e5df5916b4ac5669a1f09002eb1a493523e56dfc329afcde9deef2e8d036c8a?placeholderIfAbsent=true",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.",
            },
          ].map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      {/* <ContactSection /> */}
      {/* <Footer /> */}

      <style jsx>{`
        .services {
          background: #fcfefe;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          align-items: center;
        }

        .header {
          width: 100%;
          background: #fcfefe;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0px 70px;
          max-width: 992px;
          margin: 0 auto;
          width: 100%;
        }

        .hero-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .service-grid {
          max-width: 961px;
          width: 100%;
          margin: 46px auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .service-row {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 991px) {
          .header-content {
            padding: 19px 20px;
          }

          .service-row {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
