// CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Find Your Perfect Travel Buddy?
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Join millions of travelers who've discovered the joy of shared adventures. Start your journey today and create memories that last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
            Get Started Free
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors w-full sm:w-auto">
            Download App
          </button>
        </div>

        {/* App store badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </div>
          
          <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-3 cursor-pointer hover:bg-gray-800 transition-colors">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </div>
        </div>

        <p className="text-blue-200 text-sm">
          Free to download • No credit card required • Start matching instantly
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
