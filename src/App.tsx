
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AlgoskinDetail from "./pages/AlgoskinDetail";
import ConsultantresumeDetail from "./pages/ConsultantresumeDetail";
import LmsDetail from "./pages/LmsDetail";
import GroceryoptimizerDetail from "./pages/GroceryoptimizerDetail";
import AbragameDetail from "./pages/AbragameDetail";
import TopdownshootingswordDetail from "./pages/TopdownshootingswordDetail";
import LanguagepatternDetail from "./pages/LanguagepatternDetail";
import Apples2ApplesDetail from "./pages/Apples2ApplesDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
					<Route path="/projects/algoskin" element={<AlgoskinDetail />} />
					<Route path="/projects/consultantresume" element={<ConsultantresumeDetail />} />
					<Route path="/projects/lms" element={<LmsDetail />} />
					<Route path="/projects/groceryoptimizer" element={<GroceryoptimizerDetail />} />
					<Route path="/projects/abragame" element={<AbragameDetail />} />
					<Route path="/projects/topdownshootingsword" element={<TopdownshootingswordDetail />} />
					<Route path="/projects/languagepattern" element={<LanguagepatternDetail />} />
					<Route path="/projects/apples2apples" element={<Apples2ApplesDetail />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
