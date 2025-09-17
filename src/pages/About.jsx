import React from "react";
import Hero from "./aboutsection/Hero";
import ContactUs from "./homesection/ContactUs";
import Mission from "./aboutsection/Mission";
import SuccessStory from "./aboutsection/SuccessStory";
import Experts from "./aboutsection/Experts";
import Insights from "./aboutsection/Insights";

function About() {
  return (
    <div className="  relative">
      <Hero />
      <section className="sm:w-[75%] w-[90%] mx-auto border-l-2 border-[#034FE3]/30">
        <Mission />
        <SuccessStory />
        <Experts />
      </section>

      <Insights />
      <section className="sm:w-[75%] w-[90%] mx-auto border-l-2 border-[#034FE3]/30">
        <ContactUs />
      </section>
    </div>
  );
}

export default About;
