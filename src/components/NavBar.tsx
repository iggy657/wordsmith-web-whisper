
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-serif font-bold text-navy-900">WordCraft</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-navy-800 hover:text-coral-500 transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-navy-800 hover:text-coral-500 transition-colors"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-navy-800 hover:text-coral-500 transition-colors"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-navy-800 py-2 hover:text-coral-500 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-navy-800 py-2 hover:text-coral-500 transition-colors"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-navy-800 py-2 hover:text-coral-500 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
