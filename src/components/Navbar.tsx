import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { activeServices } from "@/data/services";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Our Work", href: "/our-work" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const logoSrc = scrolled ? "/Logo2.webp" : "/Logo.webp";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setDesktopDropdown(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDesktopDropdown(false), 150);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-mimik-dark/55 backdrop-blur-xl backdrop-saturate-[1.8] border-b border-white/[0.08] shadow-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
          : "bg-transparent"
      }`}
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
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={item.href}
                      className={`inline-flex items-center gap-1 font-medium transition-colors pb-1 ${
                        location.pathname === item.href
                          ? "text-white border-b-2 border-mimik-lime"
                          : scrolled
                          ? "text-white hover:text-[#FDD51E]"
                          : "text-white/90 hover:text-[#FDD51E]"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdown ? "rotate-180" : ""}`}
                      />
                    </Link>
                  </motion.div>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {desktopDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div
                          className="rounded-2xl shadow-2xl border border-white/10 py-3 min-w-[280px] bg-mimik-dark/90 backdrop-blur-xl backdrop-saturate-[1.8]"
                        >
                          {activeServices.map((s) => (
                            <Link
                              key={s.slug}
                              to={`/services#${s.slug}`}
                              onClick={() => setDesktopDropdown(false)}
                              className="flex items-center gap-3 px-5 py-2.5 text-sm text-white/80 hover:text-[#FDD51E] hover:bg-white/5 transition-colors"
                            >
                              <s.icon className="w-4 h-4 flex-shrink-0" />
                              {s.title}
                            </Link>
                          ))}
                          <div className="border-t border-white/10 mt-2 pt-2 px-5">
                            <Link
                              to="/services"
                              onClick={() => setDesktopDropdown(false)}
                              className="inline-flex items-center gap-1.5 text-sm font-semibold py-2 transition-colors text-mimik-yellow"
                            >
                              View All Services
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div key={item.name} whileHover={{ y: -2 }}>
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors pb-1 ${
                      location.pathname === item.href
                        ? "text-white border-b-2 border-mimik-lime"
                        : scrolled
                        ? "text-white hover:text-[#FDD51E]"
                        : "text-white/90 hover:text-[#FDD51E]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full font-semibold transition-colors bg-mimik-yellow text-mimik-darker"
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
            className="md:hidden border-t border-white/[0.08] bg-mimik-dark/80 backdrop-blur-2xl backdrop-saturate-[1.8]"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-white font-medium py-2 hover:text-[#FDD51E] transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 flex flex-col gap-2 border-l border-white/10 ml-2">
                            {activeServices.map((s) => (
                              <Link
                                key={s.slug}
                                to={`/services#${s.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="text-white/70 text-sm py-1.5 hover:text-[#FDD51E] transition-colors"
                              >
                                {s.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white font-medium py-2 hover:text-[#FDD51E] transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 rounded-full font-semibold text-center bg-mimik-yellow text-mimik-darker"
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
