import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cpu, Zap, Radio, Shield, Globe, Wind, ZapOff, Workflow } from 'lucide-react';

const Innovation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".inn-reveal", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });

    gsap.to(".rotating-gear", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });
  }, []);

  const techs = [
    { icon: <Cpu />, title: "Neural Processing", desc: "Our V-Core 4.0 chip processes millions of data points per second for unmatched efficiency." },
    { icon: <Workflow />, title: "Smart Mesh", desc: "A connected ecosystem where your car, home, and city communicate seamlessly." },
    { icon: <Wind />, title: "Aero-Dynamics", desc: "Active air management systems that reduce drag by 25% at high speeds." },
    { icon: <Zap />, title: "Quantum Charging", desc: "Experimental charging tech targeting 0 to 100% in under 10 minutes." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-32 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          <span className="inn-reveal text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Lab of the Future</span>
          <h1 className="inn-reveal outfit text-6xl md:text-[10vw] font-black italic tracking-tighter leading-none uppercase mb-8">
            PURE <span className="gradient-text">INNOVATION</span>
          </h1>
          <p className="inn-reveal text-gray-400 text-xl italic max-w-3xl mx-auto leading-relaxed">
            "We are not just making vehicles; we are re-inventing how humanity moves through the world."
          </p>
        </header>

        {/* Hero Innovation Feature */}
        <section className="inn-reveal mb-40 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[4rem] -z-10 group-hover:scale-[1.02] transition-transform duration-1000"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-12 md:p-24 border border-white/5 rounded-[4rem] glass">
            <div>
              <h2 className="outfit text-4xl md:text-6xl font-black italic uppercase mb-8 leading-tight">THE <br/> V-CORE <span className="text-primary">3.0</span></h2>
              <p className="text-gray-400 text-lg italic leading-relaxed mb-10">
                The heart of every Velocity machine. A solid-state battery architecture that provides 3x the energy density of traditional lithium-ion packs.
              </p>
              <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-black">98%</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Efficiency</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-4xl font-black">1.2M</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">KM Lifecycle</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
               <div className="w-full aspect-square bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center p-10 overflow-hidden">
                  <div className="rotating-gear absolute inset-0 opacity-5 border-[20px] border-dashed border-white rounded-full"></div>
                  <Zap size={120} className="text-primary animate-bounce shadow-[0_0_50px_rgba(0,122,255,0.5)]" />
               </div>
            </div>
          </div>
        </section>

        {/* Future Tech Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {techs.map((t, i) => (
            <div key={i} className="inn-reveal p-10 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-primary/30 transition-all group">
              <div className="mb-8 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary transition-all">
                <div className="text-primary group-hover:text-white transition-colors">{t.icon}</div>
              </div>
              <h3 className="outfit text-2xl font-black italic mb-4 uppercase tracking-tighter">{t.title}</h3>
              <p className="text-gray-500 text-sm italic leading-relaxed">"{t.desc}"</p>
            </div>
          ))}
        </section>

        {/* Global Impact */}
        <section className="inn-reveal text-center py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-[4rem] border-y border-white/5">
           <Globe className="text-primary mx-auto mb-8 animate-spin-slow" size={64} />
           <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-8">CLEANER <br/> <span className="gradient-text">PLANET</span></h2>
           <p className="text-gray-400 text-xl italic max-w-2xl mx-auto mb-16">
             Velocity Motors is on track to reduce India's carbon footprint by 1 million tons of CO2 by 2026.
           </p>
           <button className="btn-primary px-16">VIEW SUSTAINABILITY REPORT</button>
        </section>
      </div>
    </div>
  );
};

export default Innovation;
