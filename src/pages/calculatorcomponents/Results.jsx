import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import QuoteModal from "./QuoteModal";

function Results({ select, onSelect, handleAdd, success }) {
  const [chosenWatt, setChosenWatt] = useState("");
  const [manualWatt, setManualWatt] = useState("");
  const [appliances, setAppliances] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const appliances = JSON.parse(localStorage.getItem("appliances" || []));
    setAppliances(appliances);
  }, [handleAdd]);

  const totalWatts = appliances.reduce(
    (sum, item) => sum + Number(item.totalWatts || 0),
    0
  );
  useEffect(() => {
    localStorage.setItem("appliances", JSON.stringify(appliances));
  }, [appliances]);

  const handleDelete = (index) => {
    const updated = appliances.filter((_, i) => i != index);
    setAppliances(updated);
  };
  return (
    <div className="  min-h-[100vh] flex-1">
      {/* Selected  */}
      {select.title ? (
        <section className="flex flex-wrap items-center gap-3 py-20 border-b-2 border-blue-700 relative">
          <div className="flex items-center justify-center gap-3 shadow-xl p-3 rounded-2xl dark:border  dark:border-gray-600  dark:bg-[#0a0a0a] h-[50px] px-[32px] w-fit">
            {select.icon}
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
              {select.title}
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
            :
          </p>
          <input
            type="number"
            placeholder="Quantity"
            value={select.quantity}
            onChange={(e) => onSelect({ ...select, quantity: e.target.value })}
            className="shadow-xl p-3 rounded-2xl border border-gray-400  dark:border-gray-600  dark:bg-[#0a0a0a] h-[50px] px-[32px] w-fit  text-black dark:text-slate-100 outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
          />
          {/* Wattage Selector */}
          <div className="flex flex-col items-center gap-2">
            <select
              className="shadow-xl p-4 rounded-2xl border border-gray-400 dark:border-gray-600 dark:bg-[#0a0a0a] w-[200px] text-black dark:text-slate-100 outline-none"
              value={chosenWatt}
              onChange={(e) => {
                const value = e.target.value;
                setChosenWatt(value);

                // if not manual, send selected watt up
                if (value !== "others") {
                  onSelect({ ...select, pickedWatts: value });
                }
              }}>
              <option value="" disabled>
                Select Wattage
              </option>
              {select.watts.map((watt, index) => (
                <option key={index} value={watt}>
                  {watt}W
                </option>
              ))}
              <option value="others">Enter Manually</option>
            </select>

            {/* Show manual input ONLY if "Others" is picked */}
            {chosenWatt === "others" && (
              <input
                type="number"
                placeholder="Enter Custom Wattage"
                className="shadow-xl p-3 rounded-2xl border border-gray-400 dark:border-gray-600 dark:bg-[#0a0a0a] w-[200px] text-black dark:text-slate-100 outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                value={manualWatt}
                onChange={(e) => {
                  setManualWatt(e.target.value);
                  onSelect({ ...select, pickedWatts: e.target.value });
                }}
              />
            )}
          </div>

          <button
            className=" bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] px-[42px] rounded-[8px] text-[16px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer"
            onClick={handleAdd}>
            Calculate
          </button>

          {success && (
            <motion.p
              initial={{ opacity: 0.8, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25, type: "spring" }}
              className="
      mt-3 px-4 py-2 rounded-xl text-sm font-semibold
      bg-green-100 text-green-700 border border-green-300
      dark:bg-green-900 dark:text-green-200 dark:border-green-700
     absolute bottom-1 left-2 ">
              Appliance successfully added.
            </motion.p>
          )}
        </section>
      ) : (
        <section className="flex items-center gap-3 py-20 border-b-2 border-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-700">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>

          {/* Header Text */}
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Select an Appliance
          </h2>
        </section>
      )}

      {/* Table Results */}
      {appliances.length >= 1 ? (
        <div className="mt-20 overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-slate-100">
              <tr>
                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">
                  Appliance
                </th>
                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">
                  Quantity
                </th>
                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">
                  Watts
                </th>
                <th className="p-3 border border-gray-300 dark:border-gray-600 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {appliances.length > 0 ? (
                appliances.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-slate-300">
                    <td className="p-3 border border-gray-300 dark:border-gray-600">
                      {item.title}
                    </td>
                    <td className="p-3 border border-gray-300 dark:border-gray-600">
                      {item.quantity}
                    </td>
                    <td className="p-3 border border-gray-300 dark:border-gray-600">
                      {item.pickedWatts}W
                    </td>
                    <td className="p-3 border border-gray-300 dark:border-gray-600">
                      <button
                        onClick={() => handleDelete(index)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm cursor-pointer">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center p-4 text-gray-500 dark:text-gray-400">
                    No appliances added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <motion.div
          className="flex flex-col gap-[10px] shadow-md p-[20px] rounded-[18px] flex-1 dark:border border-[#034FE3] hover:scale-[105%] transition-all duration-300 cursor-pointer group w-fit mx-auto my-30"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          viewport={{ once: true }}>
          <div
            className="
      border border-gray-300/20 dark:border-gray-600 
      dark:bg-[#0a0a0a] 
      min-h-[150px] min-w-[150px]  
      flex items-center justify-center 
      rounded-[18px] 
      shadow-md dark:shadow-none
      transition-all duration-300
      hover:scale-105
    ">
            <span className="bg-[#034FE3] w-fit h-fit text-white p-4 rounded-[18px] text-center text-lg font-semibold">
              ⚡
            </span>
          </div>

          <h2 className="sm:text-[20px] text-[28px] sm:w-full w-[309px] text-[#034FE3] font-[600] text-center">
            No Calculations Yet
          </h2>

          <p className="min-w-[200px] text-black dark:text-white text-center">
            Start by adding appliances to see your total wattage.
          </p>
        </motion.div>
      )}
      {/* Result  */}
      {appliances.length >= 1 && (
        <section className="flex items-baseline justify-between gap-3 py-10  w-full">
          <button
            className="w-fit h-fit text-nowrap bg-gradient-to-b from-1% from-transparent to-[#034FE3]  shadow-lg py-[15px] sm:px-[42px] px-[20px] rounded-[8px] text-[14px] text-white  hover:scale-[105%] transition-all duration-300 cursor-pointer"
            onClick={setIsOpen}>
            Complete Quote
          </button>

          <div className="flex flex-col items-end justify-end gap-2  w-full">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-end">
              Total Watts
            </p>
            <input
              type="text"
              readOnly
              value={totalWatts}
              className="shadow-xl p-3 rounded-2xl border border-gray-400  dark:border-gray-600  dark:bg-[#0a0a0a] h-[50px] px-[12px] w-fit  text-black dark:text-slate-100 outline-none placeholder:text-gray-400 dark:placeholder:text-gray-600 text-end"
            />
          </div>
        </section>
      )}
      {/* MODAL  */}
      {isOpen && <QuoteModal totalWatts={totalWatts} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default Results;
