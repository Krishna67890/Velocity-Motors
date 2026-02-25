import { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".reveal", { y: 100, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out" });
  }, []);

  return (
    <div className="pt-40 pb-20 px-10 min-h-screen bg-black">
      <div className="container mx-auto">
        <h1 className="reveal text-8xl md:text-[12rem] font-black italic tracking-tighter leading-none mb-20">
          THE <span className="gradient-text">FUTURE</span> <br /> OF MOBILITY.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal space-y-10">
            <p className="text-3xl md:text-5xl font-bold italic leading-tight text-white/90">
              Velocity Motors is not just a brand; it's a movement towards a cleaner, faster, and smarter India.
            </p>
            <div className="h-[2px] w-20 bg-primary"></div>
          </div>

          <div className="reveal space-y-8">
            <p className="text-gray-400 text-xl leading-relaxed italic">
              Founded on the principles of sustainability and high-performance engineering, we are rewriting the rules of the Indian automotive industry. Our journey began with a simple question: Why should electric power be a compromise?
            </p>
            <p className="text-gray-400 text-xl leading-relaxed italic">
              Today, led by Yash Baviskar and powered by the technical genius of Jayesh Gangurde, we deliver an ecosystem where luxury meets affordability, and performance meets responsibility.
            </p>
          </div>
        </div>

        <div className="reveal mt-32 grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { label: "Founded", val: "2024" },
             { label: "Vision", val: "Clean India" },
             { label: "Technology", val: "V-Core 3.0" }
           ].map((stat, i) => (
             <div key={i} className="p-10 border border-white/5 rounded-[3rem] bg-white/5">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4 font-bold">{stat.label}</p>
                <p className="text-5xl font-black italic">{stat.val}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default About;
