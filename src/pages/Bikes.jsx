import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Zap, ShieldCheck, Gauge, Star, Info, ChevronRight, Search, Award, Wrench } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const electricBikes = [
  { id: 1, name: "Thunder-E 500", price: "₹1,85,000", range: "180km", accel: "3.2s", rating: 4.9, reviews: "2.1k", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=800", desc: "A high-performance street machine designed for thrill-seekers. Extreme torque and aggressive styling.", guidance: "Perfect for spirited weekend rides." },
  { id: 2, name: "Volt-X Street", price: "₹1,45,000", range: "150km", accel: "4.5s", rating: 4.7, reviews: "1.2k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?auto=format&fit=crop&q=80&w=800", desc: "The perfect urban commuter bike. Lightweight, agile, and incredibly easy to handle in traffic.", guidance: "Ideal for daily city commutes." },
  { id: 3, name: "Nexus Phantom", price: "₹2,10,000", range: "220km", accel: "2.9s", rating: 5.0, reviews: "850", type: "Touring", year: 2024, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800", desc: "Our flagship touring bike. Long-range battery and premium comfort for the ultimate road trip.", guidance: "Best for long-distance cruising." },
  { id: 4, name: "Aero-Sprint", price: "₹1,65,000", range: "160km", accel: "3.8s", rating: 4.8, reviews: "920", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800", desc: "Aerodynamic design meets electric efficiency. Built for speed and sharp handling.", guidance: "Balanced performance and style." },
  { id: 5, name: "Pulse-E Zero", price: "₹1,25,000", range: "140km", accel: "4.8s", rating: 4.6, reviews: "1.5k", type: "City", year: 2023, img: "https://images.unsplash.com/photo-1511919884226-fd3ca3a0ac00?auto=format&fit=crop&q=80&w=800", desc: "Nimble city commuter with enough tech to keep you connected.", guidance: "Affordable entry into electric bikes." },
  { id: 6, name: "V-Moto Elite", price: "₹3,50,000", range: "250km", accel: "2.5s", rating: 5.0, reviews: "Exclusive", type: "Superbike", year: 2025, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070", desc: "The future of superbikes. Neural motor control and carbon fiber frame.", guidance: "Performance enthusiasts only." },
  { id: 7, name: "Titan-B Offroad", price: "₹2,10,000", range: "170km", accel: "4.0s", rating: 4.9, reviews: "400", type: "Offroad", year: 2024, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800", desc: "Rugged electric dirt bike built for the toughest Indian terrains.", guidance: "For those who never stay on the road." },
  { id: 8, name: "Shadow-X Noir", price: "₹1,95,000", range: "190km", accel: "3.5s", rating: 4.8, reviews: "600", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80", desc: "Midnight edition with enhanced torque and stealth design.", guidance: "Style-conscious thrill seekers." },
  { id: 9, name: "Matrix Bike-Air", price: "₹1,10,000", range: "130km", accel: "5.2s", rating: 4.5, reviews: "2.8k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", desc: "Featherweight frame for maximum urban efficiency and ease.", guidance: "Perfect for budget commutes." },
  { id: 10, name: "Solaris Bike", price: "₹2,40,000", range: "Unlimited (Solar)", accel: "4.5s", rating: 4.9, reviews: "New", type: "Eco", year: 2024, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80", desc: "Integrated solar trickle charging during daytime parking.", guidance: "Eco-warriors and tech lovers." }
];

const Bikes = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredBikes = electricBikes.filter(bike =>
    (filter === 'All' || bike.type === filter) &&
    bike.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'Sport', 'City', 'Touring', 'Superbike', 'Offroad', 'Eco'];

  useEffect(() => {
    gsap.from(".bike-reveal", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".bike-grid",
        start: "top 80%"
      }
    });
  }, [filter, search]);

  const handleBookNow = (bike) => {
    navigate('/book', { state: { vehicle: bike } });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6">
            THE <span className="gradient-text text-primary">ELECTRIC</span> BIKES
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl italic font-medium text-white">Power, precision, and high-performance electric motorcycles.</p>
        </header>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search bike model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 py-4 pl-16 pr-6 rounded-2xl focus:border-primary outline-none transition-all text-white"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 border border-white/10 hover:border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="bike-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredBikes.map((bike) => (
            <div key={bike.id} className="bike-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">

              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={bike.img} alt={bike.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>

                {/* Brand Emblem */}
                <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/10">
                   <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,122,255,0.5)]">
                      <Zap className="text-white fill-white" size={16} />
                   </div>
                   <span className="text-[9px] font-black tracking-widest uppercase text-white">Velocity</span>
                </div>

                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} />
                   <span className="font-bold text-sm text-white">{bike.rating}</span>
                </div>

                {bike.year === 2024 && (
                  <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/30">
                    <Award className="text-primary" size={12} />
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest">2024 Edition</span>
                  </div>
                )}
              </div>

              <div className="p-10 flex flex-col flex-grow text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter leading-tight text-white">{bike.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase">{bike.type} SERIES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Starting At</p>
                    <p className="text-3xl font-black italic gradient-text text-white">{bike.price}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2 text-white">"{bike.desc}"</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4 text-white">
                    <Zap className="text-accent" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">Range</p>
                      <p className="text-lg font-black italic text-white">{bike.range}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4 text-white">
                    <Gauge className="text-secondary" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">0-100</p>
                      <p className="text-lg font-black italic text-white">{bike.accel}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                  <button
                    onClick={() => handleBookNow(bike)}
                    className="w-full btn-primary justify-center group py-4 flex items-center gap-2"
                  >
                    <span className="font-black italic uppercase text-sm tracking-tighter">BOOK NOW</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                  <button
                    onClick={() => navigate('/garage')}
                    className="w-full py-4 border border-primary/20 hover:border-primary/50 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 bg-primary/5 hover:bg-primary/10 text-white"
                  >
                    <Wrench size={14} className="text-primary" />
                    Repair / Customize with Jayesh
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
