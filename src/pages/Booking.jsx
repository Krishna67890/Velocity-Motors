import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Send,
  CheckCircle,
  Car,
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

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get vehicle data passed from catalog cards
  const vehicle = location.state?.vehicle;

  // If no vehicle is selected, redirect to cars catalog
  useEffect(() => {
    if (!vehicle) {
      navigate('/cars');
    }
  }, [vehicle, navigate]);

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.from(".book-hero", { opacity: 0, y: 30, duration: 1, ease: "power4.out" });
  }, []);

  useEffect(() => {
    gsap.fromTo(".step-content", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 });
  }, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!vehicle) return null;

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-10 min-h-screen bg-black flex items-center justify-center">
        <div className="success-msg text-center max-w-2xl p-12 glass rounded-[4rem] border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 -z-10 animate-pulse"></div>
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black italic mb-6 uppercase tracking-tighter text-white">CONGRATS!<br/><span className="gradient-text text-primary">PAYMENT DONE</span></h2>
          <p className="text-gray-400 text-xl italic mb-10 leading-relaxed">
            Your reservation for the {vehicle.name} is complete. Thanks for choosing Velocity Motors! Your vehicle is being prepared for delivery to your location.
          </p>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-left mb-10 text-center">
            <p className="text-[10px] uppercase tracking-widest text-primary font-black mb-2">Order ID</p>
            <p className="text-2xl font-mono text-white tracking-tighter">VM-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="btn-primary w-full justify-center group py-6 text-xl"
          >
            CONTINUE SHOPPING <ArrowRight className="ml-2" />
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
          <h1 className="outfit text-5xl md:text-[7vw] font-black italic tracking-tighter leading-none uppercase mb-4">
            CHECKOUT <span className="gradient-text text-primary">PORTAL</span>
          </h1>
          <p className="text-gray-500 text-lg italic">Complete your purchase for the elite {vehicle.name}</p>
        </header>

        <div className="booking-card grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#080808] rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl">

          {/* Sidebar Progress */}
          <div className="lg:col-span-3 bg-[#0a0a0a] p-10 border-r border-white/5">
            <div className="space-y-10">
              {[
                { s: 1, title: 'Address Info', icon: <MapPin size={18}/> },
                { s: 2, title: 'Order Review', icon: <Package size={18}/> },
                { s: 3, title: 'Secure Payment', icon: <QrCode size={18}/> }
              ].map((item) => (
                <div key={item.s} className={`flex items-center gap-4 transition-all duration-500 ${step >= item.s ? 'opacity-100' : 'opacity-20'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${step >= item.s ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/10'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest font-black opacity-50">Step 0{item.s}</p>
                    <p className="font-black italic uppercase text-xs tracking-tight">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-9 p-8 md:p-16 flex flex-col min-h-[550px]">
            <div className="step-content flex-grow">

              {step === 1 && (
                <div className="space-y-10">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-primary">Delivery Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500 flex items-center gap-2"><User size={12}/> Full Name</label>
                      <input required type="text" placeholder="Enter your name" className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary outline-none" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500 flex items-center gap-2"><Phone size={12}/> Phone Number</label>
                      <input required type="tel" placeholder="+91 XXXX XXXX" className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary outline-none" />
                    </div>
                    <div className="md:col-span-2 space-y-3">
                      <label className="text-[10px] uppercase font-black tracking-widest text-gray-500 flex items-center gap-2"><Home size={12}/> Shipping Address</label>
                      <textarea required placeholder="Full home address for delivery..." className="w-full bg-black border border-white/10 p-6 rounded-2xl focus:border-primary outline-none h-32"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-primary">Confirm Your Selection</h2>

                  <div className="glass p-8 rounded-[3rem] border-white/10 flex flex-col md:flex-row gap-10">
                    <div className="md:w-1/2">
                      <div className="aspect-video rounded-[2rem] overflow-hidden relative border border-white/5">
                        <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-full overflow-hidden border-2 border-primary bg-white">
                           <img src={logoImg} alt="Brand Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-4 right-4 glass px-4 py-1.5 rounded-full flex items-center gap-2">
                           <Star className="text-yellow-500 fill-yellow-500" size={14} />
                           <span className="font-bold text-sm">{vehicle.rating || '4.9'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <h3 className="outfit text-4xl font-black italic uppercase mb-4 leading-none">{vehicle.name}</h3>
                      <p className="text-gray-400 italic text-sm mb-8">"{vehicle.desc}"</p>

                      <div className="grid grid-cols-2 gap-6 border-t border-white/5 pt-6">
                        <div>
                          <p className="text-[10px] font-black uppercase text-gray-500 mb-1 tracking-widest">Efficiency</p>
                          <p className="text-2xl font-black text-primary italic">{vehicle.range}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-black uppercase text-gray-500 mb-1 tracking-widest">Fixed Price</p>
                          <p className="text-3xl font-black italic text-white">{vehicle.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <ShieldCheck className="text-primary" size={24}/>
                    <p className="text-[10px] font-black uppercase tracking-widest">Certified Velocity Assurance Included</p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                  <h2 className="outfit text-4xl font-black italic uppercase tracking-tighter text-primary">Finalize Payment</h2>
                  <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                    <div className="text-center space-y-6">
                       <div className="bg-white p-6 rounded-[3rem] shadow-[0_0_50px_rgba(0,122,255,0.2)] inline-block">
                          <QrCode size={200} className="text-black" />
                       </div>
                       <div>
                          <p className="text-sm font-black uppercase tracking-widest text-primary animate-pulse">Scan QR to Pay Now</p>
                          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Authorized Velocity Payment Hub</p>
                       </div>
                    </div>

                    <div className="max-w-xs space-y-6">
                       <div className="p-8 glass rounded-[2.5rem] border-primary/20">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Payable Amount</p>
                          <p className="text-4xl font-black italic text-white">{vehicle.price}</p>
                       </div>
                       <p className="text-xs text-gray-500 italic text-center">
                         Visit us at: Matoshri College of Engineering and Research Centre, Odha, Nashik for physical verification.
                       </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className="mt-16 flex justify-between pt-10 border-t border-white/5">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="text-gray-500 uppercase font-black text-xs flex items-center gap-2 hover:text-white transition-colors">
                  <ChevronLeft size={16}/> Previous
                </button>
              ) : <div></div>}

              <button
                type="button"
                onClick={step === 3 ? handleSubmit : () => setStep(step + 1)}
                className="btn-primary px-16 py-5 group text-lg"
              >
                {step === 3 ? 'CONFIRM PAYMENT' : 'CONTINUE'}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
