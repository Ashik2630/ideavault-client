"use client";
import { Card } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { useSession } from "../../lib/auth-client";
import { getVerificationToken } from "@/lib/verification-token";

const AddIdeaPage = () => {
  const {data: session} = useSession();
  // console.log(session)
  const onsubmit = async(e) => {
    e.preventDefault();
    if (!session?.user) {
      toast.error("You must be logged in to submit an idea!");
      return;
    }
    const formData = new FormData(e.currentTarget);
    const ideaData = Object.fromEntries(formData.entries());
    
    ideaData.userId = session?.user?.id;
    const apiUrl = process.env.NEXT_PUBLIC_CLIENT_API_URI || "https://ideavault-server-sigma.vercel.app";
    const token = getVerificationToken();
    const headers = {
      'content-type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}`, 'x-verification-token': token } : {}),
    };

    const res = await fetch(`${apiUrl}/ideasAll`, {
      method: 'POST',
      headers,
      body:JSON.stringify(ideaData)
    })
      const data = await res.json();
     if(data){
      toast.success("Successfully submit your idea");
     }
     else{
     toast.error("Failed to submit your idea");
     }

  };

  return (
    <div className="container mx-auto my-10">
      {/* Text section  */}
      <div className="my-5">
        <h1 className="text-4xl font-bold mb-2">Submit Your Idea</h1>
        <p className="text-muted">
          Share your startup concept with the world and get valuable feedback.
        </p>
      </div>
      <Card>
        <form onSubmit={onsubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                name="ideaTitle"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Idea Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ideaTitle"
                name="ideaTitle" 
                placeholder="Enter your Idea Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label
                name="category"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category" 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none  text-gray-700"
                  required
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="tech">Technology</option>
                  <option value="business">Business</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="foodTech">FoodTech</option>
                  <option value="edTech">EdTech</option>
                  <option value="environment">Environment</option>
                  <option value="fitness">Fitness</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              name="short-desc"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Short Description <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="short-desc"
              name="shortDescription" 
              placeholder="A one-sentence summary of your idea"
              className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div>
            <label
              name="detailed-desc"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Detailed Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="detailed-desc"
              name="detailedDescription" 
              rows={4}
              placeholder="Explain how your idea works in detail..."
              className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 resize-y"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                name="tags"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags" 
                placeholder="Add some tags"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <label
                name="image-url"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image-url"
                name="imageUrl" 
                placeholder="Enter your Image URL"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                name="budget"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Estimated Budget
              </label>
              <input
                type="text"
                id="budget"
                name="budget" 
                placeholder="Estimated Budget"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              />
            </div>

            <div>
              <label
                name="audience"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Target Audience
              </label>
              <input
                type="text"
                id="audience"
                name="targetAudience" 
                placeholder="Target Audience"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                name="problem"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Problem Statement
              </label>
              <textarea
                id="problem"
                name="problemStatement" 
                rows={3}
                placeholder=" Problem Statement"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 resize-y"
              ></textarea>
            </div>

            <div>
              <label
                name="solution"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Proposed Solution
              </label>
              <textarea
                id="solution"
                name="proposedSolution"
                rows={3}
                placeholder="Proposed Solution"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 resize-y"
              ></textarea>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#155dfc] w-full hover:bg-[#0b43bb] text-white font-medium py-3 px-6 rounded-xl transition duration-200 shadow-sm ease-in-out transform active:scale-95"
            >
              Submit Idea to Vault
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddIdeaPage;
