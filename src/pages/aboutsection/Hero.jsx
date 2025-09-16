import React from "react";
import Round from "../homesection/Round";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { testimonials } from "../../utils/testimonials";

function Hero() {
  return (
    <div className="w-[100%]  mx-auto overflow-hidden min-h-[100vh]  relative  flex flex-col items-center    pt-[60px] z-10">
      <Round />
      <section className="flex flex-col items-center gap-[24px] text-white text-[16px] font-[500] z-40">
        {/* title  */}
        <div className=" flex items-center flex-col gap-[12px]">
          <motion.h1
            className=" text-slate-900 dark:text-slate-100 md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            {" "}
            Powering a Brighter{" "}
            <span className=" text-[#034FE3] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
              Future
            </span>
          </motion.h1>
          <p className="text-[#3A3A3A] dark:text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] text-center">
            We believe access to clean, reliable, and affordable energy. We are
            dedicated to bringing solar solutions to reduce costs and keep homes
            and businesses running day and night.
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
            to="/our-services"
            className=" border-[0.4px] border-gray-300 dark:border-[#034FE3] bg-[#F0F8FF] dark:bg-[#0c0d13]  shadow-xl py-[15px] px-[42px] rounded-[8px] text-[16px] font-bold text-black dark:text-white  hover:scale-[105%]  transition-all duration-300 cursor-pointer">
            Our Services
          </Link>
          <Link
            to="/calculator"
            className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[22px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer">
            Calculate Now
          </Link>
        </motion.div>
      </section>
      {/* Testimonials  */}
      <main className="py-24 flex flex-row items-stretch overflow-x-scroll gap-6 px-5 w-full overflow-y-hidden">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-[105%] transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[330px] dark:border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end w-full relative">
              <img
                src={t.img}
                alt={t.name}
                className="w-[200px] h-[150px] object-cover rounded-[18px] absolute -top-1/2 left-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-20 h-20 text-[#034FE3] self-end mt-6"
                fill="currentColor">
                <path d="M464 32c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16zm-288 0c-8.8 0-16 7.2-16 16v96c0 106-86 192-192 192-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16 132.5 0 240-107.5 240-240V48c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#034FE3] text-center">
                {t.name}
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                {t.title}
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 dark:from-gray-500 to-[#034FE3] rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-gray-700 dark:text-gray-100">
              {t.message}
            </p>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Hero;
