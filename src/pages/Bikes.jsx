import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Zap, ShieldCheck, Gauge, Star, Info, ChevronRight, Search, Award, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local bike assets
import bikeMain from '../../Assets/electric bike.jpg';
import bike2 from '../../Assets/electric bike 2.jpg';

const electricBikes = [
  { id: 1, name: "Thunder-E 500", price: "₹1.45L", range: "180km", accel: "3.2s", rating: 4.9, reviews: "2.1k", type: "Sport", year: 2024, img: bikeMain, desc: "A high-performance street machine for thrill-seekers.", guidance: "Perfect for weekend rides." },
  { id: 2, name: "Volt-X Street", price: "₹1.15L", range: "150km", accel: "4.5s", rating: 4.7, reviews: "1.2k", type: "City", year: 2024, img: bike2, desc: "The perfect urban commuter bike. Lightweight and agile.", guidance: "Ideal for daily city commutes." },
  { id: 3, name: "Nexus Phantom", price: "₹1.85L", range: "220km", accel: "2.9s", rating: 5.0, reviews: "850", type: "Touring", year: 2024, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800", desc: "Flagship touring bike. Premium comfort.", guidance: "Best for road trips." },
  { id: 4, name: "V-Moto Elite", price: "₹3.50L", range: "250km", accel: "2.5s", rating: 5.0, reviews: "Exclusive", type: "Superbike", year: 2025, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800", desc: "Neural motor control and carbon frame.", guidance: "Elite performance." },
  { id: 5, name: "Velocity Classic-B", price: "₹85k", range: "120km", accel: "6.5s", rating: 4.5, reviews: "10k+", type: "Heritage", year: 2019, img: "https://images.unsplash.com/photo-1511919884226-fd3ca3a0ac00?auto=format&fit=crop&q=80&w=800", desc: "The original electric motorcycle pioneer.", guidance: "Rare collector item." }
];

const Bikes = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredBikes = electricBikes.filter(bike =>
    (filter === 'All' || bike.type === filter) &&
    bike.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'Sport', 'Touring', 'Heritage', 'Superbike', 'City'];

  useEffect(() => {
    gsap.from(".bike-reveal", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: { trigger: ".bike-grid", start: "top 80%" }
    });
  }, [filter, search]);

  const handleBookNow = (bike) => {
    navigate('/book', { state: { vehicle: bike } });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6 text-center">
            THE <span className="gradient-text">ELECTRIC</span> BIKES
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3 text-white">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search bike model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 py-4 pl-16 pr-6 rounded-2xl focus:border-primary outline-none transition-all text-white"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-[#111] border border-white/10 hover:border-white/20'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="bike-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredBikes.map((bike) => (
            <div key={bike.id} className="bike-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <img src={bike.img} alt={bike.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/10">
                   <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,122,255,0.5)]"><Zap className="text-white fill-white" size={16} /></div>
                   <span className="text-[9px] font-black tracking-widest uppercase text-white">Velocity</span>
                </div>
                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} /><span className="font-bold text-sm text-white">{bike.rating}</span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter leading-tight text-white">{bike.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase">{bike.type} SERIES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Starting At</p>
                    <p className="text-3xl font-black italic gradient-text">{bike.price}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2">"{bike.desc}"</p>
                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                  <button onClick={() => handleBookNow(bike)} className="w-full btn-primary justify-center group py-4 flex items-center gap-2 text-white">
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

export default Bikes;
