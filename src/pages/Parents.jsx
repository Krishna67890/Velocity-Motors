import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users,
  GraduationCap,
  Navigation,
  ShieldCheck,
  Clock,
  MapPin,
  Flag,
  BookOpen,
  MousePointer2,
  ChevronRight,
  Zap,
  Car,
  CreditCard,
  Wallet,
  Ticket,
  Calendar,
  QrCode,
  CheckCircle,
  Home
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Parents = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState(null); // null, 'qr', 'success'
  const [selectedPlan, setSelectedModel] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".parents-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out"
      });

      gsap.from(".track-animate", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".track-section",
          start: "top 70%"
        }
      });

      gsap.from(".card-animate", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testdrive-section",
          start: "top 70%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleEnroll = (plan) => {
    setSelectedModel(plan);
    setPaymentStep('qr');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const confirmPayment = () => {
    setPaymentStep('success');
  };

  const testDriveOptions = [
    {
      type: "Premium Test Drive",
      price: "₹999",
      period: "per session",
      features: ["1 Hour Exclusive Track Access", "Professional Instructor", "High-Performance EV", "Telemetry Analysis"],
      color: "from-amber-500/20 to-orange-500/20",
      icon: Car,
      paid: true
    },
    {
      type: "Standard Test Drive",
      price: "FREE",
      period: "15 mins",
      features: ["Basic EV Handling", "Safety Demonstration", "Community Track", "Supervised by Staff"],
      color: "from-blue-500/20 to-cyan-500/20",
      icon: Car,
      paid: false
    },
    {
      type: "Family Experience",
      price: "₹1,499",
      period: "2 Hours",
      features: ["Track Access for Family", "Two EVs Simultaneously", "Photography Package", "Refreshments Included"],
      color: "from-purple-500/20 to-pink-500/20",
      icon: Users,
      paid: true
    }
  ];

  if (paymentStep === 'success') {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center text-white">
        <div className="success-msg text-center max-w-2xl p-12 glass rounded-[4rem] border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,122,255,0.2)]">
          <div className="absolute inset-0 bg-primary/5 -z-10 animate-pulse"></div>
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-8" />
          <h2 className="outfit text-5xl md:text-7xl font-black italic mb-6 uppercase tracking-tighter">ENROLLMENT <br/><span className="gradient-text text-primary">COMPLETE</span></h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-8">
            <p className="text-white text-2xl font-black italic uppercase tracking-tight leading-tight">
              Payment Verified! <br/>
              <span className="text-primary">Welcome to the Academy. See you on the track!</span>
            </p>
          </div>
          <button onClick={() => navigate('/')} className="btn-primary w-full justify-center group py-6 text-xl">
            RETURN TO HOME <Home className="ml-3" size={24} />
          </button>
        </div>
      </div>
    );
  }

  if (paymentStep === 'qr') {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center text-white">
        <div className="max-w-xl w-full bg-[#080808] p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
          <h2 className="outfit text-4xl font-black italic uppercase mb-8">Secure <span className="text-primary">Payment</span></h2>
          <p className="text-gray-400 mb-10 italic">Scan to complete enrollment for: <br/><span className="text-white font-bold">{selectedPlan?.type}</span></p>

          <div className="bg-white p-6 rounded-[3rem] shadow-[0_0_50px_rgba(0,122,255,0.2)] inline-block mb-10">
            <QrCode size={200} className="text-black" />
          </div>

          <div className="p-8 glass rounded-[2.5rem] border-primary/20 bg-primary/5 mb-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Total Payable</p>
            <p className="text-4xl font-black italic text-white uppercase">{selectedPlan?.price}</p>
          </div>

          <div className="flex flex-col gap-4">
            <button onClick={confirmPayment} className="btn-primary w-full py-5 text-lg">CONFIRM PAYMENT</button>
            <button onClick={() => setPaymentStep(null)} className="text-gray-500 uppercase font-black text-xs hover:text-white transition-colors">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white selection:bg-primary overflow-x-hidden">
      <div className="container mx-auto">

        {/* HERO SECTION */}
        <header className="mb-32 text-center max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
          <span className="parents-reveal text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block">Legacy of Safety</span>
          <h1 className="parents-reveal outfit text-[12vw] md:text-[8vw] font-black italic tracking-tighter leading-[0.85] uppercase mb-10 text-white">
            THE <span className="gradient-text">ACADEMY</span>
          </h1>
          <p className="parents-reveal text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Training the next generation of electric pioneers. From first-time steering to mastering the racing track."
          </p>
        </header>

        {/* TEST DRIVE OPTIONS SECTION */}
        <section className="testdrive-section mb-40">
          <header className="mb-16 text-center">
            <h2 className="parents-reveal outfit text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">
              DRIVE <span className="gradient-text">PROGRAMS</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testDriveOptions.map((option, index) => (
              <div key={index} className="card-animate group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative p-10 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:border-primary transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                      <option.icon className="text-primary" size={32} />
                    </div>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase ${!option.paid ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-primary/10 text-primary border-primary/20'}`}>
                      {option.paid ? 'Paid' : 'Free'}
                    </span>
                  </div>
                  <h3 className="outfit text-3xl font-black italic text-white mb-2 uppercase">{option.type}</h3>
                  <div className="mb-8">
                    <span className="text-4xl font-black text-primary italic uppercase">{option.price}</span>
                    <span className="text-gray-500 text-[10px] ml-2 font-bold uppercase">{option.period}</span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <ShieldCheck size={14} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleEnroll(option)} className="btn-primary w-full py-5 text-sm uppercase italic font-black">
                    {option.paid ? 'Enroll Now' : 'Join Free'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DRIVING GROUND & RACING TRACK */}
        <section className="track-section mb-40 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>
          <header className="mb-16">
             <h2 className="parents-reveal outfit text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white">THE <span className="gradient-text">CIRCUIT</span></h2>
             <p className="parents-reveal text-gray-500 uppercase tracking-[0.3em] font-bold text-[10px] mt-4">Driving Ground • Racing Track • Safety Arena</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white">
             <div className="lg:col-span-8 rounded-[4rem] overflow-hidden border border-white/10 h-[500px] relative track-animate shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Track" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-10 left-10">
                   <div className="flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-black italic uppercase text-xs tracking-widest">
                      <Flag size={16} /> VELOCITY PROVING GROUND
                   </div>
                </div>
             </div>
             <div className="lg:col-span-4 grid grid-cols-1 gap-6 text-white">
                <div className="p-10 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-primary transition-all group">
                   <Navigation className="text-primary mb-6" />
                   <h4 className="font-black italic uppercase text-white mb-2">Driving Ground</h4>
                   <p className="text-gray-500 text-xs italic leading-relaxed">Dedicated safe zone for first-time learners at Matoshri College Hub.</p>
                </div>
                <div className="p-10 bg-[#080808] border border-white/5 rounded-[3rem] hover:border-accent transition-all group">
                   <Zap className="text-accent mb-6" />
                   <h4 className="font-black italic uppercase text-white mb-2">Racing Track</h4>
                   <p className="text-gray-500 text-xs italic leading-relaxed">A simplified 4.2km circuit for students to master electric performance.</p>
                </div>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Parents;
