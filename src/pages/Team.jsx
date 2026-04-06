import { useEffect } from 'react';
import gsap from 'gsap';
import { Shield, Wrench, Truck, Briefcase, UserCheck, TrendingUp, Beaker, MessageSquare } from 'lucide-react';

// Import local assets
import boyImg from '../../Assets/Boy.jpg';
import krishnaImg from '../../Assets/Krishna patil.jpg';

const team = [
  {
    name: "Yash Baviskar",
    role: "Founder & Visionary Leader",
    icon: <Shield className="text-primary" />,
    bio: "The primary architect of Velocity Motors, driving the mission to electrify every Indian household with sustainable luxury.",
    img: boyImg, // Default boy logo
    color: "from-blue-600/20 to-blue-900/20"
  },
  {
    name: "Jayesh Gangurde",
    role: "Co-Founder & Technical Lead",
    icon: <Wrench className="text-accent" />,
    bio: "Master of high-voltage systems. Jayesh leads the Master Garage, ensuring every vehicle's health and performance is peak.",
    img: boyImg, // Default boy logo
    color: "from-red-600/20 to-red-900/20"
  },
  {
    name: "Krishna Patil",
    role: "Co-Founder & Logistics Head",
    icon: <Truck className="text-blue-500" />,
    bio: "Expert in vehicle transportation and sales strategies. Krishna bridges the gap between our tech and our elite customers.",
    img: krishnaImg, // Specific Krishna Patil logo
    connect: "https://www.linkedin.com/in/krishna-patil-rajput-b66b03340",
    profile: "https://krishna-patil-rajput.vercel.app/",
    color: "from-cyan-600/20 to-cyan-900/20"
  },
  {
    name: "Kashyap Jadhav",
    role: "Co-Founder & Business Manager",
    icon: <Briefcase className="text-purple-500" />,
    bio: "Showroom operations and financial mastermind. Kashyap ensures seamless transactions and robust business growth.",
    img: boyImg, // Default boy logo
    color: "from-purple-600/20 to-purple-900/20"
  },
  {
    name: "Shivhar Gundekar",
    role: "Co-Founder & Operations Director",
    icon: <UserCheck className="text-emerald-500" />,
    bio: "Guardian of showroom discipline and customer care. Shivhar maintains the high standards and elite hospitality of our brand.",
    img: boyImg, // Default boy logo
    color: "from-emerald-600/20 to-emerald-900/20"
  },
  {
    name: "Aditya Daund",
    role: "Chief Strategy Officer",
    icon: <TrendingUp className="text-orange-500" />,
    bio: "The mastermind behind market expansion. Aditya analyzes emerging trends to ensure Velocity Motors stays ahead of the electric curve.",
    img: boyImg,
    color: "from-orange-600/20 to-orange-900/20"
  },
  {
    name: "Vishal Sanap",
    role: "Head of R&D",
    icon: <Beaker className="text-indigo-500" />,
    bio: "Driving the future of EV innovation. Vishal oversees the Innovation Lab, turning cutting-edge concepts into road-ready reality.",
    img: boyImg,
    color: "from-indigo-600/20 to-indigo-900/20"
  },
  {
    name: "Vaibhav Jadhav",
    role: "Customer Experience Lead",
    icon: <MessageSquare className="text-pink-500" />,
    bio: "The voice of our riders. Vaibhav ensures every interaction with Velocity Motors is as smooth and powerful as our vehicles.",
    img: boyImg,
    color: "from-pink-600/20 to-pink-900/20"
  }
];

const Team = () => {
  useEffect(() => {
    gsap.fromTo(".member-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black overflow-x-hidden">
      <div className="container mx-auto">
        <header className="text-center mb-24">
          <span className="outfit text-primary font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">The Founding Alliance</span>
          <h1 className="outfit text-5xl md:text-[8vw] font-black italic tracking-tighter mb-6 uppercase">THE <span className="gradient-text">FOUNDERS</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto italic leading-relaxed">The visionary force behind Velocity Motors. Five leaders, one unified mission.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch mb-24">
          {team.map((m, i) => (
            <div key={i} className={`member-card group relative glass p-8 rounded-[3rem] border border-white/5 hover-card flex flex-col h-full overflow-hidden bg-gradient-to-br ${m.color} hover:shadow-[0_0_50px_rgba(0,122,255,0.15)] transition-all duration-500`}>
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {m.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full text-white">
                <div className="w-24 h-24 rounded-3xl overflow-hidden mb-8 border border-white/10 group-hover:border-primary transition-colors shrink-0 shadow-2xl">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <h3 className="outfit text-2xl font-black italic mb-2 tracking-tight uppercase leading-none text-white">{m.name}</h3>
                <p className="text-primary font-black tracking-widest text-[10px] uppercase mb-6">{m.role}</p>

                <p className="text-gray-300 text-sm italic leading-relaxed mb-8 flex-grow">"{m.bio}"</p>

                {m.connect && m.profile ? (
                  <div className="pt-8 border-t border-white/5 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <a href={m.connect} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors text-white">Connect</a>
                    <div className="w-[1px] h-3 bg-white/10"></div>
                    <a href={m.profile} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors text-white">Profile</a>
                  </div>
                ) : (
                  <div className="pt-8 border-t border-white/5 opacity-30 italic text-[10px] uppercase tracking-widest font-bold text-white">
                    Founding Member
                  </div>
                )}
              </div>

              <span className="absolute -bottom-10 -right-4 text-9xl font-black italic text-white/5 select-none pointer-events-none">{i+1}</span>
            </div>
          ))}
        </div>

        {/* FORCE STATS - THE GROWTH ENGINE */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="outfit text-4xl md:text-6xl font-black italic uppercase mb-4 tracking-tighter">THE <span className="gradient-text">FORCE</span> IMPACT</h2>
            <p className="text-gray-500 italic">Quantifying the revolution, one kilometer at a time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Total Kms Electrified", val: "1.2M+", sub: "Pure Clean Energy" },
              { label: "CO2 Emissions Saved", val: "450 Tons", sub: "Carbon Offset" },
              { label: "Active Riders in Nashik", val: "5,000+", sub: "Growing Alliance" }
            ].map((stat, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border border-white/5 text-center group hover:border-primary transition-all">
                <p className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-4">{stat.label}</p>
                <p className="text-6xl font-black italic text-white group-hover:text-primary transition-colors mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold text-primary italic uppercase tracking-tighter">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JOIN THE REVOLUTION - LEAD CAPTURE */}
        <div className="mt-32 p-12 md:p-20 bg-gradient-to-br from-primary/20 to-transparent rounded-[4rem] border border-primary/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="outfit text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter">JOIN THE <br/><span className="gradient-text">REVOLUTION</span></h2>
              <p className="text-gray-300 text-lg italic leading-relaxed">Be the first to get exclusive access to our prototypes, test drive events, and the future of mobility. No spam, just pure velocity.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-black/50 border border-white/10 rounded-full px-8 py-4 text-white outfit focus:outline-none focus:border-primary w-full sm:w-80"
              />
              <button className="bg-primary text-black font-black uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-colors">
                IGNITE
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full group-hover:bg-primary/20 transition-all"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;
