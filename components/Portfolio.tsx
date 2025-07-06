"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection";
import { PortfolioData } from "@/types";
interface PortfolioProps {
  portfolioData: PortfolioData;
}

const Portfolio = ({ portfolioData }: PortfolioProps) => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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
      <Footer
        userName={portfolioData.user.name}
        email={portfolioData.user.name}
        userSocialLinks={portfolioData.user.socialLinks}
      />
    </div>
  );
};

export default Portfolio;
