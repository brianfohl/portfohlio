"use client";

import React from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection
}) => {
  return (
    <nav className="fixed top-0 w-full p-4 md:p-6 z-50 bg-black bg-opacity-95">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl mx-auto">
        {/* Logo/Name */}
        <div className="flex justify-between items-center">
          <div className="text-xl font-mono">Brian.Fohl_</div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-emerald-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        <DesktopMenu 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />

        <MobileMenu 
          mobileMenuOpen={mobileMenuOpen}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;