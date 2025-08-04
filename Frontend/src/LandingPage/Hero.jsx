const Hero = () => (
  <section id="home" className="relative bg-gradient-to-b from-indigo-50 to-white pt-20 pb-24 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Find Your Perfect Travel Companion ✈️
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Powered by AI + behavioral analysis to match you with ideal co-travelers based on interests, trust, and travel plans.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:scale-105">
              🔍 Find Travel Buddy
            </a>
            <a href="#trip-ideas" className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg ring-2 ring-indigo-600 hover:bg-indigo-50 transition-all transform hover:scale-105">
              📍 Plan My Trip
            </a>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img 
            src="https://res.cloudinary.com/diuh0xwnv/image/upload/v1754329869/travel-adventure-with-baggage_fkdi7w.jpg" 
            alt="AI robot helping travelers plan a trip" 
            className="rounded-2xl shadow-2xl w-full max-w-md md:max-w-none"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x500/E0E7FF/4F46E5?text=Image+Error'; }}
          />
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-sky-500/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
