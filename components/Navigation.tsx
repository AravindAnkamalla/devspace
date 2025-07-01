'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface NavigationProps {
  userName: string;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  userName,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {userName.split('  ')}
          </div>
          <div className="hidden md:flex space-x-8">
            {['about', 'projects', 'experience'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-200 ${
                  activeSection === section
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          {/* <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;