

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types'; 
import { openInNewTab } from '@/lib/utils';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" onClick={()=>openInNewTab(project.githubLink)}>
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white"  onClick={()=>openInNewTab(project.liveLink)}>
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.techStacks.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 