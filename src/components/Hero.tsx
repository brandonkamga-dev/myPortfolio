
"use client";

import { Code, Rocket, Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import useTranslation from "../hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 sm:pt-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 dark:text-white leading-tight px-2">
            {t.hero.name}
          </h1>
          
          <div className="w-16 sm:w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light px-4">
            {t.hero.title}
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 px-4">
            <motion.a 
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center rounded font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.viewProjects}
            </motion.a>
            <motion.a 
              href="#contact"
              className="px-6 sm:px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors text-center rounded font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.contactMe}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
