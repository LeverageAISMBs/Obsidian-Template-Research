import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import TemplateExplorer from './components/TemplateExplorer';
import PersonaFinder from './components/PersonaFinder';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [recommendedTemplateId, setRecommendedTemplateId] = useState<number | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRecommendationClick = (id: number) => {
    setRecommendedTemplateId(id);
    scrollToSection('template-explorer');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onScrollTo={scrollToSection} />
      <main>
        <Hero />
        <ExecutiveSummary />
        <TemplateExplorer initialSelectionId={recommendedTemplateId} />
        <PersonaFinder onRecommendationClick={handleRecommendationClick} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
