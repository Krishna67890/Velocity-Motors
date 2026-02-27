import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Garage from './pages/Garage';
import Cars from './pages/Cars';
import Scooters from './pages/Scooters';
import Bikes from './pages/Bikes';
import Team from './pages/Team';
import Booking from './pages/Booking';
import Innovation from './pages/Innovation';
import Services from './pages/Services';
import VehicleDamagePart from './pages/VehicleDamagePart';
import Parents from './pages/Parents';
import Labs from './pages/Labs';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <ScrollToTop />
      <div className="bg-black text-white selection:bg-primary selection:text-white min-h-screen font-sans">
        <div className="noise fixed inset-0 opacity-[0.03] pointer-events-none z-[9997] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <Navbar />

        <main className="relative z-10 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/scooters" element={<Scooters />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/repair-damage" element={<VehicleDamagePart />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/parents" element={<Parents />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/showroom" element={<Navigate to="/cars" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
