import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Zap, Globe, Target, Award, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Title Reveal
      gsap.from(".about-title-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      // 2. Section Staggered Reveal
      gsap.from(".about-item-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-content-section",
          start: "top 80%"
        }
      });

      // 3. Stats Reveal
      gsap.from(".stat-card", {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    { icon: <ShieldCheck className="text-primary" size={32} />, title: "Absolute Trust", desc: "Forging a transparent and reliable electric path for India's future." },
    { icon: <Zap className="text-accent" size={32} />, title: "Peak Performance", desc: "Every model is a benchmark of speed, torque, and silent power." },
    { icon: <Globe className="text-emerald-500" size={32} />, title: "Zero Footprint", desc: "Commitment to 100% sustainable manufacturing and circular energy." }
  ];

  const milestones = [
    { year: "2024", title: "Founding", desc: "Established Velocity Motors in Nashik with a vision for elite mobility." },
    { year: "2025", title: "Scale", desc: "Expanding to 50+ showrooms and launching the V-Core 4.0 ecosystem." },
    { year: "2030", title: "Legacy", desc: "Aiming to be the #1 luxury electric brand in the Asian market." }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white selection:bg-primary overflow-x-hidden">

      {/* SECTION 1: CINEMATIC HEADER */}
      <div className="container mx-auto mb-40">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8 about-title-reveal">
            <CheckCircle2 className="text-primary" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">The Elite Manifesto</span>
          </div>
          <h1 className="about-title-reveal outfit text-[12vw] md:text-[9vw] font-black italic tracking-tighter leading-[0.85] uppercase mb-12">
            DRIVING THE <br/><span className="gradient-text">REVOLUTION</span>
          </h1>
          <p className="about-title-reveal text-gray-400 text-lg md:text-2xl max-w-3xl italic font-light leading-relaxed">
            "Velocity Motors isn't just a dealership; it's a movement born in the heart of Nashik. We are bridging the gap between raw power and zero emissions."
          </p>
        </div>
      </div>

      {/* SECTION 2: THE VISION VIDEO */}
      <section className="container mx-auto mb-40">
        <div className="about-item-reveal relative rounded-[4rem] overflow-hidden aspect-video bg-white/5 border border-white/10 group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)]">
              <Zap className="text-black fill-black" size={32} />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-12 left-12">
            <p className="text-primary font-black tracking-widest text-xs uppercase mb-2">Vision 2030</p>
            <h3 className="outfit text-4xl font-black italic uppercase">The Engineering Soul</h3>
          </div>
          {/* Placeholder for Video - would be a <video> or <iframe> tag in production */}
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2072"
            alt="Vision Video Thumbnail"
            className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* SECTION 3: THE ALLIANCE & STORY */}
      <section className="about-content-section container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-40">
        <div className="lg:col-span-7 space-y-12">
          <div className="about-item-reveal">
            <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter mb-6">Our DNA</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic">
              From our **Master Garage** to your driveway, we are engineering the soul of Indian transit. Velocity Motors blends visionary leadership with mechanical genius. Our journey began in a Nashik research lab, driven by a simple question: How can we make India's fastest car also its cleanest?
            </p>
          </div>
          <div className="about-item-reveal h-[1px] bg-white/10 w-full"></div>
          <div className="about-item-reveal">
            <p className="text-gray-500 text-lg leading-relaxed italic">
              Today, supported by an expanded founding alliance, we operate an end-to-end ecosystem. From hyper-car sales to 24/7 technical restoration, we are the architects of the new electric standard.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 gap-6 stats-grid">
          {[
            { label: "Founded", val: "2024", sub: "Nashik Hub" },
            { label: "Fleet", val: "50+", sub: "Unique Models" },
            { label: "Vision", val: "100%", sub: "Sustainable" }
          ].map((stat, i) => (
            <div key={i} className="stat-card p-10 bg-[#0a0a0a] border border-white/10 rounded-[3rem] hover:border-primary transition-all group">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-600 mb-2">{stat.label}</p>
              <div className="flex justify-between items-end">
                <p className="text-5xl font-black italic text-white group-hover:text-primary transition-colors">{stat.val}</p>
                <p className="text-[10px] font-bold text-primary italic uppercase tracking-tighter mb-1">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CORE VALUES GRID (SHARP & VISIBLE) */}
      <section className="container mx-auto mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div key={i} className="about-item-reveal bg-[#080808] border border-white/5 p-12 rounded-[4rem] hover:border-primary/30 transition-all group">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
                <div className="group-hover:text-white transition-colors">{v.icon}</div>
              </div>
              <h3 className="outfit text-3xl font-black italic uppercase mb-4 tracking-tighter">{v.title}</h3>
              <p className="text-gray-500 text-lg italic leading-relaxed">"{v.desc}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: THE TIMELINE / MILESTONES */}
      <section className="container mx-auto mb-40">
        <div className="bg-[#0a0a0a] rounded-[5rem] border border-white/5 p-12 md:p-24 overflow-hidden relative group">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
            {milestones.map((m, i) => (
              <div key={i} className="about-item-reveal space-y-6">
                <p className="outfit text-6xl font-black italic text-primary/20 group-hover:text-primary transition-colors duration-700">{m.year}</p>
                <h4 className="outfit text-3xl font-black italic uppercase tracking-tighter text-white">{m.title}</h4>
                <p className="text-gray-500 italic leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="container mx-auto text-center py-20 border-t border-white/5">
        <div className="about-item-reveal">
          <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-12">
            JOIN THE <span className="gradient-text">ALLIANCE</span>
          </h2>
          <button className="btn-primary px-16 py-6 text-xl group mx-auto">
            <span>EXPLORE OUR PATENTS</span>
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
