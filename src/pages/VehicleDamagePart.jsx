import { useEffect, useState } from 'react';
import gsap from 'gsap';
import {
  Wrench,
  AlertTriangle,
  Clipboard,
  Truck,
  MapPin,
  CheckCircle,
  ChevronRight,
  ShieldAlert,
  Zap,
  Calendar,
  Activity,
  Cpu,
  ShieldCheck,
  Search,
  Settings,
  Phone,
  Navigation
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const repairOptions = [
  { id: 'battery', name: 'V-Core Replacement', icon: <Zap className="text-primary" />, detail: "Full high-voltage cell swap." },
  { id: 'motor', name: 'Flux Calibration', icon: <Wrench className="text-primary" />, detail: "Neural motor re-alignment." },
  { id: 'body', name: 'Structural Restoration', icon: <ShieldAlert className="text-accent" />, detail: "Chassis & body panel repair." },
  { id: 'software', name: 'OS Neural Re-flash', icon: <Cpu className="text-secondary" />, detail: "Complete system software reset." },
  { id: 'brake', name: 'Regen Brake Service', icon: <Activity className="text-emerald-500" />, detail: "Magnetic braking optimization." },
  { id: 'sensors', name: 'Sensor Array Sync', icon: <Search className="text-blue-400" />, detail: "360° radar & lidar calibration." }
];

const VehicleDamagePart = () => {
  const [selectedRepairs, setSelectedRepairs] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    scenario: '',
    location: '',
    phone: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(".dmg-reveal",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleRepair = (id) => {
    setSelectedRepairs(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(".form-container", { scale: 0.95, opacity: 0, duration: 0.5, ease: "power2.in" })
      .call(() => setSubmitted(true));
  };

  const now = new Date();
  const deliveryMonth = now.toLocaleString('default', { month: 'long' });
  const deliveryYear = now.getFullYear();

  if (submitted) {
    return (
      <div className="pt-40 pb-20 px-6 min-h-screen bg-black flex items-center justify-center text-white">
        <div className="max-w-2xl w-full bg-[#080808] p-12 md:p-16 rounded-[4rem] border border-primary/30 text-center relative shadow-[0_0_50px_rgba(0,122,255,0.1)]">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-primary/30">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
          <h2 className="outfit text-5xl md:text-7xl font-black italic mb-6 uppercase tracking-tighter text-white">SYSTEMS <br/><span className="gradient-text text-primary">LOCKED</span></h2>
          <p className="text-gray-400 text-xl italic mb-12 leading-relaxed">
            Report finalized for {formData.phone}. Jayesh Gangurde and the elite technical division are preparing for your vehicle's recovery.
          </p>

          <div className="bg-black border border-white/5 p-10 rounded-[3rem] mb-12 text-left space-y-6">
            <div className="flex items-center gap-4">
              <Calendar className="text-primary" size={24} />
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Launch Period</p>
                <p className="text-3xl font-black italic uppercase text-white">{deliveryMonth} {deliveryYear}</p>
              </div>
            </div>
            <div className="h-[1px] bg-white/5 w-full"></div>
            <div className="flex items-center gap-4 text-gray-500">
              <Truck size={20} className="text-accent" />
              <p className="text-xs font-bold uppercase tracking-widest leading-none">Retrieval unit dispatched to {formData.location}.</p>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="btn-primary w-full justify-center group py-6 text-xl"
          >
            RETURN TO TERMINAL <ChevronRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-10 min-h-screen bg-black text-white relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        <header className="mb-20 text-center relative">
          <div className="dmg-reveal inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-8">
            <AlertTriangle className="text-accent" size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">Restoration Protocol Active</span>
          </div>
          <h1 className="dmg-reveal outfit text-[12vw] md:text-[8vw] font-black italic tracking-tighter leading-[0.8] uppercase mb-10">
            DAMAGE <span className="text-accent">REPORT</span>
          </h1>
          <p className="dmg-reveal text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "We reverse the destruction. Tell us what is damaged and what needs repair for a master-class technical recovery."
          </p>
        </header>

        <form onSubmit={handleSubmit} className="form-container dmg-reveal bg-[#080808] p-8 md:p-20 rounded-[5rem] border border-white/5 space-y-16 shadow-2xl relative">

          <div className="space-y-8">
            <div className="flex items-center gap-4 text-white">
              <Clipboard className="text-primary" size={20} />
              <h2 className="outfit text-3xl font-black italic uppercase tracking-tighter">01. What is the Damage?</h2>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 ml-2 text-white">Incident Description</label>
              <textarea
                required
                name="scenario"
                value={formData.scenario}
                onChange={handleInputChange}
                placeholder="Ex: Front hood crushed, left headlight destroyed, battery warning lights active..."
                className="w-full bg-black border border-white/10 p-8 rounded-[2.5rem] focus:border-accent outline-none transition-all h-48 italic text-gray-300 text-sm leading-relaxed"
              ></textarea>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-4 text-white">
              <Settings className="text-primary" size={20} />
              <h2 className="outfit text-3xl font-black italic uppercase tracking-tighter">02. What to Repair?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
              {repairOptions.map(opt => (
                <div
                  key={opt.id}
                  onClick={() => toggleRepair(opt.id)}
                  className={`p-8 rounded-[3rem] border transition-all duration-500 cursor-pointer flex flex-col justify-between h-56 relative overflow-hidden group ${selectedRepairs.includes(opt.id) ? 'bg-primary border-primary shadow-[0_20px_40px_rgba(0,122,255,0.2)]' : 'bg-black border-white/5 hover:border-white/20'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${selectedRepairs.includes(opt.id) ? 'bg-white' : 'bg-white/5'}`}>
                    {opt.icon}
                  </div>
                  <div>
                    <h4 className={`font-black uppercase text-xs tracking-widest mb-2 ${selectedRepairs.includes(opt.id) ? 'text-white' : 'text-gray-400'}`}>{opt.name}</h4>
                    <p className={`text-[10px] italic leading-tight ${selectedRepairs.includes(opt.id) ? 'text-white/70' : 'text-gray-600'}`}>{opt.detail}</p>
                  </div>
                  {selectedRepairs.includes(opt.id) && (
                    <div className="absolute top-6 right-8">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-4 text-white">
              <Navigation className="text-primary" size={20} />
              <h2 className="outfit text-3xl font-black italic uppercase tracking-tighter text-white">03. Retrieval Logistics</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="space-y-4 text-white">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 ml-2 text-white">Retrieval Point</label>
                <div className="relative">
                  <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={18} />
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Your current city"
                    className="w-full bg-black border border-white/10 p-6 pl-16 rounded-2xl focus:border-primary outline-none text-sm text-white"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 ml-2 text-white">Secure Link (Phone)</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-primary" size={18} />
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXX XXXX"
                    className="w-full bg-black border border-white/10 p-6 pl-16 rounded-2xl focus:border-primary outline-none text-sm text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-10 bg-accent hover:bg-white hover:text-black text-white font-black text-3xl uppercase tracking-tighter italic rounded-[3rem] transition-all duration-500 shadow-[0_30px_60px_rgba(255,45,85,0.2)] flex items-center justify-center gap-6 group"
          >
            <span>SUBMIT REPORT</span>
            <ShieldCheck size={32} className="group-hover:scale-110 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VehicleDamagePart;
