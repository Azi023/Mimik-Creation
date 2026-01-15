import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import BentoProjects from "@/components/BentoProjects";
import WhyMimik from "@/components/WhyMimik";
import ServicesSection from "@/components/ServicesSection";
import CaseStudies from "@/components/CaseStudies";
import BookCall from "@/components/BookCall";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <BentoProjects />
      <WhyMimik />
      <ServicesSection />
      <CaseStudies />
      <BookCall />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
