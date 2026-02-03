
import React from 'react';

const Mastery: React.FC = () => {
  return (
    <section className="py-40 px-8 bg-[#08080a]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative group">
          <div className="aspect-square overflow-hidden border-[16px] border-[#1c2541]/30">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV1RO45bmKXBauLEHaGFCFUMOqeaOVpd6IZsPz2L9BXGXeqXsS5s7w4se2Q-BXDQHzQsAPR-vODzvflRd47D8_9Czc2TJtj7O_uGc7jQhAXEyf-Z7RjwzJVeRCifodrmkznejSu_4gZj9y-mUgcfBDOBk4-rwvMsOESftC834iNWz_h0DlOqqC5r5ejseICJX-aTPPGNvNP6F-XDLK0T39X2LeBmmNp_OK6rXqAOlO4CPMDklEQ2kmS2o-agQ2fKNXFPLD9UkZzkE" 
              alt="Engineering mastery" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-12">
          <h2 className="font-serif text-6xl text-[#e2c691] leading-tight">Mastery in <br/>Every Detail.</h2>
          <p className="text-lg text-[#f4f1de]/60 leading-relaxed font-light">
            Inspired by mid-century industrial design, the Sonic framework balances weightless comfort with timeless durability. We use sustainably sourced brass accents and hand-stitched leathers that patina beautifully over time.
          </p>
          
          <div className="grid grid-cols-2 gap-y-16 pt-8">
            <div className="space-y-3">
              <span className="block text-4xl font-serif text-[#c5a059]">40h</span>
              <div className="w-full h-[1px] bg-[#c5a059]/20"></div>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40">Endurance</span>
            </div>
            <div className="space-y-3">
              <span className="block text-4xl font-serif text-[#c5a059]">Lossless</span>
              <div className="w-full h-[1px] bg-[#c5a059]/20"></div>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40">Pure Fidelity</span>
            </div>
            <div className="space-y-3">
              <span className="block text-4xl font-serif text-[#c5a059]">Q1+</span>
              <div className="w-full h-[1px] bg-[#c5a059]/20"></div>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40">Neural Core</span>
            </div>
            <div className="space-y-3">
              <span className="block text-4xl font-serif text-[#c5a059]">Silence</span>
              <div className="w-full h-[1px] bg-[#c5a059]/20"></div>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/40">Active Isolation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mastery;
