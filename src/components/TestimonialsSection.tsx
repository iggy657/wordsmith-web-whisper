
import React from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialCard = ({ 
  quote, 
  author, 
  company, 
  stars = 5 
}: { 
  quote: string; 
  author: string; 
  company: string; 
  stars?: number;
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      <div className="text-coral-500 mb-4">
        <Quote size={32} className="opacity-60" />
      </div>
      <p className="paragraph text-gray-700 italic flex-grow mb-6">{quote}</p>
      <div className="mt-auto">
        <div className="flex mb-2">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} size={16} className="text-coral-500 fill-coral-500" />
          ))}
        </div>
        <div className="font-medium text-navy-900">{author}</div>
        <div className="text-gray-500 text-sm">{company}</div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Working with WordCraft transformed our website copy. We saw a 45% increase in conversion rates within the first month. The way she captured our brand voice was nothing short of magical.",
      author: "Sarah Johnson",
      company: "Evergreen Digital",
      stars: 5
    },
    {
      quote: "I was struggling to articulate what makes my business special. After our first meeting, she understood my vision better than I could explain it myself. The copy she delivered exceeded all expectations.",
      author: "Michael Thornton",
      company: "Thornton Coaching",
      stars: 5
    },
    {
      quote: "Our email campaigns were underperforming until we hired WordCraft. The new copy resonated so well with our audience that our open rates doubled and click-throughs tripled.",
      author: "Amelia Rodriguez",
      company: "Bloom Skincare",
      stars: 5
    }
  ];

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-navy-900 mb-4">Client Success Stories</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              stars={testimonial.stars}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
