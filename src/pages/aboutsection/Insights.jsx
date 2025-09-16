import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { motion } from "framer-motion";
import { Link } from "react-router";
import FlareIcon from "@mui/icons-material/Flare";

function Insights() {
  return (
    <div className="bg-[#034FE3] relative z-10 py-[100px]">
      <section className="sm:w-[75%] w-[90%] mx-auto relative ">
        <hr className=" w-[3px] h-[36px]  bg-slate-100 rounded-full absolute sm:top-[10px] top-0 -left-[2.5px] border-none" />
        <div className="text-[#333] dark:text-slate-100 pl-2">
          <p className=" font-[600] sm:text-[38px] text-[26px] text-slate-100 pl-2 ">
            Solar Insights &{" "}
            <span className=" text-black underline">Updates </span>
          </p>
          <p className=" text-[18px] font-[300] text-slate-300">
            Stay informed with the latest trends, tips, and breakthroughs in
            solar energy.
          </p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 1 }}
        viewport={{ once: true }}
        className=" max-w-7xl mx-auto grid sm:grid-cols-3 grid-cols-1 sm:px-0 px-6  py-20 gap-5">
        <section className="relative w-full h-[350px]  overflow-hidden rounded-[18px] group transition-all duration-300 cursor-pointer">
          <img
            src="/insight.webp"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
          <span className=" absolute bottom-0 left-0 w-full h-[50px] bg-slate-100 dark:bg-[#0c0d13] text-gray-800 dark:text-slate-100 p-2 text-[12px] group-hover:h-[100px] group-hover:text-[14px] transition-all duration-300 italic border-t-blue-700 border-t-5 cursor-pointer">
            <b>January 2025:</b>
            💬 Solar isn’t just an option anymore it’s the future. Discover how
            new innovations are making solar panels more efficient, affordable,
            and accessible to every home and business.
          </span>
          <span className=" absolute top-0 left-0 w-full h-full bg-[#034FE3]/20 flex group-hover:hidden transition-all duration-300"></span>
          <span className=" absolute top-0 left-5  bg-[#034FE3] p-3 rounded-b-full text-slate-100 dark:text-black">
            {" "}
            <FlareIcon fontSize="medium" />
          </span>
        </section>
        <section className="relative w-full h-[350px]  overflow-hidden rounded-[18px] group transition-all duration-300 cursor-pointer">
          <img
            src="/insight1.webp"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
          <span className=" absolute bottom-0 left-0 w-full h-[50px] bg-slate-100 dark:bg-[#0c0d13] text-gray-800 dark:text-slate-100 p-2 text-[12px] group-hover:h-[100px] group-hover:text-[14px] transition-all duration-300 italic border-t-blue-700 border-t-5 cursor-pointer">
            <b>February 2025</b>
            💬 Learn how switching to solar can reduce your monthly electricity
            bills by up to 60%, while giving you long-term energy independence.
          </span>
          <span className=" absolute top-0 left-0 w-full h-full bg-[#034FE3]/20 flex group-hover:hidden transition-all duration-300"></span>
          <span className=" absolute top-0 left-5  bg-[#034FE3] p-3 rounded-b-full text-slate-100 dark:text-black">
            {" "}
            <FlareIcon fontSize="medium" />
          </span>
        </section>
        <section className="relative w-full h-[350px]  overflow-hidden rounded-[18px] group transition-all duration-300 cursor-pointer">
          <img
            src="/insight2.webp"
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          />
          <span className=" absolute bottom-0 left-0 w-full h-[50px] bg-slate-100 dark:bg-[#0c0d13] text-gray-800 dark:text-slate-100 p-2 text-[12px] group-hover:h-[100px] group-hover:text-[14px] transition-all duration-300 italic border-t-blue-700 border-t-5 cursor-pointer">
            <b>March 2025:</b>
            💬 Going solar isn’t just about saving money, it’s about protecting
            the planet. Here’s how households and businesses are cutting carbon
            footprints with clean energy.
          </span>
          <span className=" absolute top-0 left-0 w-full h-full bg-[#034FE3]/20 flex group-hover:hidden transition-all duration-300"></span>
          <span className=" absolute top-0 left-5  bg-[#034FE3] p-3 rounded-b-full text-slate-100 dark:text-black">
            {" "}
            <FlareIcon fontSize="medium" />
          </span>
        </section>
      </motion.div>
    </div>
  );
}

export default Insights;
