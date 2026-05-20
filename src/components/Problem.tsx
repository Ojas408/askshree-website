export default function Problem() {
  const problems = [
    {
      icon: '🎯',
      title: 'Generic Marketing Doesn\'t Work',
      description: 'Traditional marketing falls flat for technical products. Your prospects need to understand complex solutions, not flashy ads.'
    },
    {
      icon: '🚫',
      title: 'Decision-Makers Are Hidden',
      description: 'CTOs, VPs, and founders are buried under spam. Cold outreach without proper targeting and messaging gets ignored.'
    },
    {
      icon: '⏰',
      title: 'Long Sales Cycles Kill Momentum',
      description: 'B2B tech sales take 3-6 months. Without consistent nurturing, promising leads go cold before they convert.'
    },
    {
      icon: '💸',
      title: 'Wasted Budget on Unqualified Leads',
      description: 'Buying contact lists and running ads brings volume, not quality. Your sales team wastes time on tire-kickers.'
    },
    {
      icon: '🔄',
      title: 'Inconsistent Pipeline',
      description: 'Good months and bad months. Relying on referrals and word-of-mouth creates unpredictable revenue.'
    },
    {
      icon: '📉',
      title: 'Low Response Rates',
      description: 'Generic templates get 1-2% responses. Your perfect prospects never see your solution because your message doesn\'t resonate.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">The Challenge</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Why Getting Qualified Leads is Harder Than Ever for Tech Companies
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            You've built an amazing product. But getting it in front of the right decision-makers? That's the real challenge.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-cream-50 border border-cream-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h4 className="text-xl font-bold text-navy-900 mb-3">{problem.title}</h4>
              <p className="text-navy-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* The Solution Teaser */}
        <div className="mt-16 bg-gradient-to-r from-navy-700 to-brown-600 rounded-2xl p-12 text-white text-center shadow-2xl">
          <h4 className="text-3xl font-bold mb-4">There's a Better Way</h4>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto mb-8">
            Instead of wasting time and money on tactics that don't work, focus on what actually generates qualified leads: 
            <span className="font-bold"> targeted outreach, personalized messaging, and consistent follow-up.</span>
          </p>
          <p className="text-lg text-cream-200">
            That's exactly what AskShree does for you.
          </p>
        </div>
      </div>
    </section>
  );
}