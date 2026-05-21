import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
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
    return (
      <>
        <AdminDashboard />
        <Analytics />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <About />
      <Services />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
