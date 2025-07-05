import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code, Star } from "lucide-react";
import { User } from "@/types"; // Import the User type
import { openInNewTab, openMailClient } from "@/lib/utils";

interface AboutSectionProps {
  user: User;
}

const AboutSection: React.FC<AboutSectionProps> = ({ user }) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m a full-stack developer experienced in building scalable
              web and mobile applications using React, Node.js, TypeScript, and
              AWS. I&apos;ve resolved 30+ production issues, and delivered
              features in fast-paced Agile teams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I&apos;m passionate about clean code, performance optimization,
              and creating impactful backend systems. When I&apos;m not coding,
              you&apos;ll find me exploring new tech, contributing to
              open-source, or sharing insights with the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => openInNewTab(user.socialLinks?.github)}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openInNewTab(user.socialLinks?.linkedin)}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openMailClient(user.email)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {user.skillsets.slice(0, 6).map((skill) => (
                    <div key={skill} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
