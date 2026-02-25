import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bike, Car, Wrench, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const StarterPage = ({ onEnter }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".s-line", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out"
    })
    .from(".s-card", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .from(".s-btn", {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.2");
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#020202] text-white flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-[radial-gradient(circle_at_center,_#007AFF15_0%,_transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl w-full relative z-10">
        <header className="text-center mb-16 md:mb-24">
          <div className="overflow-hidden mb-6">
            <span className="s-line inline-block text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs">
              The Evolution of Mobility
            </span>
          </div>
          <h1 className="s-line outfit text-[14vw] md:text-[8vw] font-black italic tracking-tighter leading-none uppercase mb-8">
            VELOCITY <span className="gradient-text">MOTORS</span>
          </h1>
          <p className="s-line text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Bridging the gap between cutting-edge electric performance and world-class automotive care."
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20 md:mb-32">
          {/* Service 1: Cars */}
          <div className="s-card glass p-10 rounded-[4rem] hover-card group cursor-pointer" onClick={() => onEnter('/cars')}>
            <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500">
              <Car className="text-primary group-hover:text-white" size={32} />
            </div>
            <h3 className="outfit text-3xl font-black italic mb-4 uppercase tracking-tighter">ELECTRIC CARS</h3>
            <p className="text-gray-500 text-sm leading-relaxed italic group-hover:text-gray-300 transition-colors">High-voltage luxury EVs engineered for the long haul.</p>
            <div className="mt-6 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
               Explore Fleet <ArrowRight size={14} />
            </div>
          </div>

          {/* Service 2: Bikes & Scooters (Split logic) */}
          <div className="s-card glass p-10 rounded-[4rem] border-secondary/20 hover:border-secondary/50 transition-all group overflow-hidden relative">
            <div className="w-16 h-16 bg-secondary/10 rounded-3xl flex items-center justify-center mb-8">
              <Bike className="text-secondary" size={32} />
            </div>
            <h3 className="outfit text-3xl font-black italic mb-4 uppercase tracking-tighter">TWO WHEELERS</h3>
            <div className="flex flex-col gap-4">
               <button
                 onClick={() => onEnter('/bikes')}
                 className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-secondary hover:text-white transition-all group/btn"
               >
                  <span className="font-bold uppercase tracking-widest text-xs italic">Electric Bikes</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
               </button>
               <button
                 onClick={() => onEnter('/scooters')}
                 className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-secondary hover:text-white transition-all group/btn"
               >
                  <span className="font-bold uppercase tracking-widest text-xs italic">Electric Scooters</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Service 3: Repairing & Care */}
          <div className="s-card glass p-10 rounded-[4rem] border-accent/20 hover:border-accent/50 transition-all group cursor-pointer" onClick={() => onEnter('/garage')}>
            <div className="w-16 h-16 bg-accent/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500">
              <Wrench size={32} className="text-accent group-hover:text-white" />
            </div>
            <div className="flex justify-between items-start mb-4">
               <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter">VEHICLE CARE</h3>
               <span className="text-[10px] bg-accent/20 text-accent px-3 py-1 rounded-full font-bold">24/7</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-4">Expert repairs and care led by <span className="text-white font-bold">Jayesh Gangurde</span>.</p>
            <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
               Book Service <ArrowRight size={14} />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onEnter('/')}
            className="s-btn btn-primary group px-16 py-8 text-2xl tracking-tighter italic shadow-[0_20px_50px_rgba(0,122,255,0.3)]"
          >
            <span>SECURE YOUR MODEL</span>
            <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500" size={28} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-6 opacity-30">
        <div className="flex items-center gap-8">
           <Zap size={24} className="text-primary" />
           <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
           <ShieldCheck size={24} className="text-accent" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.6em] font-medium">Est. 2024 • Excellence in Motion</p>
      </div>
    </div>
  );
};

export default StarterPage;
