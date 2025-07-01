import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import { User } from '@/types'; 
import { openInNewTab, openMailClient } from '@/lib/utils';

interface HeroSectionProps {
  user: User;
}

const HeroSection: React.FC<HeroSectionProps> = ({ user }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8 ring-4 ring-white shadow-xl">
            <AvatarImage src={user.image} alt={user.name} />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              {user.name.split(' ').map((n) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            {user.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {user.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {user.skillsets.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-white/60 hover:bg-white/80 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" onClick={()=>{openMailClient(user.email)}}>
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" onClick={()=>{openInNewTab(user.socialLinks?.github)}}>
              <Github className="w-5 h-5 mr-2" />
              View Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;