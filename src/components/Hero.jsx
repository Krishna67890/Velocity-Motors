import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Zap, ShieldCheck, Gauge } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".blob", { opacity: 0.2, scale: 1.2, duration: 2, repeat: -1, yoyo: true })
      .from(".hero-line span", {
        y: "110%",
        stagger: 0.1,
        duration: 1.2,
        ease: "power4.out"
      }, 0.5)
      .from(".hero-desc", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-cta", {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.3")
      .from(".hero-stat", {
        opacity: 0,
        x: -20,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5");
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="blob fixed top-[-10%] left-[-10%]"></div>
      <div className="blob fixed bottom-[-10%] right-[-10%] bg-accent opacity-[0.05]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          <div className="flex-1 text-center lg:text-left">
            <div className="overflow-hidden mb-4">
              <span className="hero-stat inline-block text-primary font-black tracking-[0.4em] uppercase text-xs">
                Next-Gen EV Architecture • Nashik, India
              </span>
            </div>

            <h1 className="outfit text-[12vw] lg:text-[10vw] font-black italic tracking-tighter leading-[0.85] uppercase mb-10">
              <div className="hero-line overflow-hidden">
                <span className="inline-block">VELOCITY</span>
              </div>
              <div className="hero-line overflow-hidden">
                <span className="gradient-text inline-block">MOTORS</span>
              </div>
            </h1>

            <p className="hero-desc text-gray-400 text-lg lg:text-2xl font-light max-w-2xl mb-12 italic leading-relaxed">
              "Redefining the boundaries of electric performance with the world's most advanced mobility ecosystem. Engineered for the elite."
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <button
                onClick={() => navigate('/cars')}
                className="btn-primary group"
              >
                <span>EXPLORE THE REVOLUTION</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <div className="flex items-center gap-8">
                <div className="hero-stat group cursor-pointer">
                  <p className="text-3xl font-black outfit italic group-hover:text-primary transition-colors">2.1s</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">0-100 KM/H</p>
                </div>
                <div className="w-[1px] h-10 bg-white/10"></div>
                <div className="hero-stat group cursor-pointer">
                  <p className="text-3xl font-black outfit italic group-hover:text-primary transition-colors">800+</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">HP Peak Power</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative hidden lg:block">
            <div className="relative group p-4 bg-white/5 border border-white/10 rounded-[4rem] hover:scale-[1.02] transition-transform duration-1000">
               <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img
                 src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070"
                 alt="Velocity Motors GT"
                 className="w-full aspect-[4/5] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
               />
               <div className="absolute top-10 right-10 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-black/80 backdrop-blur rounded-full flex items-center justify-center border border-white/10"><Zap size={20} className="text-primary" /></div>
                  <div className="w-12 h-12 bg-black/80 backdrop-blur rounded-full flex items-center justify-center border border-white/10"><ShieldCheck size={20} className="text-accent" /></div>
                  <div className="w-12 h-12 bg-black/80 backdrop-blur rounded-full flex items-center justify-center border border-white/10"><Gauge size={20} className="text-white" /></div>
               </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
         <ArrowRight size={24} className="rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
