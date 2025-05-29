
import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [emailPlacement, setEmailPlacement] = useState('header'); // 'header', 'aboutMe', 'standalone'

  const workExperience = [
    {
      company: "TechCorp Inc.",
      role: "Senior Software Engineer",
      period: "Jan 2022 - Present",
      description: "Led the development of large-scale data-driven web applications using React, Node.js and PostgreSQL.",
      achievements: [
        "Integrated AI-powered recommendation engine, improving user engagement by 25%",
        "Mentored junior developers and conducted code reviews to maintain high-quality standards",
        "Collaborated with product managers and designers to define project scope and deliverables"
      ],
      projects: [
        { 
          name: "AI Recommendation Engine", 
          url: "#", 
          description: "Developed and integrated an AI-powered product recommendation system",
          icon: "smart_toy"
        },
        { 
          name: "Customer Portal Revamp", 
          url: "#", 
          description: "Complete overhaul of the customer-facing portal for improved UX and performance",
          icon: "web"
        }
      ]
    },
    {
      company: "Web Dynamics LLC",
      role: "Software Developer", 
      period: "Jun 2019 - Dec 2021",
      description: "Developed and maintained responsive websites and web applications for small to medium-sized businesses.",
      achievements: [
        "Utilized JavaScript, HTML, CSS, and various frontend frameworks like Angular and Vue.js",
        "Contributed to backend development using PHP and MySQL"
      ],
      projects: [
        { 
          name: "E-commerce Platform for SMBs", 
          url: "#", 
          description: "Built a customizable e-commerce solution for small businesses",
          icon: "shopping_cart"
        }
      ]
    }
  ];

  const education = {
    school: "State University",
    degree: "B.S. in Computer Science",
    period: "May 2019",
    details: [
      "Minor in Mathematics",
      "GPA: 3.8/4.0",
      "Dean's List 2016-2018"
    ]
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    frameworks: ["React", "Next.js", "Node.js", "Vue.js", "Express"],
    tools: ["Git", "Docker"],
    databases: ["PostgreSQL", "MongoDB"],
    cloud: ["AWS"],
    other: ["REST APIs", "GraphQL", "CI/CD Pipelines"]
  };

  const contact = {
    email: "alex.johnson@email.com",
    phone: "555-123-4567",
    linkedin: "linkedin.com/in/alexjohnsondev",
    github: "github.com/alexjohnsondev",
    website: "alexjohnson.dev"
  };

  const renderEmailPlacement = () => {
    switch (emailPlacement) {
      case 'header':
        return (
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
            <p className="text-lg text-gray-600 mb-1">Full Stack Developer & AI Enthusiast</p>
            <p className="text-sm text-gray-500">{contact.email}</p>
          </header>
        );
      case 'aboutMe':
        return (
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
            <p className="text-lg text-gray-600">Full Stack Developer & AI Enthusiast</p>
          </header>
        );
      case 'standalone':
        return (
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Alex Johnson</h1>
            <p className="text-lg text-gray-600">Full Stack Developer & AI Enthusiast</p>
          </header>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header with different email placement options */}
        {renderEmailPlacement()}
        
        {/* Email placement toggle buttons for demo */}
        <div className="flex justify-center gap-2 mb-8">
          <Button 
            variant={emailPlacement === 'header' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setEmailPlacement('header')}
          >
            Header
          </Button>
          <Button 
            variant={emailPlacement === 'aboutMe' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setEmailPlacement('aboutMe')}
          >
            About Me
          </Button>
          <Button 
            variant={emailPlacement === 'standalone' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setEmailPlacement('standalone')}
          >
            Standalone
          </Button>
        </div>

        {/* Standalone email card - only show if standalone is selected */}
        {emailPlacement === 'standalone' && (
          <div className="flex justify-center mb-8">
            <Card className="border border-gray-200 w-fit">
              <CardContent className="p-4">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2 text-gray-500" />
                  <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-slate-800 hover:underline transition-colors">
                    {contact.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* About Me */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="material-icons text-gray-700 mr-3">person</span>
                  <h2 className="text-xl font-semibold text-gray-700">About Me</h2>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Innovative Full Stack Developer with 5+ years of experience in building scalable web 
                  applications and a keen interest in leveraging AI to solve real-world problems. Proven 
                  ability to manage full project lifecycles, from conception to deployment. Eager to 
                  contribute technical expertise and creative solutions to a dynamic team.
                </p>
                {/* Email in About Me section - only show if aboutMe is selected */}
                {emailPlacement === 'aboutMe' && (
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <a href={`mailto:${contact.email}`} className="text-slate-600 hover:text-slate-800 hover:underline transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Skills - moved here from bottom */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="material-icons text-gray-700 mr-3">code</span>
                  <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Language</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-800 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Framework</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-600 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tool</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.databases.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-600 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cloud</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.cloud.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-700 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Other</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.other.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-600 text-white text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="material-icons text-gray-700 mr-3">school</span>
                  <h2 className="text-xl font-semibold text-gray-700">Education</h2>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{education.school}</h3>
                  <p className="text-gray-700 font-medium">{education.degree}</p>
                  <p className="text-gray-500 text-sm mb-3">{education.period}</p>
                  <ul className="space-y-1">
                    {education.details.map((detail, index) => (
                      <li key={index} className="text-sm text-gray-700">• {detail}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Work Experience */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <span className="material-icons text-gray-700 mr-3">work</span>
                  <h2 className="text-xl font-semibold text-gray-700">Work Experience</h2>
                </div>
                
                <div className="space-y-8">
                  {workExperience.map((job, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-3 h-3 bg-gray-900 rounded-full"></div>
                      
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <p className="text-gray-500 text-sm">{job.period}</p>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-4">{job.description}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-700">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Projects:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {job.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="group border border-gray-200 rounded-lg p-4 hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer"
                              onClick={() => window.open(project.url, '_blank')}
                            >
                              <div className="aspect-video bg-gray-50 rounded mb-3 flex items-center justify-center">
                                <span className="material-icons text-gray-400 text-4xl">{project.icon}</span>
                              </div>
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors">
                                  {project.name}
                                </h5>
                                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 transition-colors" />
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                              <button className="text-slate-600 text-sm hover:text-slate-800 hover:underline transition-colors">
                                View Details →
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
