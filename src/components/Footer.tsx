export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-navy-900 to-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cream-100 to-brown-200 bg-clip-text text-transparent mb-4">
              AskShree
            </h3>
            <p className="text-cream-200 mb-4">
              Your trusted partner for lead generation. Helping tech companies get qualified prospects.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/prince-pasi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-brown-600 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cream-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('hero')} className="text-cream-200 hover:text-brown-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-cream-200 hover:text-brown-300 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-cream-200 hover:text-brown-300 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-cream-200 hover:text-brown-300 transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-cream-200 hover:text-brown-300 transition-colors">
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cream-100">Our Services</h4>
            <ul className="space-y-2 text-cream-200">
              <li>Cold Calling</li>
              <li>Cold Email Campaigns</li>
              <li>LinkedIn Outreach</li>
              <li>Lead Generation</li>
              <li>B2B Prospecting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-cream-100">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:9004929362" className="text-cream-200 hover:text-brown-300 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 9004929362
                </a>
              </li>
              <li>
                <a href="mailto:princepasi060@gmail.com" className="text-cream-200 hover:text-brown-300 transition-colors flex items-center gap-2 break-all">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  princepasi060@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-200 text-sm">
              © {currentYear} AskShree. All rights reserved. | Founder: Prince Pasi
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-cream-200 hover:text-brown-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-cream-200 hover:text-brown-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-cream-200 hover:text-brown-300 transition-colors">Cookie Policy</a>
              <a href="#admin" className="text-cream-200 hover:text-brown-300 transition-colors">Admin</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
