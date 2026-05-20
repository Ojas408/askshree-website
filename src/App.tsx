import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check URL hash for admin access
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
