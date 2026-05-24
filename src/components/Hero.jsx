"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { GoArrowRight } from 'react-icons/go';
export const metadata = {
  title: "IdeaVault || Hero",
}

const IdeaEvolutionSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const totalSlides = 4;

    const slideImages = {
        slide1: "/hero_images/slider_image_1_1779386210288.png",
        slide2: "/hero_images/slider_image_2_1779386225615.png",
        slide3: "/hero_images/slider_image_3_1779386253008.png",
        slide4: "/hero_images/slider_image_4_1779386271106.png"
    };

    useEffect(() => {
        if (isHovered) return;
        
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div className="w-full py-10 px-4 font-sans antialiased">
            <div className="container mx-auto">
                <div 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-full aspect-video bg-[#1e1e1d] rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-white/10"
                >
                    <div 
                        className="flex w-full h-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {/* Slide 1: Welcome / Spark */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-7 p-20 flex flex-col justify-center relative z-10">
                                <span className="text-[#155dfc] tracking-[0.4em] uppercase text-xs font-bold mb-3">Discovery Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 01</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#155dfc] to-blue-400">The Spark</h3>
                                <p className="text-[#a1a1aa] mt-6 text-lg leading-relaxed max-w-lg">Transforming raw concepts into actionable digital infrastructure.</p>
                                <Button className={`rounded-md bg-[#155dfc] mt-5`}>Explore Ideas <GoArrowRight/></Button>
                            </div>
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.slide1} fill className="object-cover" alt="Discovery Phase" priority />
                                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 2: Design / Wireframing */}
                        <div className="min-w-full h-full grid grid-cols-2 bg-[#0a0a0c]">
                            <div className="p-20 flex flex-col justify-center bg-[#121214] border-r border-white/5 z-10 relative">
                                <span className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Interface Mapping</span>
                                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">From Napkin to Screen</h2>
                                <p className="text-[#a1a1aa] text-lg leading-relaxed mb-4">We structure design modules into high-fidelity interaction mockups, bridging abstract ideation nodes with scalable interface layers.</p>
                                <Button className={`rounded-md bg-[#155dfc] mt-5`}>Explore Ideas <GoArrowRight/></Button>
                            </div>
                            <div className="relative h-full">
                                <Image src={slideImages.slide2} fill className="object-cover" alt="UX Wireframe Blueprint" />
                                <div className="absolute inset-0 bg-linear-to-r from-[#121214] via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 3: Data / Analytics */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-7 p-20 flex flex-col justify-center relative z-10">
                                <span className="text-purple-400 tracking-[0.4em] uppercase text-xs font-bold mb-3">Validation Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 02</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">The Analytics</h3>
                                <p className="text-[#a1a1aa] mt-6 text-lg leading-relaxed max-w-lg">Before a single component hook is initialized, strict data validation models clear development logic to minimize risk vectors.</p>
                                <Button className={`rounded-md bg-[#155dfc] mt-5`}>Explore Ideas <GoArrowRight/></Button>
                            </div>
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.slide3} fill className="object-cover" alt="Validation Analytics" />
                                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 4: Engineering / Architecture */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.slide4} fill className="object-cover" alt="System Engineering Framework" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent"></div>
                            </div>
                            <div className="col-span-7 p-20 flex flex-col justify-center relative z-10 bg-[#121214]">
                                <span className="text-blue-500 tracking-[0.4em] uppercase text-xs font-bold mb-3">Deployment Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 03</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#155dfc] to-blue-500">The Engineering</h3>
                                <p className="text-[#a1a1aa] mt-6 text-lg leading-relaxed max-w-lg">Building resilient, scalable, and high-performance server architectures for global deployment.</p>
                                <Button variant='primary' className={`bg-[#155dfc] mt-8 self-start`}>Launch Your Project</Button>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-md z-30 hover:bg-black/60">‹</button>
                    <button onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-md z-30 hover:bg-black/60">›</button>

                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-8 bg-[#155dfc]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdeaEvolutionSlider;