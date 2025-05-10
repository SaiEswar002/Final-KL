import * as React from "react";
import DoctorCard from "./DoctorCard.jsx";

function DoctorsSection() {
  const doctors = [
    // {
    //   imageSrc: "src/assets/DoctorJohny.png", // Added Doctor Johny's image
    //   doctorName: "Dr. Johnny",
    //   specialty: "Cardiology",
    // },
    // {
    //   imageSrc:
    //     "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/a2babe5b78d3fcc814ecc3ed30c9cac800dfa2e6fd79dd1be8d530d26a4da2cf?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
    //   doctorName: "Dr. Michael Williams",
    //   specialty: "Psychology",
    // },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/b33f71bdf398572dcf1c09532216e3bec0185ae7b3910aa1832572354bbecb53?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      doctorName: "Dr. Emily Johnson",
      specialty: "Neurology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/04394c99a0d2e91e70a2df69c6d55dec5338591624bb7ed680e3325adea6c026?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      doctorName: "Dr. James Smith",
      specialty: "Cardiology",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/471bd1fc3ea94fc0a67c95e5f4cf0712/a2babe5b78d3fcc814ecc3ed30c9cac800dfa2e6fd79dd1be8d530d26a4da2cf?apiKey=471bd1fc3ea94fc0a67c95e5f4cf0712&",
      doctorName: "Dr. Michael Williams",
      specialty: "Psychology",
    },
  ];

  return (
    <>
      <section className="doctors-section">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} {...doctor} />
          ))}
        </div>
      </section>
      <style jsx>{`
  .doctors-section {
    margin-top: 60px;
    text-align: center;
    padding: 40px 20px;
    background: var(--Primary, #1f2b6c);
    color: var(--white, #fcfefe);
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content */
    padding-top: 20px;
  }

  @media (max-width: 991px) {
    .doctors-section {
      padding: 0 20px;
      margin-top: 40px;
    }
  }

  .section-title {
    color: var(--Secondary, #159eec);
    letter-spacing: 2.88px;
    text-transform: uppercase;
    font: 700 18px Work Sans, sans-serif;
  }

  .doctors-grid {
    display: grid;
    justify-content: center; /* Center the grid items */
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 64px;
    width: 100%; /* Ensures it takes up available space */
    max-width: 900px; /* Adjust as needed */
  }

  @media (max-width: 991px) {
    .doctors-grid {
      grid-template-columns: 1fr;
      margin-top: 40px;
    }
  }
`}</style>

    </>
  );
}

export default DoctorsSection;
