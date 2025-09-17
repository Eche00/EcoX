import React, { useState } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { solarProducts } from "../../utils/solarproducts";
import { motion } from "framer-motion";
import { Link } from "react-router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Sales() {
  return (
    <div className=" py-[100px] relative z-10">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          Explore Our Solar{" "}
          <span className=" text-[#034FE3] underline">Sales Categories </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Find the right solar solution for your home, business, or industry.
        </p>
      </div>
      <main className="py-20 flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] w-[80%] mx-auto">
        {solarProducts.map((s) => (
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
  min-h-[200px] min-w-[200px] 
  flex items-center justify-center 
  rounded-[18px] 
  shadow-md dark:shadow-none
  transition-all duration-300
  hover:scale-105
 p-2">
              <img
                src={s.image || "/servicesimg.png"}
                alt={s.type}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <h2 className=" sm:text-[20px] text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600] text-center">
              {s?.type}
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.35 }}
              viewport={{ once: true }}
              className=" flex items-center justify-between gap-[12px]">
              <button className="">
                <WhatsAppIcon sx={{ fontSize: "30px", color: "#034FE3" }} />
              </button>
              <Link
                to="/products"
                className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[22px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer">
                View Products
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Sales;
