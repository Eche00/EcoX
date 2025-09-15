import React from "react";
import { Link, NavLink } from "react-router";
import FlareIcon from "@mui/icons-material/Flare";
import ThemeModal from "../theme/ThemeModal";
import Round from "../../pages/homesection/Round";

function Footer() {
  return (
    <div className=" border-t-2 border-[#034FE3]/30 relative">
      <div className=" lg:hidden flex">
        <Round />
      </div>

      <footer className="flex flex-col ">
        <section className="flex sm:flex-row flex-col py-[50px]  gap-[20px] lg:w-[75%] w-[90%] mx-auto border-b border-[#343841]">
          <div className="flex-1 flex flex-col gap-[16px] sm:border-r border-[#343841]">
            {/* logo section  */}
            <div className="flex items-baseline space-x-1 flex-1">
              <FlareIcon className=" text-[#034FE3]" fontSize="large" />
              <hr className=" w-[2px] h-[25px] bg-gradient-to-b from-transparent to-[#034FE3] border-none" />
              <span className="text-black dark:text-white font-bold text-lg">
                Eco𝕏
              </span>
            </div>
            <p className=" text-[18px] font-[300] capitalize dark:text-white">
              Your home for clear and Clean Energy, Our calculator gives
              real-time <br />
              result, Try and See how much solar can save you.
            </p>
            <ThemeModal />
          </div>
          <div className="flex-1 flex sm:flex-row flex-col items-start justify-between gap-[30px]">
            <ul className="flex flex-col ">
              <p className="text-black dark:text-[#F2F6FA] font-bold text-[16px] mb-[10px]">
                Navigation
              </p>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#008CFF]"
                    : "text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline"
                }>
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#008CFF]"
                    : "text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline"
                }>
                About
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#008CFF]"
                    : "text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline"
                }>
                Contact
              </NavLink>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-black dark:text-[#F2F6FA] font-bold text-[16px] mb-[10px]">
                Installation
              </p>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Maintainance
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Consultation
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Survey
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Offer
              </a>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-black dark:text-[#F2F6FA] font-bold text-[16px] mb-[10px]">
                Resources
              </p>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Help & Support
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Feedback
              </a>
              <a
                href="#"
                className="text-gray-700 dark:text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">
                Privacy
              </a>
            </ul>
            {/* <div className="flex sm:flex-col flex-row items-center gap-[10px]">{Svgs.twitter}{Svgs.discord}</div> */}
          </div>
        </section>
        <section className="flex items-center justify-center  py-[50px]  gap-[20px] w-[80%] mx-auto">
          <p className="text-[16px] text-gray-700 dark:text-[#F2F6FA] font-[400] leading-[24px] opacity-[0.5]">
            {" "}
            © 2025 by Eche_codes
          </p>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
