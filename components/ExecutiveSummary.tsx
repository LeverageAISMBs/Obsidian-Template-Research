import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Legend 
} from 'recharts';
import { marketShareData, trendData } from '../data';

const ExecutiveSummary: React.FC = () => {
  return (
    <section id="executive-summary" className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 serif">The 2026 Landscape</h2>
          <p className="text-stone-600 max-w-3xl text-lg">
            Our research indicates a fracture in the community between "Purists" (Markdown only) and "Integrators" (those using Obsidian as a GUI for local LLMs and databases). The following data represents template download velocity and user retention rates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Market Share Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-semibold text-stone-900 mb-2 serif">Template Category Dominance</h3>
            <p className="text-sm text-stone-500 mb-6">Percentage of active vault installations by primary template methodology.</p>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
                    itemStyle={{ color: '#44403c' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trend Line Chart */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-semibold text-stone-900 mb-2 serif">The Rise of "Neural" Systems</h3>
            <p className="text-sm text-stone-500 mb-6">Adoption rates (in thousands) of top 3 competing philosophies over the last 3 years.</p>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 12 }} 
                  />
                  <Tooltip 
                     contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e7e5e4' }}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="plain" />
                  <Line type="monotone" dataKey="neural" name="Neural/AI" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="para" name="Static PARA" stroke="#a8a29e" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="zettel" name="Zettelkasten" stroke="#d6d3d1" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
