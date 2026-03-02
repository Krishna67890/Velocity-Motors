import { useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Battery, Zap, Star, ChevronRight, Search, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local scooter assets
import scooterMain from '../../Assets/electric scooter.jpg';
import scootersAll from '../../Assets/electric scooters.jpg';
import scooter1 from '../../Assets/electric scooter 1.jpg';
import scooter2 from '../../Assets/electric scooter 2.jpg';
import scooter4 from '../../Assets/electric scooter 4.jpg';

const electricScooters = [
  { id: 1, name: "S-Core Lite", price: "₹45,000", range: "120km", speed: "85km/h", rating: 4.8, type: "City", img: scooterMain, desc: "Smart, efficient urban mobility for the modern city." },
  { id: 2, name: "Thunder-S Pro", price: "₹68,000", range: "180km", speed: "110km/h", rating: 4.9, type: "Performance", img: scooter1, desc: "Enhanced range and power for demanding city commutes." },
  { id: 3, name: "City Glider V3", price: "₹82,500", range: "210km", speed: "125km/h", rating: 5.0, type: "Premium", img: scooter2, desc: "The ultimate premium scooter experience with cutting-edge tech." },
  { id: 4, name: "Eco-Mover Elite", price: "₹55,000", range: "100km", speed: "65km/h", rating: 4.6, type: "Eco", img: scootersAll, desc: "Sustainability meets affordability in this sleek mover." },
  { id: 5, name: "Apex S-GTR", price: "₹1.25L", range: "280km", speed: "160km/h", rating: 5.0, type: "Hyper-Scooter", img: scooter4, desc: "Pure speed and style. The fastest urban scooter in its class." }
];

const Scooters = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredScooters = useMemo(() => {
    return electricScooters.filter(s =>
      (filter === 'All' || s.type === filter) &&
      s.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [filter, search]);

  useEffect(() => {
    gsap.from(".scooter-reveal", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: { trigger: ".scooter-grid", start: "top 80%" }
    });
  }, [filteredScooters]);

  const handleBookNow = (scooter) => {
    navigate('/book', { state: { vehicle: scooter } });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6 text-center">
            CITY <span className="gradient-text">SCOOTERS</span>
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search scooter model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 py-4 pl-16 pr-6 rounded-2xl focus:border-primary outline-none transition-all text-white"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {['All', 'City', 'Performance', 'Premium', 'Eco', 'Hyper-Scooter'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-[#111] border border-white/10 hover:border-white/20'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="scooter-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredScooters.map((s) => (
            <div key={s.id} className="scooter-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/10">
                   <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,122,255,0.5)]"><Zap className="text-white fill-white" size={16} /></div>
                   <span className="text-[9px] font-black tracking-widest uppercase text-white">Velocity</span>
                </div>
                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} /><span className="font-bold text-sm text-white">{s.rating}</span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter leading-tight text-white">{s.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase">{s.type} SERIES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Starting At</p>
                    <p className="text-3xl font-black italic text-white">{s.price}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2">"{s.desc}"</p>
                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                  <button onClick={() => handleBookNow(s)} className="w-full btn-primary justify-center group py-4 flex items-center gap-2 text-white">
                    <span className="font-black italic uppercase text-sm tracking-tighter">BOOK NOW</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                  <button onClick={() => navigate('/garage')} className="w-full py-4 border border-white/10 hover:border-primary/50 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 bg-[#111] hover:bg-primary/10 text-white">
                    <Wrench size={14} className="text-primary" />Repair / Customize
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

export default Scooters;
