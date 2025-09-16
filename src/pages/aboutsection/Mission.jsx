import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Mission() {
  return (
    <div className=" py-[100px] relative z-10 flex flex-col gap-10">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          About <span className=" text-[#034FE3] underline">us </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Get to know us, from our Mission to our Vision.
        </p>
      </div>

      {/* Mission  */}
      <div className=" mx-auto  relative  flex lg:flex-row flex-col  justify-center lg:gap-[10px] gap-20">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] pt-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-slate-900 dark:text-slate-100 md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Our{" "}
              <span className=" text-[#034FE3] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Mission
              </span>
            </motion.h1>
            <p className="text-[#3A3A3A] dark:text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] text-center">
              To make clean, reliable, and affordable solar energy accessible to
              everyone empowering homes and businesses to reduce costs, embrace
              sustainability, and build a brighter future.
            </p>
          </div>
        </section>

        <section className="lg:w-[50%] w-[90%] flex flex-wrap items-stretch gap-6 px-5 mx-auto py-10 ">
          <motion.div
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[230px] dark:border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end pr-5 w-full relative">
              <img
                src="/mission.webp"
                alt="our mission img"
                className="w-[95%] h-[200px] object-cover rounded-[18px] absolute -top-1/1 left-1/2 -translate-x-1/2 "
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
                Mission
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                CEO
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 dark:from-gray-500 to-[#034FE3] rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-gray-700 dark:text-gray-100">
              We are here to make clean energy simple, affordable, and
              accessible helping families and businesses thrive while protecting
              the planet.
            </p>
          </motion.div>
        </section>
      </div>

      {/* Vision  */}
      <div className=" mx-auto  relative  flex lg:flex-row-reverse flex-col justify-center lg:gap-[10px] gap-20">
        <section className="flex flex-1 flex-col items-center gap-[24px] text-white text-[16px] font-[500] pt-[60px] z-40">
          {/* title  */}
          <div className=" flex items-center flex-col gap-[12px]">
            <motion.h1
              className=" text-slate-900 dark:text-slate-100 md:text-[80px] md:font-[700] md:leading-[70px] md:max-w-[700px]  text-[50px] font-[700] leading-[60px] text-center "
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}>
              {" "}
              Our{" "}
              <span className=" text-[#034FE3] md:text-[90px] md:font-[700] md:leading-[100px] md:max-w-[700px]  text-[60px] font-[700] leading-[60px]">
                Vision
              </span>
            </motion.h1>
            <p className="text-[#3A3A3A] dark:text-[#9E9E9E] text-[20px] font-[500] md:max-w-[600px] text-center">
              We envision a future where solar energy is at the heart of
              everyday life empowering communities, reducing costs, and
              protecting the planet for generations to come.
            </p>
          </div>
        </section>

        <section className="lg:w-[50%] w-[90%] flex flex-wrap items-stretch gap-6 px-5 mx-auto py-10 ">
          <motion.div
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[230px] dark:border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end pr-5 w-full relative">
              <img
                src="/vision.webp"
                alt="our mission img"
                className="w-[95%] h-[200px] object-cover rounded-[18px] absolute -top-1/1 left-1/2 -translate-x-1/2 object-bottom"
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
                Vision
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                CO
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 dark:from-gray-500 to-[#034FE3] rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-gray-700 dark:text-gray-100">
              We aim for a world where solar energy powers every home and
              business, reducing costs and driving sustainable growth for all
              communities.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default Mission;
