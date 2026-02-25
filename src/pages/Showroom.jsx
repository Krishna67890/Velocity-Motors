import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bike, Car, Truck, Zap } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: "Velocity V-Pro",
    category: "Electric Car",
    price: "₹8.5L",
    range: "500km",
    speed: "180km/h",
    image: "https://images.unsplash.com/photo-1617788138017-80ad42243c7d?auto=format&fit=crop&q=80&w=2070",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    name: "Thunder-E Bike",
    category: "Electric Bike",
    price: "₹1.5L",
    range: "150km",
    speed: "110km/h",
    image: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2070",
    color: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    name: "City Scooter X",
    category: "Electric Scooter",
    price: "₹75K",
    range: "120km",
    speed: "85km/h",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2070",
    color: "from-emerald-600 to-teal-500"
  },
  {
    id: 4,
    name: "Volt-Truck GT",
    category: "Heavy Motor",
    price: "₹18L",
    range: "400km",
    speed: "120km/h",
    image: "https://images.unsplash.com/photo-1606160332349-436f56858e3f?auto=format&fit=crop&q=80&w=2070",
    color: "from-red-600 to-orange-500"
  }
];

const Showroom = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(".vehicle-card", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    });
  }, []);

  return (
    <div className="pt-32 pb-20 px-10 min-h-screen bg-black">
      <div className="container mx-auto">
        <header className="mb-20">
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter mb-4">OUR <span className="gradient-text">GARAGE</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl italic">Explore the widest range of high-performance electric vehicles in India. From daily commutes to heavy-duty motors.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {vehicles.map((v) => (
            <div key={v.id} className="vehicle-card group relative bg-[#0a0a0a] rounded-[3rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
              </div>

              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 block">{v.category}</span>
                    <h3 className="text-4xl font-black italic uppercase tracking-tighter">{v.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 font-bold">Starting At</p>
                    <p className="text-3xl font-black text-white">{v.price}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10 p-6 bg-white/5 rounded-2xl">
                   <div className="text-center">
                     <Zap className="w-5 h-5 text-accent mx-auto mb-2" />
                     <p className="text-xs text-gray-500 uppercase font-bold">Range</p>
                     <p className="font-bold">{v.range}</p>
                   </div>
                   <div className="text-center border-x border-white/10">
                     <Car className="w-5 h-5 text-accent mx-auto mb-2" />
                     <p className="text-xs text-gray-500 uppercase font-bold">Speed</p>
                     <p className="font-bold">{v.speed}</p>
                   </div>
                   <div className="text-center">
                     <Bike className="w-5 h-5 text-accent mx-auto mb-2" />
                     <p className="text-xs text-gray-500 uppercase font-bold">Smart Tech</p>
                     <p className="font-bold">vLink 2.0</p>
                   </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">Book Now</button>
                  <button className="px-8 py-4 border border-white/10 hover:border-white rounded-full transition-all">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showroom;
