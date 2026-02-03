
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 z-10">
          <div className="mb-6 flex items-center space-x-4 opacity-50">
            <div className="h-[1px] w-8 bg-[#c5a059]"></div>
            <span className="text-[9px] uppercase tracking-[0.6em] text-[#c5a059] font-bold">Pratyush Raj Presents</span>
          </div>
          <h1 className="font-serif text-7xl lg:text-9xl leading-[1.05] mb-10 text-[#e2c691]">
            The <br/>Architecture <br/>of <span className="italic font-normal">Sound.</span>
          </h1>
          <p className="text-xl text-[#f4f1de]/70 font-light mb-12 max-w-md leading-relaxed">
            A sanctuary for the creative mind. Designed with the precision of a watchmaker and the soul of an artist to facilitate your deepest creative flow.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
            <button className="bg-[#c5a059] text-[#050507] px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#e2c691] transition-all transform hover:-translate-y-1">
              Reserve Edition
            </button>
            <a href="#" className="text-[#c5a059] flex items-center group text-xs font-bold uppercase tracking-[0.2em]">
              Our Philosophy 
              <svg className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-24 border-l border-[#c5a059]/30 pl-8">
            <p className="font-serif italic text-2xl text-[#c5a059]/80">"The perfect companion for deep focus work."</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#f4f1de]/30 mt-4">— Studio Journal</p>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="relative p-6 border border-[#c5a059]/20 bg-[#1c2541]/10 backdrop-blur-sm group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6G1IV9EMHMCJlsfp8Hl5JNngKbfkVkfbwohjCJDvrfhqE4vQFr4jTwaz8k5ZutqWOGU0ve9hM599Ls7_xsvABdMb4vLBLWkVWoLiksN-H40836-SOfsVxifhmF3mNdehuIsDdU3n3aqkwRxF7Mokh9Jiu5KhsxNI4bEqF1mgcQDl352CC-pq5C0GO4hT4yvJIedwhRq07BujKKICQEX39EwDQ_rXTcf6h34VPxN-JPl8PSdce6C54xsEvXDJ7eDE3KR9EZH3J9Rk" 
              alt="Sonic Headphones" 
              className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-40"></div>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-[#1c2541]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
