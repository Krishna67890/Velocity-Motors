import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wrench,
  Car,
  Bike,
  Zap,
  PhoneCall,
  Settings,
  CheckCircle2,
  ShieldCheck,
  Thermometer,
  Activity,
  Cpu,
  ArrowUpRight,
  MousePointer2,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    id: "cars",
    category: "Electric Car Elite Care",
    icon: <Car className="text-primary" size={48} />,
    services: [
      { name: "Neural Optimization", desc: "Digital motor tuning for peak efficiency.", level: "Expert" },
      { name: "Advanced Cell Balancing", desc: "Battery diagnostic and optimization.", level: "Master" },
      { name: "Autonomous Alignment", desc: "Radar and sensor calibration.", level: "Elite" }
    ],
    accent: "#007AFF",
    bg: "bg-primary/5"
  },
  {
    id: "bikes",
    category: "Electric Bike & Scooter Hub",
    icon: <Bike className="text-secondary" size={48} />,
    services: [
      { name: "Urban Kinetic Tuning", desc: "Maximizing range for city cycles.", level: "Pro" },
      { name: "Regen System Check", desc: "Energy recovery calibration.", level: "Expert" },
      { name: "High-Current Port Care", desc: "Charge port diagnostics.", level: "Elite" }
    ],
    accent: "#5856D6",
    bg: "bg-secondary/5"
  },
  {
    id: "repair",
    category: "High-Voltage Restoration",
    icon: <Wrench className="text-accent" size={48} />,
    services: [
      { name: "Inverter Replacement", desc: "Next-gen power unit installation.", level: "Master" },
      { name: "Thermal Armor Service", desc: "Coolant and thermal checkups.", level: "Expert" },
      { name: "Complete EV Restoration", desc: "Accident and hardware repair.", level: "Founding" }
    ],
    accent: "#FF2D55",
    bg: "bg-accent/5"
  }
];

const Services = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".serv-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Staggered Category reveal
      gsap.from(".service-card-advanced", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%"
        }
      });

      // Sticky hotline animation
      gsap.to(".hotline-pod", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-[#020202] text-white">

      {/* SECTION 1: INDUSTRIAL HERO */}
      <div className="container mx-auto mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#007AFF08_0%,_transparent_70%)] pointer-events-none"></div>

        <header className="text-center max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Settings className="text-primary animate-spin-slow" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Velocity Technical Ecosystem</span>
          </div>
          <h1 className="serv-title outfit text-[12vw] md:text-[8vw] font-black italic tracking-tighter leading-[0.8] uppercase mb-10">
            MASTERS OF <br/><span className="gradient-text">RESTORATION</span>
          </h1>
          <p className="serv-title text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "We don't just fix electric vehicles; we re-engineer them for performance supremacy. Explore our 24/7 technical hub."
          </p>
        </header>
      </div>

      {/* SECTION 2: THE ADVANCED SERVICES GRID */}
      <div className="services-grid container mx-auto grid grid-cols-1 gap-10 mb-40">
        {serviceCategories.map((cat, i) => (
          <div key={cat.id} className="service-card-advanced group relative overflow-hidden glass rounded-[4rem] border border-white/5 bg-[#080808] hover:border-white/20 transition-all duration-700">
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
              style={{ background: `radial-gradient(circle at 80% 20%, ${cat.accent}15 0%, transparent 50%)` }}
            ></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 md:p-20 items-center">
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-8">
                <div className={`w-20 h-20 ${cat.bg} rounded-[2rem] border border-white/5 flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <h2 className="outfit text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white group-hover:text-primary transition-colors duration-500">
                  {cat.category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-gray-400">
                    <CheckCircle2 size={12}/> 24/7 Priority
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest text-gray-400">
                    <ShieldCheck size={12}/> Lifetime Warranty
                  </div>
                </div>
              </div>

              {/* Technical List Column */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.services.map((s, idx) => (
                  <div key={idx} className="p-8 bg-black border border-white/5 rounded-[3rem] hover:bg-white/5 transition-all group/item relative overflow-hidden">
                    <div className="absolute top-6 right-8 opacity-20 group-hover/item:opacity-100 group-hover/item:translate-x-1 group-hover/item:-translate-y-1 transition-all">
                      <ArrowUpRight size={16} />
                    </div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{s.level} Access</p>
                    <h4 className="font-black italic text-xl uppercase text-white mb-2">{s.name}</h4>
                    <p className="text-gray-500 text-sm italic leading-relaxed">"{s.desc}"</p>
                  </div>
                ))}

                {/* Book Action Card */}
                <div
                  onClick={() => navigate('/book')}
                  className="p-8 bg-white text-black rounded-[3rem] flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-[0_20px_50px_rgba(255,255,255,0.1)] relative overflow-hidden"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
                    <MousePointer2 size={120} />
                  </div>
                  <h4 className="font-black italic text-3xl uppercase tracking-tighter leading-none">RESERVE <br/> SLOT</h4>
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-[10px] font-black uppercase tracking-widest">Next Available: Today</span>
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <ChevronRight className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 3: THE TECHNICAL MASTERCLASS (JAYESH) */}
      <section className="container mx-auto mb-40">
        <div className="relative bg-[#080808] border border-white/5 rounded-[5rem] p-12 md:p-24 overflow-hidden group">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full group-hover:bg-primary/10 transition-colors duration-1000"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden border border-white/10 group-hover:border-primary/30 transition-colors duration-700">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]" alt="Jayesh" />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[3rem] border-primary/20 hidden md:block animate-bounce-slow">
                <ShieldCheck size={40} className="text-primary mb-4" />
                <p className="font-black italic uppercase text-xs">Certified <br/> Elite Tech</p>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full">
                <p className="text-accent font-black uppercase tracking-widest text-[9px]">Master of High-Voltage</p>
              </div>
              <h3 className="outfit text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter">
                THE MASTER <br/><span className="gradient-text">CRAFTSMAN</span>
              </h3>
              <p className="text-gray-400 text-xl italic leading-relaxed">
                "Technical supremacy isn't about fixing parts—it's about understanding the neural harmony of the vehicle. Every bolt we turn is a commitment to your safety and thrill."
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-primary font-black italic text-3xl">JAYESH GANGURDE</p>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Head of Global Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EMERGENCY FLOATING POD */}
      <div className="hotline-pod fixed bottom-10 right-10 z-[100] group">
        <div className="relative flex items-center justify-end">
          <div className="bg-white text-black px-10 py-6 rounded-full font-black italic flex items-center gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:bg-primary hover:text-white transition-all cursor-pointer">
            <PhoneCall className="animate-pulse" />
            <div className="text-left leading-none">
              <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1 font-bold">Emergency Hub</p>
              <p className="text-xl tracking-tighter">+91 1800-VELOCITY</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
