import React, { useState, useEffect } from 'react';
import { templates } from '../data';
import { Category, Template } from '../types';
import TemplateDetail from './TemplateDetail';

interface TemplateExplorerProps {
  initialSelectionId?: number;
}

const TemplateExplorer: React.FC<TemplateExplorerProps> = ({ initialSelectionId }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);

  // Handle external selection suggestions (e.g. from Persona Finder)
  useEffect(() => {
    if (initialSelectionId) {
      const found = templates.find(t => t.id === initialSelectionId);
      if (found) setSelectedTemplate(found);
    }
  }, [initialSelectionId]);

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === activeCategory);

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'All Systems' },
    { id: 'neural', label: 'AI & Neural' },
    { id: 'productivity', label: 'Productivity (PARA)' },
    { id: 'academic', label: 'Academic/Research' },
    { id: 'creative', label: 'Creative Studio' },
  ];

  return (
    <section id="template-explorer" className="py-16 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-stone-900 mb-4 serif">Interactive Template Explorer</h2>
          <p className="text-stone-600 max-w-3xl">
            Select a methodology below to view the detailed structural analysis, plugin requirements, and capability scoring of the top templates used in 2026.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-stone-200 pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`pb-3 px-2 text-sm md:text-base transition-colors ${
                activeCategory === cat.id
                  ? 'border-b-2 border-indigo-600 text-indigo-900 font-semibold'
                  : 'text-stone-600 hover:text-indigo-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* List Side */}
          <div className="lg:col-span-1 space-y-4 max-h-[800px] overflow-y-auto pr-2">
            {filteredTemplates.map((t) => (
              <div
                key={t.id}
                onClick={() => setSelectedTemplate(t)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                  selectedTemplate.id === t.id
                    ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200'
                    : 'bg-white border-stone-200 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`font-bold transition-colors ${
                    selectedTemplate.id === t.id ? 'text-indigo-800' : 'text-stone-900 group-hover:text-indigo-600'
                  }`}>
                    {t.name}
                  </h4>
                  <span className="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-1 rounded">
                    {t.structure}
                  </span>
                </div>
                <p className="text-sm text-stone-500 line-clamp-2">{t.tagline}</p>
              </div>
            ))}
          </div>

          {/* Detail Side */}
          <div className="lg:col-span-2">
            <TemplateDetail template={selectedTemplate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateExplorer;
