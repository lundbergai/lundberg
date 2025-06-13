
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import experienceData from '@/data/experience.json';
import personalInfoData from '@/data/personalInfo.json';

const Index = () => {
	const { name, title, email, about, education, skills } = personalInfoData;
	const experience = experienceData;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white font-sans">
			<Navbar />
			<div className="max-w-4xl mx-auto px-6 py-8">
				{/* Header */}
				<header className="text-center mb-8">
					<h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
					<p className="text-lg text-gray-600 mb-3">{title}</p>
					<div className="flex items-center justify-center gap-6">
						<a
							href={`mailto:${email}`}
							className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
						>
							<Mail size={16} />
							{email}
						</a>
						<a
							href="https://github.com/lundbergai"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
						>
							<Github size={16} />
							lundbergai
						</a>
					</div>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column - Desktop */}
					<div className="lg:col-span-1 space-y-6 hidden lg:block">
						{/* Profile */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<span className="material-icons text-gray-700 mr-3">person</span>
									<h2 className="text-xl font-semibold text-gray-700">Profile</h2>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed">
									{about}
								</p>
							</CardContent>
						</Card>

						{/* Competences */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<span className="material-icons text-gray-700 mr-3">code</span>
									<h2 className="text-xl font-semibold text-gray-700">Competences</h2>
								</div>
								<div className="space-y-4">
									<div>
										<h4 className="font-medium text-gray-900 mb-2">.NET</h4>
										<div className="flex flex-wrap gap-2">
											{skills.dotnet.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-gray-800 text-white text-xs hover:bg-gray-200 hover:text-gray-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Java</h4>
										<div className="flex flex-wrap gap-2">
											{skills.java.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-blue-600 text-white text-xs hover:bg-blue-200 hover:text-blue-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Web</h4>
										<div className="flex flex-wrap gap-2">
											{skills.web.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-green-600 text-white text-xs hover:bg-green-200 hover:text-green-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Data</h4>
										<div className="flex flex-wrap gap-2">
											{skills.data.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-purple-600 text-white text-xs hover:bg-purple-200 hover:text-purple-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Infrastructure</h4>
										<div className="flex flex-wrap gap-2">
											{skills.infrastructure.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-orange-600 text-white text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Testing</h4>
										<div className="flex flex-wrap gap-2">
											{skills.testing.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-red-600 text-white text-xs hover:bg-red-200 hover:text-red-800 transition-colors">
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
								<div className="space-y-4">
									{education.map((edu, index) => (
										<div key={index}>
											<h3 className="font-semibold text-gray-900">{edu.degree}</h3>
											<p className="text-gray-700 font-medium">{edu.school}</p>
											<p className="text-gray-500 text-sm">{edu.period}</p>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Right Column - Experience (Desktop) */}
					<div className="lg:col-span-2 hidden lg:block">
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-6">
									<span className="material-icons text-gray-700 mr-3">work</span>
									<h2 className="text-xl font-semibold text-gray-700">Experience</h2>
								</div>

								<div className="space-y-8">
									{experience.map((job, index) => (
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
														<Link
															key={projectIndex}
															to={`/projects/${project.slug}`}
															className="group border border-gray-200 rounded-lg p-4 hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer block"
														>
															<div className="aspect-video bg-gray-50 rounded mb-3 overflow-hidden">
																<img
																	src={project.thumbnail}
																	alt={project.name}
																	className="w-full h-full object-cover"
																/>
															</div>
															<div className="flex items-center justify-between mb-2">
																<h5 className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors">
																	{project.name}
																</h5>
																<ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 transition-colors" />
															</div>
															<p className="text-sm text-gray-600 mb-3">{project.description}</p>
															<span className="text-slate-600 text-sm hover:text-slate-800 hover:underline transition-colors">
																View Details →
															</span>
														</Link>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Mobile Layout */}
					<div className="lg:hidden space-y-6">
						{/* Profile - Mobile */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<span className="material-icons text-gray-700 mr-3">person</span>
									<h2 className="text-xl font-semibold text-gray-700">Profile</h2>
								</div>
								<p className="text-gray-700 text-sm leading-relaxed">
									{about}
								</p>
							</CardContent>
						</Card>

						{/* Experience - Mobile */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-6">
									<span className="material-icons text-gray-700 mr-3">work</span>
									<h2 className="text-xl font-semibold text-gray-700">Experience</h2>
								</div>

								<div className="space-y-8">
									{experience.map((job, index) => (
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
												<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
													{job.projects.map((project, projectIndex) => (
														<Link
															key={projectIndex}
															to={`/projects/${project.slug}`}
															className="group border border-gray-200 rounded-lg p-4 hover:border-slate-400 hover:shadow-md transition-all duration-200 cursor-pointer block"
														>
															<div className="aspect-video bg-gray-50 rounded mb-3 overflow-hidden">
																<img
																	src={project.thumbnail}
																	alt={project.name}
																	className="w-full h-full object-cover"
																/>
															</div>
															<div className="flex items-center justify-between mb-2">
																<h5 className="font-medium text-gray-900 group-hover:text-slate-700 transition-colors">
																	{project.name}
																</h5>
																<ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-slate-600 transition-colors" />
															</div>
															<p className="text-sm text-gray-600 mb-3">{project.description}</p>
															<span className="text-slate-600 text-sm hover:text-slate-800 hover:underline transition-colors">
																View Details →
															</span>
														</Link>
													))}
												</div>
											</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>

						{/* Competences - Mobile */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<span className="material-icons text-gray-700 mr-3">code</span>
									<h2 className="text-xl font-semibold text-gray-700">Competences</h2>
								</div>
								<div className="space-y-4">
									<div>
										<h4 className="font-medium text-gray-900 mb-2">.NET</h4>
										<div className="flex flex-wrap gap-2">
											{skills.dotnet.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-gray-800 text-white text-xs hover:bg-gray-200 hover:text-gray-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Java</h4>
										<div className="flex flex-wrap gap-2">
											{skills.java.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-blue-600 text-white text-xs hover:bg-blue-200 hover:text-blue-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Web</h4>
										<div className="flex flex-wrap gap-2">
											{skills.web.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-green-600 text-white text-xs hover:bg-green-200 hover:text-green-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Data</h4>
										<div className="flex flex-wrap gap-2">
											{skills.data.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-purple-600 text-white text-xs hover:bg-purple-200 hover:text-purple-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Infrastructure</h4>
										<div className="flex flex-wrap gap-2">
											{skills.infrastructure.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-orange-600 text-white text-xs hover:bg-orange-200 hover:text-orange-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-medium text-gray-900 mb-2">Testing</h4>
										<div className="flex flex-wrap gap-2">
											{skills.testing.map((skill, index) => (
												<Badge key={index} variant="secondary" className="bg-red-600 text-white text-xs hover:bg-red-200 hover:text-red-800 transition-colors">
													{skill}
												</Badge>
											))}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Education - Mobile */}
						<Card className="border border-gray-200">
							<CardContent className="p-6">
								<div className="flex items-center mb-4">
									<span className="material-icons text-gray-700 mr-3">school</span>
									<h2 className="text-xl font-semibold text-gray-700">Education</h2>
								</div>
								<div className="space-y-4">
									{education.map((edu, index) => (
										<div key={index}>
											<h3 className="font-semibold text-gray-900">{edu.degree}</h3>
											<p className="text-gray-700 font-medium">{edu.school}</p>
											<p className="text-gray-500 text-sm">{edu.period}</p>
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
