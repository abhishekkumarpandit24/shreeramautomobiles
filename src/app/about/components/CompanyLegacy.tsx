import React from "react";
import Icon from "@/components/ui/AppIcon";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const CompanyLegacy = () => {
  const milestones: Milestone[] = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "Started as a small auto repair shop in Noida with a vision to revolutionize automotive services.",
      icon: "SparklesIcon",
    },
    {
      year: "2012",
      title: "Expansion",
      description:
        "Expanded to C-12/5 Sector-85 facility with state-of-the-art equipment and 50+ team members.",
      icon: "BuildingOfficeIcon",
    },
    {
      year: "2015",
      title: "Technology Integration",
      description:
        "Introduced advanced diagnostic systems and digital service tracking for enhanced customer experience.",
      icon: "ComputerDesktopIcon",
    },
    {
      year: "2018",
      title: "Corporate Solutions",
      description:
        "Launched fleet management services, partnering with major corporations across NCR region.",
      icon: "BriefcaseIcon",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description:
        "Achieved ISO certifications and manufacturer partnerships, establishing market leadership.",
      icon: "TrophyIcon",
    },
    {
      year: "2024",
      title: "₹102 Crore Milestone",
      description:
        "Reached ₹102 crore business volume with 350+ professionals serving thousands of customers.",
      icon: "ChartBarIcon",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming Noida&apos;s premier automotive
            destination, our story is built on trust, expertise, and unwavering
            commitment to excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-modal transition-shadow duration-300">
                    <div className="text-2xl font-bold text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-modal z-10 relative">
                    <Icon
                      name={milestone.icon}
                      size={32}
                      variant="solid"
                      className="text-primary-foreground"
                    />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLegacy;
