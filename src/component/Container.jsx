import React from "react";
import { Outlet } from "react-router";
import Header from "./header/Header";

function Container() {
  return (
    <div className="h-[100vh] relative sm:h-full bg-[#F0F8FF] dark:bg-[#0c0d13]">
      {/* header  */}
      <Header />

      {/* outlet for pages   */}
      <div className="ml-0 md:ml-[300px] flex-1 p-5 h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
