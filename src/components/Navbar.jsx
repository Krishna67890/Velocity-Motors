import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';
import logoImg from '../../Assets/1000533341.jpg';

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Cars', path: '/cars' },
    { name: 'Bikes', path: '/bikes' },
    { name: 'Scooters', path: '/scooters' },
    { name: 'Services', path: '/services' },
    { name: 'Garage', path: '/garage' },
    { name: 'The Force', path: '/team' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] py-4 md:py-6 px-6 md:px-10 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5"
    >
      <Link to="/" className="flex items-center gap-4 z-[101] group">
        <div className="relative w-14 h-14 md:w-16 md:h-16">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:bg-primary/50 transition-all duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(0,122,255,0.4)]">
             <img src={logoImg} alt="Velocity Motors Logo" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none text-white outfit italic">
            VELOCITY
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-primary uppercase leading-none mt-1 outfit">
            MOTORS
          </span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-6 font-medium text-[10px] xl:text-xs tracking-[0.2em] uppercase">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-primary transition-all relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
          >
            {link.name}
            <span className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 z-[101]">
        <Link to="/book" className="hidden sm:block magnetic bg-primary hover:bg-white hover:text-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-black text-[10px] md:text-xs tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,122,255,0.3)]">
          BOOK NOW
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center gap-8 transition-transform duration-500 lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={`text-2xl font-black italic uppercase tracking-tighter ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/book"
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-primary text-white px-10 py-4 rounded-full font-black text-sm tracking-widest"
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
