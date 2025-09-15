import React from "react";

function Round() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-[900px]  lg:h-[900px] w-[600px] h-[600px] border-t-2 border-blue-500/30 rounded-full ">
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-[600px] lg:h-[600px] w-[400px] h-[400px] border-t-2 border-blue-500/30 rounded-full "></div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] border-t-2 border-blue-500/30 rounded-full "></div>
    </div>
  );
}

export default Round;
