import Filters from "@/components/Filters";
import IdeaCard from "@/components/IdeaCard";
import SearchBur from "@/components/SearchBur";
import { fetchIdeasData } from "@/lib/data";
import React from "react";
import { FcIdea } from "react-icons/fc";

export const metadata = {
  title: "IdeaVault || Explore Ideas",
}

const IdeasPage = async ({ searchParams }) => {

  const sParams = await searchParams;
  // console.log(sParams)
  const allIdeas = await fetchIdeasData(sParams?.search || "", sParams?.category || "");
  
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
      <SearchBur />
      
    </div>
      <main className="container mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FcIdea className="text-3xl" /> All Ideas{" "}
          </h2>
          <Filters/>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            allIdeas?.map(idea => <IdeaCard key={idea._id} idea={idea} />)
          }
        </div>
      </main>
    </div>
  );
};

export default IdeasPage;
