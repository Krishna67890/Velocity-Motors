import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Atom,
  Beaker,
  Zap,
  Cpu,
  Workflow,
  Rocket,
  ChevronRight,
  Timer,
  Flag,
  Wrench,
  Gamepad2,
  Gauge,
  CreditCard,
  Gift,
  Play,
  Layers,
  QrCode,
  CheckCircle,
  Home,
  MapPin,
  Users,
  Navigation,
  ShieldCheck,
  Calendar,
  Ticket,
  GraduationCap,
  Car
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Labs = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [paymentStep, setPaymentStep] = useState(null); // null, 'qr', 'success'
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".lab-reveal", {
        y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out"
      });

      gsap.from(".track-card", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".track-access-section",
          start: "top 70%"
        }
      });

      gsap.to(".lab-atom", { rotation: 360, duration: 30, repeat: -1, ease: "none" });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleJoin = (act) => {
    setSelectedActivity(act);
    setPaymentStep('qr');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const confirmPayment = () => {
    setPaymentStep('success');
  };

  const activities = [
    { title: "V1-Pro Simulator", type: "FREE", icon: <Timer className="text-primary" />, desc: "Experience the 2.1s thrill in a virtual environment. No cost, total adrenaline.", price: "₹0", isPaid: false },
    { title: "Pro Track Hot Lap", type: "PAID", icon: <Flag className="text-accent" />, desc: "3 Laps on the main circuit with a professional racing pilot. Pure physics.", price: "₹2,999", isPaid: true },
    { title: "Tech Stack Tour", type: "FREE", icon: <Wrench className="text-primary" />, desc: "A guided walking tour through our high-voltage engineering bays.", price: "₹0", isPaid: false },
    { title: "Neural Tuning Class", type: "PAID", icon: <Cpu className="text-accent" />, desc: "Learn to customize EV torque curves with our lead software engineers.", price: "₹1,500", isPaid: true }
  ];

  const testDriveOptions = [
    {
      type: "Premium Lab Experience",
      price: "₹1,999",
      period: "per session",
      features: ["Full Lab Access", "Professional Guide", "Hands-on Training", "Certificate of Completion"],
      color: "from-amber-500/20 to-orange-500/20",
      icon: Rocket,
      paid: true
    },
    {
      type: "Standard Lab Tour",
      price: "FREE",
      period: "45 mins",
      features: ["Basic Lab Walkthrough", "Equipment Demo", "Q&A Session", "Supervised by Staff"],
      color: "from-blue-500/20 to-cyan-500/20",
      icon: Beaker,
      paid: false
    },
    {
      type: "Research Access",
      price: "₹3,499",
      period: "Full Day",
      features: ["Unlimited Equipment Access", "Data Export Rights", "Lunch Included", "Priority Support"],
      color: "from-purple-500/20 to-pink-500/20",
      icon: Cpu,
      paid: true
    }
  ];

  const trackVisitOptions = [
    {
      name: "Lab Spectator Pass",
      charge: "₹299",
      period: "per person",
      includes: ["Observation Deck Access", "Equipment Demo", "Digital Guide", "Cafeteria Access"],
      icon: Ticket,
      charged: true
    },
    {
      name: "Research Team Pass",
      charge: "₹999",
      period: "up to 5 members",
      includes: ["Group Lab Access", "Private Tour", "Workshop Session", "Photo Gallery Access"],
      icon: Users,
      charged: true
    },
    {
      name: "Student Researcher",
      charge: "FREE",
      period: "with valid ID",
      includes: ["Student Lab Access", "Mentor Session", "Project Guidance", "Networking"],
      icon: GraduationCap,
      charged: false
    },
    {
      name: "Open Lab Day",
      charge: "FREE",
      period: "every Saturday",
      includes: ["Full Lab Access", "Demo Sessions", "Meet Researchers", "Activities for All"],
      icon: Calendar,
      charged: false
    }
  ];

  if (paymentStep === 'success') {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center text-white">
        <div className="success-msg text-center max-w-2xl p-12 bg-[#0a0a0a] rounded-[4rem] border border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,122,255,0.2)]">
          <div className="absolute inset-0 bg-primary/5 -z-10 animate-pulse"></div>
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-primary/50">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black italic mb-6 uppercase tracking-tighter">LAB PASS <br/><span className="gradient-text">ACTIVATED</span></h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-8">
            <p className="text-white text-2xl font-black italic uppercase tracking-tight leading-tight">
              Payment Successful! <br/>
              <span className="text-primary text-lg mt-2 block font-normal not-italic">Your lab reservation is confirmed. See you in the future.</span>
            </p>
          </div>
          <button onClick={() => navigate('/')} className="w-full flex items-center justify-center gap-4 bg-primary text-black py-6 px-8 rounded-full font-black italic uppercase text-sm tracking-widest hover:bg-white transition-all group shadow-[0_0_30px_rgba(0,122,255,0.3)]">
            RETURN TO HOME <Home className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    );
  }

  if (paymentStep === 'qr') {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center text-white">
        <div className="max-w-xl w-full bg-[#080808] p-12 rounded-[4rem] border border-white/10 text-center shadow-2xl">
          <h2 className="outfit text-4xl font-black italic uppercase mb-8">Lab <span className="text-primary">Access</span></h2>
          <p className="text-gray-400 mb-6 italic">Complete payment for:</p>
          <div className="bg-white/5 p-4 rounded-2xl mb-8 border border-primary/20">
            <p className="text-white text-xl font-bold">{selectedActivity?.title}</p>
            <p className="text-primary text-3xl font-black mt-2">{selectedActivity?.price}</p>
          </div>

          <div className="bg-white p-8 rounded-[3rem] shadow-[0_0_50px_rgba(0,122,255,0.3)] inline-block mb-10">
            <QrCode size={220} className="text-black" />
          </div>

          <div className="p-6 bg-primary/5 rounded-[2.5rem] border border-primary/20 mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Scan with any UPI app</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI_Logo.svg" alt="UPI" className="h-6 opacity-50" />
              <span className="text-gray-600">•</span>
              <span className="text-primary font-mono">labs@ev</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button onClick={confirmPayment} className="w-full bg-primary text-black py-5 px-8 rounded-full font-black italic uppercase text-sm tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3">
              <CheckCircle size={20} />
              CONFIRM PAYMENT
            </button>
            <button onClick={() => setPaymentStep(null)} className="text-gray-500 uppercase font-black text-xs hover:text-white transition-colors py-4">
              Cancel
            </button>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -z-10 lab-atom">
             <Atom size={500} className="text-primary/5" />
          </div>
          <span className="lab-reveal text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block italic">Elite R&D Hub</span>
          <h1 className="lab-reveal outfit text-[12vw] md:text-[8vw] font-black italic tracking-tighter leading-[0.85] uppercase mb-10 text-white">
            INNOVATION <br/><span className="gradient-text">LABS</span>
          </h1>
          <p className="lab-reveal text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Testing the impossible. Experience our free simulations or join elite paid technical sessions."
          </p>
        </header>

        {/* LAB ACCESS OPTIONS */}
        <section className="lab-access-section mb-40">
          <header className="mb-16 text-center">
            <span className="lab-reveal text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block">Choose Your Experience</span>
            <h2 className="lab-reveal outfit text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">
              LAB <span className="gradient-text">ACCESS</span>
            </h2>
            <p className="lab-reveal text-gray-400 text-lg max-w-2xl mx-auto">
              Select from free walkthroughs to premium hands-on research experiences.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testDriveOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="lab-reveal group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className="relative p-8 bg-[#0a0a0a] border border-white/5 rounded-[3rem] hover:border-primary transition-all h-full flex flex-col backdrop-blur-xl">

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20">
                        <Icon className="text-primary" size={32} />
                      </div>
                      {option.paid ? (
                        <div className="flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                          <CreditCard size={14} className="text-primary" />
                          <span className="text-xs font-bold uppercase tracking-wider text-primary">Paid</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                          <Gift size={14} className="text-green-400" />
                          <span className="text-xs font-bold uppercase tracking-wider text-green-400">Complimentary</span>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <h3 className="outfit text-3xl font-black italic text-white mb-2">
                      {option.type}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl font-black text-primary">{option.price}</span>
                      <span className="text-gray-500 text-sm ml-2">{option.period}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                          <Zap size={14} className="text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Book Button */}
                    <button
                      onClick={() => handleJoin(option)}
                      className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-primary hover:text-black transition-all group/btn text-white mt-auto"
                    >
                      <span className="font-black italic uppercase text-xs tracking-widest">
                        {option.paid ? 'Book Now' : 'Reserve Spot'}
                      </span>
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* LAB ACTIVITIES SECTION */}
        <section className="mb-40">
          <div className="flex justify-between items-end mb-16 px-4">
             <div className="lab-reveal">
                <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-white">Lab Activities</h2>
                <p className="text-gray-600 text-xs uppercase tracking-widest mt-2 font-bold">Public & Member Access</p>
             </div>
             <Beaker className="text-primary opacity-20" size={48} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, i) => (
              <div key={i} className={`lab-reveal p-10 rounded-[3rem] border transition-all duration-500 group relative overflow-hidden flex flex-col h-full ${act.isPaid ? 'bg-[#0a0a0a] border-accent/20 hover:border-accent' : 'bg-[#080808] border-primary/20 hover:border-primary'}`}>
                <div className="absolute top-6 right-8 flex items-center gap-2">
                   {act.isPaid ? <CreditCard size={12} className="text-accent" /> : <Gift size={12} className="text-primary" />}
                   <span className={`text-[9px] font-black px-2 py-1 rounded border uppercase ${!act.isPaid ? 'bg-primary/10 text-primary border-primary/20' : 'bg-accent/10 text-accent border-accent/20'}`}>
                     {act.type}
                   </span>
                </div>
                <div className={`mb-10 p-4 rounded-2xl w-fit transition-all duration-500 ${act.isPaid ? 'bg-accent/5 group-hover:bg-accent text-white' : 'bg-primary/5 group-hover:bg-primary text-white'}`}>
                   {act.icon}
                </div>
                <h3 className="outfit text-2xl font-black italic uppercase mb-4 tracking-tighter text-white leading-tight">{act.title}</h3>
                <p className="text-gray-500 text-sm italic leading-relaxed mb-10 flex-grow">"{act.desc}"</p>
                <div className={`flex justify-between items-center pt-6 border-t ${act.isPaid ? 'border-accent/10' : 'border-primary/10'}`}>
                   <p className="text-2xl font-black italic text-white uppercase">{act.price}</p>
                   <button onClick={() => handleJoin(act)} className={`font-black uppercase text-[10px] tracking-widest flex items-center gap-2 transition-all hover:gap-4 ${act.isPaid ? 'text-accent' : 'text-primary'}`}>
                      {act.isPaid ? 'Book Now' : 'Claim Spot'} <ChevronRight size={14} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRACK ACCESS PASSES */}
        <section className="track-access-section mb-40">
          <header className="mb-16 text-center">
            <span className="lab-reveal text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 block">Plan Your Visit</span>
            <h2 className="lab-reveal outfit text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6">
              LAB <span className="gradient-text">VISITORS</span>
            </h2>
            <p className="lab-reveal text-gray-400 text-lg max-w-2xl mx-auto">
              Experience our state-of-the-art facilities. Choose from various access options.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackVisitOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="track-card">
                  <div className={`p-6 bg-[#0a0a0a] border border-white/5 rounded-[2rem] hover:border-primary transition-all h-full`}>

                    {/* Icon & Status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                        <Icon className="text-primary" size={24} />
                      </div>
                      {option.charged ? (
                        <div className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Paid</span>
                        </div>
                      ) : (
                        <div className="bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">Free</span>
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <h4 className="font-black italic uppercase text-white mb-1">{option.name}</h4>
                    <div className="mb-3">
                      <span className="text-2xl font-black text-primary">{option.charge}</span>
                      <span className="text-gray-500 text-xs ml-2">{option.period}</span>
                    </div>

                    {/* Includes */}
                    <ul className="space-y-2 mb-4">
                      {option.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <ShieldCheck size={10} className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action */}
                    <button
                      onClick={() => handleJoin({...option, price: option.charge, title: option.name})}
                      className="w-full text-left text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      {option.charged ? 'Purchase Pass' : 'Register Interest'}
                      <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Info Banner */}
          <div className="mt-8 p-6 bg-primary/5 border border-primary/10 rounded-[2rem]">
            <div className="flex items-center gap-4 flex-wrap justify-center text-sm text-gray-400">
              <MapPin size={16} className="text-primary" />
              <span>Lab located at Innovation Hub • All visits include safety briefing • Under 18s must be accompanied</span>
            </div>
          </div>
        </section>

        {/* VELOCITY RACING TRACK */}
        <section className="lab-reveal mb-40 relative group">
          <div className="bg-[#0a0a0a] p-12 md:p-24 rounded-[5rem] border border-white/5 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden text-white shadow-2xl">
            <div className="relative aspect-video rounded-[4rem] overflow-hidden border border-white/10">
               <img src="https://images.unsplash.com/photo-1511919884226-fd3ca3a0ac00?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s]" alt="Racing Track" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
               <div className="absolute bottom-10 left-10">
                  <div className="bg-white text-black px-6 py-3 rounded-full font-black italic uppercase text-[10px] tracking-widest flex items-center gap-2 shadow-xl">
                     <Flag size={14} /> VELOCITY PRO CIRCUIT
                  </div>
               </div>
            </div>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 border border-primary/20 rounded-full">
                <Gauge className="text-primary" size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Proving Ground</span>
              </div>
              <h2 className="outfit text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.9]">VELOCITY <br/><span className="gradient-text">RACING TRACK</span></h2>
              <p className="text-gray-400 text-lg italic leading-relaxed">
                Our 4.2km high-speed circuit is the ultimate test for our neural drive systems. From cornering stability to battery thermal stress tests, this is where the V1-Pro was born.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div>
                    <p className="text-4xl font-black italic uppercase text-white">4.2KM</p>
                    <p className="text-[10px] uppercase font-bold text-gray-600 mt-1">Total Length</p>
                 </div>
                 <div>
                    <p className="text-4xl font-black italic uppercase text-white">18</p>
                    <p className="text-[10px] uppercase font-bold text-gray-600 mt-1">Apex Turns</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Labs;