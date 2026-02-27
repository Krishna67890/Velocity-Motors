import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Zap, ChevronRight } from 'lucide-react';

const Footer = () => {
  const navigation = {
    showroom: [
      { name: 'Home', path: '/' },
      { name: 'Electric Cars', path: '/cars' },
      { name: 'Electric Bikes', path: '/bikes' },
      { name: 'Electric Scooters', path: '/scooters' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Innovations', path: '/innovation' },
      { name: 'The Force (Team)', path: '/team' }
    ],
    technical: [
      { name: 'Services & Repair', path: '/services' },
      { name: 'Master Garage', path: '/garage' },
      { name: 'Parents Academy', path: '/parents' },
      { name: 'Innovation Labs', path: '/labs' }
    ]
  };

  return (
    <footer className="py-24 bg-black border-t border-white/10 px-6 md:px-20 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-10">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_30px_rgba(0,122,255,0.3)]">
                <Zap className="text-white fill-white" size={28} />
              </div>
              <div className="flex flex-col">
                <span className="outfit text-3xl font-black italic tracking-tighter uppercase leading-none">VELOCITY</span>
                <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase mt-1">MOTORS</span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm italic leading-relaxed text-lg">
              "India's premier destination for high-performance electric mobility. Leading the charge into a zero-emission future."
            </p>
            <div className="flex gap-6 text-white font-black">
               {['IN', 'X', 'YT', 'FB'].map(social => (
                 <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all cursor-pointer text-[10px]">{social}</div>
               ))}
            </div>
          </div>

          {/* All 11 Tabs Organized in Footer */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Showroom</h4>
            <ul className="space-y-5">
              {navigation.showroom.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Network</h4>
            <ul className="space-y-5">
              {navigation.company.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10">Support</h4>
            <ul className="space-y-5">
              {navigation.technical.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2 group">
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Global Hub Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16 border-y border-white/5 items-center">
           <div className="flex items-center gap-5 text-gray-400 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><MapPin size={20} className="text-primary" /></div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Global Hub</span>
                <span className="text-xs italic font-bold text-white">Matoshri Engineering Centre, Nashik</span>
              </div>
           </div>
           <div className="flex items-center gap-5 text-gray-400 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Phone size={20} className="text-primary" /></div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Hotline</span>
                <span className="text-xs italic font-bold text-white">+91 1800-VELOCITY</span>
              </div>
           </div>
           <div className="flex items-center gap-5 text-gray-400 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors"><Mail size={20} className="text-primary" /></div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase text-gray-600 tracking-widest">Email</span>
                <span className="text-xs italic font-bold text-white">support@velocitymotors.in</span>
              </div>
           </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-[9px] font-black uppercase tracking-[0.6em] text-gray-700">&copy; 2026 Velocity Motors • Drive the electric Future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
