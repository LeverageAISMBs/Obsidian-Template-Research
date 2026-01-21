import React from 'react';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold text-indigo-900 tracking-tight">
              Obsidian<span className="text-indigo-600 font-light">2026</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => onScrollTo('executive-summary')} className="text-stone-500 hover:text-indigo-600 transition-colors">Trends</button>
            <button onClick={() => onScrollTo('template-explorer')} className="text-stone-500 hover:text-indigo-600 transition-colors">Explorer</button>
            <button onClick={() => onScrollTo('persona-finder')} className="text-stone-500 hover:text-indigo-600 transition-colors">Finder</button>
          </div>
          <button 
            onClick={() => onScrollTo('persona-finder')} 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Find My Stack
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
