import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { database, sendEmailNotification } from '../utils/database';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Store in database
      const newSubmission = database.addSubmission(formData);
      
      // Send email notification
      await sendEmailNotification(newSubmission);

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-brown-700 uppercase tracking-wider mb-2">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Let's Fill Your Pipeline
          </h3>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            Ready to get more qualified leads? Contact us today for a free consultation and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-navy-700 to-brown-600 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:9004929362" className="text-cream-100 hover:text-white transition-colors">
                      +91 9004929362
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:princepasi060@gmail.com" className="text-cream-100 hover:text-white transition-colors break-all">
                      princepasi060@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-cream-100">India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h5 className="font-semibold mb-4">Business Hours</h5>
                <div className="space-y-2 text-cream-100">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-brown-50 rounded-2xl p-8 shadow-md border border-brown-200">
              <h5 className="font-semibold text-navy-900 mb-4">Why Choose AskShree?</h5>
              <ul className="space-y-3">
                {[
                  'Free initial consultation',
                  'Customized lead generation strategy',
                  'Multi-channel approach',
                  'Only verified, qualified leads',
                  'Direct communication with founder',
                  'No long-term contracts'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-brown-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-brown-300">
                <p className="text-sm text-navy-600 italic">
                  <strong className="text-navy-800">Note:</strong> We provide qualified leads and prospect connections. Closing deals depends on your sales process and product fit. We don't guarantee revenue or conversions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-cream-50 rounded-2xl shadow-xl p-8 border border-cream-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all bg-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all bg-white"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy-800 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all bg-white"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-brown-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-all resize-none bg-white"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-navy-700 to-brown-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-navy-800 hover:to-brown-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-brown-50 border border-brown-300 text-brown-900 px-4 py-3 rounded-lg font-medium">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
