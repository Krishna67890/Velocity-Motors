import { useEffect } from 'react';
import gsap from 'gsap';
import { HelpCircle, MessageCircle, Zap, ShieldCheck, Wrench, ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How long does a battery restoration take?", a: "With Jayesh Gangurde's neural re-balancing tech, most restorations are completed within 7-10 business days." },
  { q: "Can I customize my older model with V-Core 3.0?", a: "Yes, our Master Garage specializes in retrofitting heritage models with next-gen energy cores." },
  { q: "What is the warranty on structural repairs?", a: "Every restoration comes with a 5-year Velocity Certified Structural Warranty." },
  { q: "Is 24/7 roadside assistance included?", a: "Absolutely. All elite members have direct access to our emergency retrieval units across India." }
];

const CustomerQuestionAnswer = () => {
  useEffect(() => {
    gsap.from(".faq-reveal", { opacity: 0, y: 20, stagger: 0.1, duration: 0.8 });
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-4xl">
        <header className="text-center mb-20">
          <HelpCircle size={48} className="text-primary mx-auto mb-6" />
          <h1 className="outfit text-5xl md:text-7xl font-black italic uppercase tracking-tighter">TECH <span className="gradient-text">SUPPORT</span></h1>
          <p className="text-gray-500 text-xl italic mt-4">Direct answers for the electric elite.</p>
        </header>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="faq-reveal bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-center gap-6">
                <h3 className="text-xl font-black italic uppercase text-white group-hover:text-primary transition-colors">0{i+1}. {f.q}</h3>
                <ChevronDown className="text-gray-600 group-hover:text-white transition-all" />
              </div>
              <p className="mt-6 text-gray-400 italic leading-relaxed">"{f.a}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerQuestionAnswer;
