import React from 'react';

const CoFounderRadar = () => {
    const openings = [
    {
      id: 1,
      project: "FinSight Analytics",
      lookingFor: "Lead Backend Developer",
      skills: ["Node.js", "MongoDB", "Data Security"],
      equity: "15% - 25% Equity Offered"
    },
    {
      id: 2,
      project: "AgroDrone Systems",
      lookingFor: "UI/UX Product Designer",
      skills: ["Figma", "Mobile Wireframing", "Dashboard Design"],
      equity: "Co-Founder Status"
    },
    {
      id: 3,
      project: "FitForm Computer Vision",
      lookingFor: "Growth Marketer / B2B Sales",
      skills: ["SEO Strategy", "SaaS Marketing", "Cold Outreach"],
      equity: "Competitive Equity + Commission"
    }
  ];
    return (
        <section className="py-16 transition-colors duration-300 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">🤝 Co-Founder Collaboration Radar</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-10 max-w-xl mx-auto">
          Great ideas need great execution. Connect with innovators who are actively assembling dream teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openings.map(item => (
            <div key={item.id} className="card bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl border border-slate-200 dark:border-slate-700 text-left p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-cyan-300 mb-1">{item.project}</h3>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Seeking: <span className="text-sky-600 dark:text-cyan-300">{item.lookingFor}</span></h4>
              
              <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {item.skills.map((skill, index) => (
                  <span key={index} className="badge badge-outline text-xs px-2 py-2 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-600">{skill}</span>
                ))}
              </div>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">{item.equity}</span>
                <button className="btn btn-sm normal-case bg-[#155DFC] text-white border-none hover:bg-[#1347d1]">Collaborate</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default CoFounderRadar;