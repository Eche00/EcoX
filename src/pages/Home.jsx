import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#0c0d13] text-white p-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        TRON <span className="mx-1">›</span> TRANSACTION{" "}
        <span className="text-gray-300">896def...34837ea</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
          <span className="text-white font-bold">T</span>
        </div>
        <h1 className="text-2xl font-bold">
          TRON <span className="font-normal text-gray-400">transaction</span>
        </h1>
      </div>

      {/* Transaction Card */}
      <div className="bg-[#14151b] rounded-2xl p-6 space-y-4">
        {/* Hash + Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-1">HASH</p>
            <p className="break-all text-sm">
              896def2054db445794f53df341b4030e94d08065fb8e67904e38d113a34837ea
            </p>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            <button className="p-2 bg-blue-950 rounded-full">C</button>
            <button className="p-2 bg-blue-950 rounded-full">S</button>
            <button className="p-2 bg-blue-950 rounded-full">F</button>
          </div>
        </div>

        <div className="border-t border-gray-800 my-4"></div>

        {/* Status + Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-gray-400 mb-1">TRANSACTION STATUS</p>
            <p className="text-sm">
              In block{" "}
              <span className="font-semibold underline">64,531,673</span>{" "}
              <span className="text-green-500">●</span>
            </p>
            <p className="text-xs text-gray-500">Confirmations: 11,059,261</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">TIME</p>
            <p className="text-sm">384 days ago</p>
            <p className="text-xs text-gray-500">21 Aug 2024 12:09:39 UTC</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
