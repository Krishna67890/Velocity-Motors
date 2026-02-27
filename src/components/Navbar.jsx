import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { GraduationCap } from 'lucide-react';
import logoImg from '../../Assets/1000533341.jpg';

const Navbar = () => {
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.set(navRef.current, { y: 0, opacity: 1 });
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Innovations', path: '/innovation' },
    { name: 'Cars', path: '/cars' },
    { name: 'Bikes', path: '/bikes' },
    { name: 'Scooters', path: '/scooters' },
    { name: 'Services', path: '/services' },
    { name: 'Garage', path: '/garage' },
    { name: 'The Force', path: '/team' },
    { name: 'Labs', path: '/labs' },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[1000] py-4 md:py-6 px-6 md:px-10 flex justify-between items-center bg-black border-b border-white/10"
    >
      {/* Brand Logo & Name */}
      <Link to="/" className="flex items-center gap-4 z-[1001] group shrink-0">
        <div className="relative w-12 h-12 md:w-14 md:h-14">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-500"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary bg-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] shadow-xl">
             <img src={logoImg} alt="Velocity Motors Logo" className="w-full h-full object-cover scale-110" />
          </div>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-xl md:text-2xl font-black tracking-tighter leading-none outfit italic uppercase">
            VELOCITY
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.5em] text-primary uppercase leading-none mt-1 outfit">
            MOTORS
          </span>
        </div>
      </Link>

      {/* Desktop Links - Optimized for all 10 items */}
      <div className="hidden lg:flex items-center gap-x-3 xl:gap-x-5 font-medium text-[8px] xl:text-[10px] tracking-[0.1em] uppercase">
        {primaryLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`hover:text-primary transition-all relative group py-2 ${location.pathname === link.path ? 'text-primary' : 'text-gray-400'}`}
          >
            {link.name}
            <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2 md:gap-4 z-[1001] shrink-0">
        <Link
          to="/parents"
          className="hidden xs:flex items-center gap-2 border border-white/20 hover:border-primary text-white px-4 py-2 rounded-full font-black text-[9px] uppercase tracking-widest transition-all duration-300"
        >
          <GraduationCap size={14} className="text-primary" />
          ACADEMY
        </Link>

        <Link
          to="/book"
          className="bg-primary hover:bg-white hover:text-black text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95"
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
