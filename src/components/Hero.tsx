import { PhoneIcon, EnvelopeIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '100%', label: 'Qualified Leads' },
    { value: '24/7', label: 'Support' },
    { value: 'No', label: 'Long Contracts' }
  ];

  return (
    <section id="hero" className="relative min-h-[65vh] md:min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-brown-900 flex flex-col overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brown-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-navy-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl w-full text-center space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <span className="bg-brown-900/50 text-brown-200 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold border border-brown-700 backdrop-blur-sm">
              Professional Lead Generation Services
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Get More
              <span className="block bg-gradient-to-r from-brown-300 via-brown-200 to-brown-100 bg-clip-text text-transparent">
                Qualified Leads
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-cream-100 leading-relaxed max-w-2xl mx-auto">
            AskShree delivers qualified, verified leads for IoT, SaaS, Tech companies and startups through strategic cold calling, targeted email campaigns, and LinkedIn outreach.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-brown-500 to-brown-600 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg hover:from-brown-600 hover:to-brown-700 transition-all shadow-lg"
            >
              Get Started Today
            </button>
            <a
              href="tel:9004929362"
              className="bg-white/10 text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg border-2 border-white/30 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 border-t border-white/10">
            <a href="tel:9004929362" className="flex items-center gap-2 text-cream-200 hover:text-brown-300 transition-colors font-medium">
              <PhoneIcon className="h-5 w-5" />
              <span>+91 9004929362</span>
            </a>
            <a href="mailto:princepasi060@gmail.com" className="flex items-center gap-2 text-cream-200 hover:text-brown-300 transition-colors font-medium">
              <EnvelopeIcon className="h-5 w-5" />
              <span>princepasi060@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Anchoring Stats at Bottom - hidden on small screens */}
      <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full flex items-center justify-center">
                    <CheckIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-brown-300 to-brown-100 bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-cream-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cream-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
