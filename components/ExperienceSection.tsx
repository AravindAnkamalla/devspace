import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar } from "lucide-react";
import { Experience } from "@/types"; 

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  const formatDate = (dateValue: string | Date | null | undefined): string => {
    if (dateValue === null || dateValue === undefined) {
      return "Present";
    }

    const date =
      typeof dateValue === "string" ? new Date(dateValue) : dateValue;

    if (isNaN(date.getTime())) {
      console.error("Invalid Date object created:", dateValue);
      return "Invalid Date";
    }

    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover shadow-sm"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col md:items-end text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>
                            {formatDate(exp.startDate)} -{" "}
                            {exp.endDate ? formatDate(exp.endDate) : "Present"}
                          </span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-700 leading-relaxed">
                        {exp.description}
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

export default ExperienceSection;
