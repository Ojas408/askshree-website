export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Cold Calling',
      description: 'Professional cold calling campaigns that connect you with decision-makers. We qualify prospects and set up meetings - you handle the closing.',
      features: ['Targeted prospect lists', 'Professional scripts', 'Lead qualification', 'Meeting scheduling']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Cold Email Campaigns',
      description: 'Personalized email outreach that generates responses from decision-makers. We deliver interested prospects ready for your sales conversation.',
      features: ['Custom email sequences', 'A/B testing', 'Lead qualification', 'Response tracking']
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'LinkedIn Outreach',
      description: 'Strategic LinkedIn messaging and connection building to identify interested prospects. We initiate conversations - you take them to close.',
      features: ['Targeted outreach', 'Connection building', 'Interest qualification', 'Warm introductions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Multi-Channel Lead Generation
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            We leverage proven strategies across multiple channels to maximize your reach and connect you with qualified prospects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-cream-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group shadow-md"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-brown-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h4>
              <p className="text-navy-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-navy-700">
                    <svg className="w-5 h-5 text-brown-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-700 to-brown-600 rounded-2xl p-12 text-white shadow-2xl">
            <h4 className="text-3xl font-bold mb-4">Ready to Get More Qualified Leads?</h4>
            <p className="text-xl mb-8 text-cream-100">Let's discuss how we can fill your pipeline with interested prospects</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-navy-700 px-8 py-4 rounded-full font-semibold hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
