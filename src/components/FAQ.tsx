import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most clients see their first interested prospects within 2-3 weeks. However, building a consistent pipeline of qualified leads typically takes 4-6 weeks as we refine messaging and targeting based on initial responses. Remember: we focus on quality over quantity.'
    },
    {
      question: 'What\'s the minimum commitment?',
      answer: 'We recommend at least 2-3 months to build momentum and see meaningful results. Lead generation is not a one-time effort - it requires consistent outreach, testing, and optimization. Month 1 is setup and initial campaigns, Month 2-3 is where you see real traction.'
    },
    {
      question: 'Do you guarantee a specific number of leads?',
      answer: 'No, and here\'s why: we focus on QUALIFIED leads, not just numbers. A generic agency might promise "100 leads" but give you unqualified contacts. We deliver verified, interested prospects that match your ideal customer profile. Quality beats quantity every time.'
    },
    {
      question: 'What makes you different from other lead gen agencies?',
      answer: 'Three things: (1) We specialize in tech/SaaS/IoT - we understand your industry. (2) You work directly with the founder, Prince Pasi - no account managers. (3) We deliver leads, you close deals - clear separation of responsibilities means no false promises about revenue.'
    },
    {
      question: 'What information do you need from me to get started?',
      answer: 'We need: (1) Your ideal customer profile (company size, industry, role), (2) Your value proposition and key differentiators, (3) Any existing customer success stories, (4) Your current sales process and timeline. We handle the rest - research, messaging, outreach, and follow-up.'
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer: 'We work with both! Startups benefit from our expertise in positioning and messaging. Established companies leverage our scale and multi-channel approach. As long as you have a clear value proposition and can handle inbound leads, we can help.'
    },
    {
      question: 'What does "qualified lead" mean exactly?',
      answer: 'A qualified lead from us is someone who: (1) Matches your ideal customer profile, (2) Has shown interest in your solution, (3) Has budget/authority or can influence the decision, (4) Has a timeline for making a decision. We verify all contact information before delivery.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes - we don\'t lock you into long-term contracts. We believe in earning your business month by month through results. If you\'re not seeing value, you can stop anytime with 30 days notice.'
    },
    {
      question: 'How do you ensure my brand reputation stays intact?',
      answer: 'We treat your brand like our own. All messaging is reviewed and approved by you before any outreach. We use professional communication, never spam tactics. We respect opt-outs immediately and maintain detailed records of all interactions.'
    },
    {
      question: 'What channels do you use for outreach?',
      answer: 'We use a multi-channel approach: (1) Cold email with personalized sequences, (2) LinkedIn connection requests and InMail, (3) Cold calling for high-value prospects. The mix depends on your industry and target audience.'
    },
    {
      question: 'Do I need to provide contact lists?',
      answer: 'No - we handle all research and list building. We use premium databases and manual research to find and verify prospects that match your ideal customer profile. You just tell us who to target, we find them.'
    },
    {
      question: 'What happens after you deliver a lead?',
      answer: 'We hand off the qualified, interested prospect to you with full context: what they\'re interested in, their timeline, key pain points discussed, and next steps. Your sales team takes over from there. We can also help schedule the initial meeting if needed.'
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">Common Questions</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-navy-700">
            Everything you need to know about working with AskShree
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-cream-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-cream-50 transition-colors"
              >
                <span className="text-lg font-semibold text-navy-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-brown-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-navy-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center bg-brown-50 rounded-2xl p-8 border border-brown-200">
          <h4 className="text-2xl font-bold text-navy-900 mb-4">Still Have Questions?</h4>
          <p className="text-navy-700 mb-6">
            Let's talk! Book a free 15-minute call and get all your questions answered.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-navy-700 to-brown-600 text-white px-8 py-4 rounded-full font-semibold hover:from-navy-800 hover:to-brown-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}