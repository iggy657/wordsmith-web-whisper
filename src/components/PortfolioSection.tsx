
import React from 'react';
import { ExternalLink } from 'lucide-react';

type ProjectType = {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  link?: string;
};

const PortfolioSection = () => {
  const projects: ProjectType[] = [
    {
      title: "Evergreen Digital",
      category: "Website Copy",
      description: "Complete website overhaul for a digital marketing agency looking to refine their messaging and attract higher-tier clients.",
      result: "Attracted 3 enterprise clients in the first month after launch.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      link: "#"
    },
    {
      title: "Bloom Skincare",
      category: "Email Campaign",
      description: "Six-part email sequence for a skincare line's new product launch, focused on education and gentle selling.",
      result: "32% conversion rate, 2x industry standard.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      link: "#"
    },
    {
      title: "Thornton Coaching",
      category: "Brand Messaging",
      description: "Developed core messaging framework and tagline for an executive coach pivoting to serve a more specific audience.",
      result: "Increased program applications by 65%.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      link: "#"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-900 mb-4">Featured Work</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Browse a selection of recent projects and the measurable results they've delivered.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20">
                    <span className="bg-coral-500 text-white text-xs font-medium px-2.5 py-1 rounded-full mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-serif font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <p className="paragraph text-navy-800">
                  {project.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-coral-500">
                  <p className="font-medium text-navy-900">
                    <span className="text-coral-600 font-serif font-bold">Result:</span> {project.result}
                  </p>
                </div>
                {project.link && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-navy-800 font-medium hover:text-coral-600 transition-colors"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button onClick={scrollToContact} className="btn-primary">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
