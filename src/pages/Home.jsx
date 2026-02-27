import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Wrench, ShieldCheck, Zap, Gauge, Star, Play, MapPin, CheckCircle2, Settings, Hammer } from 'lucide-react';
import logoImg from '../../Assets/1000533341.jpg';
import boyImg from '../../Assets/Boy.jpg';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const revealElems = document.querySelectorAll('.reveal');
    revealElems.forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  const openInMap = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Matoshri+College+of+Engineering+and+Research+Centre+Odha+Nashik", "_blank");
  };

  const handleGetStarted = () => {
    navigate('/book', { state: { step: 1 } });
  };

  return (
    <div className="bg-black text-white selection:bg-primary">

      {/* BRAND HEADER SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-20 bg-gradient-to-b from-primary/10 to-black relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-32">
            <div className="reveal flex-1">
              <div className="flex items-center gap-6 mb-10 group">
                {/* CIRCULAR CLEAR LOGO */}
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-500"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary bg-white flex items-center justify-center shadow-2xl transition-transform duration-700 group-hover:scale-105">
                    <img
                      src={logoImg}
                      alt="Velocity Motors Logo"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="outfit text-5xl md:text-7xl font-black tracking-tighter leading-none text-white italic">VELOCITY</span>
                  <span className="text-sm md:text-xl font-bold tracking-[0.5em] text-primary uppercase leading-none mt-2">MOTORS</span>
                </div>
              </div>
              <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-10">
                DRIVE THE <span className="gradient-text text-primary">FUTURE</span> <br /> TO ELECTRIC.
              </h2>
              <p className="text-gray-400 text-xl md:text-2xl italic leading-relaxed max-w-3xl mb-12 font-light">
                Velocity Motors is Nashik's premier destination for high-performance electric mobility. Founded in 2024, we combine cutting-edge EV technology with world-class maintenance. From hyper-cars to urban scooters, we are redefining the Indian road experience.
              </p>
              <div className="flex flex-wrap gap-6">
                 <div
                   onClick={openInMap}
                   className="flex items-center gap-4 glass px-8 py-4 rounded-[2rem] border-primary/20 bg-primary/5 hover:border-primary transition-all cursor-pointer group"
                 >
                    <MapPin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary">Location Hub</span>
                       <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Matoshri Engineering Centre, Odha</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 glass px-8 py-4 rounded-[2rem] border-white/10">
                    <CheckCircle2 className="text-accent" size={24} />
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black uppercase tracking-widest text-accent">Authorized</span>
                       <span className="text-sm font-bold text-white uppercase">Sales & 24/7 Garage</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="reveal lg:w-1/3 w-full bg-[#080808] border border-white/5 p-12 rounded-[4rem] relative group mt-10 lg:mt-0 shadow-2xl">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[4rem]"></div>
               <h4 className="outfit text-3xl font-black italic uppercase mb-6 text-primary tracking-tighter">Elite Showroom</h4>
               <p className="text-gray-500 text-lg italic leading-relaxed mb-10">
                 Explore our exclusive collection of 30+ electric cars and premium two-wheelers. Experience the power and silence of the electric era.
               </p>
               <button onClick={handleGetStarted} className="btn-primary w-full group py-5 shadow-lg shadow-primary/20 text-white">
                  <span>GET STARTED</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: HERO - THE ULTIMATE CAR */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover scale-105 opacity-60"
            alt="Velocity V1-Pro"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="overflow-hidden mb-4">
            <span className="reveal inline-block text-primary font-black tracking-[0.5em] uppercase text-xs md:text-sm">
              The Pinnacle of Electric Power
            </span>
          </div>
          <h1 className="outfit text-7xl md:text-[12vw] font-black italic tracking-tighter leading-none mb-8 reveal uppercase text-white">
            V1-PRO <span className="gradient-text text-primary">HYPER-EV</span>
          </h1>
          <div className="reveal flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleGetStarted}
              className="btn-primary px-12 py-6 text-xl shadow-[0_20px_50px_rgba(0,122,255,0.3)] group text-white"
            >
              <span>GET STARTED</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <div className="flex items-center gap-8 ml-0 sm:ml-10 border-l border-white/20 pl-8 text-left text-white">
               <div>
                  <p className="text-2xl font-black italic">2.1s</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-1">0-100 km/h</p>
               </div>
               <div className="w-[1px] h-8 bg-white/10"></div>
               <div>
                  <p className="text-2xl font-black italic text-white">600km</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-1">Range</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BENTO GRID */}
      <section className="py-32 px-6 md:px-20 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 reveal relative aspect-video md:h-[500px] rounded-[4rem] overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Tech" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               <div className="absolute bottom-12 left-12">
                  <h3 className="outfit text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 text-white">Mastering <span className="text-primary">Voltage</span></h3>
                  <p className="text-gray-400 italic max-w-md text-lg leading-relaxed">Our V-Core technology delivers 98% efficiency, ensuring every watt is turned into pure speed.</p>
               </div>
            </div>

            <div className="lg:col-span-4 reveal bg-[#0a0a0a] border border-white/5 p-12 rounded-[4rem] flex flex-col justify-between hover:border-primary/30 transition-colors group">
               <Zap className="text-primary group-hover:scale-110 transition-transform" size={48} />
               <div>
                  <h4 className="outfit text-3xl font-black italic uppercase mb-4 text-white">Hyper-Charging</h4>
                  <p className="text-gray-500 text-sm italic">Add 300km of range in just 15 minutes at any Velocity Hub.</p>
               </div>
            </div>

            <div className="lg:col-span-4 reveal bg-[#0a0a0a] border border-white/5 p-12 rounded-[4rem] flex flex-col justify-between hover:border-accent/30 transition-colors group">
               <ShieldCheck className="text-accent group-hover:scale-110 transition-transform" size={48} />
               <div>
                  <h4 className="outfit text-3xl font-black italic uppercase mb-4 text-accent">Velocity Shield</h4>
                  <p className="text-gray-500 text-sm italic">Military-grade battery protection and 360° AI-safety sensors as standard.</p>
               </div>
            </div>

            <div className="lg:col-span-8 reveal relative aspect-video md:h-[400px] rounded-[4rem] overflow-hidden bg-primary/10 border border-primary/20 p-12 flex items-center justify-around text-center md:text-left">
               <div className="flex flex-col items-center">
                  <p className="outfit text-6xl md:text-[8vw] font-black italic gradient-text text-white">50+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-bold">Showrooms</p>
               </div>
               <div className="w-[1px] h-24 bg-white/10"></div>
               <div className="flex flex-col items-center">
                  <p className="outfit text-6xl md:text-[8vw] font-black italic gradient-text text-primary">24/7</p>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.4em] font-bold">Expert Support</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE MASTER GARAGE PREVIEW - UPDATED PHOTO */}
      <section className="py-32 px-6 md:px-20 bg-[#050505] overflow-hidden border-y border-white/5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block">Elite Maintenance</span>
            <h2 className="outfit text-5xl md:text-8xl font-black italic tracking-tighter leading-none mb-10 uppercase text-white">
              MASTER <br /> <span className="gradient-text">GARAGE</span>
            </h2>
            <p className="text-gray-400 text-xl md:text-2xl italic leading-relaxed mb-12">
              Every Velocity vehicle is a masterpiece that deserves master-level care. Led by co-founder <span className="text-white font-black underline decoration-primary underline-offset-8 decoration-4 uppercase">Jayesh Gangurde</span>, our garage provides 24/7 technical supremacy.
            </p>
            <div className="flex flex-wrap gap-6 mb-12">
               {['High-Voltage Opt', 'Neural Calibration', 'Software 4.0'].map(tag => (
                 <div key={tag} className="px-8 py-3 border border-white/10 rounded-full text-[10px] uppercase font-black tracking-widest text-gray-500 hover:text-primary hover:border-primary transition-all cursor-default">{tag}</div>
               ))}
            </div>
            <button onClick={() => navigate('/garage')} className="btn-primary px-12 group text-white">
               <span>ENTER THE SANCTUM</span>
               <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="reveal relative">
             <div className="aspect-square rounded-[5rem] overflow-hidden border border-white/5 relative group shadow-2xl">
                <img src={boyImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]" alt="Jayesh Gangurde" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
                <div className="absolute bottom-12 left-12 p-10 glass rounded-[3rem] border-primary/20">
                   <p className="font-black italic text-3xl mb-1 text-white uppercase tracking-tighter">JAYESH GANGURDE</p>
                   <p className="text-xs uppercase tracking-widest text-primary font-black">Chief Engineering Officer</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 bg-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#007AFF_0%,_transparent_70%)] blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="reveal outfit text-6xl md:text-[12vw] font-black italic tracking-tighter leading-[0.8] mb-16 uppercase text-white text-center">
            DRIVE THE <span className="gradient-text text-primary">FUTURE</span> <br /> TO ELECTRIC.
          </h2>
          <div className="reveal flex flex-col md:flex-row justify-center gap-10">
            <button onClick={handleGetStarted} className="btn-primary px-20 py-8 text-3xl group shadow-[0_30px_60px_rgba(0,122,255,0.4)] text-white">
               <span>SECURE YOURS</span>
               <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
            </button>
            <button onClick={() => navigate('/cars')} className="px-20 py-8 border-2 border-white/20 hover:border-white rounded-full font-black text-2xl italic tracking-tighter transition-all uppercase text-white bg-white/5 backdrop-blur-xl">
               Catalog 3.0
            </button>
          </div>

          <div className="reveal mt-40 flex justify-center gap-24 opacity-30">
             <div className="text-center group cursor-default">
                <p className="text-5xl font-black italic text-white uppercase group-hover:text-primary transition-colors">30+</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-500 mt-2">Elite Car Models</p>
             </div>
             <div className="text-center group cursor-default">
                <p className="text-5xl font-black italic text-white uppercase group-hover:text-primary transition-colors">20+</p>
                <p className="text-[10px] uppercase tracking-widest font-black text-gray-500 mt-2">Hyper Wheelers</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
