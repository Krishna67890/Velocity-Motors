import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wrench, Battery, Cpu, Gauge, Zap, ShieldCheck, Thermometer, Settings, PenTool as Tool2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const parts = [
  {
    id: 1,
    name: "V-Core 3.0 Battery",
    type: "Energy Core",
    desc: "Next-gen solid-state cells with liquid cooling for extreme durability.",
    icon: <Battery className="text-primary" size={32} />
  },
  {
    id: 2,
    name: "Hyper-Flux Motor",
    type: "Propulsion",
    desc: "A 950NM beast designed for instant torque and silent performance.",
    icon: <Zap className="text-accent" size={32} />
  },
  {
    id: 3,
    name: "Neural Controller",
    type: "The Brain",
    desc: "Processes 4,000 data points per second for optimal energy distribution.",
    icon: <Cpu className="text-secondary" size={32} />
  },
  {
    id: 4,
    name: "Active Suspension",
    type: "Dynamics",
    desc: "Self-adjusting dampers for a smooth glide on any Indian road surface.",
    icon: <Settings className="text-white" size={32} />
  }
];

const careServices = [
  {
    title: "Precision Calibration",
    icon: <Tool2 className="text-primary" />,
    desc: "Fine-tuning the software algorithms to match your driving style perfectly."
  },
  {
    title: "Thermal Armor Check",
    icon: <Thermometer className="text-red-500" />,
    desc: "Testing the battery cooling systems under simulated extreme heat conditions."
  },
  {
    title: "Zero-Wear Inspection",
    icon: <ShieldCheck className="text-green-500" />,
    desc: "Our 200-point safety check ensures your vehicle feels brand new, every time."
  }
];

const Garage = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".garage-hero h1", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      // Parts cards reveal
      gsap.from(".part-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        scrollTrigger: {
          trigger: ".parts-section",
          start: "top 75%"
        }
      });

      // Jayesh section reveal
      gsap.from(".jayesh-img", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".jayesh-section",
          start: "top 70%"
        }
      });

      gsap.from(".jayesh-content", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".jayesh-section",
          start: "top 70%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white selection:bg-primary min-h-screen">

      {/* SECTION 1: CINEMATIC HERO */}
      <section className="garage-hero relative h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#001A33_0%,_#000_100%)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="relative z-10">
          <span className="outfit text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block reveal-up">The Sanctum of Precision</span>
          <h1 className="outfit text-7xl md:text-[10vw] font-black italic tracking-tighter leading-none uppercase mb-8">
            THE <span className="gradient-text">GARAGE</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Where electric souls are forged and maintained by the masters of high-voltage engineering."
          </p>
        </div>

        {/* Floating Tool Icons Decoration */}
        <div className="absolute bottom-20 flex gap-20 opacity-10">
          <Wrench size={100} className="rotate-12" />
          <Settings size={120} className="animate-spin-slow" />
          <Cpu size={100} className="-rotate-12" />
        </div>
      </section>

      {/* SECTION 2: THE JAYESH GANGURDE MASTERCLASS */}
      <section className="jayesh-section py-32 px-6 md:px-20 bg-black relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="jayesh-img aspect-square rounded-[4rem] overflow-hidden border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]"
                alt="Jayesh Gangurde"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute bottom-12 left-12">
                <p className="outfit text-primary font-black text-2xl mb-1 italic">JAYESH GANGURDE</p>
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Master of High-Voltage Systems</p>
              </div>
            </div>
            {/* Signature Float */}
            <div className="absolute -top-10 -right-10 glass p-8 rounded-[3rem] border-primary/20 hidden md:block">
               <ShieldCheck size={48} className="text-primary mb-4" />
               <p className="font-black italic">SIGNATURE <br /> QUALITY</p>
            </div>
          </div>

          <div className="jayesh-content">
            <h2 className="outfit text-5xl md:text-7xl font-black italic tracking-tighter leading-none mb-10 uppercase">
              ENGINEERING <br /> <span className="gradient-text">DOMINANCE</span>
            </h2>
            <p className="text-gray-400 text-xl italic leading-relaxed mb-12">
              "We don't just fix problems; we re-engineer the vehicle's future. Every Velocity vehicle that enters my garage undergoes a transformation that blends mechanical perfection with software intelligence."
            </p>

            <div className="space-y-8">
              {careServices.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-primary/20 transition-all">
                      {s.icon}
                   </div>
                   <div>
                      <h4 className="font-black italic text-xl uppercase mb-1 tracking-tight">{s.title}</h4>
                      <p className="text-gray-500 text-sm italic">{s.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE HEART OF THE MACHINE (PARTS) */}
      <section className="parts-section py-32 px-6 md:px-20 bg-[#050505]">
        <div className="container mx-auto">
          <header className="mb-20">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Hardware Showcase</span>
            <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">CORE <br /> <span className="gradient-text">COMPONENTS</span></h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parts.map((part) => (
              <div key={part.id} className="part-card glass p-10 rounded-[3rem] hover-card border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                  {part.icon}
                </div>
                <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit">
                  {part.icon}
                </div>
                <span className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2 block">{part.type}</span>
                <h3 className="outfit text-2xl font-black italic mb-4 uppercase tracking-tighter">{part.name}</h3>
                <p className="text-gray-500 text-sm italic leading-relaxed">"{part.desc}"</p>

                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-[10px] font-bold uppercase tracking-widest">In Stock</span>
                  <button className="text-primary font-black italic uppercase text-xs">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: 24/7 SUPPORT BANNER */}
      <section className="py-24 px-6 md:px-20">
        <div className="container mx-auto rounded-[4rem] bg-gradient-to-r from-primary to-secondary p-12 md:p-24 relative overflow-hidden text-center md:text-left">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div>
                <h2 className="outfit text-5xl md:text-7xl font-black italic text-black leading-none uppercase tracking-tighter mb-4">
                  READY FOR <br /> SERVICE?
                </h2>
                <p className="text-black/70 font-bold text-xl italic max-w-md">Our garage never sleeps. Book your slot for a master-level checkup.</p>
              </div>
              <button
                onClick={() => navigate('/repair-damage')}
                className="bg-black text-white px-16 py-8 rounded-full font-black text-2xl uppercase tracking-tighter italic hover:scale-105 transition-transform flex items-center gap-4"
              >
                 <Wrench size={32} />
                 BOOK SERVICE NOW
              </button>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Garage;
