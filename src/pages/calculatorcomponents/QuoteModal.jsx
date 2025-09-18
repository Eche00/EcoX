import React, { useState } from "react";

export default function QuoteModal({ totalWatts, setIsOpen }) {
  const [safetyMargin, setSafetyMargin] = useState(25); // default 25%
  const [usageHours, setUsageHours] = useState(6); // default usage duration in hours

  const adjustedWatts = Math.round(totalWatts * (1 + safetyMargin / 100));
  const kWhPerDay = ((adjustedWatts * usageHours) / 1000).toFixed(2);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-2xl w-[400px] shadow-2xl relative">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200">
            ✖
          </button>

          {/* Header */}
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
            Complete Quote
          </h2>

          {/* Main Info */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Your selected appliances consume a total of{" "}
            <span className="font-semibold">{totalWatts}W</span>.
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            If you want to size an inverter / generator / solar system, you
            usually:
          </p>

          {/* Editable Options */}
          <div className="space-y-3">
            <label className="flex flex-col">
              <span className="text-xs text-gray-500 dark:text-gray-400 pb-2">
                Safety Margin (%)
              </span>
              <input
                type="number"
                defaultValue={safetyMargin}
                onChange={(e) => setSafetyMargin(Number(e.target.value))}
                className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-xs text-gray-500 dark:text-gray-400 pb-2">
                Daily Usage (hours)
              </span>
              <input
                type="number"
                defaultValue={usageHours}
                onChange={(e) => setUsageHours(Number(e.target.value))}
                className="p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
            </label>
          </div>

          {/* Results */}
          <div className="mt-4 p-3 rounded-lg text-gray-800 dark:text-slate-300 bg-blue-50 dark:bg-blue-900/40 text-sm">
            <p>
              <strong>Adjusted Load:</strong>{" "}
              <span className="font-semibold">{adjustedWatts}W</span> (with{" "}
              {safetyMargin}% margin)
            </p>
            <p>
              <strong>Estimated Daily Use:</strong>{" "}
              <span className="font-semibold">{kWhPerDay} kWh</span>
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-5">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
