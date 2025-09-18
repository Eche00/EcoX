import React from "react";
import { contactUs } from "../../utils/contactus";
import { motion } from "framer-motion";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import Round from "../homesection/Round";

function Hero() {
  return (
    <div className="relative min-h-[100vh]">
      <Round />
      {/* container  */}
      <main className="py-20 flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] w-[80%] relative mx-auto z-40">
        {contactUs.map((b) => (
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
                  <PermPhoneMsgIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SavingsIcon" && (
                  <ForwardToInboxIcon sx={{ fontSize: 50 }} />
                )}
                {b.icon === "SupportAgentIcon" && (
                  <ShareLocationIcon sx={{ fontSize: 50 }} />
                )}
              </span>
            </div>
            <h2 className=" text-[20px] sm:text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600] text-center">
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

export default Hero;
