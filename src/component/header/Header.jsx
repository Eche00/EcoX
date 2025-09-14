import React from "react";
import { Link, NavLink } from "react-router";

function Header() {
  return (
    <div className=" w-full">
      <section className=" max-w-[75%] mx-auto my-10 p-5 flex items-center justify-between shadow-xl dark:shadow-none border-none dark:border-solid dark:border-1 shadow-blue-500/30  border-blue-500 rounded-[10px] bg-gradient-to-b from-80% from-white to-blue-500/10  dark:bg-none ">
        <div>logo</div>
        <nav className="flex items-center gap-[20px] text-black dark:text-white font-bold text-[14px]">
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
        <Link
          to="/"
          className=" bg-[#3B82F6] px-[20px] py-[10px] h-full rounded-[8px] text-[16px] text-white cursor-pointer">
          Calculator
        </Link>
      </section>
    </div>
  );
}

export default Header;
