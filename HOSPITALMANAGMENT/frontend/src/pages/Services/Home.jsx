import * as React from "react";
// import Header from "./Header";
// import Navbar from "./Navbar";
// import ContactInfo from "./ContactInfo";
import ContactSection from "./ContactSection";
// import ContactInfo from "./ContactInfo";
// import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="home">
        {/* <Header /> */}
        {/* <Navbar /> */}
        <ContactInfo />
        <ContactSection/>
        {/* <Logo/>
        <MedicalServices/> */}
        {/* <Footer /> */}
      </div>
      {/* <style jsx>{`
        .home {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--white,rgb(255, 250, 250));
          width: 100%;
          overflow-x: hidden;
        }
      `}</style> */}
    </>
  );
}

export default Home;
