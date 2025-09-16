import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { testimonials } from "../../utils/testimonials";
import { motion } from "framer-motion";
import { experts } from "../../utils/experts";
import FlareIcon from "@mui/icons-material/Flare";
import Round from "../homesection/Round";
import XIcon from "@mui/icons-material/X";

function Experts() {
  return (
    <div className=" py-[100px] relative z-10">
      <Round />
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          Our solar Engineering{" "}
          <span className=" text-[#034FE3] underline">Experts </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Meet our solat Engeneering experts
        </p>
      </div>

      {/* container  */}
      <main className="py-24 flex flex-wrap items-stretch justify-center  gap-10 px-5 w-full">
        {experts.map((e, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[250px] min-w-[330px] dark:border-1  "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}>
            {/* Avatar */}
            <div className="flex items-end justify-end w-full relative">
              <img
                src={e.img}
                alt={e.name}
                className="w-[200px] h-[150px] object-cover rounded-[18px] absolute -top-1/2 left-2  border-1 border-blue-700 dark:border-none"
              />

              {/* logo section  */}
              <div className="flex items-baseline space-x-1 h-[90px]">
                <FlareIcon className=" text-[#034FE3]" fontSize="large" />
                <hr className=" w-[2px] h-[25px] bg-gradient-to-b from-transparent to-[#034FE3] border-none" />
                <span className="text-black dark:text-white font-bold text-lg">
                  Eco𝕏
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#034FE3] text-center">
                {e.name}
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                {e.title}
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 dark:from-gray-500 to-[#034FE3] rounded-full border-none" />
            {/* Message */}
            <p className="text-base text-gray-700 dark:text-gray-100">
              {e.message}
            </p>
            <a
              href={e.link}
              target="_blank"
              className="w-full flex items-center justify-end text-blue-700 cursor-pointer">
              <XIcon />
            </a>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Experts;
