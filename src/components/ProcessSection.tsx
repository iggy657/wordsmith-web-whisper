
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-coral-500 text-white rounded-full flex items-center justify-center font-serif font-bold text-xl">
          {number}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="heading-sm text-navy-900">{title}</h3>
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "01",
      title: "APPLICATION & DISCOVERY",
      description: "We start with a simple application to ensure I'm the right fit for your project. If your goals align with my expertise, we'll schedule a discovery call to discuss your project in detail."
    },
    {
      number: "02",
      title: "ONBOARDING & KICKOFF",
      description: "Once you're ready to proceed, I'll send a welcome packet with a questionnaire to help me understand your business deeply. We'll then have a kickoff call to align on expectations and timeline."
    },
    {
      number: "03",
      title: "RESEARCH & STRATEGY",
      description: "Every great copy starts with thorough research. I'll dive into your audience, competitors, and industry to develop a strategic approach that will resonate with your ideal clients."
    },
    {
      number: "04",
      title: "WRITE & WIREFRAME",
      description: "I'll craft your copy with both message and design in mind, formatting each page in Google Docs to show how the content will flow within your website or email layout."
    },
    {
      number: "05",
      title: "EDIT & REFINE",
      description: "Great writing is really about great editing. Every piece of copy undergoes multiple rounds of internal review to ensure clarity, persuasiveness, and alignment with your brand voice."
    },
    {
      number: "06",
      title: "DELIVERY & IMPLEMENTATION",
      description: "I'll present your finalized copy via Zoom and provide all files in an organized Google Drive folder. You'll have everything you need to implement the copy confidently."
    }
  ];

  return (
    <section id="process" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-900 mb-4">What To Expect</h2>
          <p className="paragraph max-w-2xl mx-auto">
            A copywriting process you can rely on, every step of the way.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button onClick={scrollToContact} className="btn-primary group">
              Start The Conversation
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
