
import React from 'react';
import { Globe, FileEdit, MessageSquare, PenTool, ArrowDown } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  startingPrice: string;
}

const ServiceCard = ({ icon, title, description, details, startingPrice }: ServiceProps) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-card">
      <div className="mb-6 text-coral-500">{icon}</div>
      <h3 className="heading-sm mb-3 text-navy-900">{title}</h3>
      <p className="paragraph mb-4">{description}</p>
      <p className="paragraph mb-6">{details}</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-500 mb-1">Starting at</p>
          <p className="text-2xl font-serif font-bold text-navy-800">{startingPrice}</p>
        </div>
        <button onClick={scrollToContact} className="btn-secondary">
          Get Started <ArrowDown className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe size={42} />,
      title: "Website Copywriting",
      description: "Engaging, conversion-focused website copy that turns visitors into clients.",
      details: "Includes research into your target audience, competitive analysis, SEO-optimized content for up to 5 pages, and two rounds of revisions to ensure your message hits the mark perfectly.",
      startingPrice: "$1,200"
    },
    {
      icon: <FileEdit size={42} />,
      title: "Email Sequences",
      description: "Strategic email campaigns that nurture leads and drive sales.",
      details: "From welcome sequences to launch campaigns, I'll craft emails that build relationships with your subscribers and guide them toward purchase decisions through storytelling and strategic calls to action.",
      startingPrice: "$800"
    },
    {
      icon: <MessageSquare size={42} />,
      title: "Brand Messaging",
      description: "Clarify your brand voice and core messaging to stand out in your market.",
      details: "Develop a comprehensive brand messaging guide including your unique value proposition, brand story, voice and tone guidelines, and key messaging pillars to keep your communication consistent.",
      startingPrice: "$1,500"
    },
    {
      icon: <PenTool size={42} />,
      title: "Content Writing",
      description: "SEO-optimized blog posts and articles that establish your authority.",
      details: "Research-backed, engaging content that answers your audience's questions while positioning you as a thought leader in your industry. Includes keyword research and meta descriptions.",
      startingPrice: "$350"
    }
  ];

  return (
    <section id="services" className="section-spacing bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-900 mb-4">My Services</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Strategic copywriting solutions tailored to help you connect with your audience and drive conversions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
              startingPrice={service.startingPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
