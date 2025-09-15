import React, { useState } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Faqs() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);
  const [faq7, setFaq7] = useState(false);
  const [faq8, setFaq8] = useState(false);
  return (
    <div className="h-] py-[100px] relative">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          FA<span className=" text-[#034FE3] underline">Q's </span>
        </p>
        <p className=" text-[18px] font-[300] capitalize">
          Find out question's frequently asked about solar <br /> panel
          installation and benefits
        </p>
      </div>

      <div className="flex xl:flex-row flex-col-reverse sm:pl-10 py-[50px] gap-[32px]">
        <section className="flex flex-col gap-[32px] w-full max-w-[90%] sm:max-w-[1200px] mx-auto ">
          {/* faq1  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              What is the lifespan of a solar panel?
              <span onClick={() => setFaq1(!faq1)} className=" cursor-pointer">
                {!faq1 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq1 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Most solar panels last between 25 to 30 years with proper
                maintenance. After this period, efficiency may gradually
                decrease but they can continue generating electricity.
              </p>
            )}
          </div>
          {/* faq2  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              How much can I save on electricity bills?
              <span onClick={() => setFaq2(!faq2)} className=" cursor-pointer">
                {!faq2 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq2 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Savings depend on your energy consumption, roof size, and local
                sunlight. On average, households can save 50-70% on monthly
                electricity costs.
              </p>
            )}
          </div>
          {/* faq3  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              Do solar panels work on cloudy days?
              <span onClick={() => setFaq3(!faq3)} className=" cursor-pointer">
                {!faq3 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq3 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Yes! Solar panels generate electricity even on cloudy or rainy
                days, though output may be slightly reduced compared to sunny
                days.
              </p>
            )}
          </div>
          {/* faq4  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              ow long does installation take?
              <span onClick={() => setFaq4(!faq4)} className=" cursor-pointer">
                {!faq4 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq4 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Residential installations typically take 1-3 days, depending on
                the system size and roof complexity.
              </p>
            )}
          </div>
        </section>
        <section className="flex flex-col gap-[32px] w-full max-w-[90%] sm:max-w-[1200px] mx-auto ">
          {/* faq5  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              Are solar panels eligible for govt incentives?
              <span onClick={() => setFaq5(!faq5)} className=" cursor-pointer">
                {!faq5 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq5 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Many regions offer tax credits, rebates, or incentives for
                installing solar. We help guide you through available programs.
              </p>
            )}
          </div>
          {/* faq6  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              What maintenance do solar panels require?
              <span onClick={() => setFaq6(!faq6)} className=" cursor-pointer">
                {!faq6 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq6 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Solar panels require minimal maintenance — occasional cleaning
                and regular system checks ensure optimal performance.
              </p>
            )}
          </div>
          {/* faq7  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              Can I monitor my solar energy production?
              <span onClick={() => setFaq7(!faq7)} className=" cursor-pointer">
                {!faq7 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq7 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Yes! Most systems include monitoring apps or dashboards to track
                real-time electricity generation and consumption.
              </p>
            )}
          </div>
          {/* faq8  */}
          <div className=" w-full shadow-md dark:border-1 border-[#034FE3] rounded-[24px] text-[#034FE3] sm:text-[24px] text-[16px] font-[400]   p-[20px] flex flex-col gap-[10px]">
            <p className="flex items-center gap-[10px] justify-between">
              What happens during a power outage?
              <span onClick={() => setFaq8(!faq8)} className=" cursor-pointer">
                {!faq8 ? (
                  <KeyboardArrowDownIcon fontSize="medium" />
                ) : (
                  <KeyboardArrowUpIcon fontSize="medium" />
                )}
              </span>
            </p>
            {faq8 && (
              <p className="text-gray-800 dark:text-[#AFB3CA] sm:text-[16px] text-[12px] font-[400] leading-[24px] pl-[30px]">
                Standard grid-tied solar systems shut off during an outage for
                safety. Battery storage or hybrid systems can provide backup
                power.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Faqs;
