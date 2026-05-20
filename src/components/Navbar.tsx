import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg border-b border-cream-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold bg-gradient-to-r from-navy-700 to-brown-600 bg-clip-text text-transparent hover:from-navy-800 hover:to-brown-700 transition-all"
            >
              AskShree
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-navy-700 hover:text-brown-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="text-navy-700 hover:text-brown-600 transition-colors font-medium">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-navy-700 hover:text-brown-600 transition-colors font-medium">How It Works</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-navy-700 hover:text-brown-600 transition-colors font-medium">Testimonials</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy-700 text-white px-6 py-2 rounded-full hover:bg-navy-800 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-navy-700 hover:text-brown-600"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-navy-700 hover:text-brown-600 font-medium">About</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-navy-700 hover:text-brown-600 font-medium">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-navy-700 hover:text-brown-600 font-medium">How It Works</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-navy-700 hover:text-brown-600 font-medium">Testimonials</button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left bg-navy-700 text-white px-6 py-2 rounded-full hover:bg-navy-800 mt-4 shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
