import React from "react";

const RequirementSkeleton: React.FC = () => {
  return (
    <section className="mt-10 pb-12 animate-pulse">
      {/* Heading skeleton */}
      <div className="h-8 w-1/4 bg-slate-300 rounded"></div>
      
      {/* Points skeleton (default state) */}
      <ul className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
        {[...Array(4)].map((_, idx) => (
          <li className="flex items-start gap-2" key={idx}>
            <div className="w-4 h-4 mt-[6px] bg-slate-300 rounded-full"></div>
            <div className="h-4 bg-slate-300 rounded w-3/4"></div>
          </li>
        ))}
      </ul>

      {/* Paragraph skeleton (hidden by default) */}
      <div className="hidden mt-5 space-y-2">
        <div className="h-4 bg-slate-300 rounded w-full"></div>
        <div className="h-4 bg-slate-300 rounded w-5/6"></div>
        <div className="h-4 bg-slate-300 rounded w-4/6"></div>
      </div>

      {/* FAQ skeleton (hidden by default) */}
      <div className="hidden mt-5 space-y-4">
        {[...Array(2)].map((_, idx) => (
          <div key={idx}>
            <div className="h-6 bg-slate-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-300 rounded w-full"></div>
            <div className="h-4 bg-slate-300 rounded w-5/6 mt-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RequirementSkeleton;