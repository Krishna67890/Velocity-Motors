import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Cpu,
  Zap,
  Wind,
  Globe,
  ShieldCheck,
  Layers,
  Infinity,
  ChevronRight,
  Lightbulb,
  MousePointer2,
  Gamepad2,
  Eye,
  Rocket
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Innovation = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-init", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out"
      });

      const panels = gsap.utils.toArray(".horizontal-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + horizontalRef.current.offsetWidth
        }
      });

      gsap.from(".lab-activity", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".lab-grid",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const labActivities = [
    { title: "Hyper-EV Test Drive", type: "FREE", icon: <Rocket className="text-primary" />, desc: "Experience 0-100 in 1.8s first-hand on our private circuit." },
    { title: "Neural VR Sim", type: "FREE", icon: <Eye className="text-primary" />, desc: "Visualizing the flow of energy in a 360° virtual environment." },
    { title: "Battery Lab Tour", type: "PAID", icon: <Layers className="text-accent" />, desc: "Deep dive into the chemical engineering of V-Core 3.0 cells." },
    { title: "Aerodynamics Workshop", type: "PAID", icon: <Wind className="text-accent" />, desc: "Learn how we manipulate air at 300km/h with our engineers." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white selection:bg-primary overflow-x-hidden">

      {/* SECTION 1: HERO */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#007AFF08_0%,_transparent_70%)]"></div>
        <div className="relative z-20 max-w-6xl">
          <span className="reveal-init inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-primary italic">
            Velocity Innovation Labs
          </span>
          <h1 className="reveal-init outfit text-[12vw] md:text-[9vw] font-black italic tracking-tighter leading-[0.85] uppercase mb-10">
            THE <span className="gradient-text">LABS</span>
          </h1>
          <p className="reveal-init text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Testing the limits of possibility. From free test drives to elite engineering workshops."
          </p>
        </div>
      </section>

      {/* SECTION 2: LAB ACTIVITIES (FREE & PAID) */}
      <section className="py-32 px-6 md:px-20 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="outfit text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Lab Activities</h2>
            <p className="text-gray-500 italic uppercase tracking-widest text-[10px] font-bold">Public & Member Access Programs</p>
          </div>

          <div className="lab-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {labActivities.map((lab, i) => (
              <div key={i} className="lab-activity p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:border-primary transition-all relative overflow-hidden group">
                <div className="absolute top-6 right-8">
                   <span className={`text-[9px] font-black px-3 py-1 rounded-full border ${lab.type === 'FREE' ? 'border-primary text-primary bg-primary/5' : 'border-accent text-accent bg-accent/5'}`}>
                     {lab.type}
                   </span>
                </div>
                <div className="mb-10 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-primary transition-all duration-500">
                   <div className="group-hover:text-white transition-colors">{lab.icon}</div>
                </div>
                <h3 className="outfit text-2xl font-black italic uppercase mb-4 tracking-tighter leading-tight">{lab.title}</h3>
                <p className="text-gray-500 text-sm italic leading-relaxed mb-10">"{lab.desc}"</p>
                <button onClick={() => navigate('/book')} className="flex items-center gap-3 text-primary font-bold text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                   Book Slot <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: HORIZONTAL MILESTONE SCROLL */}
      <section ref={horizontalRef} className="bg-black overflow-hidden h-screen flex items-center">
        <div className="flex h-full w-[300vw]">
          <div className="horizontal-panel w-screen h-full flex items-center justify-center px-6 md:px-20 border-r border-white/5 relative bg-[#020202]">
            <span className="absolute top-20 left-20 text-[20vw] font-black italic text-white/5 select-none pointer-events-none">2024</span>
            <div className="max-w-4xl relative z-10">
              <h3 className="outfit text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8 text-primary italic">V-CORE HUB</h3>
              <p className="text-gray-400 text-2xl italic leading-relaxed">Opening the foundation of our solid-state power research in the heart of Nashik.</p>
            </div>
          </div>
          <div className="horizontal-panel w-screen h-full flex items-center justify-center px-6 md:px-20 border-r border-white/5 relative bg-[#050505]">
            <span className="absolute top-20 left-20 text-[20vw] font-black italic text-white/5 select-none pointer-events-none">2025</span>
            <div className="max-w-4xl relative z-10">
              <h3 className="outfit text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8 text-secondary italic">NEURAL LINK</h3>
              <p className="text-gray-400 text-2xl italic leading-relaxed">The first fleet capable of L4 autonomous synchronization across urban meshes.</p>
            </div>
          </div>
          <div className="horizontal-panel w-screen h-full flex items-center justify-center px-6 md:px-20 border-r border-white/5 relative bg-black">
            <span className="absolute top-20 left-20 text-[20vw] font-black italic text-white/5 select-none pointer-events-none">2026</span>
            <div className="max-w-4xl relative z-10">
              <h3 className="outfit text-5xl md:text-8xl font-black italic uppercase leading-none tracking-tighter mb-8 text-accent italic">ZERO CARBON</h3>
              <p className="text-gray-400 text-2xl italic leading-relaxed">Opening the world's first fully solar-powered hyper-factory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CTAs */}
      <section className="py-40 bg-[#050505] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <Gamepad2 className="mx-auto mb-10 text-primary animate-pulse" size={64} />
          <h2 className="outfit text-5xl md:text-[10vw] font-black italic uppercase tracking-tighter leading-none mb-12 text-white">
            PLAY THE <span className="gradient-text text-primary">FUTURE</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button onClick={() => navigate('/parents')} className="btn-primary px-16 py-6 text-xl shadow-[0_20px_50px_rgba(0,122,255,0.3)] text-white">FREE TEST DRIVE</button>
            <button onClick={() => navigate('/labs')} className="px-16 py-6 border-2 border-white/20 hover:border-white rounded-full font-black text-xs tracking-widest transition-all uppercase italic text-white">Visit Labs</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Innovation;
