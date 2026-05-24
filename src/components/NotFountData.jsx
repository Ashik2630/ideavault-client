import React from "react";

const NotFoundData = () => {
return (
  <div className="flex items-center justify-center h-[60vh] bg-gray-50">
    <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-[320px]">
      {/* Icon */}
      <div className="text-5xl mb-3">📭</div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800">No Data Found</h2>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        Sorry, we couldn’t find any data to show right now.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-5 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Refresh
      </button>
    </div>
  </div>
);
};
export default NotFoundData;
