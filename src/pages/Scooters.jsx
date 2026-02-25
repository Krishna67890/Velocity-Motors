import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Battery, Zap, Clock, Star, ShieldCheck, Heart, Search, ChevronRight, Info, Wrench } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const electricScooters = [
  { id: 1, name: "S-Core Lite", price: "₹65,000", range: "120km", speed: "85km/h", rating: 4.8, reviews: "3.2k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000", desc: "Smart, efficient urban mobility for the modern city.", guidance: "Best for short daily commutes." },
  { id: 2, name: "Thunder-S Pro", price: "₹92,000", range: "180km", speed: "110km/h", rating: 4.9, reviews: "1.5k", type: "Performance", year: 2024, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1000", desc: "Enhanced range and power for demanding city commutes.", guidance: "Ideal for long-distance city travel." },
  { id: 3, name: "City Glider V3", price: "₹1,15,000", range: "210km", speed: "125km/h", rating: 5.0, reviews: "820", type: "Premium", year: 2024, img: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=1000", desc: "The ultimate premium scooter experience with cutting-edge tech.", guidance: "For those who want the best in class." },
  { id: 4, name: "Eco-Mover 1", price: "₹45,000", range: "80km", speed: "45km/h", rating: 4.5, reviews: "5k+", type: "Eco", year: 2023, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000", desc: "Affordable and reliable entry-level electric scooter.", guidance: "Budget conscious urban mobility." },
  { id: 5, name: "Zenith S-Series", price: "₹1,45,000", range: "250km", speed: "135km/h", rating: 4.9, reviews: "300", type: "Elite", year: 2024, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1000", desc: "Luxury scooter with intelligent navigation and safety features.", guidance: "Elite city professionals." },
  { id: 6, name: "Nova Glide", price: "₹78,000", range: "150km", speed: "95km/h", rating: 4.7, reviews: "2.1k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000", desc: "Nimble and quick, perfect for navigating traffic.", guidance: "Agile urban navigation." },
  { id: 7, name: "Titan S-SUV", price: "₹1,85,000", range: "300km", speed: "140km/h", rating: 5.0, reviews: "150", type: "Rugged", year: 2024, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000", desc: "Dual-motor scooter built for all-terrain city dominance.", guidance: "Rugged urban adventure." },
  { id: 8, name: "Apex S-GTR", price: "₹2,25,000", range: "280km", speed: "160km/h", rating: 5.0, reviews: "Exclusive", type: "Hyper-Scooter", year: 2025, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000", desc: "The Bugatti of scooters. Pure speed and style.", guidance: "Performance enthusiasts only." },
  { id: 9, name: "Pulse Mini", price: "₹55,000", range: "100km", speed: "70km/h", rating: 4.6, reviews: "4k", type: "City", year: 2023, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=1000", desc: "Compact and foldable for ultimate urban convenience.", guidance: "Last-mile connectivity." },
  { id: 10, name: "Swift Air", price: "₹88,000", range: "160km", speed: "100km/h", rating: 4.8, reviews: "1.8k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=1000&q=80", desc: "Lightweight aerospace-grade frame for maximum efficiency.", guidance: "Tech-savvy commuters." }
];

const Scooters = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredScooters = electricScooters.filter(s =>
    (filter === 'All' || s.type === filter) &&
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'City', 'Performance', 'Premium', 'Eco', 'Elite', 'Hyper-Scooter'];

  useEffect(() => {
    gsap.from(".scooter-reveal", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".scooter-grid",
        start: "top 80%"
      }
    });
  }, [filter, search]);

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6">
            CITY <span className="gradient-text">SCOOTERS</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl italic font-medium">Smart, fast, and stylish urban mobility solutions for India.</p>
        </header>

        {/* Search & Filter */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search by model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 py-4 pl-16 pr-6 rounded-2xl focus:border-primary outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-white/5 border border-white/10 hover:border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="scooter-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredScooters.map((s) => (
            <div key={s.id} className="scooter-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">

              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>

                <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/10">
                   <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,122,255,0.5)]">
                      <Zap className="text-white fill-white" size={16} />
                   </div>
                   <span className="text-[9px] font-black tracking-widest uppercase">Velocity</span>
                </div>

                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} />
                   <span className="font-bold text-sm">{s.rating}</span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter leading-tight">{s.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase">{s.type} SERIES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Starting At</p>
                    <p className="text-3xl font-black italic gradient-text">{s.price}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2">"{s.desc}"</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Zap className="text-accent" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">Range</p>
                      <p className="text-lg font-black italic">{s.range}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Battery className="text-secondary" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">Top Speed</p>
                      <p className="text-lg font-black italic">{s.speed}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                  <Link to="/book" className="flex-1 btn-primary justify-center group py-4">
                    <span>BOOK NOW</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                  <button
                    onClick={() => navigate('/garage')}
                    className="w-full py-4 border border-primary/20 hover:border-primary/50 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 bg-primary/5 hover:bg-primary/10"
                  >
                    <Wrench size={14} className="text-primary" />
                    Customize with Jayesh Gangurde
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
