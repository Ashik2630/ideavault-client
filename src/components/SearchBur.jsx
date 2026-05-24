"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBur = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const searchParam = useSearchParams();
  

    const handleSearch = () => {
        const params = new URLSearchParams(searchParam.toString())
        if(search) {
            params.set('search', search);
        } else {
            params.delete('search');

        }
        router.push(`/ideas?${params.toString()}`);
    };

  return (
    <div className="flex items-center w-full max-w-2xl  border border-gray-200 rounded-full p-1.5 shadow-sm">
      {/* Search Icon */}
      <div className="pl-4 pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for Ideas or Categories..."
        className="grow w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2 text-sm sm:text-base"
      />

      {/* Search Button */}
      <button onClick={handleSearch} className="bg-[#2563eb] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 text-sm sm:text-base">
        Search
      </button>
    </div>
  );
};

export default SearchBur;
