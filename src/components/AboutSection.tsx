
import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-navy-700 to-coral-500 opacity-30 blur-md"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="Professional copywriter working" 
                className="relative z-10 rounded-xl w-full object-cover max-w-md mx-auto"
              />
            </div>
          </div>
          <div className="lg:w-3/5 space-y-6">
            <h2 className="heading-lg text-navy-900">Get To Know Me</h2>
            <p className="paragraph">
              Hi there! I'm a seasoned copywriter with over 8 years of experience crafting compelling content that drives results. My journey began when I noticed how many brilliant businesses were struggling to communicate their value effectively.
            </p>
            <p className="paragraph">
              What started as a passion project has grown into a thriving copywriting practice dedicated to helping businesses like yours stand out with words that work.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-coral-600" size={20} />
                <span className="font-medium">8+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-coral-600" size={20} />
                <span className="font-medium">200+ satisfied clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-coral-600" size={20} />
                <span className="font-medium">35+ industries served</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-coral-600" size={20} />
                <span className="font-medium">Conversion specialist</span>
              </div>
            </div>
            <p className="paragraph">
              I believe that exceptional copy isn't just about pretty words—it's about strategic communication that connects with your ideal clients and compels them to take action. That's why I take the time to understand not just your business, but the people you serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
