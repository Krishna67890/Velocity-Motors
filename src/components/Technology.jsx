import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Parallax background text
    gsap.to(".scrolling-text", {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Reveal animation for stats
    gsap.from(".stat-item", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="scrolling-text absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[25vw] font-black text-white/5 pointer-events-none select-none italic uppercase">
        Next Generation Mobility &bull; Next Generation Mobility &bull;
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-[0.5em] text-primary uppercase mb-6">Internal Systems</h2>
            <h3 className="text-5xl md:text-8xl font-black italic mb-10 leading-[0.9]">
              THE HEART OF <br /> <span className="gradient-text">INTELLIGENCE</span>
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed max-w-xl">
              Our V-Core 3.0 processing unit manages over 4,000 data points per second,
              ensuring peak battery efficiency and thermal regulation in real-time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="stat-item glass-card p-10 rounded-[2rem] border-white/5">
              <p className="text-6xl font-black gradient-text">98%</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-bold">Efficiency Rating</p>
            </div>
            <div className="stat-item glass-card p-10 rounded-[2rem] border-white/5 mt-10">
              <p className="text-6xl font-black gradient-text">0.19</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-bold">Drag Coefficient</p>
            </div>
            <div className="stat-item glass-card p-10 rounded-[2rem] border-white/5">
              <p className="text-6xl font-black gradient-text">10s</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-bold">OTA Updates</p>
            </div>
            <div className="stat-item glass-card p-10 rounded-[2rem] border-white/5 mt-10">
              <p className="text-6xl font-black gradient-text">L4</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2 font-bold">Autonomous Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
