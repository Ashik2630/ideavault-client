"use client";

import { useState } from "react";

const UserNameUpdate = ({ user }) => {
  const [name, setName] = useState(user?.name || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        name,
      };

      const res = await fetch(
        `https://ideavault-server-sigma.vercel.app/users/${user?._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const data = await res.json();

      console.log(data);

      if (data.modifiedCount > 0) {
        alert("Name Updated Successfully");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        {/* Name Field */}
        <div>
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>

          <input
            type="text"
            id="full-name"
            name="full-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            value={user?.email}
            disabled
            className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed focus:outline-none"
          />

          <p className="text-xs text-gray-400 mt-2">
            Email cannot be changed directly.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-[#246afc] hover:bg-[#1d5ce0] text-white font-medium rounded-xl shadow-sm transition-colors duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserNameUpdate;