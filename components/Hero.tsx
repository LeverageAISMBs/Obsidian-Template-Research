import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
    <div className="text-2xl font-bold text-indigo-600">{value}</div>
    <div className="text-xs text-stone-500 uppercase tracking-wide">{label}</div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <header className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
          Research Report • January 2026
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight serif">
          The Architecture of Thought
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed font-serif">
          An extensive analysis of the most popular Obsidian templates, highlighting the shift from static file management to AI-augmented "Cognitive Operating Systems."
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
          <StatCard value="4.2M+" label="Active Users" />
          <StatCard value="85%" label="Use AI Plugins" />
          <StatCard value="12k" label="Community Themes" />
          <StatCard value="Top 3" label="Systems Dominate" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
