import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import BuildIcon from "@mui/icons-material/Build";
import PaymentsIcon from "@mui/icons-material/Payments";

function Installation() {
  return (
    <div className=" py-[100px] relative z-10">
      {/* component Intro */}
      <span className=" absolute top-[-15px] left-[-16.5px] text-[#034FE3]/50">
        <AdjustIcon fontSize="large" />
      </span>
      <hr className=" w-[3px] h-[36px]  bg-[#034FE3]/90 rounded-full absolute sm:top-[110px] top-[100px] -left-[2.5px] border-none" />
      <div className="text-[#333] dark:text-slate-100 pl-2">
        <p className=" font-[600] sm:text-[38px] text-[26px] text-[#333] dark:text-slate-100 pl-2 ">
          Solar <span className=" text-[#034FE3] underline">Installation </span>
        </p>
        <p className=" text-[18px] font-[300] ">
          A simple 3 step process to get you powered by the sun.
        </p>
      </div>

      <main className="w-[95%] mx-auto flex lg:flex-row flex-col items-center gap-10">
        <img
          src="/servicehero.webp"
          alt=""
          className=" w-[600px] max-h-[450px] object-cover rounded-[18px]"
        />
        <section className="flex flex-1 flex-col xxl:items-end items-center gap-3 py-3">
          <div className="bg-[#034FE3] rounded-2xl w-full p-6 flex flex-col gap-4 text-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#034FE3] rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
                1
              </div>
              <h3 className="text-xl font-bold">
                Site Assessment & System Design
              </h3>
            </div>

            {/* Step Content */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              A technician inspects your home, office, or factory. They check
              roof strength, sun exposure, and energy needs. Based on this, they
              design the right system size (panels, batteries, inverter).
            </p>
          </div>
          <div className="bg-[#034FE3] rounded-2xl w-full p-6 flex flex-col gap-4 text-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#034FE3] rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
                2
              </div>
              <h3 className="text-xl font-bold">Installation & Setup</h3>
            </div>

            {/* Step Content */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              Solar panels are mounted on the roof or ground. Inverter,
              batteries, and wiring are connected. The system is tested to
              ensure it produces power safely.
            </p>
          </div>
          <div className="bg-[#034FE3] rounded-2xl w-full p-6 flex flex-col gap-4 text-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
            {/* Step Header */}
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#034FE3] rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
                3
              </div>
              <h3 className="text-xl font-bold">Connection & Maintenance</h3>
            </div>

            {/* Step Content */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              The system is connected to your home’s electrical grid or set up
              as off-grid. Monitoring devices are added to track energy usage.
              Regular cleaning of panels and servicing of batteries/inverters
              keeps efficiency high.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Installation;
