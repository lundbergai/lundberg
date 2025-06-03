
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Users, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const ProjectDetail = () => {
	const { id } = useParams();

	// This would typically come from a data source or API
	const projectsData = {
		1: {
			name: "AI Recommendation Engine",
			description: "Developed and integrated an AI-powered product recommendation system that significantly improved user engagement and conversion rates for our e-commerce platform.",
			heroImage: "/placeholder.svg",
			images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
			technologies: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "Docker"],
			company: "TechCorp Inc.",
			role: "Lead Developer",
			teamSize: "4 developers",
			duration: "6 months",
			challenges: [
				"Processing large datasets efficiently for real-time recommendations",
				"Integrating machine learning models with existing React frontend",
				"Maintaining system performance while handling 100k+ daily users"
			],
			achievements: [
				"Improved user engagement by 25%",
				"Increased conversion rates by 18%",
				"Reduced recommendation response time to under 200ms",
				"Successfully deployed to production with zero downtime"
			],
			myContributions: [
				"Designed and implemented the recommendation algorithm architecture",
				"Built the React components for displaying personalized recommendations",
				"Optimized database queries and implemented caching strategies",
				"Led code reviews and mentored junior developers on the team"
			]
		},
		2: {
			name: "Customer Portal Revamp",
			description: "Complete overhaul of the customer-facing portal to improve user experience, performance, and accessibility for our growing user base.",
			heroImage: "/placeholder.svg",
			images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
			technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Redis", "Jest", "Cypress"],
			company: "TechCorp Inc.",
			role: "Frontend Lead",
			teamSize: "3 developers, 2 designers",
			duration: "4 months",
			challenges: [
				"Migrating legacy code while maintaining backward compatibility",
				"Implementing responsive design for mobile and tablet users",
				"Ensuring accessibility compliance (WCAG 2.1 AA standards)"
			],
			achievements: [
				"Improved page load times by 60%",
				"Achieved 100% accessibility compliance score",
				"Increased mobile user engagement by 40%",
				"Reduced customer support tickets by 30%"
			],
			myContributions: [
				"Led the frontend architecture design and component library creation",
				"Implemented responsive design patterns and accessibility features",
				"Set up automated testing with Jest and Cypress",
				"Collaborated closely with UX designers to implement pixel-perfect designs"
			]
		},
		3: {
			name: "E-commerce Platform for SMBs",
			description: "Built a comprehensive e-commerce solution tailored for small businesses, featuring customizable storefronts, inventory management, and integrated payment processing.",
			heroImage: "/placeholder.svg",
			images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
			technologies: ["Vue.js", "PHP", "MySQL", "Stripe API", "Docker", "Laravel", "Redis"],
			company: "Web Dynamics LLC",
			role: "Full Stack Developer",
			teamSize: "2 developers",
			duration: "8 months",
			challenges: [
				"Building a flexible system to accommodate different business models",
				"Ensuring secure payment processing and PCI compliance",
				"Creating an intuitive admin interface for non-technical users"
			],
			achievements: [
				"Successfully onboarded 50+ small businesses in the first quarter",
				"Achieved 99.9% uptime since launch",
				"Processed over $2M in transactions securely",
				"Received 4.8/5 average user satisfaction rating"
			],
			myContributions: [
				"Developed the entire frontend using Vue.js with custom components",
				"Built RESTful APIs for inventory management and order processing",
				"Integrated Stripe payment system with comprehensive error handling",
				"Created automated deployment pipeline with Docker"
			]
		}
	};

	const projectId = Number(id) as keyof typeof projectsData;
	const project = projectsData[projectId];

	if (!project) {
		return (
			<div className="min-h-screen bg-white">
				<Navbar />
				<div className="max-w-4xl mx-auto px-6 py-8 text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
					<Link to="/projects">
						<Button variant="outline">
							<ArrowLeft className="w-4 h-4 mr-2" />
							Back to Projects
						</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<div className="max-w-4xl mx-auto px-6 py-8">
				{/* Breadcrumb */}
				<div className="mb-6">
					<Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
						<ArrowLeft className="w-4 h-4 mr-2" />
						Back to Projects
					</Link>
				</div>

				{/* Project Header */}
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-4">{project.name}</h1>
					<p className="text-lg text-gray-600 mb-6">{project.description}</p>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
						<div className="flex items-center text-sm text-gray-600">
							<User className="w-4 h-4 mr-2" />
							<span>{project.role}</span>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<Users className="w-4 h-4 mr-2" />
							<span>{project.teamSize}</span>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<Calendar className="w-4 h-4 mr-2" />
							<span>{project.duration}</span>
						</div>
						<div className="text-sm text-gray-600">
							<span className="font-medium">{project.company}</span>
						</div>
					</div>

					<div>
						<h3 className="font-medium text-gray-900 mb-2">Technologies Used</h3>
						<div className="flex flex-wrap gap-2">
							{project.technologies.map((tech, index) => (
								<Badge key={index} variant="secondary">
									{tech}
								</Badge>
							))}
						</div>
					</div>
				</div>

				{/* Hero Image */}
				<div className="mb-8">
					<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
						<img
							src={project.heroImage}
							alt={project.name}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Project Details */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Key Challenges</h3>
							<ul className="space-y-2">
								{project.challenges.map((challenge, index) => (
									<li key={index} className="text-sm text-gray-700">
										• {challenge}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
							<ul className="space-y-2">
								{project.achievements.map((achievement, index) => (
									<li key={index} className="text-sm text-gray-700">
										• {achievement}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>

				{/* My Contributions */}
				<Card className="mb-8">
					<CardContent className="p-6">
						<h3 className="text-lg font-semibold text-gray-900 mb-4">My Contributions</h3>
						<ul className="space-y-2">
							{project.myContributions.map((contribution, index) => (
								<li key={index} className="text-sm text-gray-700">
									• {contribution}
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* Additional Screenshots */}
				<div className="mb-8">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Project Screenshots</h3>
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
				</div>
			</div>
		</div>
	);
};

export default ProjectDetail;
