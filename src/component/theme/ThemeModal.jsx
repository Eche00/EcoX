import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/themeSlice";

function ThemeModal() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className=" w-full sm:h-[100vh] h-full overflow-scroll sm:pb-0 pb-[100px]">
      {/* container  */}
      <main className="  flex xl:flex-row flex-col gap-[20px]  w-full sm:p-[20px]  ">
        {/* subcontainer  */}

        {/* theme toggle  */}
        <div className=" flex items-center bg-gray-300 dark:bg-black  rounded-[10px] w-full">
          <button
            onClick={() => dispatch(setTheme("light"))}
            className={
              theme === "light"
                ? "flex-1  bg-blue-600 cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
                : "flex-1  bg-transparent cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
            }>
            <LightModeIcon />
          </button>
          <button
            onClick={() => dispatch(setTheme("dark"))}
            className={
              theme === "dark"
                ? "flex-1  bg-blue-600 cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
                : "flex-1  bg-transparent cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
            }>
            <DarkModeIcon />
          </button>
        </div>
      </main>
    </div>
  );
}

export default ThemeModal;
