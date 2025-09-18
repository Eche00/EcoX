import React from "react";
import { motion } from "framer-motion";

function Sidebar({ appliances, onSelect }) {
  return (
    <div className=" flex flex-col ">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        Appliances
      </h2>
      <div className="xxl:w-fit w-full overflow-scroll xxl:p-2  ">
        <motion.section
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className=" w-fit xxl:h-[70vh] overflow-scroll flex xxl:grid grid-cols-2 items-center gap-6 py-10 xxl:border-3 dark:border-none border-blue-700 rounded-[10px] p-2">
          {appliances.map((appliance, i) => (
            <div
              key={i}
              onClick={() => onSelect(appliance)}
              className="flex flex-col items-center justify-center gap-3 shadow-xl p-3 rounded-2xl dark:border  dark:border-gray-600  dark:bg-[#0a0a0a] h-[120px] w-[120px] cursor-pointer">
              {appliance.icon}
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                {appliance.title}
              </p>
            </div>
          ))}
        </motion.section>
      </div>
    </div>
  );
}

export default Sidebar;
