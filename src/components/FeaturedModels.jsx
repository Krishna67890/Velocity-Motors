import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cars = [
  {
    id: 1,
    name: 'V-Volt Pro',
    type: 'Full Electric',
    price: '₹8.5 Lakh',
    range: '450 km',
    topSpeed: '160 km/h',
    color: 'from-blue-600 to-cyan-500'
  },
  {
    id: 2,
    name: 'V-Hybrid X',
    type: 'Hybrid',
    price: '₹6.2 Lakh',
    range: '850 km',
    topSpeed: '145 km/h',
    color: 'from-purple-600 to-pink-500'
  },
  {
    id: 3,
    name: 'V-City Go',
    type: 'Compact EV',
    price: '₹4.8 Lakh',
    range: '250 km',
    topSpeed: '110 km/h',
    color: 'from-emerald-600 to-teal-500'
  }
];

const FeaturedModels = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });
  }, []);

  return (
    <section id="models" ref={sectionRef} className="py-32 px-10 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">FEATURED <span className="text-primary italic">MODELS</span></h2>
            <p className="text-gray-400 max-w-lg">Designed for performance, engineered for sustainability. Explore our latest lineup of high-performance electric and hybrid vehicles.</p>
          </div>
          <button className="hidden md:block text-sm font-bold tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-primary transition-colors">
            View All Models
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cars.map((car, index) => (
            <div
              key={car.id}
              ref={el => cardRefs.current[index] = el}
              className="group relative bg-[#111] border border-white/5 rounded-3xl p-8 car-card-hover overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${car.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`}></div>

              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">{car.type}</span>
                <h3 className="text-3xl font-black mt-2 mb-6">{car.name}</h3>

                {/* Simplified Car Illustration */}
                <div className="h-48 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                   <div className={`w-full h-24 bg-gradient-to-r ${car.color} rounded-full opacity-20 relative`}>
                      <div className="absolute inset-0 flex items-center justify-center font-black text-4xl opacity-10 italic">VELOCITY</div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Range</p>
                    <p className="text-xl font-bold">{car.range}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-bold mb-1">Top Speed</p>
                    <p className="text-xl font-bold">{car.topSpeed}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-2xl font-black text-white">{car.price}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
