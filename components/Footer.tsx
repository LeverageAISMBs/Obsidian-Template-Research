import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-stone-500 mb-4 font-serif italic">
          "The tool defines the thought process, but the user defines the insight."
        </p>
        <div className="text-xs text-stone-400">
          &copy; 2026 Obsidian Research Group. Generated for Analysis Purposes. <br />
          All data simulated based on community plugin statistics and forum sentiment analysis.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
