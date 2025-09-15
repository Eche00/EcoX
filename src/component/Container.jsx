import React from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/footer";

function Container() {
  return (
    <div className=" relative bg-[#F0F8FF] dark:bg-[#0c0d13] overflow-hidden">
      {/* header  */}
      <Header />

      {/* outlet for pages   */}
      <div className=" flex-1 min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Container;
