import React from "react";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/AppIcon";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  image: string;
  alt: string;
}

const TeamExcellence = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Chief Technical Officer",
      specialization: "Advanced Diagnostics & Engine Systems",
      experience: "18 Years",
      certifications: [
        "ASE Master Technician",
        "BMW Certified",
        "Bosch Diagnostics Expert",
      ],
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1800c3c80-1766527002726.png",
      alt: "Professional Indian male automotive expert in blue workshop uniform with diagnostic tablet in modern service center",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Service Operations Head",
      specialization: "Quality Assurance & Customer Experience",
      experience: "15 Years",
      certifications: [
        "ISO 9001 Lead Auditor",
        "Six Sigma Black Belt",
        "Customer Service Excellence",
      ],
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_180bcd411-1764695001960.png",
      alt: "Professional Indian female manager in business attire with clipboard reviewing service quality in automotive workshop",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Lead Diagnostic Specialist",
      specialization: "Electronic Systems & Computer Diagnostics",
      experience: "12 Years",
      certifications: [
        "Mercedes-Benz Certified",
        "Audi Specialist",
        "Advanced Electronics",
      ],
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_16ce8133b-1764643785440.png",
      alt: "Skilled Indian male technician in grey uniform using advanced diagnostic computer equipment in automotive service bay",
    },
    {
      id: 4,
      name: "Sunita Reddy",
      role: "Fleet Management Director",
      specialization: "Corporate Solutions & Logistics",
      experience: "14 Years",
      certifications: [
        "Fleet Management Professional",
        "Logistics Optimization",
        "B2B Solutions Expert",
      ],
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_15f62c20c-1763300561468.png",
      alt: "Professional Indian female director in formal blazer with tablet managing fleet operations in modern office setting",
    },
  ];

  const departments = [
    { name: "Diagnostic Specialists", count: 45, icon: "ComputerDesktopIcon" },
    { name: "Master Technicians", count: 78, icon: "WrenchScrewdriverIcon" },
    { name: "Service Advisors", count: 32, icon: "UserGroupIcon" },
    { name: "Quality Controllers", count: 28, icon: "ShieldCheckIcon" },
    { name: "Parts Specialists", count: 35, icon: "CubeIcon" },
    { name: "Support Staff", count: 132, icon: "BuildingOfficeIcon" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            350+ Experts, One Promise: Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of certified professionals brings decades of combined
            experience, cutting-edge expertise, and unwavering commitment to
            your vehicle&apos;s care.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-modal transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <AppImage
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2">
                      <Icon
                        name="AcademicCapIcon"
                        size={16}
                        variant="outline"
                        className="text-muted-foreground mt-1 flex-shrink-0"
                      />
                      <p className="text-sm text-muted-foreground">
                        {member.specialization}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="ClockIcon"
                        size={16}
                        variant="outline"
                        className="text-muted-foreground flex-shrink-0"
                      />
                      <p className="text-sm text-muted-foreground">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Certifications:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Department Breakdown */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
            Our Team Structure
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="text-center p-4 bg-background rounded-xl hover:bg-primary/5 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon
                    name={dept.icon}
                    size={24}
                    variant="outline"
                    className="text-primary"
                  />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {dept.count}
                </div>
                <div className="text-sm text-muted-foreground">{dept.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExcellence;
