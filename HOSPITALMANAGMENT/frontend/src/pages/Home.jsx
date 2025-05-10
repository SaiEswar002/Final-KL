import * as React from "react";
// import Header from "./home/Header";
// import Navbar from "./home/Navbar";
import MainVisual from "./home/MainVisual";
import InfoSection from "./home/InfoSection";
import AboutSection from "./home/AboutSection";
import ServicesSection from "./home/ServicesSection";
import AppointmentForm from "./home/AppointmentForm";
import DoctorsSection from "./home/DoctorsSection";
/* import NewsSection from "./NewsSection"; */
import Footer from "./home/Footer";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Header /> */}
        {/* <Navbar /> */}
        <MainVisual />
        <InfoSection />
        <AboutSection />
        <ServicesSection />
        <AppointmentForm />
        <DoctorsSection />
        {/* <NewsSection /> */}
        <Footer />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white,rgb(255, 250, 250));
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}

export default Home;
