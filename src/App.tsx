import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/i18n";
import ScrollToTop from "@/components/ScrollToTop";
import Heybinder from "./pages/Heybinder";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/DataDeletion";
import DataDeletionIOS from "./pages/DataDeletionIOS";
import Story from "./pages/Story";
import Clean from "./pages/Clean";
import Short from "./pages/Short";

// Each use-case page statically imports its own demo videos, so code-splitting
// them keeps a visitor who only sees the home page from downloading all of it.
const ForAiEngineers = lazy(() => import("./pages/ForAiEngineers"));
const ForEducation = lazy(() => import("./pages/ForEducation"));
const ForCommunities = lazy(() => import("./pages/ForCommunities"));
const ForWork = lazy(() => import("./pages/ForWork"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Heybinder />} />

              <Route path="/for-ai-engineers" element={<ForAiEngineers />} />
              <Route path="/for-education" element={<ForEducation />} />
              <Route path="/for-communities" element={<ForCommunities />} />
              <Route path="/for-work" element={<ForWork />} />

              {/* Folded into /for-communities. Keep indefinitely — this URL has been shared. */}
              <Route path="/whatsapp-alternative" element={<Navigate to="/for-communities" replace />} />

              <Route path="/clean" element={<Clean />} />
              <Route path="/short" element={<Short />} />
              <Route path="/story" element={<Story />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/data-deletion" element={<DataDeletion />} />
              <Route path="/data-deletion-ios" element={<DataDeletionIOS  />} />
              <Route path="/old" element={<Index />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
