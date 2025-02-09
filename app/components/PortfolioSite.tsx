"use client";

import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import HomeSection from './Sections/HomeSection';
import ExpertiseSection from './Sections/ExpertiseSection';
import WorkSection from './Sections/WorkSection';
import ContactSection from './Sections/ContactSection';

const PortfolioSite: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
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