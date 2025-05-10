import * as React from "react";
import ServiceCard from "./ServiceCard.jsx";

function ServicesSection() {
  const services = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Neurology Service",
      serviceName: "Neurology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/8d5f18478749eed05b617b5fb4fdd5055841f293cb3aaa4e958fe4c32193896d?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Bone Service",
      serviceName: "Bones",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Oncology Service",
      serviceName: "Oncology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "ENT Service",
      serviceName: "Otorhinolaryngology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Ophthalmology Service",
      serviceName: "Ophthalmology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Cardiovascular Service",
      serviceName: "Cardiovascular",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Pulmonology Service",
      serviceName: "Pulmonology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Renal Medicine Service",
      serviceName: "Renal Medicine",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Gastroenterology Service",
      serviceName: "Gastroenterology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Urology Service",
      serviceName: "Urology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Dermatology Service",
      serviceName: "Dermatology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/001583858784280aa0d19f3bc4220272996d487f6aead907ee684aa50591a427?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      imageAlt: "Gynaecology Service",
      serviceName: "Gynaecology",
    },
  ];

  return (
    <>
      <section className="services-section">
        <h2 className="section-title">Our Specialties</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>
      <style jsx>{`
        .services-section {
          padding: 40px 20px; /* Adjusted padding for better fit */
          text-align: center;
          background-color: rgba(252, 254, 254, 0.8);
        }
        @media (max-width: 991px) {
          .services-section {
            padding: 0 20px;
          }
        }
        .section-title {
          color: black; /* Changed to black */
          letter-spacing: 2.88px;
          text-transform: uppercase;
          font: 700 18px Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .section-title {
            margin-top: 40px;
          }
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 64px;
        }
        @media (max-width: 991px) {
          .services-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}

export default ServicesSection;
