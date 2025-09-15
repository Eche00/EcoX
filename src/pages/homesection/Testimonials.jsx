import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { testimonials } from "../../utils/testimonials";
import { motion } from "framer-motion";

function Testimonials() {
  return (
    <div className=" py-[100px] relative">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>

      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          {" "}
          Client{" "}
          <span className=" text-[#034FE3] underline">Testimonials </span>
        </p>
        <p className=" text-[18px] font-[300] capitalize">
          Discover what our Clients have to say, Those who've <br /> experienced
          of solar first hand.
        </p>
      </div>

      {/* container  */}
      <main className="py-24 flex flex-row items-stretch overflow-x-scroll gap-6 px-5 w-full">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[350px] min-w-[330px] dark:border-1  "
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

export default Testimonials;
