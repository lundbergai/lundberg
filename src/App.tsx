
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import AlgoSkinDetail from "./pages/AlgoSkinDetail";
import ConsultantResumeDetail from "./pages/ConsultantResumeDetail";
import LmsDetail from "./pages/LmsDetail";
import GroceryOptimizerDetail from "./pages/GroceryOptimizerDetail";
import AbraGameDetail from "./pages/AbraGameDetail";
import TopDownShootingSwordDetail from "./pages/TopDownShootingSwordDetail";
import LanguagePatternDetail from "./pages/LanguagePatternDetail";
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
					<Route path="/projects/algoskin" element={<AlgoSkinDetail />} />
					<Route path="/projects/consultantresume" element={<ConsultantResumeDetail />} />
					<Route path="/projects/lms" element={<LmsDetail />} />
					<Route path="/projects/groceryoptimizer" element={<GroceryOptimizerDetail />} />
					<Route path="/projects/abragame" element={<AbraGameDetail />} />
					<Route path="/projects/topdownshootingsword" element={<TopDownShootingSwordDetail />} />
					<Route path="/projects/languagepattern" element={<LanguagePatternDetail />} />
					<Route path="/projects/apples2apples" element={<Apples2ApplesDetail />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
