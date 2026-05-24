import React from 'react';

const SuccessSpotlight = () => {
    const stories = [
    {
      id: 1,
      title: "EcoTrack AI",
      tag: "Seed Funded ($50K)",
      badgeColor: "bg-[#f43f5e] text-white",
      description: "Started as a raw concept on IdeaVault. After receiving 140+ community comments and constructive critiques, the team built a prototype and secured angel investment last month.",
      impact: "⚡ 5,000+ early waitlist signups"
    },
    {
      id: 2,
      title: "MedConnect Ledger",
      tag: "Launched MVP",
      badgeColor: "bg-[#16a34a] text-white",
      description: "A secure blockchain concept for medical records. The founder found their lead full-stack developer right here in the feedback threads of their original IdeaVault post.",
      impact: "🏥 Partnered with 3 local clinics"
    },
    {
      id: 3,
      title: "EduSphere VR",
      tag: "Prototype Phase",
      badgeColor: "bg-[#14b8a6] text-white",
      description: "An immersive VR platform for remote biology labs. Community members helped refine the target audience metrics, shifting the focus from universities directly to homeschooling families.",
      impact: "📚 20+ active beta testers"
    }
  ];
    return (
       <section className="py-16 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-[#155DFC]">🚀 Success Spotlight</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto ">
          See how raw concepts posted by our community evolved into validated, growing projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map(story => (
            <div key={story.id} className="card bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-700 hover:scale-105 transition-transform duration-300 text-left">
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="card-title text-xl font-bold text-[#155DFC]">{story.title}</h3>
                  <span className={`inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide ${story.badgeColor}`}>{story.tag}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{story.description}</p>
                <div className="divider my-1"></div>
                <p className="text-xs font-semibold text-[#155DFC]">{story.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default SuccessSpotlight;