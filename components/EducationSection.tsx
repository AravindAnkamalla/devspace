import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import { Education } from "@/types";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic background that supports my engineering work
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <Card
              key={item.id}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-sm">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600">
                          {item.school}
                        </p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    {item.details && (
                      <p className="text-gray-700 leading-relaxed">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
