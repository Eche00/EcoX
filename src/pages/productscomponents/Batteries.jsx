import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { solarBatteries } from "../../utils/solarproducts";

function Batteries({ search }) {
  const batteriess = solarBatteries.filter(
    (battery) =>
      battery.type.toLowerCase() === "batteries" &&
      battery.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="w-full py-10 px-4 sm:px-10  min-h-screen">
      {batteriess.length > 0 ? (
        batteriess.map((battery) => battery.length)
      ) : (
        <p className="text-gray-500 col-span-full text-center mt-10">
          No Batteries found matching "{search}"
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {batteriess.map((battery, index) => (
          <motion.div
            key={battery.name}
            className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1 dark:border-1 border-[#034FE3] hover:scale-[105%] transition-all duration-300 cursor-pointer group bg-white dark:bg-black"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 * index }}
            viewport={{ once: true }}>
            {/* Battery Image */}
            <div className="relative border border-gray-300/20 dark:border-gray-600 min-h-[200px] flex items-center justify-center rounded-[18px] shadow-md dark:shadow-none overflow-hidden">
              <img
                src={"/solarbatteries.webp" || battery.image}
                alt={battery.name}
                loading="lazy"
                className="w-full h-full object-cover rounded-[18px]"
              />
              {!battery.inStock && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-lg">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Battery Info */}
            <div className="flex-1 flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">
                {battery.type}
              </p>
              <h2 className="sm:text-[20px] text-[28px] text-[#034FE3] font-semibold line-clamp-2 h-[60px]">
                {battery.name}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3 h-[20px]">
                {battery.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                📍 {battery.location}
              </p>

              {/* Price */}
              <div className="mt-2">
                <p className="text-gray-400 line-through text-sm">
                  {battery.price}
                </p>
                <p className="text-xl font-bold text-[#034FE3]">
                  {battery.discountPrice}
                </p>
              </div>

              {/* Details */}
              <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Type:</span>{" "}
                  {battery.details.type}
                </p>
                <p>
                  <span className="font-semibold">Capacity:</span>{" "}
                  {battery.details.capacity}
                </p>
                <p>
                  <span className="font-semibold">Lifespan:</span>{" "}
                  {battery.details.lifespan}
                </p>
                <p>
                  <span className="font-semibold">Warranty:</span>{" "}
                  {battery.details.warranty}
                </p>
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
    </main>
  );
}

export default Batteries;
