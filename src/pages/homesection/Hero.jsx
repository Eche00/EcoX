import React from "react";
import Round from "./Round";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Hero() {
  return (
    <div className="relative h-[100vh] flex  justify-center">
      <Round />
      <main className=" z-10 ">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] py-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-slate-900 dark:text-slate-100 md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Clear Numbers{" "}
              <span className=" text-[#034FE3] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Clean Energy
              </span>
            </motion.h1>
            <p className="text-[#3A3A3A] dark:text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] text-center">
              See how much solar can save you. Our calculator gives real-time,
              no-nonsense estimates of your roof’s power potential.
            </p>
          </div>
          {/* CTA  */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
            viewport={{ once: true }}
            className=" flex items-center gap-[12px]">
            <Link
              to="/calculator"
              className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[42px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer">
              Calculate Now
            </Link>
          </motion.div>
          {/* count  */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex items-center md:gap-[48px] gap-[24px]">
            <img
              src="/herodark.webp"
              alt="hero img"
              className="flex dark:hidden lg:w-[950px] lg:h-[500px] w-full h-[200px] object-cover rounded-[10px]  shadow-xl  border-none shadow-blue-500/30  border-[#034FE3]"
            />
            <img
              src="/hero.webp"
              alt="hero img"
              className="dark:flex hidden lg:w-[900px] lg:h-[500px] w-full h-[200px] object-cover rounded-[10px]  shadow-xl dark:shadow-none border-none dark:border-solid dark:border-1 shadow-blue-500/30  border-[#034FE3]"
            />
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default Hero;
