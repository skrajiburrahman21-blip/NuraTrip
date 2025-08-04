// Testimonials.jsx
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Canada",
      rating: 5,
      text: "NuraTrip completely changed how I travel! I found an amazing travel buddy for my Europe backpacking trip. We had so much in common and the safety verification gave me complete peace of mind.",
      image: "https://shorturl.at/f3CBV"
    },
    {
      name: "Alex Chen",
      location: "Singapore", 
      rating: 5,
      text: "The AI matching is incredible - it found someone who shared my exact interests in photography and culture. We explored Japan together and it was the best trip of my life!",
      image: "https://shorturl.at/uVLl2"
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      rating: 5,
      text: "As a solo female traveler, safety is my top priority. NuraTrip's verification process and community made me feel secure. I've made lifelong friends through this platform!",
      image: "https://shorturl.at/9yvxA"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of travelers has to say about their NuraTrip experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* User info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Join thousands of satisfied travelers</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
