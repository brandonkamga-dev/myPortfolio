"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square max-w-sm mx-auto lg:max-w-none bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/photo-brandon.jpeg"
                alt="Brandon Kamga"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
          >
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description1}
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description2}
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description3}
            </p>

            <div className="pt-4 sm:pt-6">
              <motion.button
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded font-medium w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                {t.about.downloadCV}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
