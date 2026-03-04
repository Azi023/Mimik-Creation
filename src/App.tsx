import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import LoadingSpinner from "./components/LoadingSpinner";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";

// Lazy-load all non-home pages to reduce initial bundle
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const OurWork = lazy(() => import("./pages/OurWork"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// ROUTING AUDIT (Sprint 9):
// [x] Navbar links - verified
// [x] Service dropdown - anchors working
// [x] Footer links - verified
// [x] Portfolio cards - verified
// [x] CTA buttons - verified
// [x] Case study navigation - verified
// [x] External links - new tab
// [x] Mobile menu - verified
// [x] Calendly URL - corrected to /mimik-creat/free-consultation

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function scrollToElement(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

const ScrollToHash = () => {
  const { hash } = useLocation();

  // Handle React Router hash changes (first navigation)
  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const timer = setTimeout(() => scrollToElement(id), 300);
    return () => clearTimeout(timer);
  }, [hash]);

  // Handle native hashchange events (repeated clicks on same page)
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (id) {
        setTimeout(() => scrollToElement(id), 100);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ScrollToHash />
          <BackToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/our-work/:id" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
