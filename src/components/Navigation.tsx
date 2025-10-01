
"use client";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion } from "framer-motion";
import useTranslation from "../hooks/useTranslation";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage, t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

    const navItems = [
    { label: t.nav.home, href: isHomePage ? "#home" : "/#home" },
    { label: t.nav.about, href: isHomePage ? "#about" : "/#about" },
    { label: t.nav.experience, href: isHomePage ? "#experience" : "/#experience" },
    { label: t.nav.technologies, href: isHomePage ? "#tech-stack" : "/#tech-stack" },
    { label: t.nav.projects, href: isHomePage ? "#projects" : "/#projects" },
    { label: t.nav.certifications, href: isHomePage ? "#certifications" : "/#certifications" },
    { label: t.nav.lescracks, href: isHomePage ? "#lescracks" : "/#lescracks" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: isHomePage ? "#contact" : "/#contact" }
  ];

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    changeLanguage(newLang);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '';
  };

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed z-50 transition-all duration-300 ${
        isScrolled 
          ? 'top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50' 
          : 'top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${isScrolled ? 'max-w-7xl' : 'max-w-full'}`}>
        <div className={`flex items-center justify-between ${isScrolled ? 'h-12 sm:h-14' : 'h-14 sm:h-16'}`}>
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 text-gray-900 dark:text-white cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              &lt;/&gt;
            </div>
          </motion.button>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm xl:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative whitespace-nowrap"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Controls - Right */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </motion.button>
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-1">
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1.5 text-xs text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={14} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </motion.button>
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            className="lg:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-3 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-200 font-medium text-center"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
