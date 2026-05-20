"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const IdeaEvolutionSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const totalSlides = 12;

    // Slide Image Database (Clean tech-focused placeholders)
   const slideImages = {
        bgTitle: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1400", // Dark abstract network
        phase1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",  // Tech interaction
        napkin: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",  // UX/UI Wireframing
        phase2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",  // Analytics dashboard
        techAudit: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800", // Structured blueprints
        stats: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",     // Modern charts
        phase3: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800",  // Matrix/Binary code
        engine: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800",  // Server rack/Dev team
        stack: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",   // IDE Screen code
        roadmap: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=800", // Digital line art nodes
        bgEnd: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400"    // Deep space tech web
    };

    // Auto-play logic: pauses when user hovers mouse over slider
    useEffect(() => {
        if (isHovered) return;
        
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(timer);
    }, [isHovered]);

    const goToSlide = (index) => setCurrentSlide(index);

    return (
        <div className="w-full bg-[#1e1e1d] py-10 px-4 font-sans antialiased">
            <div className="container mx-auto">
                
                {/* Main Slide Container */}
                <div 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative w-full aspect-video bg-[#1e1e1d] rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-white/10"
                >
                    
                    {/* Horizontal Translation Track */}
                    <div 
                        className="flex w-full h-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {/* Slide 1: Title with Blurred Background Image */}
                        <div className="min-w-full h-full flex flex-col items-center justify-center text-center p-20 relative overflow-hidden">
                            <Image src={slideImages.bgTitle} fill className="object-cover opacity-20 scale-105 blur-sm" alt="Background Network" priority />
                            <div className="relative z-10 max-w-3xl">
                                <span className="px-4 py-1.5 rounded-full bg-[#7c66dc]/10 text-[#7c66dc] border border-[#7c66dc]/20 text-xs font-bold tracking-widest uppercase mb-6 inline-block">Interactive Portfolio Section</span>
                                <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-none">Idea Evolution Journey</h1>
                                <p className="text-xl md:text-2xl text-[#7c66dc] font-medium tracking-wide">Spark to Scale: The Engineering Odyssey</p>
                            </div>
                        </div>

                        {/* Slide 2: Phase 01 Intro Section with Big Art */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-7 p-20 flex flex-col justify-center">
                                <span className="text-[#7c66dc] tracking-[0.4em] uppercase text-xs font-bold mb-3">Discovery Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 01</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#7c66dc] to-blue-400">The Spark</h3>
                            </div>
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.phase1} fill className="object-cover grayscale contrast-125" alt="Phase 1 Image" />
                                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c] via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 3: Problem Definition */}
                        <div className="min-w-full h-full flex flex-col p-16 bg-[#0a0a0c]">
                            <h2 className="text-3xl font-bold text-white border-l-4 border-[#7c66dc] pl-6 mb-12 tracking-tight">Defining the Problem</h2>
                            <div className="grid grid-cols-2 gap-10 h-full pb-8">
                                <div className="bg-[#161618] p-10 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-[#7c66dc]/30 transition-colors group/card">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#7c66dc] mb-4">Community Listening</h3>
                                        <p className="text-[#a1a1aa] leading-relaxed text-base">Analyzing active user discussions and developer spaces to pinpoint workflow friction points where tools drop the ball.</p>
                                    </div>
                                    <div className="text-right text-white/20 group-hover/card:text-[#7c66dc] transition-colors font-mono text-xl">01 // UX</div>
                                </div>
                                <div className="bg-[#161618] p-10 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-blue-500/30 transition-colors group/card">
                                    <div>
                                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Concept Derivation</h3>
                                        <p className="text-[#a1a1aa] leading-relaxed text-base">Distilling messy target data matrices into refined value loops that present automated engineering solutions.</p>
                                    </div>
                                    <div className="text-right text-white/20 group-hover/card:text-blue-400 transition-colors font-mono text-xl">02 // DATA</div>
                                </div>
                            </div>
                        </div>

                        {/* Slide 4: Next.js Bleed Image Layout */}
                        <div className="min-w-full h-full grid grid-cols-2 bg-[#0a0a0c]">
                            <div className="p-20 flex flex-col justify-center bg-[#121214] border-r border-white/5">
                                <span className="text-xs text-blue-400 uppercase tracking-widest font-bold mb-2">Interface Mapping</span>
                                <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">From Napkin to Screen</h2>
                                <p className="text-[#a1a1aa] text-lg leading-relaxed mb-4">We structure design modules into high-fidelity interaction mockups, bridging abstract ideation nodes with scalable interface layers.</p>
                            </div>
                            <div className="relative h-full">
                                <Image src={slideImages.napkin} fill className="object-cover" alt="UX Wireframe Blueprint" />
                            </div>
                        </div>

                        {/* Slide 5: Phase 02 Intro Section */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-7 p-20 flex flex-col justify-center">
                                <span className="text-blue-400 tracking-[0.4em] uppercase text-xs font-bold mb-3">Validation Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 02</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">The Validation</h3>
                            </div>
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.phase2} fill className="object-cover saturation-50" alt="Phase 2 Validation Image" />
                                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c] via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 6: Tiled Verification Grid */}
                        <div className="min-w-full h-full p-16 flex flex-col bg-[#0a0a0c]">
                             <h2 className="text-3xl font-bold text-white border-l-4 border-blue-400 pl-6 mb-12">Testing the Hypothesis</h2>
                             <div className="grid grid-cols-3 gap-6 h-full pb-6">
                                {[
                                    { icon: "fa-magnifying-glass-chart", color: "text-blue-400", title: "Market Fit", text: "Analyzing live vectors to ensure products directly solve verified marketplace deficits." },
                                    { icon: "fa-microchip", color: "text-[#7c66dc]", title: "Tech Audit", text: "Validating API performance limits and cloud processing feasibility maps early on." },
                                    { icon: "fa-users-gear", color: "text-purple-400", title: "Qualification", text: "Strict logical sorting parameters to determine overall runtime lifecycle yields." }
                                ].map((tile, i) => (
                                    <div key={i} className="bg-[#161618] p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center hover:bg-[#1c1c1e] transition-colors">
                                        <div className={`w-16 h-16 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center mb-6 ${tile.color}`}>
                                            <i className={`fa-solid ${tile.icon} text-2xl`}></i>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{tile.title}</h3>
                                        <p className="text-sm text-[#a1a1aa] leading-relaxed px-2">{tile.text}</p>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Slide 7: Highlight Stats with Art Component Split */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-5 flex flex-col items-center justify-center bg-[#121214] relative">
                                <Image src={slideImages.stats} fill className="object-cover opacity-10 mixed-blend-overlay" alt="Data texture" />
                                <span className="text-[140px] font-black text-transparent bg-clip-text bg-linear-to-b from-[#7c66dc] to-blue-500 leading-none select-none">85%</span>
                                <p className="text-white text-xs font-bold tracking-[0.3em] uppercase mt-2">Core Confidence Matrix</p>
                            </div>
                            <div className="col-span-7 p-20 flex flex-col justify-center border-l border-white/5">
                                <h3 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Moving From Think to Know</h3>
                                <p className="text-[#a1a1aa] text-lg leading-relaxed italic">Before a single component hook is initialized, strict data validation models clear development logic to minimize risk vectors.</p>
                            </div>
                        </div>

                        {/* Slide 8: Phase 03 Intro Section */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-7 p-20 flex flex-col justify-center">
                                <span className="text-purple-400 tracking-[0.4em] uppercase text-xs font-bold mb-3">Deployment Phase</span>
                                <h2 className="text-7xl font-black text-white mb-4">Phase 03</h2>
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-[#7c66dc]">The Engineering</h3>
                            </div>
                            <div className="col-span-5 relative h-full">
                                <Image src={slideImages.phase3} fill className="object-cover hue-rotate-15" alt="Phase 3 Coding Infrastructure" />
                                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0c] via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Slide 9: Tech Execution with Embedded Next Image */}
                        <div className="min-w-full h-full grid grid-cols-12 p-16 bg-[#0a0a0c] gap-12 items-center">
                            <div className="col-span-6 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white border-l-4 border-purple-500 pl-6 mb-8">Building the Engine</h2>
                                <ul className="space-y-5">
                                    {[
                                        "Asynchronous Performance Tuning",
                                        "Edge Routing & Scalable DB Cluster Infra",
                                        "Strict Token Authentication Safeguards"
                                    ].map((listText, index) => (
                                        <li key={index} className="flex items-center gap-4 text-base text-[#a1a1aa]">
                                            <span className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xs">✓</span>
                                            {listText}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-span-6 relative h-5/6 w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image src={slideImages.engine} fill className="object-cover" alt="System Engineering Framework" />
                            </div>
                        </div>

                        {/* Slide 10: Tech Stack Table */}
                        <div className="min-w-full h-full grid grid-cols-12 p-16 bg-[#0a0a0c] gap-12">
                            <div className="col-span-7 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">IdeaVault Core Stack</h2>
                                <div className="w-full overflow-hidden border border-white/5 rounded-2xl bg-[#121214]">
                                    <table className="w-full text-left text-sm">
                                        <thead className="border-b border-white/10 text-purple-400 uppercase text-[10px] tracking-[0.2em] bg-white/1">
                                            <tr>
                                                <th className="py-4 px-6">Layer</th>
                                                <th className="py-4 px-6">Stack Target</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-[#a1a1aa] divide-y divide-white/5 font-medium">
                                            <tr><td className="py-3.5 px-6 font-bold text-white">Frontend</td><td className="py-3.5 px-6 font-mono text-xs">Next.js 14 / React 18</td></tr>
                                            <tr><td className="py-3.5 px-6 font-bold text-white">Styling</td><td className="py-3.5 px-6 font-mono text-xs">Tailwind CSS / DaisyUI</td></tr>
                                            <tr><td className="py-3.5 px-6 font-bold text-white">Runtime Engine</td><td className="py-3.5 px-6 font-mono text-xs">Node.js / Express Architecture</td></tr>
                                            <tr><td className="py-3.5 px-6 font-bold text-white">Database Core</td><td className="py-3.5 px-6 font-mono text-xs">PostgreSQL Cluster API / Prisma</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-span-5 relative h-full rounded-3xl overflow-hidden border border-white/5">
                                <Image src={slideImages.stack} fill className="object-cover brightness-75" alt="Database Code Pipeline" />
                            </div>
                        </div>

                        {/* Slide 11: Timeline Infographic Row */}
                        <div className="min-w-full h-full grid grid-cols-12 bg-[#0a0a0c]">
                            <div className="col-span-4 relative h-full">
                                <Image src={slideImages.roadmap} fill className="object-cover contrast-125 brightness-50" alt="Roadmap nodes art" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#0a0a0c] via-transparent to-transparent"></div>
                                <div className="absolute inset-0 flex flex-col justify-center px-12 z-10">
                                    <h2 className="text-3xl font-bold text-white tracking-tight">The Road map to Launch</h2>
                                </div>
                            </div>
                            <div className="col-span-8 p-16 flex flex-col justify-center">
                                <div className="grid grid-cols-4 gap-4 relative">
                                    <div className="absolute top-6 left-4 right-4 h-0.5 bg-white/10 z-0"></div>
                                    {[
                                        { title: "Sprint 1-4", desc: "Core Logic MVP Setup" },
                                        { title: "Sprint 5-6", desc: "Beta User Stress Testing" },
                                        { title: "Sprint 7-8", desc: "Cloud Scaling Assets" },
                                        { title: "Launch", desc: "Global Edge Production" }
                                    ].map((step, i) => (
                                        <div key={i} className="relative z-10 flex flex-col items-start bg-[#121214] p-5 rounded-2xl border border-white/5">
                                            <div className="w-3 h-3 rounded-full bg-[#7c66dc] border-4 border-black box-content shadow-[0_0_15px_#7c66dc] mb-4"></div>
                                            <p className="text-xs text-[#7c66dc] font-black tracking-widest uppercase mb-1">{step.title}</p>
                                            <p className="text-xs text-[#a1a1aa] leading-snug">{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slide 12: Modern Call to Action Closing Slide */}
                        <div className="min-w-full h-full flex flex-col items-center justify-center p-20 text-center relative overflow-hidden">
                            <Image src={slideImages.bgEnd} fill className="object-cover opacity-10 scale-105" alt="Network graphic footer" />
                            <div className="relative z-10">
                                <h2 className="text-7xl font-black text-white mb-4 tracking-tight">Let&apos;s Build</h2>
                                <p className="text-lg text-[#a1a1aa] mb-8 max-w-md mx-auto">Architecting next-generation product parameters. Ready to drop an idea into production?</p>
                                <button className="px-8 py-3.5 bg-linear-to-r from-[#7c66dc] to-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-[0_0_30px_rgba(124,102,220,0.4)] transition-all duration-300 hover:-translate-y-0.5">
                                    contact@ideavault.io
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left/Right Invisible Arrow Touch Hotspots for Manual Navigation */}
                    <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-md z-30 hover:bg-black/60">‹</button>
                    <button onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white backdrop-blur-md z-30 hover:bg-black/60">›</button>

                    {/* Navigation Bar Tracking Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goToSlide(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-8 bg-[#7c66dc]' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
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