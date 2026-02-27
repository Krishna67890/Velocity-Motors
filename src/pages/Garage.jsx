import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wrench, Battery, Cpu, Gauge, Zap, ShieldCheck, Thermometer,
  Settings, PenTool as Tool2, Navigation, ArrowUpRight,
  MousePointer2, Disc, Wind, Lightbulb, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import boyImg from '../../Assets/Boy.jpg';

gsap.registerPlugin(ScrollTrigger);

const parts = [
  { id: 1, name: "V-Core 3.0 Battery", type: "Energy Core", desc: "Next-gen solid-state cells with liquid cooling for extreme durability.", icon: <Battery className="text-primary" size={32} /> },
  { id: 2, name: "Hyper-Flux Motor", type: "Propulsion", desc: "A 950NM beast designed for instant torque and silent performance.", icon: <Zap className="text-accent" size={32} /> },
  { id: 3, name: "Neural Controller", type: "The Brain", desc: "Processes 4,000 data points per second for optimal energy distribution.", icon: <Cpu className="text-secondary" size={32} /> },
  { id: 4, name: "Active Suspension", type: "Dynamics", desc: "Self-adjusting dampers for a smooth glide on any Indian road surface.", icon: <Settings className="text-white" size={32} /> },
  { id: 5, name: "Regen Brake Pads", type: "Safety", desc: "Carbon-ceramic composite for maximum stopping power and energy recovery.", icon: <Disc className="text-emerald-500" size={32} /> },
  { id: 6, name: "Aero Spoilers", type: "Aerodynamics", desc: "Active drag reduction system for high-speed stability.", icon: <Wind className="text-blue-400" size={32} /> },
  { id: 7, name: "Intelli-Lighting", type: "Visibility", desc: "Adaptive LED matrix array for superior night vision.", icon: <Lightbulb className="text-yellow-400" size={32} /> },
  { id: 8, name: "Armor Chassis", type: "Structure", desc: "Reinforced titanium-alloy frame for elite crash protection.", icon: <ShieldCheck className="text-red-500" size={32} /> }
];

const careServices = [
  { title: "Precision Calibration", icon: <Tool2 className="text-primary" />, desc: "Fine-tuning the software algorithms to match your driving style perfectly." },
  { title: "Thermal Armor Check", icon: <Thermometer className="text-red-500" />, desc: "Testing the battery cooling systems under simulated extreme heat conditions." },
  { title: "Zero-Wear Inspection", icon: <ShieldCheck className="text-green-500" />, desc: "Our 200-point safety check ensures your vehicle feels brand new, every time." }
];

const Garage = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".garage-hero h1", { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" });
      gsap.from(".part-card", {
        y: 60, opacity: 0, stagger: 0.1, duration: 0.8,
        scrollTrigger: { trigger: ".parts-section", start: "top 75%" }
      });
      gsap.from(".jayesh-img", {
        scale: 1.1, opacity: 0, duration: 1.5,
        scrollTrigger: { trigger: ".jayesh-section", start: "top 70%" }
      });
    }, containerRef);

    // Simulated 20m notification (shortened for demo)
    const timer = setTimeout(() => {
      setNotification("Heres your complited vehicle! Restored by Jayesh Gangurde.");
    }, 5000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-primary min-h-screen pt-20">

      {/* Notification Toast */}
      {notification && (
        <div className="fixed top-24 right-10 z-[200] bg-primary p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,122,255,0.4)] flex items-center gap-4 animate-bounce-slow max-w-sm text-white">
          <Bell className="text-white fill-white" />
          <p className="text-sm font-black italic uppercase tracking-tight">{notification}</p>
          <button onClick={() => setNotification(null)} className="text-white/50 hover:text-white">✕</button>
        </div>
      )}

      {/* SECTION 1: HERO */}
      <section className="garage-hero relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#007AFF10_0%,_#000_100%)]"></div>
        <div className="relative z-10">
          <span className="outfit text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">The Sanctum of Precision</span>
          <h1 className="outfit text-7xl md:text-[10vw] font-black italic tracking-tighter leading-none uppercase mb-8">
            THE <span className="gradient-text text-primary">GARAGE</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Where electric souls are forged and maintained by the masters of high-voltage engineering."
          </p>
        </div>
      </section>

      {/* SECTION 2: JAYESH SECTION */}
      <section className="jayesh-section py-32 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="jayesh-img aspect-square rounded-[4rem] overflow-hidden border border-white/10 relative group">
              <img src={boyImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Jayesh" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <p className="outfit text-primary font-black text-2xl mb-1 italic">JAYESH GANGURDE</p>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Chief Technical Officer</p>
              </div>
            </div>
          </div>
          <div className="jayesh-content">
            <h2 className="outfit text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-10 uppercase text-white">
              MASTER <span className="gradient-text text-primary">CRAFTSMAN</span>
            </h2>
            <div className="space-y-8">
              {careServices.map((s, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10">{s.icon}</div>
                   <div>
                      <h4 className="font-black italic text-xl uppercase mb-1 text-white">{s.title}</h4>
                      <p className="text-gray-500 text-sm italic">{s.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PARTS (Expanded to 8 Cards) */}
      <section className="parts-section py-32 px-6 md:px-20 bg-[#050505]">
        <div className="container mx-auto">
          <header className="mb-20">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Hardware Inventory</span>
            <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none text-white">CORE <span className="gradient-text text-primary">COMPONENTS</span></h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parts.map((part) => (
              <div key={part.id} className="part-card bg-[#0a0a0a] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit">{part.icon}</div>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">{part.type}</span>
                <h3 className="outfit text-2xl font-black italic uppercase text-white">{part.name}</h3>
                <p className="text-gray-500 text-sm italic leading-relaxed">"{part.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="py-24 px-6 md:px-20">
        <div className="container mx-auto rounded-[4rem] bg-primary p-12 md:p-24 text-center md:text-left relative overflow-hidden shadow-lg shadow-primary/20">
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
              <div>
                <h2 className="outfit text-5xl md:text-7xl font-black italic leading-none uppercase tracking-tighter mb-4">READY FOR RESTORATION?</h2>
                <p className="white text-white/70 font-bold text-xl italic max-w-md">Schedule your master-level checkup with our elite technical division.</p>
              </div>
              <button onClick={() => navigate('/repair-damage')} className="bg-white text-black px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter italic hover:scale-105 transition-transform flex items-center gap-4">
                 <Wrench size={32} />
                 BOOK SERVICE
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Garage;
