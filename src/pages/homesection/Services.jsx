import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { motion } from "framer-motion";
import { servicesInfo } from "../../utils/services";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BuildIcon from "@mui/icons-material/Build";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useLocation } from "react-router";

function Services() {
  const location = useLocation();
  const servicesAnimation = [
    {
      title: "Solar Sales",
      icon: <SolarPowerIcon sx={{ fontSize: 40, color: "#034FE3" }} />,
    },
    {
      title: "Installation",
      icon: <BuildIcon sx={{ fontSize: 40, color: "#034FE3" }} />,
    },
    {
      title: "Maintenance",
      icon: <BatteryChargingFullIcon sx={{ fontSize: 40, color: "#034FE3" }} />,
    },
    {
      title: "Installments",
      icon: <PaymentsIcon sx={{ fontSize: 40, color: "#034FE3" }} />,
    },
  ];
  return (
    <div className="min-h-[100vh] py-[100px] relative">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>

      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          {" "}
          Our <span className=" text-[#034FE3] underline">Services </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          Helping you unlock the full potential of solar energy with clarity and
          confidence.
        </p>
      </div>
      {/* Container  */}
      <main className="flex lg:flex-row flex-col items-start justify-between gap-[10px] py-10 px-[10px]">
        {location.pathname != "/services" && (
          <div className=" lg:w-[60%] w-full lg:h-[500px] h-[250px] rounded-[18px] overflow-hidden relative">
            <img
              src="/servicesimg1.png"
              alt="services img"
              loading="lazy"
              className="w-full h-full object-cover z-0"
            />
            <motion.span
              className="lg:h-[190px] h-[85px] w-full absolute top-0 left-0 z-10 bg-[#F0F8FF] dark:bg-[#0c0d13]"
              initial={{ x: 0 }}
              whileInView={{ x: "-100%" }}
              transition={{ duration: 1, delay: 0.35 }}
              viewport={{ once: true }}
              style={{
                clipPath: [
                  "polygon(0 0, calc(100% - 80px) 0, 100% 100%, 0 100%)",
                ],
              }}></motion.span>
            <motion.span
              className="lg:h-[190px] h-[85px] w-full absolute lg:top-[190px] top-[85px] left-0 z-10 bg-[#F0F8FF] dark:bg-[#0c0d13]"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1, delay: 0.65 }}
              viewport={{ once: true }}
              style={{
                clipPath: [
                  "polygon(0 0, calc(100% - 80px) 0, 100% 100%, 0 100%)",
                ],
              }}></motion.span>
            <motion.span
              className="lg:h-[190px] h-[85px] w-full absolute lg:top-[380px] top-[170px] left-0 z-10 bg-[#F0F8FF] dark:bg-[#0c0d13]"
              initial={{ x: 0 }}
              whileInView={{ x: "-100%" }}
              transition={{ duration: 1, delay: 0.95 }}
              viewport={{ once: true }}
              style={{
                clipPath: [
                  "polygon(0 0, calc(100% - 80px) 0, 100% 100%, 0 100%)",
                ],
              }}></motion.span>
          </div>
        )}
        <section className="flex flex-wrap items-center justify-center gap-6 py-10">
          {servicesAnimation.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center justify-center gap-3 shadow-xl p-6 rounded-2xl dark:border  dark:border-gray-600  dark:bg-[#0a0a0a] h-[140px] w-[140px]">
              {service.icon}
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {service.title}
              </p>
            </motion.div>
          ))}
        </section>
      </main>
      <section className=" flex  flex-wrap items-stretch justify-center gap-[20px] p-[10px] ">
        {servicesInfo.map((s) => (
          <motion.div
            className="flex flex-col gap-[10px] shadow-md p-[10px] rounded-[18px] flex-1 dark:border-1 border-[#034FE3] hover:scale-[105%] transition-all duration-300 cursor-pointer group"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            viewport={{ once: true }}>
            <h2 className=" sm:text-[20px] text-[32px] sm:w-full w-[309px] text-[#034FE3] font-[600]">
              {s.title}
            </h2>
            <p className=" min-w-[200px] text-black dark:text-white">
              {s.writeup}
            </p>
            <div className="relative min-w-[200px] h-[300px] object-cover rounded-[18px] overflow-hidden">
              <img
                src={s.img}
                alt={s.img}
                loading="lazy"
                className=" w-full h-full object-cover"
              />
              <span className=" absolute bottom-[-70px] right-[-40px] w-[100px] h-[100px] bg-[#034FE3] rotate-[240deg]"></span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Services;
