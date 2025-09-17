import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import Round from "../homesection/Round";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BuildIcon from "@mui/icons-material/Build";
import PaymentsIcon from "@mui/icons-material/Payments";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
function Hero() {
  return (
    <div className=" w-full min-h-[100vh]  flex  flex-col  justify-center gap-4 relative">
      <Round />

      <div className=" w-[90%]   mx-auto overflow-hidden  relative  flex xxl:flex-row flex-col  justify-center gap-4">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500]  z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-slate-900 dark:text-slate-100 md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Clean Energy, Endless{" "}
              <span className=" text-[#034FE3] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Possibilities
              </span>
            </motion.h1>
            <p className="text-[#3A3A3A] dark:text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] text-center">
              From residential rooftops to large-scale businesses, our services
              are designed to deliver clean, affordable, and uninterrupted
              energy that powers your future with confidence.
            </p>
          </div>
          {/* CTA  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.35 }}
            viewport={{ once: true }}
            className=" flex items-center gap-[12px]">
            <Link
              to="/contact-us"
              className=" border-[0.4px] border-gray-300 dark:border-[#034FE3] bg-[#F0F8FF] dark:bg-[#0c0d13]  shadow-xl py-[15px] px-[42px] rounded-[8px] text-[16px] font-bold text-black dark:text-white  hover:scale-[105%]  transition-all duration-300 cursor-pointer">
              Contact us
            </Link>
            <Link
              to="/calculator"
              className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[22px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer">
              Calculate Now
            </Link>
          </motion.div>
        </section>
        <section className="flex flex-1 flex-col xxl:items-end items-center">
          <img
            src="/servicehero.webp"
            alt=""
            className=" w-[600px] h-[400px] object-cover rounded-[18px]"
          />
          <section className="flex flex-col xxl:items-end items-center gap-3 py-3">
            <div className="bg-[#034FE3] rounded-[18px] sm:w-[400px] w-[300px] h-[50px] flex items-center justify-center gap-5 text-[16px] font-bold text-slate-100">
              <SolarPowerIcon sx={{ fontSize: 30, color: "white" }} /> Solar
              products Sales
            </div>
            <div className="bg-[#034FE3] rounded-[18px] sm:w-[350px] w-[250px] h-[50px] flex items-center justify-center gap-5 text-[16px] font-bold text-slate-100 ">
              <BuildIcon sx={{ fontSize: 30, color: "white" }} />
              solar Installation
            </div>
            <div className="bg-[#034FE3] rounded-[18px] sm:w-[300px] w-[200px] h-[50px] flex items-center justify-center gap-5 text-[16px] font-bold text-slate-100 ">
              <PaymentsIcon sx={{ fontSize: 30, color: "white" }} />
              Maintainance
            </div>
          </section>
        </section>
      </div>
      {/* hero bottom section  */}
      <div className=" w-[90%] mx-auto flex lg:flex-row flex-col   justify-around items-center sm:gap-0 gap-[32px]   sm:my-[20px] text-[24px] font-[400] text-[#1A1A1A] dark:text-slate-400 dark:border shadow-[0_-8px_10px_-3px_rgba(0,0,0,0.1),0_8px_10px_-3px_rgba(0,0,0,0.1)] l:mb-0 mb-[30px] border-[#034FE3] rounded-[10px] sm:py-[30px] py-[20px] md:flex-row">
        <div className=" flex gap-[24px] items-center justify-center ">
          <HomeIcon sx={{ fontSize: 30, color: "#034FE3" }} /> Residential
        </div>
        <div className=" flex gap-[24px] items-center justify-center">
          <BusinessIcon sx={{ fontSize: 30, color: "#034FE3" }} /> Commercial
        </div>
        <div className=" flex gap-[24px] items-center justify-center">
          <FactoryIcon sx={{ fontSize: 30, color: "#034FE3" }} />
          Industrial{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
