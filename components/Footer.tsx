
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 px-8 bg-[#030305] border-t border-[#c5a059]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-8 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 border-2 border-[#c5a059] rounded-full flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#c5a059] rounded-full"></div>
              </div>
              <span className="font-serif italic text-2xl tracking-tighter text-[#f4f1de]">Sonic</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#f4f1de]/20 max-w-[200px] leading-loose">
              Defined by Craft. Engineered for the Creative Mind.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Inspiration</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">The Archive</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">Artist Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Support</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">Craftsmanship</a></li>
                <li><a href="#" className="text-[10px] uppercase tracking-[0.2em] text-[#f4f1de]/40 hover:text-[#c5a059] transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Journal</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-[#c5a059]/20 pb-2 text-[10px] tracking-[0.3em] focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-[#f4f1de]/20"
                />
                <button className="absolute right-0 bottom-2 text-[#c5a059] hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center pt-12 border-t border-[#c5a059]/5 gap-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-[#f4f1de]/10">
            © 2024 Sonic Audio Atelier. Crafted with passion by Pratyush Raj.
          </p>
          <div className="flex space-x-12">
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-[#f4f1de]/20 hover:text-[#c5a059] transition-colors">Privacy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.3em] text-[#f4f1de]/20 hover:text-[#c5a059] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
