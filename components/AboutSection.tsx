import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { SkillCategory, User } from "@/types";
import { openInNewTab, openMailClient } from "@/lib/utils";

interface AboutSectionProps {
  user: User;
  skillCategories: SkillCategory[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  user,
  skillCategories,
}) => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I&apos;m a full-stack software engineer with 2+ years of experience
              building and scaling SaaS products across web, mobile, and backend
              services. I work with TypeScript, React, React Native, Node.js,
              GraphQL, PostgreSQL, Prisma, and AWS.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              My recent work includes payment integrations with Finix,
              automotive dealership workflows, InsurTech platforms, API design,
              database modeling, and AI-assisted agentic development. I care
              about clean architecture, performance, and shipping maintainable
              product features.
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
                <div className="space-y-4">
                  {skillCategories.map((category) => (
                    <div key={category.name}>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        {category.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {category.items.join(", ")}
                      </p>
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
