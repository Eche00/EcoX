import React from "react";
import Hero from "./homesection/Hero";
import Services from "./homesection/Services";
import Benefits from "./homesection/Benefits";
import ContactUs from "./homesection/ContactUs";
import Faqs from "./homesection/Faqs";
import Testimonials from "./homesection/Testimonials";

function Home() {
  return (
    <div className=" sm:w-[75%] w-[90%] mx-auto relative">
      <Hero />
      <section className=" border-l-2 border-[#034FE3]/30">
        <Services />
        <Benefits />
        <Testimonials />
        <Faqs />
        <ContactUs />
      </section>
    </div>
  );
}

export default Home;
