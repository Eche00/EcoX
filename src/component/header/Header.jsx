import { useState } from "react";
import { Link, NavLink } from "react-router";
import FlareIcon from "@mui/icons-material/Flare";
import ThemeModal from "../theme/ThemeModal";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" w-full overflow-hidden">
      {/* container  */}
      <main className=" lg:w-[75%] w-[90%] mx-auto my-10 p-5 flex items-center justify-between shadow-xl dark:shadow-none border-none dark:border-solid dark:border-1 shadow-blue-500/30  border-blue-500 rounded-[10px] bg-gradient-to-b from-80% from-white to-blue-500/10  dark:bg-none ">
        {/* logo section  */}
        <div className="flex items-baseline space-x-1 flex-1">
          <FlareIcon className=" text-blue-500" fontSize="large" />
          <hr className=" w-[2px] h-[25px] bg-gradient-to-b from-transparent to-blue-500 border-none" />
          <span className="text-black dark:text-white font-bold text-lg">
            Eco𝕏
          </span>
        </div>
        {/* desktop navigation  */}
        <nav className="lg:flex hidden items-center gap-[20px] text-black dark:text-white font-bold text-[14px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "dark:text-white text-black"
            }>
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "dark:text-white text-black"
            }>
            About
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "dark:text-white text-black"
            }>
            Contact Us
          </NavLink>
        </nav>
        {/*  desktop buttons  */}
        <div className=" lg:flex hidden items-center justify-end gap-2 flex-1">
          <ThemeModal />
          <Link
            to="/calculator"
            className=" bg-[#3B82F6] px-[20px] py-[10px] h-full rounded-[8px] text-[16px] text-white cursor-pointer">
            Calculator
          </Link>
        </div>

        {/* mobile navigation  */}
        <button
          className="flex lg:hidden text-blue-500"
          onClick={() => setOpen(!open)}>
          <MenuOpenIcon fontSize="large" />
        </button>
      </main>
      <AnimatePresence>
        {open && (
          <section
            className="flex lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-black/20  dark:bg-black/40"
            onClick={() => setOpen(!open)}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F0F8FF] dark:bg-[#0c0d13] w-[70%] flex flex-col p-5 gap-10">
              {/* logo section  */}
              <section className=" flex items-center justify-between">
                <div className="flex items-baseline space-x-1 ">
                  <FlareIcon className=" text-blue-500" fontSize="large" />
                  <hr className=" w-[2px] h-[25px] bg-gradient-to-b from-transparent to-blue-500 border-none" />
                  <span className="text-black dark:text-white font-bold text-lg">
                    Eco𝕏
                  </span>
                </div>
                <button
                  className=" text-blue-500"
                  onClick={() => setOpen(!open)}>
                  <CloseIcon fontSize="medium" />
                </button>
              </section>
              {/* mobile navigation  */}
              <nav
                className="flex flex-col  items-center gap-[20px] text-black dark:text-white font-bold text-[14px] w-fit mx-auto"
                onClick={() => setOpen(!open)}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "dark:text-white text-black"
                  }>
                  Home
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "dark:text-white text-black"
                  }>
                  About
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "dark:text-white text-black"
                  }>
                  Contact Us
                </NavLink>
              </nav>
              {/*  mobile buttons  */}
              <div className=" flex flex-col-reverse  items-center gap-5 ">
                <ThemeModal />
                <Link
                  to="/calculator"
                  className=" bg-[#3B82F6] px-[20px] py-[10px] h-full rounded-[8px] text-[16px] text-white cursor-pointer">
                  Calculator
                </Link>
              </div>
            </motion.div>
          </section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
