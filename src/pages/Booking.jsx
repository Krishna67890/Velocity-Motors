import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Send,
  CheckCircle,
  Car,
  Bike,
  Zap,
  MapPin,
  User,
  Phone,
  ChevronRight,
  ChevronLeft,
  QrCode,
  Home,
  Star,
  ArrowRight,
  Package,
  ShieldCheck
} from 'lucide-react';
import logoImg from '../../Assets/1000533341.jpg';

const models = {
  cars: [
    { id: 'v1-pro', name: 'Velocity V1-Pro', price: '₹12,50,000', range: '600km', rating: 4.9, desc: 'The pinnacle of electric luxury and performance.', img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80" },
    { id: 'model-s', name: 'Model-S Neo', price: '₹8,20,000', range: '450km', rating: 4.7, desc: 'Sleek, compact, and incredibly efficient city drive.', img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80" }
  ],
  bikes: [
    { id: 'thunder-e', name: 'Thunder-E 500', price: '₹1,85,000', range: '180km', rating: 4.9, desc: 'A high-performance street machine for thrill-seekers.', img: "https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&q=80&w=2070" }
  ],
  scooters: [
    { id: 'score-lite', name: 'S-Core Lite', price: '₹65,000', range: '120km', rating: 4.8, desc: 'Smart, efficient urban mobility for the modern city.', img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2070" }
  ]
};

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get vehicle data passed from catalog cards
  const vehicle = location.state?.vehicle || null;

  // step state: 1: select type, 3: address, 4: payment
  // (Note: Step 2 was internal model selection which is now handled by the catalog pages)
  const [step, setStep] = useState(vehicle ? 3 : 1);
  const [category, setCategory] = useState('cars');
  const [selectedModel, setSelectedModel] = useState(vehicle || null);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    const title = document.querySelector(".book-hero");
    if (title) gsap.from(title, { opacity: 0, y: 30, duration: 1, ease: "power4.out" });
  }, []);

  useEffect(() => {
    const content = document.querySelector(".step-content");
    if (content) gsap.fromTo(content, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 });
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center">
        <div className="success-msg text-center max-w-2xl p-12 glass rounded-[4rem] border-primary/30 relative overflow-hidden shadow-[0_0_50px_rgba(0,122,255,0.2)]">
          <div className="absolute inset-0 bg-primary/5 -z-10 animate-pulse"></div>
          <CheckCircle className="w-24 h-24 text-primary mx-auto mb-8" />
          <h2 className="outfit text-5xl md:text-7xl font-black italic mb-6 uppercase tracking-tighter text-white">CONGRATULATIONS!</h2>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl mb-8">
            <p className="text-white text-2xl font-black italic uppercase tracking-tight leading-tight">
              Congratulations for your new vehicle! <br/>
              <span className="text-primary">We can deliver the vehicle in the given time.</span>
            </p>
          </div>
          <p className="text-gray-400 text-lg italic mb-10 leading-relaxed">
            Payment verified. Your {selectedModel?.name} is officially reserved. Our team will contact you at {phone} to finalize the delivery schedule.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary w-full justify-center group py-6 text-xl shadow-[0_0_30px_rgba(0,122,255,0.3)]"
          >
            RETURN TO HOME <Home className="ml-3" size={24} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black relative overflow-hidden text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#007AFF08_0%,_transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <header className="book-hero text-center mb-16">
          <h1 className="outfit text-5xl md:text-[7vw] font-black italic tracking-tighter leading-none uppercase mb-4 text-white">
            CHECKOUT <span className="gradient-text text-primary italic">PORTAL</span>
          </h1>
          {selectedModel && (
            <p className="text-gray-500 text-xl italic">Securing your {selectedModel.name}</p>
          )}
        </header>

        <div className="booking-card grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#080808] rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl">

          {/* Sidebar with Vehicle Photo */}
          <div className="lg:col-span-4 bg-[#0a0a0a] p-10 border-r border-white/5 flex flex-col justify-between text-white">
            <div className="space-y-10">
              {selectedModel ? (
                <div className="space-y-6">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img src={selectedModel.img} alt={selectedModel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white p-1.5 border border-primary/20">
                      <img src={logoImg} alt="Velocity" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black italic uppercase text-white">{selectedModel.name}</h3>
                    <p className="text-primary font-bold text-xl">{selectedModel.price}</p>
                    <p className="text-gray-500 text-xs mt-2 italic leading-relaxed">"{selectedModel.desc}"</p>
                  </div>
                </div>
              ) : (
                <div className="p-10 border-2 border-dashed border-white/10 rounded-3xl text-center">
                  <Package className="mx-auto text-gray-700 mb-4" size={48} />
                  <p className="text-gray-600 font-bold uppercase text-xs">No Vehicle Selected</p>
                </div>
              )}

              <div className="space-y-6 pt-10 border-t border-white/5">
                {['Select Model', 'Details', 'Payment'].map((title, i) => (
                  <div key={i} className={`flex items-center gap-4 ${step >= i + 2 ? 'opacity-100' : 'opacity-20'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${step >= i + 2 ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(0,122,255,0.5)]' : 'bg-transparent border-white/10'}`}>
                      <span className="text-[10px] font-black">{i + 1}</span>
                    </div>
                    <p className="font-black italic uppercase text-[10px] tracking-tight">{title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 glass rounded-3xl border-primary/20 bg-primary/5">
               <p className="text-[10px] text-primary font-bold tracking-widest uppercase mb-2">Support Hub</p>
               <p className="text-[10px] text-gray-400 italic">Krishna Patil: Logistics & Sales</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-8 p-8 md:p-16 flex flex-col min-h-[550px]">
            <div className="step-content flex-grow text-white">

              {step === 1 && (
                <div className="space-y-10">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter">Choose Your Category</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div onClick={() => navigate('/cars')} className="p-10 glass rounded-[3rem] border border-white/10 hover:border-primary transition-all cursor-pointer text-center group bg-[#0f0f0f]">
                      <Car size={48} className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="font-black italic uppercase text-white">Cars</h3>
                    </div>
                    <div onClick={() => navigate('/bikes')} className="p-10 glass rounded-[3rem] border border-white/10 hover:border-primary transition-all cursor-pointer text-center group bg-[#0f0f0f]">
                      <Bike size={48} className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="font-black italic uppercase text-white">Bikes</h3>
                    </div>
                    <div onClick={() => navigate('/scooters')} className="p-10 glass rounded-[3rem] border border-white/10 hover:border-primary transition-all cursor-pointer text-center group bg-[#0f0f0f]">
                      <Zap size={48} className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="font-black italic uppercase text-white">Scooters</h3>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-primary">03. Delivery Details</h2>
                  <p className="text-white font-bold italic">Reserved: {selectedModel?.name}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Full Name</label>
                      <input
                        required
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-black border border-white/10 p-6 rounded-2xl outline-none text-white focus:border-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Phone Number</label>
                      <input
                        required
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 00000 00000"
                        className="w-full bg-black border border-white/10 p-6 rounded-2xl outline-none text-white focus:border-primary"
                      />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500">Delivery Address</label>
                      <textarea
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Full Street Address for Delivery..."
                        className="w-full bg-black border border-white/10 p-6 rounded-2xl outline-none h-32 text-white focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-10 text-white text-center">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-primary">04. Secure Payment</h2>
                  <div className="flex flex-col items-center gap-8">
                    <div className="bg-white p-6 rounded-[3rem] shadow-[0_0_50px_rgba(0,122,255,0.3)]">
                       <QrCode size={200} className="text-black" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Scanning Authorized Payment Link</p>
                       <p className="text-xs italic text-gray-600">Matoshri Engineering Centre Hub, Nashik</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className="mt-16 flex justify-between pt-10 border-t border-white/5">
              {step > 1 && (
                <button type="button" onClick={() => setStep(1)} className="text-gray-500 uppercase font-black text-xs hover:text-white transition-colors">
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={(e) => {
                  if (step === 1) { return; } // Handled by navigate above
                  if (step === 3) { setStep(4); return; }
                  if (step === 4) { handleSubmit(e); return; }
                  setStep(step + 1);
                }}
                className="btn-primary px-16 py-4 ml-auto"
              >
                {step === 4 ? 'CONFIRM PAYMENT' : 'CONTINUE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
