import React, { useMemo } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { Template } from '../types';

interface TemplateDetailProps {
  template: Template;
}

const TemplateDetail: React.FC<TemplateDetailProps> = ({ template }) => {
  // Transform stats object to array for Recharts Radar
  const radarData = useMemo(() => [
    { subject: 'Automation', A: template.stats.automation, fullMark: 100 },
    { subject: 'Ease of Use', A: template.stats.ease, fullMark: 100 },
    { subject: 'Aesthetics', A: template.stats.aesthetics, fullMark: 100 },
    { subject: 'Mobile', A: template.stats.mobile, fullMark: 100 },
    { subject: 'Cost', A: template.stats.cost, fullMark: 100 },
  ], [template]);

  return (
    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 md:p-8 h-full sticky top-24 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-1 block">
            {template.category} System
          </span>
          <h3 className="text-3xl font-serif font-bold text-stone-900">{template.name}</h3>
          <p className="text-stone-500 text-sm mt-1">By {template.author}</p>
        </div>
        <div className="text-left md:text-right">
          <div className="text-2xl font-bold text-stone-900">{template.stats.ease}/100</div>
          <div className="text-xs text-stone-400 uppercase">Ease Score</div>
        </div>
      </div>

      <div className="mb-8 prose prose-stone max-w-none">
        <p className="text-lg leading-relaxed text-stone-700">{template.desc}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3 border-b border-stone-200 pb-2">Capability Matrix</h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#e7e5e4" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#78716c', fontSize: 10 }} />
                <Radar
                  name="System Capability"
                  dataKey="A"
                  stroke="#4f46e5"
                  fill="#4f46e5"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3 border-b border-stone-200 pb-2">
            Tech Stack (Required Plugins)
          </h4>
          <div className="flex flex-wrap mb-6 gap-2">
            {template.plugins.map((p, i) => (
              <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                {p}
              </span>
            ))}
          </div>
          
          <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3 border-b border-stone-200 pb-2">Target User</h4>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-serif font-bold text-lg shrink-0">
              {template.users.charAt(0)}
            </div>
            <span className="text-stone-700 font-medium">{template.users}</span>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100 flex justify-between items-center">
        <div>
          <div className="text-sm font-bold text-indigo-900">Download Configuration</div>
          <div className="text-xs text-indigo-600">v4.2.0 • Updated Jan 15, 2026</div>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          View Source
        </button>
      </div>
    </div>
  );
};

export default TemplateDetail;
