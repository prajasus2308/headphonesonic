
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-60 px-8 relative overflow-hidden bg-[#050507]">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <span className="font-serif text-[40rem] italic text-[#c5a059]">S</span>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="font-serif text-8xl md:text-[10rem] leading-[0.9] text-[#e2c691] mb-12">
          Elevate your <br/><span className="italic">Process.</span>
        </h2>
        <p className="text-[#f4f1de]/60 text-xl md:text-2xl font-light mb-20 max-w-xl mx-auto leading-relaxed">
          The ultimate instrument for those who demand silence to hear their own ideas.
        </p>
        
        <div className="flex flex-col items-center space-y-10">
          <button className="bg-[#c5a059] text-[#050507] px-20 py-6 text-sm font-bold uppercase tracking-[0.4em] hover:scale-105 transition-transform duration-500 shadow-2xl">
            Acquire — $449
          </button>
          
          <div className="flex items-center space-x-10">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">Private Consultation</a>
            <div className="w-1.5 h-1.5 bg-[#c5a059]/30 rounded-full"></div>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">Atelier Locations</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
