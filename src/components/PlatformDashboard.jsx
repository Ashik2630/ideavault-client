"use client"
import React, { useState } from 'react';

const PlatformDashboard = () => {
    const [activeMetric, setActiveMetric] = useState(null);

  const platformStats = [
    {
      id: "ideas",
      value: "1,420+",
      label: "Innovative Ideas Shared",
      growth: "+24% this week",
      icon: "💡",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "valuation",
      value: "$4.2M",
      label: "Estimated Total Budgets",
      growth: "Community Validated",
      icon: "💰",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: "interactions",
      value: "18.9K",
      label: "Validation Comments",
      growth: "99.8% Active Engagement",
      icon: "🔥",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const topCategories = [
    { name: "Artificial Intelligence", percentage: 42, color: "bg-indigo-600" },
    { name: "Health Tech & BioMed", percentage: 28, color: "bg-teal-500" },
    { name: "EdTech (Education)", percentage: 18, color: "bg-amber-500" },
    { name: "FinTech Systems", percentage: 12, color: "bg-rose-500" }
  ];
    return (
        <section className="py-20 transition-colors duration-300 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
            Live Platform Activity
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Hub for Next-Gen Innovators
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Where raw concepts turn into community-backed blueprints. Track how our crowd-sourced platform is expanding across industry boundaries in real-time.
          </p>
        </div>

        {/* 3-Column Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platformStats.map((stat) => (
            <div
              key={stat.id}
              className={`card bg-white dark:bg-slate-900 p-6 shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                activeMetric === stat.id ? 'ring-2 ring-primary scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
              onClick={() => setActiveMetric(stat.id === activeMetric ? null : stat.id)}
            >
              {/* Subtle Background Glow effect on Hover */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 bg-linear-to-br ${stat.color} opacity-5 group-hover:opacity-10 rounded-full blur-xl transition-all duration-300`} />
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl">{stat.icon}</span>
                <span className="text-xs font-semibold px-2 py-1 bg-success/10 text-success rounded-lg">
                  {stat.growth}
                </span>
              </div>
              
              <h3 className="text-4xl font-black tracking-tight mb-1 text-slate-900 dark:text-white">
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Glassmorphism Category Share Panel */}
        <div className="card bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Trending Industry Distributions
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Live categorical breakdowns based on database index weighting.
              </p>
            </div>
            <button className="btn btn-outline btn-primary btn-sm rounded-lg normal-case">
              Analyze Category Trends
            </button>
          </div>

          {/* Custom Visual Distribution Bars */}
          <div className="space-y-4">
            {topCategories.map((cat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>{cat.name}</span>
                  <span>{cat.percentage}%</span>
                </div>
                {/* Custom Track Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`${cat.color} h-full rounded-full transition-all duration-1000 ease-out`} 
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    );
};

export default PlatformDashboard;