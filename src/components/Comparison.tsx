export default function Comparison() {
  const comparisons = [
    {
      feature: 'Industry Expertise',
      askshree: 'Tech/SaaS/IoT specialist',
      diy: 'Generic knowledge',
      inhouse: 'Learning curve',
      agency: 'Generalist approach'
    },
    {
      feature: 'Time to Results',
      askshree: '2-3 weeks',
      diy: '3-6 months',
      inhouse: '2-4 months',
      agency: '4-8 weeks'
    },
    {
      feature: 'Monthly Investment',
      askshree: 'Mid-range',
      diy: 'Time = money',
      inhouse: '₹40,000-80,000/month',
      agency: '₹25,000-1,00,000/month'
    },
    {
      feature: 'Lead Quality',
      askshree: '100% verified',
      diy: 'Hit or miss',
      inhouse: 'Depends on hire',
      agency: 'Often low quality'
    },
    {
      feature: 'Dedicated Support',
      askshree: 'Founder direct access',
      diy: 'You\'re alone',
      inhouse: 'Yes',
      agency: 'Account manager'
    },
    {
      feature: 'Scalability',
      askshree: 'Easy to scale up/down',
      diy: 'Limited by your time',
      inhouse: 'Need to hire more',
      agency: 'Varies'
    },
    {
      feature: 'Multi-Channel Approach',
      askshree: 'Yes (Email, LinkedIn, Calls)',
      diy: 'Time consuming',
      inhouse: 'If trained',
      agency: 'Often single channel'
    },
    {
      feature: 'Transparency',
      askshree: 'Full reporting',
      diy: 'You know everything',
      inhouse: 'Yes',
      agency: 'Limited visibility'
    },
    {
      feature: 'Commitment',
      askshree: 'No long contracts',
      diy: 'Ongoing effort',
      inhouse: 'Full-time salary',
      agency: '6-12 month contracts'
    },
    {
      feature: 'Closing the Deal',
      askshree: 'You close (we deliver leads)',
      diy: 'You do everything',
      inhouse: 'Yes',
      agency: 'Unclear handoff'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">The Comparison</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            AskShree vs. Your Other Options
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            See how we stack up against doing it yourself, hiring in-house, or using a generic agency
          </p>
        </div>

        {/* Mobile View - Cards */}
        <div className="lg:hidden space-y-8">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-cream-50 rounded-xl p-6 border border-cream-200">
              <h4 className="text-lg font-bold text-navy-900 mb-4 border-b border-brown-200 pb-3">
                {item.feature}
              </h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-navy-700 to-brown-600 text-white p-4 rounded-lg">
                  <div className="text-xs font-semibold mb-1 text-cream-200">AskShree</div>
                  <div className="font-semibold">{item.askshree}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-cream-200">
                  <div className="text-xs font-semibold mb-1 text-navy-600">DIY</div>
                  <div className="text-navy-700">{item.diy}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-cream-200">
                  <div className="text-xs font-semibold mb-1 text-navy-600">In-House Hire</div>
                  <div className="text-navy-700">{item.inhouse}</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-cream-200">
                  <div className="text-xs font-semibold mb-1 text-navy-600">Generic Agency</div>
                  <div className="text-navy-700">{item.agency}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Table */}
        <div className="hidden lg:block overflow-x-auto shadow-xl rounded-2xl border border-cream-200">
          <table className="w-full">
            <thead>
              <tr className="bg-cream-100">
                <th className="px-6 py-4 text-left text-sm font-bold text-navy-900 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-navy-700 to-brown-600">
                  ⭐ AskShree
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-navy-700 uppercase tracking-wider">
                  DIY
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-navy-700 uppercase tracking-wider">
                  In-House Hire
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-navy-700 uppercase tracking-wider">
                  Generic Agency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-cream-200">
              {comparisons.map((item, index) => (
                <tr key={index} className="hover:bg-cream-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-navy-900">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-sm text-center font-semibold text-navy-900 bg-navy-50">
                    {item.askshree}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-navy-600">
                    {item.diy}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-navy-600">
                    {item.inhouse}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-navy-600">
                    {item.agency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-brown-50 rounded-2xl p-8 border border-brown-200">
          <h4 className="text-2xl font-bold text-navy-900 mb-4">
            The Smart Choice is Clear
          </h4>
          <p className="text-navy-700 mb-6 max-w-2xl mx-auto">
            Get the expertise of a specialist, the flexibility of an agency, and the transparency of working directly with the founder - without the overhead of hiring in-house.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-navy-700 to-brown-600 text-white px-8 py-4 rounded-full font-semibold hover:from-navy-800 hover:to-brown-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Let's Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
}