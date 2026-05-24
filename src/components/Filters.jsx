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
        className="w-[256px] px-4 py-2 rounded-xl border border-gray-300 bg-white text-sm"
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="healthcare">Healthcare</option>
        <option value="agriculture">Agriculture</option>
        <option value="foodTech">FoodTech</option>
        <option value="edTech">EdTech</option>
        <option value="environment">Environment</option>
        <option value="fitness">Fitness</option>
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