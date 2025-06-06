
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AbragameDetail from "./pages/AbragameDetail";
import TopdownshootingswordDetail from "./pages/TopdownshootingswordDetail";
import LanguagepatternDetail from "./pages/LanguagepatternDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:id" element={<ProjectDetail />} />
					<Route path="/projects/abragame" element={<AbragameDetail />} />
					<Route path="/projects/topdownshootingsword" element={<TopdownshootingswordDetail />} />
					<Route path="/projects/languagepattern" element={<LanguagepatternDetail />} />
					{/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
