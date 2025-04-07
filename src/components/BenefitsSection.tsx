
import React from 'react';
import { Target, TrendingUp, MessagesSquare, Rocket, ArrowDown } from 'lucide-react';

const BenefitCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="benefit-card flex flex-col md:flex-row gap-4 md:items-start">
      <div className="flex-shrink-0 bg-navy-100 p-4 rounded-lg text-navy-800">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="heading-sm text-navy-900">{title}</h3>
        <p className="paragraph">{description}</p>
        <button onClick={scrollToContact} className="text-coral-600 font-medium inline-flex items-center hover:text-coral-700 transition-colors">
          Learn more <ArrowDown className="ml-1" size={16} />
        </button>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Target size={28} />,
      title: "Strategic Approach",
      description: "Every word is purposeful, crafted to reach your ideal clients and compel them to take action.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Conversion-Focused",
      description: "Copy that doesn't just sound good but drives measurable results and boosts your bottom line.",
    },
    {
      icon: <MessagesSquare size={28} />,
      title: "Brand Voice Mastery",
      description: "I capture your unique voice and communicate your value in a way that resonates with your audience.",
    },
    {
      icon: <Rocket size={28} />,
      title: "SEO Excellence",
      description: "Keyword-optimized content that attracts your ideal clients and helps you rank higher in search results.",
    },
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-900 mb-4">Why Work With Me</h2>
          <p className="paragraph max-w-2xl mx-auto">
            I don't just write pretty words. I create strategic copy that connects, convinces, and converts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
