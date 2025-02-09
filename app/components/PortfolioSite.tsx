"use client";

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation/Navigation';
import HomeSection from './Sections/HomeSection';
import ExpertiseSection from './Sections/ExpertiseSection';
import WorkSection from './Sections/WorkSection';
import ContactSection from './Sections/ContactSection';

const PortfolioSite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }
      
      // Get sections
      const sections = ['home', 'expertise', 'work', 'contact']
        .map(id => ({ id, element: document.getElementById(id) }))
        .filter(({ element }) => element !== null);

      // Find which section we're in
      for (const { id, element } of sections) {
        if (!element) continue;
        
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation 
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HomeSection />
      <ExpertiseSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default PortfolioSite;