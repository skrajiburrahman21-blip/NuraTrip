// LandingPage/Landingpage.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import HowItWorks from './HowItWorks';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <About />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Landingpage;
