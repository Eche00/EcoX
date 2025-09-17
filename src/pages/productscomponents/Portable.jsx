import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { portableSolutions } from "../../utils/solarproducts";

function Portable({ search }) {
  const portables = portableSolutions.filter(
    (portable) =>
      portable.type.toLowerCase() === "portable solutions" &&
      portable.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {portables.length > 0 ? (
        portables.map((portable) => portable.length)
      ) : (
        <p className="text-gray-500 col-span-full text-center mt-10">
          No Portable Solution's found matching "{search}"
        </p>
      )}
      {portables.map((item, index) => (
        <motion.div
          key={item.name}
          className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1 dark:border-1 border-[#034FE3] hover:scale-[105%] transition-all duration-300 cursor-pointer group bg-white dark:bg-black"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 * index }}
          viewport={{ once: true }}>
          {/* Image */}
          <div className="relative border border-gray-300/20 dark:border-gray-600 min-h-[200px] flex items-center justify-center rounded-[18px] shadow-md dark:shadow-none overflow-hidden">
            <img
              src={"/portables.webp" || item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover rounded-[18px]"
            />
            {!item.inStock && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                Out of Stock
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-sm text-gray-500 font-medium">{item.type}</p>
            <h2 className="sm:text-[20px] text-[28px] text-[#034FE3] font-semibold line-clamp-2 h-[60px]">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-3 h-[20px]">
              {item.description}
            </p>
            <p className="text-xs text-gray-400 mt-1">📍 {item.location}</p>

            {/* Price */}
            <div className="mt-2">
              <p className="text-gray-400 line-through text-sm">{item.price}</p>
              <p className="text-xl font-bold text-[#034FE3]">
                {item.discountPrice}
              </p>
            </div>

            {/* Details dynamically */}
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
              {Object.entries(item.details).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>{" "}
                  {value || "-"}
                </p>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between gap-4 mt-4">
              <button>
                <WhatsAppIcon sx={{ fontSize: 30, color: "#034FE3" }} />
              </button>
              <p className="bg-gradient-to-b from-1% from-transparent to-[#034FE3] shadow-lg py-[10px] px-[18px] rounded-[8px] text-[16px] text-white  transition-all duration-300 cursor-pointer text-center">
                ECO𝕏 Product
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Portable;
