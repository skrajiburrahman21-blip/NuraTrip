// About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Travel Smarter, Safer, Together
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              NuraTrip revolutionizes solo travel by connecting like-minded adventurers through cutting-edge AI technology. 
              We understand that the best travel experiences happen when you share them with the right people.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Safety First Approach</h3>
                  <p className="text-gray-600">Multi-layer verification ensures you connect only with genuine, trustworthy travelers.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Intelligent Matching</h3>
                  <p className="text-gray-600">Our AI considers your travel style, interests, budget, and personality for perfect matches.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Trip Support</h3>
                  <p className="text-gray-600">From planning to booking to sharing memories, we support your entire journey.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Join Our Global Community</h3>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-white/30 rounded-full"><img className="w-8 h-8 rounded-full" src="https://shorturl.at/f3CBV" alt="https://shorturl.at/f3CBV" /></div>
                    <div>
                      <p className="font-medium">Sarah from Canada</p>
                      <p className="text-sm opacity-80">Backpacking through Europe</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-white/30 rounded-full"><img className="w-8 h-8 rounded-full" src="https://shorturl.at/uVLl2" alt="https://shorturl.at/uVLl2" /></div>
                    <div>
                      <p className="font-medium">Alex from Australia</p>
                      <p className="text-sm opacity-80">Photography tour in Japan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-white/30 rounded-full"><img className="w-8 h-8 rounded-full" src="https://shorturl.at/9yvxA" alt="https://shorturl.at/9yvxA" /></div>
                    <div>
                      <p className="font-medium">Maria from Brazil</p>
                      <p className="text-sm opacity-80">Cultural immersion in India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
