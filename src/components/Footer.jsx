import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 px-10 bg-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-bold tracking-tighter mb-6 block">
            VELOCITY<span className="text-primary italic font-black">MOTORS</span>
          </Link>
          <p className="text-gray-500 max-w-sm mb-8 italic">
            "Driven by Innovation, Powered by Passion. Leading India towards a sustainable future through elite electric mobility solutions."
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-white">Navigation</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link to="/showroom" className="hover:text-primary transition-colors">The Garage</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services & Repair</Link></li>
            <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
            <li><Link to="/" className="hover:text-primary transition-colors">Innovation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-gray-500">
            <li>Nashik, Maharashtra, India</li>
            <li>support@velocitymotors.in</li>
            <li>+91 1800-VELOCITY</li>
            <li>Mon - Sat: 9AM - 8PM</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-20 pt-10 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; 2024 Velocity Motors Private Limited. All rights reserved.</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.5em] opacity-30">The Future is Electric</p>
      </div>
    </footer>
  );
};

export default Footer;
