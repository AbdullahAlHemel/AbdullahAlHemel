import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  // Hide navbar on scroll down, show on scroll up & track active item
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      const sections = navItems.map(item => item.to);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, navItems]);

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-300
      backdrop-blur-xl bg-slate-900/70 shadow-lg border-b border-slate-700/50
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="cursor-pointer"
        >
          <img
            src={Logo}
            className="
              w-20 h-10 sm:w-24 sm:h-12 
              object-contain transition-all duration-300 
              bg-gradient-to-r from-blue-200 via-white to-blue-200
            "
            alt="Logo"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => scrollToSection(item.to)}
                className={`transition-all duration-300 hover:text-white hover:scale-105 px-3 py-2 rounded-lg ${
                  activeSection === item.to
                    ? "text-white font-bold bg-white/10"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>

              {activeSection === item.to && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-white text-2xl cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.to)}
              className={`text-base sm:text-lg transition-all duration-300 w-4/5 text-center py-3 rounded-lg ${
                activeSection === item.to
                  ? "text-white font-bold bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
