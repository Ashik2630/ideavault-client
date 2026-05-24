/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Filters = ({ filteredData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [category, setCategory] = useState(
    searchParams?.get("category") || ""
  );

  useEffect(() => {
    setCategory(searchParams?.get("category") || "");
  }, [searchParams]);

  const handleChange = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(
      searchParams?.toString() || ""
    );

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    const q = params.toString();

    router.push(`/ideas${q ? `?${q}` : ""}`);
  };

  return (
    <div>
      {/* Select */}
      <select
        value={category}
        onChange={handleChange}
        className="w-[256px] px-4 py-2 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm shadow-sm outline-none transition duration-200 focus:border-[#155DFC] focus:ring-2 focus:ring-[#155DFC]/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Agriculture">Agriculture</option>
        <option value="FoodTech">FoodTech</option>
        <option value="EdTech">EdTech</option>
        <option value="Sharing Economy">Sharing Economy</option>
        <option value="Travel">Travel</option>
        <option value="HealthTech">HealthTech</option>
        <option value="Energy">Energy</option>
        <option value="Smart City">Smart City</option>
      </select>

      {/* No Data Found */}
      {filteredData?.length === 0 && (
        <div className="flex justify-center items-center mt-10">
          <div className="w-full max-w-md p-8 rounded-2xl border border-red-200 bg-red-50 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              No Data Found
            </h2>

            <p className="text-gray-600">
              Sorry, there is no data available in this category.
              Please add some data first.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;