/* eslint-disable react-hooks/purity */
import Comments from "@/components/Comments";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "IdeaVault || IdeaDetailsPage",
}


const fetchDetailsData = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token);
  const res = await fetch(`${process.env.NEXT_SERVER_URL}/ideas/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

const IdeaDetailsPage = async ({ params }) => {
  const { id } = await params;
  const ideaDetail = await fetchDetailsData(id);

  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });
  const token = tokenData?.token || null;
  const {
    ideaTitle,
    shortDescription,
    detailedDescription,
    category,
    tags,
    imageUrl,
    estimatedBudget,
    targetAudience,
    problemStatement,
    proposedSolution,
    createdAt,
  } = ideaDetail || {};

  // Format Date gracefully
  const formattedDate = new Date(createdAt || Date.now()).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6 md:p-8">
          {/* Header Image */}
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-gray-200 relative mb-6">
            <Image
              src={imageUrl}
              alt={ideaTitle}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <Chip
                color="primary"
                variant="solid"
                className="font-bold shadow-lg shadow-blue-600/20"
              >
                {category}
              </Chip>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            {ideaTitle}
          </h1>

          {/* Author and Date Meta */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
              {/* Placeholder fallback for initials */}
              {ideaTitle ? ideaTitle.substring(0, 2).toUpperCase() : "UN"}
            </div>
            <span className="text-sm text-gray-500 font-medium">
              {formattedDate}
            </span>
          </div>

          {/* Short & Detailed Description */}
          <div className="mb-6 space-y-2">
            <p className="text-gray-800 font-medium text-lg leading-relaxed">
              {shortDescription}
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              {detailedDescription}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Array.isArray(tags) && tags.length > 0 ? (
              tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400 italic">
                No tags available
              </span>
            )}
          </div>

          {/* Divider */}
          <hr className="border-gray-200 my-8" />

          {/* Meta details grid (Target Audience & Budget) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                Target Audience
              </h4>
              <p className="text-gray-900 font-semibold text-base">
                {targetAudience}
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
                Budget
              </h4>
              <p className="text-gray-900 font-semibold text-base">
                {estimatedBudget}
              </p>
            </div>
          </div>

          {/* Problem Statement Section */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
              Problem Statement
            </h4>
            <p className="text-gray-900 font-semibold text-base leading-snug">
              {problemStatement}
            </p>
          </div>

          {/* Proposed Solution Section */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-400 mb-1">
              Proposed Solution
            </h4>
            <p className="text-gray-900 font-semibold text-base leading-snug">
              {proposedSolution}
            </p>
          </div>
        </div>
      </div>
      <Comments ideaDetail={ideaDetail} id={id} />
    </div>
  );
};

export default IdeaDetailsPage;
