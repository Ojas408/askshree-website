export default function Stats() {
  const stats = [
    { number: '100%', label: 'Verified Prospects' },
    { number: '24/7', label: 'Support Available' },
    { number: 'Multi', label: 'Channel Approach' },
    { number: 'No', label: 'Long-term Contracts' },
  ];

  return (
    <section className="py-16 bg-cream-50 border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-cream-200">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-navy-700 to-brown-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-navy-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
