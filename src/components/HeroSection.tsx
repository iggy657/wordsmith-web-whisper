
import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 animation-fade-in">
            <h1 className="heading-xl text-navy-900">
              Words that turn <span className="text-coral-600">visitors</span> into <span className="text-coral-600">clients</span>
            </h1>
            <p className="paragraph text-xl">
              Expert copywriting that captures your brand voice and compels your audience to take action.
              No marketing fluff. Just words that work.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="btn-primary group">
                Let's Talk
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
              </button>
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                View Services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-navy-700 to-coral-500 opacity-75 blur"></div>
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Professional copywriter"
                className="w-full max-w-md rounded-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
