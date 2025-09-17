import React from "react";
import ContactUs from "./homesection/ContactUs";
import Hero from "./servicessection/Hero";
import Services from "./homesection/Services";
import Sales from "./servicessection/Sales";
import Installation from "./servicessection/Installation";

function ServicesWeOffer() {
  return (
    <div className="  relative">
      <Hero />
      <section className="sm:w-[75%] w-[90%] mx-auto border-l-2 border-[#034FE3]/30">
        <Services />
        <Sales />
        <Installation />
        <ContactUs />
      </section>
    </div>
  );
}

export default ServicesWeOffer;
