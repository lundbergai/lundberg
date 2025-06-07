
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, User, Building2, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import projectsData from '@/data/projects.json';

const ConsultantResumeDetails = () => {
	const project = projectsData.find(p => p.slug === "consultantresume");
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	// Handle escape key and outside click to close modal
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setSelectedImage(null);
			}
		};

		if (selectedImage) {
			document.addEventListener('keydown', handleEscape);
			return () => document.removeEventListener('keydown', handleEscape);
		}
	}, [selectedImage]);

	const handleModalClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			setSelectedImage(null);
		}
	};

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

					<div className="grid grid-cols-1 md:grid-cols-3 mb-6">
						<div className="flex items-center text-sm text-gray-600">
							<User className="w-4 h-4 mr-2" />
							<span>{project.role}</span>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<Building2 className="w-4 h-4 mr-2" />
							<span className="font-medium">{project.company}</span>
						</div>
						<div className="flex items-center text-sm text-gray-600">
							<Users className="w-4 h-4 mr-2" />
							<span>{project.teamSize}</span>
						</div>
					</div>

					{/* Hero Image */}
					<div className="mb-8">
						<div
							className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300"
							onClick={() => setSelectedImage(project.heroImage)}
						>
							<img
								src={project.heroImage}
								alt={project.name}
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>

				{/* Project Details */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
					{/* Achievements Card */}
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

					{/* Technologies Card */}
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

				{/* Additional Screenshots */}
				<div className="mb-8">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">Project Screenshots</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{project.images.map((image, index) => (
							<div
								key={index}
								className="aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
								onClick={() => setSelectedImage(image)}
							>
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

			{/* Image Modal */}
			{selectedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
					onClick={handleModalClick}
				>
					<div className="relative max-w-4xl max-h-full">
						<button
							onClick={() => setSelectedImage(null)}
							className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
						>
							<X className="w-8 h-8" />
						</button>
						<img
							src={selectedImage}
							alt="Enlarged view"
							className="max-w-full max-h-full object-contain rounded-lg"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ConsultantResumeDetails;
