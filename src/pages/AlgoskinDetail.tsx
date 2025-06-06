import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, User, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import projectsData from '@/data/projects.json';

const AlgoskinDetail = () => {
	const project = projectsData.find(p => p.slug === "algoskin");

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

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<div className="flex items-center text-sm text-gray-600">
							<ExternalLink className="w-4 h-4 mr-2" />
							<a
								href="http://algo.skin/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
							>
								algo.skin
							</a>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<User className="w-4 h-4 mr-2" />
							<span>{project.role}</span>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<Calendar className="w-4 h-4 mr-2" />
							<span>{project.duration}</span>
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
				</div>

				{/* Technologies Card */}
				<div className="grid grid-cols-1 gap-8 mb-8">
					<Card>
						<CardContent className="p-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
							<div className="flex flex-wrap gap-2">
								{project.technologies.map((tech, index) => (
									<Badge key={index} variant="secondary">
										{tech}
									</Badge>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default AlgoskinDetail;
