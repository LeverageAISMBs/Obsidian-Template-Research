import React, { useState } from 'react';
import { templates } from '../data';
import { Template } from '../types';

interface PersonaFinderProps {
  onRecommendationClick: (templateId: number) => void;
}

const PersonaFinder: React.FC<PersonaFinderProps> = ({ onRecommendationClick }) => {
  const [role, setRole] = useState<string>('student');
  const [complexity, setComplexity] = useState<string>('med');
  const [recommendation, setRecommendation] = useState<Template | null>(null);

  const findPersona = () => {
    let matchId = 1; // Default Neural

    // Logic Tree
    if (role === 'student' || role === 'researcher') {
      matchId = 3; // Academic Nexus
    } else if (role === 'creator') {
      matchId = 4; // Creator's Pipeline
    } else if (role === 'manager') {
      matchId = 5; // CorpStrat
    } else {
      // Developer or Default
      if (complexity === 'low') matchId = 2; // Minimal
      else if (complexity === 'high') matchId = 1; // Neural
      else matchId = 6; // Omni
    }

    if (complexity === 'low' && role !== 'manager') matchId = 2; // Override for minimalists

    const match = templates.find(t => t.id === matchId);
    if (match) setRecommendation(match);
  };

  return (
    <section id="persona-finder" className="py-16 bg-indigo-900 text-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6 serif">Find Your Perfect Architecture</h2>
        <p className="text-indigo-200 mb-10 max-w-2xl mx-auto">
          Not sure which 2026 system fits your brain? Answer two simple questions to generate a recommendation from our research database.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700">
            <label className="block text-xs uppercase tracking-wide text-indigo-300 font-bold mb-2">Your Primary Role</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-indigo-950 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="student">Student / Researcher</option>
              <option value="manager">Project Manager / Exec</option>
              <option value="creator">Writer / Creator</option>
              <option value="developer">Developer / Engineer</option>
            </select>
          </div>

          <div className="bg-indigo-800/50 p-6 rounded-xl border border-indigo-700">
            <label className="block text-xs uppercase tracking-wide text-indigo-300 font-bold mb-2">Complexity Tolerance</label>
            <select 
              value={complexity} 
              onChange={(e) => setComplexity(e.target.value)}
              className="w-full bg-indigo-950 border border-indigo-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="low">Minimalist (Just write)</option>
              <option value="med">Balanced (Some automation)</option>
              <option value="high">Power User (Full OS)</option>
            </select>
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={findPersona} 
              className="w-full bg-white text-indigo-900 font-bold py-3.5 rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Analyze Needs
            </button>
          </div>
        </div>

        {recommendation && (
          <div className="bg-white text-stone-800 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto animate-fade-in transition-all">
            <div className="text-indigo-600 font-bold uppercase tracking-wider text-xs mb-2">Recommended System</div>
            <h3 className="text-2xl font-bold mb-2 serif">{recommendation.name}</h3>
            <p className="text-stone-600 mb-6">{recommendation.desc}</p>
            <div className="flex justify-center gap-4">
               <button 
                 onClick={() => onRecommendationClick(recommendation.id)} 
                 className="text-indigo-600 font-medium hover:underline flex items-center gap-1"
               >
                 View Full Details <span>&uarr;</span>
               </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonaFinder;
