
import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const workExperience = [
    {
      company: "EQT",
      role: "Software Engineer",
      period: "(April 2024 - Current)",
      description: "Currently working in the Motherbrain Labs team at EQT.",
      projects: [
        { name: "AI Investment Analysis Platform", url: "#", description: "Machine learning platform for investment decision support" },
        { name: "Data Pipeline Optimization", url: "#", description: "Streamlined data processing for financial analytics" }
      ]
    },
    {
      company: "DrHud",
      role: "Lead Engineer",
      period: "(May 2023 - April 2024)",
      description: "Worked as the lead engineer for DrHud, a startup building a telemedicine platform for dermatology.",
      projects: [
        { name: "Telemedicine Platform", url: "#", description: "Built the initial platform in NextJS/NestJS on Google Cloud" },
        { name: "EHR Integration", url: "#", description: "Integrated an electronic health record (EHR) into the platform (Webdoc)" }
      ]
    },
    {
      company: "Symbiosis",
      role: "Founder",
      period: "(March 2022 - Oct 2023)",
      description: "Founded and built a cloud infrastructure company that offered a managed Kubernetes platform.",
      projects: [
        { name: "Kubernetes Platform", url: "#", description: "Built the fastest and cheapest Kubernetes platform, outperforming competitors" },
        { name: "Cloud Infrastructure Blog", url: "#", description: "Created a blog featured in major Kubernetes newsletters and podcasts" }
      ]
    },
    {
      company: "Utopia",
      role: "Engineering Manager",
      period: "(Oct 2021 - March 2022)",
      description: "Worked as an engineering manager for the two core infrastructure teams.",
      projects: [
        { name: "Media Processing Pipeline", url: "#", description: "Responsible for capture, processing and data enrichment of multiple media sources" },
        { name: "Team Development Program", url: "#", description: "Established code reviews and retrospectives for continuous improvement" }
      ]
    }
  ];

  const skills = [
    ".NET (C#, ASP.NET Web, MVC, REST API, EF Core)",
    "AI (OpenAI API Prompt Engineering, Generation)",
    "Authentication (MSAL, Entra ID, JWT, OAuth)",
    "Collaboration (Git, DevOps, DevSecOps, Azure Micro)",
    "Data (SQL, MSSQL, SQLite, LINQ, JSON, XML)",
    "Infrastructure (Azure DevOps, CI/CD Pipelines, Pulumi IaC)",
    "Low-level (C++, Solidity, gRPC, Java)",
    "Testing (TDD, Unit Testing, Integration Testing)",
    "Tools (Visual Studio, VS Code, Rider, Figma, Postman, Copilot)",
    "Virtualization (Docker, Linux, VMWare, OpenVPN)",
    "Web (React, TypeScript, Vite, Node.js, HTML, CSS)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">BUSTER STYREN</h1>
              <p className="text-xl text-slate-600 mb-4">Senior Full Stack Engineer & Technical Leader</p>
            </div>
            <div className="flex flex-col space-y-2 text-slate-600">
              <div className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="hover:text-blue-600 transition-colors">linkedin</a>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <a href="#" className="hover:text-blue-600 transition-colors">github</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:buster.styren@gmail.com" className="hover:text-blue-600 transition-colors">buster.styren@gmail.com</a>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">SUMMARY</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            Senior Full Stack Engineer with 9+ years of experience. I have built large scale data platforms, 
            a multi-tenant cloud provider and multiple high throughput API backends. These days I'm mostly 
            interested in data and cloud infrastructure.
          </p>
        </section>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b border-slate-200 pb-2">WORK EXPERIENCE</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{job.company}</h3>
                      <p className="text-blue-600 font-medium">{job.role}</p>
                      <p className="text-slate-500 text-sm">{job.period}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 mb-4">{job.description}</p>
                  
                  {/* Projects */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-slate-600 uppercase tracking-wide">Featured Projects</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {job.projects.map((project, projectIndex) => (
                        <button
                          key={projectIndex}
                          className="group text-left p-3 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
                          onClick={() => window.open(project.url, '_blank')}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-slate-900 group-hover:text-blue-700">
                              {project.name}
                            </span>
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <p className="text-sm text-slate-600">{project.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Competences */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 border-b border-slate-200 pb-2">COMPETENCES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-slate-700">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate or discuss potential roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('mailto:buster.styren@gmail.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('#')}
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
