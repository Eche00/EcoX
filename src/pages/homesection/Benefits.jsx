import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { motion } from "framer-motion";
import { benefitsInfo } from "../../utils/benefits";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import SavingsIcon from "@mui/icons-material/AttachMoney";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Benefits() {
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
          Benefits of{" "}
          <span className=" text-[#034FE3] underline">Choosing Us </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Smart, reliable, and sustainable energy solutions made simple.
        </p>
      </div>

      {/* container  */}
      <main className="py-20 flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] w-[80%] mx-auto">
        {benefitsInfo.map((b) => (
          <motion.div
            className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1 dark:border-1 border-[#034FE3] hover:scale-[105%] transition-all duration-300 cursor-pointer group"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            viewport={{ once: true }}>
            <div
              className="
  border border-gray-300/20 dark:border-gray-600 
   dark:bg-[#0a0a0a] 
  min-h-[150px] min-w-[150px] 
  flex items-center justify-center 
  rounded-[18px] 
  shadow-md dark:shadow-none
  transition-all duration-300
  hover:scale-105
">
              <span className="bg-[#034FE3] w-fit h-fit text-white p-2 rounded-[18px]">
                {b.icon === "SolarPowerIcon" && (
                  <SolarPowerIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SavingsIcon" && (
                  <SavingsIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SupportAgentIcon" && (
                  <SupportAgentIcon sx={{ fontSize: 50 }} />
                )}
              </span>
            </div>
            <h2 className=" sm:text-[20px] text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600] text-center">
              {b.title}
            </h2>
            <p className=" min-w-[200px] text-black dark:text-white text-center">
              {b.writeup}
            </p>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Benefits;
