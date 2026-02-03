
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mastery from './components/Mastery';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Concierge from './components/Concierge';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-[#c5a059] selection:text-[#050507]">
      {/* Corner Branding - Pratyush Raj */}
      <div className="fixed top-4 left-4 z-[100] text-[8px] uppercase tracking-[0.4em] opacity-30 rotate-90 origin-top-left pointer-events-none">
        By Pratyush Raj
      </div>
      <div className="fixed top-4 right-4 z-[100] text-[8px] uppercase tracking-[0.4em] opacity-30 -rotate-90 origin-top-right pointer-events-none">
        By Pratyush Raj
      </div>
      <div className="fixed bottom-4 left-4 z-[100] text-[8px] uppercase tracking-[0.4em] opacity-30 rotate-90 origin-bottom-left pointer-events-none">
        By Pratyush Raj
      </div>
      <div className="fixed bottom-4 right-4 z-[100] text-[8px] uppercase tracking-[0.4em] opacity-30 -rotate-90 origin-bottom-right pointer-events-none">
        By Pratyush Raj
      </div>

      <Header />
      
      <main>
        <Hero />
        <Mastery />
        <Features />
        <CTA />
      </main>

      <Footer />

      {/* Concierge Button */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-10 right-10 z-50 bg-[#c5a059] text-[#050507] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <span className="absolute right-full mr-4 bg-[#1c2541] text-[#f4f1de] px-3 py-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Sonic Concierge
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>

      {isChatOpen && <Concierge onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default App;
