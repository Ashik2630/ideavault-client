"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaExclamationTriangle, FaHome } from "react-icons/fa";
export const metadata = {
  title: "IdeaVault || Not Found",
}
const NotFound = () => {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-linear-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        
        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14">
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-500/20 p-5 rounded-full border border-red-500/30">
              <FaExclamationTriangle className="text-red-500 text-5xl" />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-wider">
            404
          </h1>

          {/* Title */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            Sorry, the page you are looking for does not exist or may have been
            removed. Please go back or return to the homepage.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 border border-white/10"
            >
              <FaArrowLeft />
              Go Back
            </button>

            {/* Home Button */}
            <Link href="/">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-600/30">
                <FaHome />
                Back To Home
              </button>
            </Link>
          </div>

          {/* Decorative Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
