import {  Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const IdeaCard = ({ idea }) => {
    // Destructure the properties we need for the card UI
    const { ideaTitle, shortDescription, category, imageUrl } = idea;

    return (
       <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative overflow-hidden aspect-16/10">
                <Image
                    alt="Course Image"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    src={imageUrl || "https://i.ibb.co/n8zTkcGm/photo-1498837167922-ddd27525d352.jpg"}

                    fill
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
            <div className="relative px-6 pb-6 pt-2 flex flex-col grow z-10">
                
                {/* Title (Changes color when the whole card is hovered) */}
                <h3 className="text-xl font-black text-slate-800 mb-3 leading-snug group-hover:text-indigo-600 transition-colors duration-300">
                    {ideaTitle}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm mb-6 grow line-clamp-3 leading-relaxed">
                    {shortDescription}
                </p>

                {/* Footer Actions: Avatar & Button perfectly aligned horizontally */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    
                    {/* Upgraded Avatar */}
                    <div className="flex items-center space-x-2">
                        <div className="w-20 h-8 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white shadow-sm ring-2 ring-white">
                            UNIQUE  
                        </div>
                    </div>

                    {/* Upgraded Call to Action Button */}
                    <button className="flex items-center justify-center bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-2 px-5 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        View Details
                        {/* Little arrow that animates on hover */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-4 w-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default IdeaCard;