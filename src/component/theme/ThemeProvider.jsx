import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className=" bg-[#F0F8FF] dark:bg-[#0c0d13]  h-screen">
        {children}
      </div>
    </div>
  );
}
