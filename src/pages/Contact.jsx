import React from "react";
import Hero from "./contactsection/Hero";
import Faqs from "./homesection/Faqs";
import ContactUs from "./homesection/ContactUs";

function Contact() {
  return (
    <div className=" sm:w-[75%] w-[90%] mx-auto relative">
      <div className="xxl:absolute">
        <Hero />
      </div>
      <section className=" border-l-2 border-[#034FE3]/30 xxl:pt-[50vh] pt-0">
        <ContactUs />
        <Faqs />
      </section>
    </div>
  );
}

export default Contact;
