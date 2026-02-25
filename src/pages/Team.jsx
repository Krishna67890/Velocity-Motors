import { useEffect } from 'react';
import gsap from 'gsap';
import { Shield, Wrench, Truck, Briefcase, UserCheck } from 'lucide-react';

const team = [
  {
    name: "Yash Baviskar",
    role: "Founder & Visionary Leader",
    icon: <Shield className="text-primary" />,
    bio: "The primary architect of Velocity Motors, driving the mission to electrify every Indian household with sustainable luxury.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974",
    color: "from-blue-600/20 to-blue-900/20"
  },
  {
    name: "Jayesh Gangurde",
    role: "Co-Founder & Technical Lead",
    icon: <Wrench className="text-accent" />,
    bio: "Master of high-voltage systems. Jayesh leads the Master Garage, ensuring every vehicle's health and performance is peak.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974",
    color: "from-red-600/20 to-red-900/20"
  },
  {
    name: "Krishna Patil",
    role: "Co-Founder & Logistics Head",
    icon: <Truck className="text-blue-500" />,
    bio: "Expert in vehicle transportation and sales strategies. Krishna bridges the gap between our tech and our elite customers.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974",
    connect: "https://github.com/krishna67890",
    profile: "https://krishna-patil-rajput.vercel.app/",
    color: "from-cyan-600/20 to-cyan-900/20"
  },
  {
    name: "Kashyap Jadhav",
    role: "Co-Founder & Business Manager",
    icon: <Briefcase className="text-purple-500" />,
    bio: "Showroom operations and financial mastermind. Kashyap ensures seamless transactions and robust business growth.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1974",
    color: "from-purple-600/20 to-purple-900/20"
  },
  {
    name: "Shivhar Gundekar",
    role: "Co-Founder & Operations Director",
    icon: <UserCheck className="text-emerald-500" />,
    bio: "Guardian of showroom discipline and customer care. Shivhar maintains the high standards and elite hospitality of our brand.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974",
    color: "from-emerald-600/20 to-emerald-900/20"
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 items-stretch">
          {team.map((m, i) => (
            <div key={i} className={`member-card group relative glass p-8 rounded-[3rem] border border-white/5 hover-card flex flex-col h-full overflow-hidden bg-gradient-to-br ${m.color}`}>
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                {m.icon}
              </div>

              <div className="relative z-10 flex flex-col h-full text-white">
                <div className="w-24 h-24 rounded-3xl overflow-hidden mb-8 border border-white/10 group-hover:border-primary transition-colors shrink-0 shadow-2xl">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <h3 className="outfit text-2xl font-black italic mb-2 tracking-tight uppercase leading-none">{m.name}</h3>
                <p className="text-primary font-black tracking-widest text-[10px] uppercase mb-6">{m.role}</p>

                <p className="text-gray-300 text-sm italic leading-relaxed mb-8 flex-grow">"{m.bio}"</p>

                {m.connect && m.profile ? (
                  <div className="pt-8 border-t border-white/5 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <a href={m.connect} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Connect</a>
                    <div className="w-[1px] h-3 bg-white/10"></div>
                    <a href={m.profile} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">Profile</a>
                  </div>
                ) : (
                  <div className="pt-8 border-t border-white/5 opacity-30 italic text-[10px] uppercase tracking-widest font-bold">
                    Founding Member
                  </div>
                )}
              </div>

              <span className="absolute -bottom-10 -right-4 text-9xl font-black italic text-white/5 select-none pointer-events-none">{i+1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
