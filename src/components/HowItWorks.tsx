export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: 'We start with a comprehensive consultation to understand your business, target audience, and sales goals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'We create a customized outreach strategy tailored to your industry, including messaging, channels, and targeting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Campaign Execution',
      description: 'Our team executes multi-channel campaigns with professional cold calls, emails, and LinkedIn outreach.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Lead Delivery',
      description: 'We deliver qualified, interested prospects directly to you. These are verified leads ready for your sales conversation.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: '05',
      title: 'You Close the Deal',
      description: 'With qualified leads in hand, you take over with your expertise. We provide the prospects, you provide the closing magic.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            How It Works
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            A proven 5-step process to deliver qualified leads. We handle the outreach, you handle the closing.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-brown-200 via-navy-200 to-brown-200" style={{ top: '80px' }} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-cream-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-navy-700 to-brown-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-6 mb-4 w-14 h-14 bg-brown-100 rounded-xl flex items-center justify-center text-brown-700 border border-brown-200">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h4>
                  <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-navy-700 mb-6 font-medium">Ready to get started?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-navy-700 to-brown-600 text-white px-8 py-4 rounded-full font-semibold hover:from-navy-800 hover:to-brown-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Growth Journey
          </button>
        </div>
      </div>
    </section>
  );
}
