import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail } from 'lucide-react';
import { UserSocialLinks } from '@/types'; 
import { openMailClient } from '@/lib/utils';

interface FooterProps {
  email:string;
  userName: string;
  userSocialLinks: UserSocialLinks;
}

const Footer: React.FC<FooterProps> = ({ userName, email, userSocialLinks }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {userSocialLinks.github && (
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400" asChild>
                <a href={userSocialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {userSocialLinks.linkedin && (
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400" asChild>
                <a href={userSocialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400" onClick={()=>openMailClient(email)}>
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <p className="text-gray-400 text-sm">
            © 2025 {userName}. Built with Next.js, TailwindCSS & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;