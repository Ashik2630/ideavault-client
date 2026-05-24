"use client";

import { authClient } from "@/lib/auth-client";

export const metadata = {
  title: "IdeaVault || User Name Update",
  }

const UserNameUpdate = ({ user }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const { data, error } = await authClient.updateUser({
      name,
    });

    if (!error) {
      window.location.reload();
    } else {
      toast.error("Failed to update profile. Please try again.");
      return;
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
            name="name"
            defaultValue={user?.name}
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
