
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, Clock, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

const Apples2ApplesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = {
    name: "Apples2Apples",
    description: "Java card game implementation showcasing design patterns and comprehensive testing methodologies",
    heroImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    technologies: ["Java", "JUnit", "Mockito", "Design Patterns", "Factory Pattern", "Strategy Pattern", "Dependency Injection"],
    company: "University Project",
    role: "Developer",
    teamSize: "2 developers",
    duration: "3 months",
    challenges: [
      "Implementing multiple design patterns in a cohesive architecture",
      "Creating flexible game engine that supports various card game rules",
      "Ensuring comprehensive test coverage for all game scenarios",
      "Designing clean and maintainable object-oriented code structure"
    ],
    achievements: [
      "Successfully implemented Factory, Strategy, and Dependency Injection patterns",
      "Achieved 95%+ test coverage with comprehensive unit and integration tests",
      "Created extensible game framework that supports multiple game variants",
      "Delivered clean, well-documented codebase following SOLID principles"
    ],
    myContributions: [
      "Designed and implemented the core game engine architecture",
      "Applied multiple design patterns for flexible and maintainable code",
      "Developed comprehensive testing suite with JUnit and Mockito",
      "Created game logic and rule engine for card game mechanics"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="aspect-video bg-gray-100 rounded-lg mb-6 overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
          <p className="text-lg text-gray-600 mb-6">{project.description}</p>
          
          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <Building className="w-5 h-5 mr-2" />
              <span>{project.company}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="w-5 h-5 mr-2" />
              <span>{project.teamSize}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Key Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* My Contributions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">My Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {project.myContributions.map((contribution, index) => (
                <li key={index} className="text-gray-700 flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  {contribution}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Project Images */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">Project Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Back to Portfolio */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Apples2ApplesDetail;
