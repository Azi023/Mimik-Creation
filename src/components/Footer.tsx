import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { activeServices } from "@/data/services";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/mimik.creations/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/mimik-creations/", label: "LinkedIn" },
  { icon: Facebook, href: "https://www.facebook.com/mimikcreations/", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#08113a" }} className="text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div className="mb-6" whileHover={{ scale: 1.02 }}>
              <Link to="/">
                <img src="/Projects/Logo-F.webp" alt="Mimik Creations" className="w-[200px]" />
              </Link>
            </motion.div>
            <p className="text-white/70 mb-6 max-w-xs leading-relaxed">
              A creative marketing agency crafting memorable brands and digital experiences that drive results.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  whileHover={{ scale: 1.1, backgroundColor: "#FDD51E" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-2.5">
              {activeServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services#${s.slug}`}
                    className="text-white/60 hover:text-mimik-lime transition-colors inline-flex items-center gap-1 group text-sm"
                  >
                    {s.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-mimik-lime transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#FDD51E" }} />
                <a
                  href="mailto:hello@mimikcreations.com"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  hello@mimikcreations.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#FDD51E" }} />
                <span className="text-white/60 text-sm">Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Mimik Creations. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Founded 2023 · Colombo, Sri Lanka · Serving clients globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
