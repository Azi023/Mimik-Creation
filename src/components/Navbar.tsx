import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoSrc = scrolled ? "/Logo2.webp" : "/Logo.webp";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-lg"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "#08113a" } : {}}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center gap-2">
              <img src={logoSrc} alt="Mimik Creations" className="w-[65px]" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }}>
                <Link
                  to={item.href}
                  className={`font-medium transition-colors ${
                    scrolled
                      ? "text-white hover:text-[#FDD51E]"
                      : "text-white/90 hover:text-[#FDD51E]"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full font-semibold transition-colors"
                style={{
                  backgroundColor: "#FDD51E",
                  color: "#0a1128",
                }}
              >
                Book a Call
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: "#08113a" }}
            className="md:hidden border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium py-2 hover:text-[#FDD51E] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 rounded-full font-semibold text-center"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
