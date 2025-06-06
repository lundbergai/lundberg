
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import personalInfoData from '@/data/personalInfo.json';

const Navbar = () => {
	const location = useLocation();
	const { name } = personalInfoData;

	return (
		<nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-4xl mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
						{name}
					</Link>
					<div className="flex space-x-6">
						<Link
							to="/"
							className={`text-sm font-medium transition-colors ${location.pathname === '/'
								? 'text-gray-900 border-b-2 border-gray-900 pb-1'
								: 'text-gray-600 hover:text-gray-900'
								}`}
						>
							Profile
						</Link>
						<Link
							to="/projects"
							className={`text-sm font-medium transition-colors ${location.pathname.startsWith('/projects')
								? 'text-gray-900 border-b-2 border-gray-900 pb-1'
								: 'text-gray-600 hover:text-gray-900'
								}`}
						>
							Projects
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
