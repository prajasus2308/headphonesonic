
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#050507]/80 border-b border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-6 h-6 border-2 border-[#c5a059] rounded-full flex items-center justify-center p-1 group-hover:rotate-180 transition-transform duration-700">
             <div className="w-full h-full bg-[#c5a059] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif italic text-2xl tracking-tighter text-[#f4f1de] leading-none">Sonic</span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-[#c5a059] mt-1 opacity-70">By Pratyush Raj</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-12 text-[10px] font-bold tracking-[0.3em] uppercase text-[#f4f1de]/60">
          <a href="#" className="hover:text-[#c5a059] transition-colors">Atelier</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">Engineering</a>
          <a href="#" className="hover:text-[#c5a059] transition-colors">The Flow</a>
        </div>

        <button className="bg-[#c5a059] text-[#050507] px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#e2c691] transition-colors">
          Acquire
        </button>
      </div>
    </nav>
  );
};

export default Header;
