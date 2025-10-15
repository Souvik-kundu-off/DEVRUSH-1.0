import { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-purple-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500">
              <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Developer Club
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('event-details')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Event Details
            </button>
            <button
              onClick={() => scrollToSection('timeline')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection('tracks')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tracks
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all">
                Register Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('event-details')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Event Details
              </button>
              <button
                onClick={() => scrollToSection('timeline')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection('tracks')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Tracks
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-2xl shadow-lg shadow-purple-500/50">
                  Register Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
