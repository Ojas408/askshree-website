export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">Why Choose AskShree</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            What You Can Expect
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            We're a new company focused on delivering quality over quantity. Here's our commitment to you.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'Quality Over Quantity',
              description: 'We focus on finding prospects that match your ideal customer profile, not just filling your inbox with random contacts.'
            },
            {
              icon: '✅',
              title: '100% Verified Leads',
              description: 'Every lead is manually verified before delivery. We ensure contact information is accurate and prospects are reachable.'
            },
            {
              icon: '🤝',
              title: 'Transparent Process',
              description: 'You\'ll know exactly what we\'re doing, who we\'re contacting, and what responses we\'re getting. Full transparency, always.'
            },
            {
              icon: '⚡',
              title: 'Fast Turnaround',
              description: 'We understand time is money. Our streamlined process delivers qualified leads quickly without compromising on quality.'
            },
            {
              icon: '📊',
              title: 'Detailed Reporting',
              description: 'Regular updates on campaign performance, response rates, and lead quality. You\'ll always know your ROI.'
            },
            {
              icon: '💬',
              title: 'Direct Communication',
              description: 'Work directly with Prince Pasi, the founder. No account managers, no middlemen - just direct, responsive service.'
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-cream-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-brown-100 rounded-full flex items-center justify-center text-3xl mb-4 border-2 border-brown-200">
                {item.icon}
              </div>
              
              <h4 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h4>
              <p className="text-navy-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Our Commitment */}
        <div className="mt-16 bg-gradient-to-r from-navy-700 to-brown-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h4 className="text-3xl font-bold mb-4">Our Promise to You</h4>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto mb-8">
            We're building our reputation one satisfied client at a time. Your success is our success. 
            We deliver qualified leads - the closing is in your expert hands.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">No BS</div>
              <div className="text-cream-100">Just honest, quality work</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">No Fluff</div>
              <div className="text-cream-100">Only verified prospects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">No Excuses</div>
              <div className="text-cream-100">We deliver what we promise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
