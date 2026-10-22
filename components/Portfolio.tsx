"use client";

import React, { useState } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import Footer from "./Footer";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import { PortfolioData } from "@/types";
import ContactForm from "./ContactForm";
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
        resumeUrl={portfolioData.user.resumeUrl}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection user={portfolioData.user} />
      <AboutSection
        user={portfolioData.user}
        skillCategories={portfolioData.skillCategories}
      />
      <ExperienceSection experiences={portfolioData.experiences} />
      <ProjectsSection projects={portfolioData.projects} />
      <EducationSection education={portfolioData.education} />
      <ContactForm/>
      <Footer
        userName={portfolioData.user.name}
        email={portfolioData.user.email}
        userSocialLinks={portfolioData.user.socialLinks}
      />
    </div>
  );
};

export default Portfolio;
