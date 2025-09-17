import React, { useState } from "react";
import Panels from "./productscomponents/Panels";
import Batteries from "./productscomponents/Batteries";
import Inverters from "./productscomponents/Inverters";
import Appliances from "./productscomponents/Appliances";
import Lighting from "./productscomponents/Lighting";
import Portable from "./productscomponents/Portable";

function Products() {
  const [activeCategory, setActiveCategory] = useState("panels");
  const [search, setSearch] = useState("");

  const categories = [
    "panels",
    "batteries",
    "inverters",
    "appliances",
    "lighting",
    "portable solutions",
  ];

  return (
    <div className="sm:w-[75%] w-[90%] mx-auto relative">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
        {/* Search Bar */}
        <div className="w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#034FE3] dark:text-slate-100 dark:placeholder:text-slate-50"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#034FE3] text-white shadow-md cursor-pointer"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md cursor-pointer"
              }`}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </header>

      {/* Content Section */}
      <section className="py-6">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-slate-100 capitalize">
            Solar {activeCategory}
          </h2>
          <p className="text-gray-600  mt-2">
            Showing results for{" "}
            <span className="font-semibold">{activeCategory}</span>{" "}
            {search && (
              <>
                with search term: <span className="italic">"{search}"</span>
              </>
            )}
          </p>
        </div>
        {/* Here you can map products based on activeCategory + search */}
        <main>
          {activeCategory === "panels" ? (
            <Panels search={search} />
          ) : activeCategory === "batteries" ? (
            <Batteries search={search} />
          ) : activeCategory === "inverters" ? (
            <Inverters search={search} />
          ) : activeCategory === "appliances" ? (
            <Appliances search={search} />
          ) : activeCategory === "lighting" ? (
            <Lighting search={search} />
          ) : (
            <Portable search={search} />
          )}
        </main>
      </section>
    </div>
  );
}

export default Products;
