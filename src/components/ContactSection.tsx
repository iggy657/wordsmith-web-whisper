
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "hello@wordcraft.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="heading-lg text-navy-900 mb-4">Let's Create Something Amazing</h2>
              <p className="paragraph">
                Ready to transform your business with words that work? Drop me a line and let's start a conversation about your project.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-50 rounded-lg p-6 w-full max-w-lg flex items-center justify-between mb-6">
                <span className="text-xl md:text-2xl font-medium text-navy-800">{email}</span>
                <button 
                  onClick={copyEmail}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                </button>
              </div>
              
              {copied && (
                <p className="text-green-600 font-medium animate-fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
