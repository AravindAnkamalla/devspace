'use client';

import React, { useState } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';

import { usePortfolioData } from '@/hooks/use-portfolio-data';

import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import Footer from './Footer';
import ProjectsSection from './ProjectsSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const { data: portfolioData, isLoading, error } = usePortfolioData();
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        Loading portfolio...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Error loading portfolio: {(error as Error).message}
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700">
        No portfolio data found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation
        userName={portfolioData.user.name}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection user={portfolioData.user} />
      <AboutSection user={portfolioData.user} />
      <ProjectsSection projects={portfolioData.projects} />
      <ExperienceSection experiences={portfolioData.experiences} />
      <Footer userName={portfolioData.user.name} email ={portfolioData.user.name} userSocialLinks={portfolioData.user.socialLinks} />
    </div>
  );
};

export default Portfolio;