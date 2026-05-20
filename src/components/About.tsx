export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-cream-100 to-brown-100 rounded-3xl p-8 shadow-xl border border-cream-200">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-cream-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Expert Team</h4>
                      <p className="text-sm text-navy-600">Seasoned sales professionals</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brown-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Proven Methods</h4>
                      <p className="text-sm text-navy-600">Data-driven strategies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Lead Focused</h4>
                      <p className="text-sm text-navy-600">Quality qualified prospects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">About AskShree</h2>
              <h3 className="text-4xl font-bold text-navy-900 mb-4">
                Your Partner in Lead Generation
              </h3>
            </div>
            
            <p className="text-lg text-navy-700 leading-relaxed">
              Founded by <span className="font-semibold text-gray-900">Prince Pasi</span>, AskShree is a specialized lead generation service dedicated to helping technology companies and startups connect with their ideal prospects.
            </p>

            <p className="text-lg text-navy-700 leading-relaxed">
              We understand the unique challenges faced by IoT, SaaS, and tech companies in today's competitive market. Our mission is to deliver qualified, verified leads through proven outreach strategies across multiple channels. <span className="font-semibold text-navy-900">We provide the leads - you close the deals.</span>
            </p>

            <div className="bg-brown-50 border-l-4 border-brown-600 p-6 rounded-r-lg shadow-sm">
              <p className="text-navy-800 italic">
                "We focus on what we do best - finding and qualifying prospects. Your expertise closes the deals. Together, we grow your business."
              </p>
              <p className="text-sm text-brown-700 mt-2 font-medium">— Prince Pasi, Founder</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-navy-50 to-navy-100 p-6 rounded-xl shadow-md border border-navy-200">
                <div className="text-3xl font-bold text-navy-700 mb-1">100%</div>
                <div className="text-sm text-navy-700 font-medium">Verified Leads</div>
              </div>
              <div className="bg-gradient-to-br from-brown-50 to-brown-100 p-6 rounded-xl shadow-md border border-brown-200">
                <div className="text-3xl font-bold text-brown-700 mb-1">24/7</div>
                <div className="text-sm text-brown-700 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
