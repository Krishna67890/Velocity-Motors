import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Leaf, ShieldCheck, Zap, Globe } from 'lucide-react';

const usps = [
  {
    icon: <Leaf className="w-12 h-12 text-green-500" />,
    title: 'Eco-Friendly',
    description: 'Zero emissions, 100% electric. Our cars are built with sustainable materials for a cleaner tomorrow.'
  },
  {
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    title: 'High Performance',
    description: 'Instant torque and smooth acceleration. Experience the power of advanced EV technology.'
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    title: 'Affordable Luxury',
    description: 'Premium features at an accessible price. We believe luxury should be available to everyone.'
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: 'Nationwide Service',
    description: 'With over 500+ service centers across India, help is always just a few kilometers away.'
  }
];

const USP = () => {
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    gsap.from(itemRefs.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      }
    });
  }, []);

  return (
    <section id="usp" ref={sectionRef} className="py-32 px-10 bg-[#050505]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {usps.map((usp, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="group p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {usp.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{usp.title}</h3>
              <p className="text-gray-400 leading-relaxed italic">
                "{usp.description}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
