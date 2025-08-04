// Statistics.jsx
import React from 'react';

const Statistics = () => {
  const stats = [
    {
      number: "4M+",
      label: "Active Travelers",
      description: "Join millions of verified travelers worldwide"
    },
    {
      number: "190+",
      label: "Countries",
      description: "Global network spanning every continent"
    },
    {
      number: "100K+",
      label: "Successful Trips",
      description: "Trips planned and completed together"
    },
    {
      number: "98%",
      label: "Satisfaction Rate",
      description: "Travelers who'd recommend NuraTrip"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Travelers Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join the world's largest community of verified travel companions and start your next adventure with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-blue-100 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-blue-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-8">Trusted and secured by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-white/20 px-4 py-2 rounded text-white font-semibold">256-bit SSL</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-semibold">GDPR Compliant</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-semibold">Verified Profiles</div>
            <div className="bg-white/20 px-4 py-2 rounded text-white font-semibold">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
