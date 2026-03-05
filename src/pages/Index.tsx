import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import AboutSection from "@/components/AboutSection";
import BentoProjects from "@/components/BentoProjects";
import WhyMimik from "@/components/WhyMimik";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import ReelsShowcase from "@/components/ReelsShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import { homepageReels } from "@/data/reels";
import BookCall from "@/components/BookCall";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Mimik Creations | Creative Marketing Agency | Branding, Web & Digital</title>
        <meta name="description" content="Mimik Creations is a creative marketing agency based in Colombo, Sri Lanka, serving clients across 10 countries. Branding, web development, social media, photography & more." />
        <meta property="og:title" content="Mimik Creations | Creative Marketing Agency | Branding, Web & Digital" />
        <meta property="og:description" content="Mimik Creations is a creative marketing agency based in Colombo, Sri Lanka, serving clients across 10 countries. Branding, web development, social media, photography & more." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <WhyMimik />
      <BentoProjects />
      <ServicesSection />
      <HowWeWork />
      <ReelsShowcase reels={homepageReels} title="See Our Work in Motion" subtitle="Real content. Real results. Watch our latest reels." />
      <TestimonialsSection />
      <BookCall />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
