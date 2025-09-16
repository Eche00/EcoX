import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { successStory } from "../../utils/successstory";

function SuccessStory() {
  return (
    <div className="min-h-[100vh] py-[100px] relative z-10">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          Solar success{" "}
          <span className=" text-[#034FE3] underline">story </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Real results from people and businesses who trusted solar to power
          their future.
        </p>
      </div>
      {/* container  */}
      <main className="py-24 flex flex-row items-stretch overflow-x-scroll gap-6 px-5 w-full">
        {successStory.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 shadow-md p-6 rounded-[18px] flex-1  dark:border-[#034FE3]   dark:bg-[#0a0a0a] hover:scale-105 transition-all duration-300 cursor-pointer sm:min-w-[450px] min-w-[330px] dark:border-1  group h-fit">
            {/* Avatar */}
            <div className="relative w-full group-hover:h-[250px] h-[200px] overflow-hidden rounded-[18px] transition-all duration-300">
              <img
                src={s.img}
                alt={s.name}
                className="w-full h-full object-cover  "
              />
              <span className=" absolute bottom-[-70px] right-[-40px] w-[100px] h-[100px] bg-[#034FE3] rotate-[240deg]"></span>
              <span className=" absolute top-0 left-0 w-full h-full bg-[#034FE3]/20 flex group-hover:hidden transition-all duration-300"></span>
            </div>

            <div className=" items-center space-x-2 pt-2 hidden group-hover:flex transition-all duration-300">
              {/* Name */}
              <h2 className="text-xl font-semibold text-[#034FE3] text-center">
                {s.name}
              </h2>

              {/* Title */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                {s.title}
              </p>
            </div>
            <hr className=" w-full h-2 bg-gradient-to-r  from-gray-300 dark:from-gray-500 to-[#034FE3] rounded-full border-none hidden group-hover:block transition-all duration-300" />
            {/* Message */}
            <p className="text-base text-gray-700 dark:text-gray-100 hidden group-hover:flex transition-all duration-300">
              {s.message}
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default SuccessStory;
