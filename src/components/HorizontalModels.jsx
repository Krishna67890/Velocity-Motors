import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const models = [
  {
    name: "VELOCITY V1",
    year: "2024",
    price: "₹8.5L",
    range: "500KM",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2070",
    color: "#007AFF",
    type: "hyper-ev"
  },
  {
    name: "X-HYBRID GT",
    year: "2024",
    price: "₹6.2L",
    range: "850KM",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070",
    color: "#7000FF",
    type: "grand tourer"
  },
  {
    name: "CITY CORE",
    year: "2025",
    price: "₹4.8L",
    range: "300KM",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2070",
    color: "#00F2FF",
    type: "urban-shuttle"
  }
];

const HorizontalModels = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: "-200vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 1,
            pin: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="overflow-hidden bg-black">
      <div
        ref={sectionRef}
        className="flex h-screen w-[300vw] relative"
      >
        {models.map((model, index) => (
          <section
            key={index}
            className="h-screen w-screen flex items-center justify-center p-6 md:p-20 relative border-r border-white/5"
          >
            <div className="absolute top-20 left-10 md:left-20 z-10">
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase block mb-4">
                Architecture 0{index + 1} // {model.type}
              </span>
              <h3 className="text-5xl md:text-[10rem] font-black italic tracking-tighter leading-none reveal-text">
                {model.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full gap-20 items-center">
               <div className="relative flex flex-col justify-end pb-10 order-2 md:order-1 max-w-xl">
                  <div className="flex gap-12 mb-12">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Starting</p>
                      <p className="text-4xl font-black italic">{model.price}</p>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10"></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-2">Efficiency</p>
                      <p className="text-4xl font-black italic">{model.range}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/cars')}
                    className="group flex items-center gap-4 text-white hover:text-primary transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                      <ArrowUpRight className="text-white group-hover:text-black transition-colors" />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest">Configure Model</span>
                  </button>
               </div>

               <div className="relative order-1 md:order-2 h-2/3 md:h-full flex items-center">
                 <div className="car-image-container relative w-full h-[60%] md:h-[70%] group">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1s] rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                 </div>
               </div>
            </div>

            <div className="absolute bottom-10 right-10 text-[8vw] font-black italic text-white/5 select-none uppercase">
              {model.year}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default HorizontalModels;
