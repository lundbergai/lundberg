import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import projectsData from '@/data/projects.json';

const Projects = () => {
	const projects = projectsData;

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<div className="max-w-4xl mx-auto px-6 py-8">
				<div className="mb-8">
					<h1 className="text-3xl font-bold text-gray-900 mb-3">Projects</h1>
					<p className="text-gray-600">
						A showcase of the applications and systems I've built throughout my career.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<Link key={project.id} to={`/projects/${project.slug}`}>
							<Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer h-full">
								<div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
									<img
										src={project.heroImage}
										alt={project.name}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
									/>
								</div>
								<CardContent className="p-6">
									<div className="flex items-start justify-between mb-3">
										<h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
											{project.name}
										</h3>
										<ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-2" />
									</div>

									<p className="text-sm text-gray-600 mb-4 line-clamp-3">
										{project.description}
									</p>

									<div className="space-y-3">
										<div>
											<p className="text-xs text-gray-500 mb-1">Technologies</p>
											<div className="flex flex-wrap gap-1">
												{project.technologies.slice(0, 3).map((tech, index) => (
													<Badge key={index} variant="secondary" className="text-xs">
														{tech}
													</Badge>
												))}
												{project.technologies.length > 3 && (
													<Badge variant="secondary" className="text-xs">
														+{project.technologies.length - 3} more
													</Badge>
												)}
											</div>
										</div>

									</div>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
