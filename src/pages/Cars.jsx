import { useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ShieldCheck, Gauge, Star, Info, ChevronRight, Search, Award, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import local assets
import carMain from '../../Assets/electric Cars.jpg';
import car1 from '../../Assets/electric car 1.jpg';
import car3 from '../../Assets/electric car 3.jpg';
import car4 from '../../Assets/electric car 4.jpg';
import carSingle from '../../Assets/electric Car.jpg';

const electricCars = [
  // HYPER-EV (Balanced Premium Indian Pricing)
  { id: 1, name: "Velocity Vision-X", price: "₹85.0L", range: "950km", accel: "1.8s", rating: 5.0, reviews: "Exclusive", type: "Hyper-EV", year: 2025, img: carMain, desc: "Our flagship hyper-EV. Breaking laws of physics.", guidance: "Collector's only." },
  { id: 2, name: "V-Chiron Elite", price: "₹72.5L", range: "800km", accel: "1.9s", rating: 5.0, reviews: "Elite", type: "Hyper-EV", year: 2024, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80", desc: "Bugatti-inspired electric dominance.", guidance: "Absolute performance." },
  { id: 3, name: "Lambo-Volt SV", price: "₹68.0L", range: "600km", accel: "2.3s", rating: 4.9, reviews: "Prestige", type: "Hyper-EV", year: 2024, img: car1, desc: "The iconic bull, now fully electric.", guidance: "Style & Speed." },
  { id: 4, name: "Aero-Bugatti E1", price: "₹75.0L", range: "700km", accel: "2.0s", rating: 5.0, reviews: "Limited", type: "Hyper-EV", year: 2024, img: car3, desc: "Aerodynamic mastery from Bugatti tech.", guidance: "Precision engineering." },
  { id: 5, name: "Apex-Zero Track", price: "₹55.5L", range: "500km", accel: "2.1s", rating: 4.9, reviews: "Track", type: "Hyper-EV", year: 2024, img: car4, desc: "Track-legal racing machine.", guidance: "Track enthusiasts." },

  // SUV (Competitive Indian SUV Market)
  { id: 6, name: "Titan E-SUV Pro", price: "₹28.5L", range: "550km", accel: "4.5s", rating: 4.9, reviews: "450", type: "SUV", year: 2024, img: carSingle, desc: "Rugged off-road mastery.", guidance: "Adventure & family." },
  { id: 7, name: "Volt-X Explorer", price: "₹22.5L", range: "600km", accel: "5.2s", rating: 4.7, reviews: "1.2k", type: "SUV", year: 2024, img: carMain, desc: "The ultimate family traveler.", guidance: "Comfort priority." },
  { id: 8, name: "Fusion X-Large", price: "₹24.0L", range: "480km", accel: "4.5s", rating: 4.7, reviews: "1.5k", type: "SUV", year: 2023, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80", desc: "Flexible cargo & elite range.", guidance: "Active lifestyles." },

  // SEDAN (Premium Executive Range)
  { id: 9, name: "Apex E-Sedan", price: "₹18.5L", range: "520km", accel: "4.2s", rating: 4.8, reviews: "1.2k", type: "Sedan", year: 2024, img: car3, desc: "Perfect executive drive.", guidance: "Business professionals." },
  { id: 10, name: "Model-S Neo", price: "₹15.8L", range: "450km", accel: "4.8s", rating: 4.7, reviews: "1.8k", type: "Sedan", year: 2024, img: car4, desc: "Minimalist smart sedan.", guidance: "City professionals." },

  // SPORT (Accessible Performance)
  { id: 11, name: "Nova Sport-X", price: "₹32.5L", range: "480km", accel: "3.2s", rating: 4.8, reviews: "800", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1494976388531-d1058494ccc8?auto=format&fit=crop&w=1200&q=80", desc: "Pure driving adrenaline.", guidance: "Spirited driving." },
  { id: 12, name: "Pulse Z-Turbo", price: "₹28.4L", range: "500km", accel: "3.4s", rating: 4.8, reviews: "New", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=80", desc: "High-frequency precision.", guidance: "Tech-first drivers." },

  // CITY (Budget Friendly Indian Cities)
  { id: 13, name: "Matrix Air", price: "₹8.5L", range: "380km", accel: "5.5s", rating: 4.6, reviews: "3.1k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80", desc: "Urban agility redefined.", guidance: "City commuters." },
  { id: 14, name: "Eco Mini", price: "₹5.2L", range: "220km", accel: "9.0s", rating: 4.2, reviews: "New", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1525609002758-ad3019439c17?auto=format&fit=crop&w=1200&q=80", desc: "Small footprint, big impact.", guidance: "Eco-conscious city." },

  // LUXURY
  { id: 15, name: "Zenith Voyager Max", price: "₹42.5L", range: "700km", accel: "3.8s", rating: 4.9, reviews: "600", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=1200&q=80", desc: "The lounge on wheels.", guidance: "Elite comfort." },
  { id: 16, name: "Prime Elite Flagship", price: "₹52.0L", range: "800km", accel: "3.2s", rating: 5.0, reviews: "Elite", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80", desc: "Pinnacle of Velocity engineering.", guidance: "No-compromise luxury." }
];

const Cars = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredCars = useMemo(() => {
    return electricCars.filter(car =>
      (filter === 'All' || car.type === filter) &&
      car.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [filter, search]);

  const categories = ['All', 'Hyper-EV', 'SUV', 'Sedan', 'Luxury', 'Sport', 'City'];

  useEffect(() => {
    ScrollTrigger.getAll().forEach(t => t.kill());

    let ctx = gsap.context(() => {
      const targets = gsap.utils.toArray(".car-reveal");
      if (targets.length > 0) {
        gsap.from(targets, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".car-grid",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }
    });
    return () => ctx.revert();
  }, [filteredCars]);

  const handleBookNow = (car) => {
    navigate('/book', { state: { vehicle: car } });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6 text-white text-center">
            THE <span className="gradient-text">ELECTRIC</span> CATALOG
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl italic font-medium mx-auto text-center">Accessible luxury. Precision-engineered electric masterpieces for the Indian market.</p>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3 text-white">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search by model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black border border-white/10 py-4 pl-16 pr-6 rounded-2xl focus:border-primary outline-none transition-all text-white"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-[#111] border border-white/10 hover:border-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="car-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">

              <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>

                {/* Brand Emblem */}
                <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-2xl border-white/10">
                   <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,122,255,0.5)]">
                      <Zap className="text-white fill-white" size={16} />
                   </div>
                   <span className="text-[9px] font-black tracking-widest uppercase text-white">Velocity</span>
                </div>

                {/* Rating */}
                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} />
                   <span className="font-bold text-sm text-white">{car.rating}</span>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-10 flex flex-col flex-grow text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="outfit text-3xl font-black italic uppercase tracking-tighter leading-tight text-white">{car.name}</h3>
                    <p className="text-[10px] text-primary font-bold tracking-widest mt-1 uppercase">{car.type} SERIES</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-none mb-1">Starting At</p>
                    <p className="text-3xl font-black italic gradient-text">{car.price}</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2 text-white">"{car.desc}"</p>

                <div className="grid grid-cols-2 gap-4 mb-8 text-white">
                  <div className="bg-black border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Zap className="text-accent" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">Range</p>
                      <p className="text-lg font-black italic text-white">{car.range}</p>
                    </div>
                  </div>
                  <div className="bg-black border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Gauge className="text-secondary" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">0-100</p>
                      <p className="text-lg font-black italic text-white">{car.accel}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-4 pt-8 border-t border-white/5">
                  <button
                    onClick={() => handleBookNow(car)}
                    className="w-full btn-primary justify-center group py-4 flex items-center gap-2"
                  >
                    <span className="font-black italic uppercase text-sm tracking-tighter">BOOK NOW</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                  <button
                    onClick={() => navigate('/garage')}
                    className="w-full py-4 border border-white/10 hover:border-primary/50 rounded-full font-black text-[10px] tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 bg-[#111] hover:bg-primary/10 text-white"
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

export default Cars;
