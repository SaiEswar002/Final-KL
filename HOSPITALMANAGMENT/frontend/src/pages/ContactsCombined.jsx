import React from "react";
// import { ContactForm } from "../Contacts/ContactForm";
// import { ContactInfo } from "../Contacts/ContactInfo";
import { ContactSection } from "../Contacts/ContactSection";
// import  {ContactSection } from "./ContactSection";
import { Footer } from "../AboutUs/Footer";

const ContactsCombined = () => {
  return (
    <div>
      <ContactSection />
      <Footer />
      {/* <ContactInfo /> */}
      {/* <ContactForm /> */}
    </div>
  );
};

export default ContactsCombined;
