
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ConciergeProps {
  onClose: () => void;
}

const Concierge: React.FC<ConciergeProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Welcome to the Sonic Atelier. I am your personal concierge. I am here to detail the meticulous architecture of our sound instruments. How may I assist your creative journey today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
        })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: `You are the Sonic Concierge, an elite audio specialist for 'Sonic Audio Atelier'. 
          Your tone is sophisticated, intellectual, and poetic. 
          
          CORE MISSION: Emphasize the extraordinary features of the Sonic headphones:
          1. Artisanal Audio: Hand-tuned by master acousticians for a warm, non-fatiguing natural soundstage.
          2. Timeless Build: Constructed from solid brass and aircraft-grade aluminum, designed to last generations.
          3. Creative Flow: Advanced neural focus modes to filter distractions and sustain deep work.
          4. Engineering Specs: 40-hour endurance, Lossless Pure Fidelity, Q1+ Neural Core, and state-of-the-art Active Isolation.
          
          Always frame the product as an 'instrument' or 'architecture' rather than just 'headphones'. 
          Keep responses concise but luxurious. Mention that every detail is curated for the creative mind.`,
          temperature: 0.6,
        },
      });

      const text = response.text || "I apologize, but our neural link is experiencing interference. How else may I serve you?";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Frequency interference detected. Our engineers are refining the signal. Please inquire again shortly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-10 w-[400px] h-[600px] bg-[#050507] border border-[#c5a059]/30 shadow-2xl z-[60] flex flex-col font-sans">
      <div className="p-6 border-b border-[#c5a059]/10 flex justify-between items-center bg-[#1c2541]/20">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-[#c5a059] rounded-full animate-pulse shadow-[0_0_8px_rgba(197,160,89,0.8)]"></div>
          <div>
            <h3 className="font-serif italic text-xl text-[#e2c691]">Sonic Concierge</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#f4f1de]/40">Intelligence by Gemini Pro</p>
          </div>
        </div>
        <button onClick={onClose} className="text-[#c5a059]/60 hover:text-[#c5a059] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#050507]/50 scroll-smooth">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 text-sm leading-relaxed tracking-wide ${
              m.role === 'user' 
                ? 'bg-[#c5a059]/10 text-[#f4f1de] border border-[#c5a059]/20' 
                : 'bg-[#1c2541]/10 text-[#f4f1de]/90 border border-white/5'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#1c2541]/10 p-4 border border-white/5 flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] animate-pulse">Syncing frequencies...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-[#c5a059]/10 bg-[#050507]">
        <div className="relative group">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="INQUIRE ABOUT THE ARCHITECTURE..." 
            className="w-full bg-transparent border-b border-[#c5a059]/20 pb-3 text-[10px] tracking-[0.2em] focus:outline-none focus:border-[#c5a059] transition-colors placeholder:text-[#f4f1de]/10 uppercase text-[#f4f1de]"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-0 bottom-3 text-[#c5a059] hover:translate-x-1 transition-transform disabled:opacity-30 disabled:translate-x-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-[7px] uppercase tracking-[0.4em] text-[#f4f1de]/10">Concierge v2.0</p>
          <p className="text-[7px] uppercase tracking-[0.4em] text-[#f4f1de]/10">By Pratyush Raj</p>
        </div>
      </div>
    </div>
  );
};

export default Concierge;
