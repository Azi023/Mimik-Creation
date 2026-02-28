import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Mail, MapPin, Clock, Instagram, Linkedin, Facebook,
  ArrowRight, Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  "Social Media Marketing",
  "Performance Marketing",
  "Brand Identity & Visual Design",
  "Website Development",
  "SEO & GEO Services",
  "Photography & Video",
  "Event Management",
  "Email Marketing",
  "3D Animation",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Mimik Creations — Let's Talk</title>
        <meta name="description" content="Get in touch with Mimik Creations. Based in Colombo, Sri Lanka, serving clients worldwide. Book a free discovery call or send us a message." />
        <meta property="og:title" content="Contact Mimik Creations — Let's Talk" />
        <meta property="og:description" content="Get in touch with Mimik Creations. Based in Colombo, Sri Lanka, serving clients worldwide." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/contact" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={{ backgroundColor: "#0147D3" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0147D3] to-[#1D3FC1]" />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6"
          >
            Let's Connect
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's talk about how we can help your brand stand out.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white flex-1">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* Left — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                Send us a message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill in the form and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-3xl text-center border border-border"
                  style={{ backgroundColor: "#f3f4f8" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#FDD51E" }}
                  >
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    Thanks! We'll be in touch soon.
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We typically respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-medium underline"
                    style={{ color: "#1D3FC1" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In (optional)</Label>
                    <Select onValueChange={(val) => handleChange("service", val)}>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full h-14 text-base font-bold flex items-center gap-3"
                    style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Right — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div
                className="p-8 rounded-3xl"
                style={{ backgroundColor: "#f3f4f8" }}
              >
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                  Contact Info
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FDD51E" }}
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a
                        href="mailto:hello@mimikcreations.com"
                        className="text-muted-foreground hover:underline transition-colors"
                        style={{ color: "#1D3FC1" }}
                      >
                        hello@mimikcreations.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FDD51E" }}
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Location</p>
                      <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                      <p className="text-sm text-muted-foreground mt-0.5">Serving clients worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#FDD51E" }}
                    >
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Working Hours</p>
                      <p className="text-muted-foreground">Mon–Fri, 9AM – 6PM (Sri Lanka Time)</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-semibold text-foreground mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[
                      {
                        icon: Instagram,
                        href: "https://www.instagram.com/mimik.creations/",
                        label: "Instagram",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/company/mimik-creations/",
                        label: "LinkedIn",
                      },
                      {
                        icon: Facebook,
                        href: "https://www.facebook.com/mimikcreations/",
                        label: "Facebook",
                      },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                        style={{ backgroundColor: "#273a62", color: "#ffffff" }}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Prefer a call? Book a time that works for you.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Free 30-minute discovery call — no commitment.
            </p>
            <a
              href="https://calendly.com/mimik-creat/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-colors"
              style={{ backgroundColor: "#0147D3", color: "#ffffff" }}
            >
              Book a Call
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
