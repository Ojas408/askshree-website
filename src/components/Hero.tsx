import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-cream-100 via-navy-50 to-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-brown-100 text-brown-800 px-4 py-2 rounded-full text-sm font-semibold border border-brown-200">
                Professional Lead Generation Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight">
              Get More
              <span className="block bg-gradient-to-r from-navy-700 to-brown-600 bg-clip-text text-transparent">
                Qualified Leads
              </span>
            </h1>
            
            <p className="text-xl text-navy-700 leading-relaxed">
              AskShree delivers qualified, verified leads for IoT, SaaS, Tech companies and startups through strategic cold calling, targeted email campaigns, and LinkedIn outreach. We find the prospects - you close the deals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-navy-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Started Today
              </button>
              <a 
                href="tel:9004929362"
                className="bg-white text-brown-700 px-8 py-4 rounded-full font-semibold hover:bg-cream-50 transition-all shadow-lg border-2 border-brown-500 flex items-center justify-center gap-2"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-brown-200">
              <a href="tel:9004929362" className="flex items-center gap-2 text-navy-600 hover:text-brown-600 transition-colors font-medium">
                <PhoneIcon className="h-5 w-5" />
                <span>+91 9004929362</span>
              </a>
              <a href="mailto:princepasi060@gmail.com" className="flex items-center gap-2 text-navy-600 hover:text-brown-600 transition-colors font-medium">
                <EnvelopeIcon className="h-5 w-5" />
                <span>princepasi060@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-700 to-brown-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center border-2 border-brown-300">
                    <svg className="w-6 h-6 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Qualified Leads</h3>
                    <p className="text-sm text-navy-600">100% verified prospects</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center border-2 border-navy-300">
                    <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Growth Focused</h3>
                    <p className="text-sm text-navy-600">Scalable strategies</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brown-100 rounded-full flex items-center justify-center border-2 border-brown-300">
                    <svg className="w-6 h-6 text-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">Fast Results</h3>
                    <p className="text-sm text-navy-600">Quick turnaround time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
