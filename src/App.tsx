
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import AlgoSkinDetails from "./pages/AlgoSkinDetails";
import ConsultantResumeDetails from "./pages/ConsultantResumeDetails";
import LmsDetails from "./pages/LmsDetails";
import GroceryOptimizerDetails from "./pages/GroceryOptimizerDetails";
import AbraGameDetails from "./pages/AbraGameDetails";
import TopDownShootingSwordDetails from "./pages/TopDownShootingSwordDetails";
import LanguagePatternDetails from "./pages/LanguagePatternDetails";
import Apples2ApplesDetails from "./pages/Apples2ApplesDetails";
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
					<Route path="/" element={<Projects />} />
					<Route path="/profile" element={<Index />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/algoskin" element={<AlgoSkinDetails />} />
					<Route path="/projects/consultantresume" element={<ConsultantResumeDetails />} />
					<Route path="/projects/lms" element={<LmsDetails />} />
					<Route path="/projects/groceryoptimizer" element={<GroceryOptimizerDetails />} />
					<Route path="/projects/abragame" element={<AbraGameDetails />} />
					<Route path="/projects/topdownshootingsword" element={<TopDownShootingSwordDetails />} />
					<Route path="/projects/languagepattern" element={<LanguagePatternDetails />} />
					<Route path="/projects/apples2apples" element={<Apples2ApplesDetails />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
