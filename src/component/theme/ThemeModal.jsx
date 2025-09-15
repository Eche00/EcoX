import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/themeSlice";

function ThemeModal() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className=" w-fit">
      {/* container  */}
      {/* subcontainer  */}

      {/* theme toggle  */}
      <div className=" flex items-center bg-gray-300 dark:bg-black  rounded-[10px] w-full">
        <button
          onClick={() => dispatch(setTheme("light"))}
          className={
            theme === "light"
              ? "flex items-center justify-center  bg-blue-500 text-white cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
              : "flex items-center justify-center  bg-transparent dark:text-white  cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
          }>
          <LightModeIcon fontSize="small" />
        </button>
        <button
          onClick={() => dispatch(setTheme("dark"))}
          className={
            theme === "dark"
              ? "flex items-center justify-center  bg-blue-500 cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
              : "flex items-center justify-center  bg-transparent cursor-pointer px-[10px] py-[8px] rounded-[10px] transition-all duration-300"
          }>
          <DarkModeIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default ThemeModal;
