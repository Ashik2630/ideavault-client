import IdeaCard from "@/components/IdeaCard";
import { fetchIdeasData } from "@/lib/data";
import { Button } from "@heroui/react";
import React from "react";
import { FcIdea } from "react-icons/fc";

const IdeasPage = async() => {
  const allIdeas = await fetchIdeasData();
  
  return (
    <div className="min-h-screen  my-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Explore Browse Ideas
        </h1>
        <p className="text-muted">
          The Explore Browse Ideas space is designed as a digital launchpad for
          your curiosity.
        </p>
      </div>
      <div className="flex justify-center p-8 ">
      
      {/* Search UI Component */}
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
          placeholder="Search for courses (e.g. Next.js, Web Design...)"
          className="grow w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2 text-sm sm:text-base"
        />

        {/* Search Button */}
        <button className="bg-[#2563eb] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 text-sm sm:text-base">
          Search
        </button>
        
      </div>
      
    </div>
      <main className="container mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FcIdea className="text-3xl" /> All Ideas{" "}
          </h2>
          <Button variant="flat">Filters</Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            allIdeas.map(idea => <IdeaCard key={idea._id} idea={idea}/>)
          }
        </div>
      </main>
    </div>
  );
};

export default IdeasPage;
