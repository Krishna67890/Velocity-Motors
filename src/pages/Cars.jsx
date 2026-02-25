import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Zap, ShieldCheck, Gauge, Star, Info, ChevronRight, Search, Award, Wrench } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const electricCars = [
  // HYPER-EV (Most Expensive)
  { id: 1, name: "Velocity Vision-X", price: "₹45.0Cr", range: "950km", accel: "1.8s", rating: 5.0, reviews: "Exclusive", type: "Hyper-EV", year: 2025, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80", desc: "The Bugatti of EVs. Breaking laws of physics.", guidance: "Collector's only." },
  { id: 2, name: "V-Chiron Elite", price: "₹38.5Cr", range: "800km", accel: "1.9s", rating: 5.0, reviews: "Elite", type: "Hyper-EV", year: 2024, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80", desc: "Bugatti-inspired electric dominance.", guidance: "Absolute performance." },
  { id: 3, name: "Lambo-Volt SV", price: "₹22.0Cr", range: "600km", accel: "2.3s", rating: 4.9, reviews: "Prestige", type: "Hyper-EV", year: 2024, img: "https://images.unsplash.com/photo-1511919884226-fd3ca3a0ac00?auto=format&fit=crop&w=800&q=80", desc: "The iconic bull, now fully electric.", guidance: "Style & Speed." },
  { id: 4, name: "Aero-Bugatti E1", price: "₹32.0Cr", range: "700km", accel: "2.0s", rating: 5.0, reviews: "Limited", type: "Hyper-EV", year: 2024, img: "https://images.unsplash.com/photo-1603577372384-39fa4591ed2c?auto=format&fit=crop&w=800&q=80", desc: "Aerodynamic mastery from Bugatti tech.", guidance: "Precision engineering." },
  { id: 5, name: "Velocity Apex-Zero", price: "₹15.5Cr", range: "500km", accel: "2.1s", rating: 4.9, reviews: "Track", type: "Hyper-EV", year: 2024, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", desc: "Track-legal racing machine.", guidance: "Track enthusiasts." },

  // SPORT
  { id: 6, name: "Nova Sport-X", price: "₹1.8Cr", range: "480km", accel: "3.2s", rating: 4.8, reviews: "800", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80", desc: "Pure driving adrenaline.", guidance: "Spirited driving." },
  { id: 7, name: "Pulse Z-Turbo", price: "₹1.4Cr", range: "500km", accel: "3.4s", rating: 4.8, reviews: "New", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=800&q=80", desc: "High-frequency precision.", guidance: "Tech-first drivers." },
  { id: 8, name: "V-Coupe GT", price: "₹2.2Cr", range: "550km", accel: "3.0s", rating: 4.9, reviews: "700", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80", desc: "Stylized electric power.", guidance: "Statement makers." },
  { id: 9, name: "Apex GTR-E", price: "₹3.5Cr", range: "500km", accel: "2.8s", rating: 4.9, reviews: "New", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1500337033310-94cf23204ec4?auto=format&fit=crop&w=800&q=80", desc: "Road legal electric racer.", guidance: "Racing DNA." },
  { id: 10, name: "Zenith Sport", price: "₹1.9Cr", range: "520km", accel: "3.5s", rating: 4.8, reviews: "500", type: "Sport", year: 2024, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80", desc: "Luxury meets speed.", guidance: "Balanced performance." },

  // SUV
  { id: 11, name: "Titan E-SUV Pro", price: "₹85L", range: "550km", accel: "4.5s", rating: 4.9, reviews: "450", type: "SUV", year: 2024, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80", desc: "Rugged off-road mastery.", guidance: "Adventure & family." },
  { id: 12, name: "Volt-X Explorer", price: "₹65L", range: "600km", accel: "5.2s", rating: 4.7, reviews: "1.2k", type: "SUV", year: 2024, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80", desc: "The ultimate family traveler.", guidance: "Comfort priority." },
  { id: 13, name: "Rex 4x4 Elite", price: "₹1.2Cr", range: "500km", accel: "4.9s", rating: 4.9, reviews: "300", type: "SUV", year: 2024, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80", desc: "Unlimited terrain capability.", guidance: "Extreme off-roaders." },
  { id: 14, name: "Fusion X-Large", price: "₹72L", range: "480km", accel: "4.5s", rating: 4.7, reviews: "1.5k", type: "SUV", year: 2023, img: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80", desc: "Flexible cargo & elite range.", guidance: "Active lifestyles." },
  { id: 15, name: "Matrix SUV", price: "₹55L", range: "450km", accel: "5.8s", rating: 4.6, reviews: "900", type: "SUV", year: 2024, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", desc: "Urban SUV dominance.", guidance: "Daily family commute." },

  // SEDAN
  { id: 16, name: "Apex E-Sedan", price: "₹45L", range: "520km", accel: "4.2s", rating: 4.8, reviews: "1.2k", type: "Sedan", year: 2024, img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800&q=80", desc: "Perfect executive drive.", guidance: "Business professionals." },
  { id: 17, name: "Model-S Neo", price: "₹38L", range: "450km", accel: "4.8s", rating: 4.7, reviews: "1.8k", type: "Sedan", year: 2024, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80", desc: "Minimalist smart sedan.", guidance: "City professionals." },
  { id: 18, name: "Aero Prime Plus", price: "₹52L", range: "600km", accel: "4.0s", rating: 4.8, reviews: "2.1k", type: "Sedan", year: 2024, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80", desc: "Aerodynamic perfection.", guidance: "Efficiency seekers." },
  { id: 19, name: "Luna Glide Elite", price: "₹42L", range: "420km", accel: "5.2s", rating: 4.6, reviews: "1.1k", type: "Sedan", year: 2022, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", desc: "Silent smooth drive.", guidance: "Quiet comfort." },
  { id: 20, name: "Velocity Core Sedan", price: "₹32L", range: "400km", accel: "5.5s", rating: 4.5, reviews: "3k", type: "Sedan", year: 2023, img: "https://images.unsplash.com/photo-1511919884226-fd3ca3a0ac00?auto=format&fit=crop&w=800&q=80", desc: "Core electric values.", guidance: "Value-focused buyers." },

  // CITY
  { id: 21, name: "Matrix Air", price: "₹18L", range: "380km", accel: "5.5s", rating: 4.6, reviews: "3.1k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80", desc: "Urban agility redefined.", guidance: "City commuters." },
  { id: 22, name: "Swift E-Z", price: "₹12L", range: "320km", accel: "6.0s", rating: 4.5, reviews: "2.8k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80", desc: "Nimble city hot-hatch.", guidance: "Youthful urbanites." },
  { id: 23, name: "Spark City Gen-2", price: "₹9L", range: "250km", accel: "8.5s", rating: 4.3, reviews: "8k+", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80", desc: "Ultra-compact parking king.", guidance: "Tight city spaces." },
  { id: 24, name: "Urban One Pro", price: "₹15L", range: "350km", accel: "6.5s", rating: 4.4, reviews: "3.5k", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80", desc: "Reliable city partner.", guidance: "Daily budget drive." },
  { id: 25, name: "Eco Mini", price: "₹8L", range: "220km", accel: "9.0s", rating: 4.2, reviews: "New", type: "City", year: 2024, img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80", desc: "Small footprint, big impact.", guidance: "Eco-conscious city." },

  // LUXURY
  { id: 26, name: "Zenith Voyager Max", price: "₹3.2Cr", range: "700km", accel: "3.8s", rating: 4.9, reviews: "600", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80", desc: "The lounge on wheels.", guidance: "Elite comfort." },
  { id: 27, name: "Prime Elite Flagship", price: "₹4.5Cr", range: "800km", accel: "3.2s", rating: 5.0, reviews: "Elite", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80", desc: "Pinnacle of Velocity engineering.", guidance: "No-compromise luxury." },
  { id: 28, name: "V-President Edition", price: "₹5.8Cr", range: "650km", accel: "4.0s", rating: 5.0, reviews: "Exclusive", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80", desc: "Bespoke executive lounge.", guidance: "VVIP transport." },
  { id: 29, name: "Phantom E-GT", price: "₹3.9Cr", range: "600km", accel: "3.5s", rating: 4.9, reviews: "New", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80", desc: "Ghostly silent, godly fast.", guidance: "Quiet authority." },
  { id: 30, name: "Solaris Royal", price: "₹2.8Cr", range: "Solar Unlimited", accel: "5.5s", rating: 4.8, reviews: "New", type: "Luxury", year: 2024, img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800&q=80", desc: "Luxury powered by the sun.", guidance: "Sustainable royalty." }
];

const Cars = () => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filteredCars = electricCars.filter(car =>
    (filter === 'All' || car.type === filter) &&
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  const categories = ['All', 'Hyper-EV', 'SUV', 'Sedan', 'Luxury', 'Sport', 'City'];

  useEffect(() => {
    gsap.from(".car-reveal", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".car-grid",
        start: "top 80%"
      }
    });
  }, [filter, search]);

  const handleBookNow = (car) => {
    navigate('/book', { state: { vehicle: car } });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white">
      <div className="container mx-auto">
        <header className="mb-16">
          <h1 className="outfit text-6xl md:text-[8vw] font-black italic tracking-tighter uppercase leading-none mb-6">
            THE <span className="gradient-text">ELECTRIC</span> CATALOG
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl italic font-medium">Discover over 30 precision-engineered electric masterpieces.</p>
        </header>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20 items-center justify-between glass p-8 rounded-[2.5rem] border-white/5 sticky top-24 z-40 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search by model..."
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

        <div className="car-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-reveal group relative flex flex-col bg-[#0a0a0a] rounded-[3.5rem] border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-2xl">

              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
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
                   <span className="text-[9px] font-black tracking-widest uppercase">Velocity</span>
                </div>

                {/* Rating */}
                <div className="absolute top-8 right-8 glass px-4 py-2 rounded-2xl border-white/10 flex items-center gap-2">
                   <Star className="text-yellow-500 fill-yellow-500" size={14} />
                   <span className="font-bold text-sm text-white">{car.rating}</span>
                </div>

                {/* Status Badge */}
                {car.year === 2024 && (
                  <div className="absolute bottom-8 left-8 flex items-center gap-2 bg-primary/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-primary/30">
                    <Award className="text-primary" size={12} />
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest">2024 Edition</span>
                  </div>
                )}
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

                <p className="text-gray-400 text-sm italic mb-8 leading-relaxed line-clamp-2">"{car.desc}"</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Zap className="text-accent" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">Range</p>
                      <p className="text-lg font-black italic text-white">{car.range}</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-3xl flex items-center gap-4">
                    <Gauge className="text-secondary" size={20} />
                    <div>
                      <p className="text-[8px] text-gray-500 font-bold uppercase leading-none mb-1">0-100</p>
                      <p className="text-lg font-black italic text-white">{car.accel}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
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

export default Cars;
