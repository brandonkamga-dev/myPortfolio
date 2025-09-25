
"use client";

import { motion } from "framer-motion";
import useTranslation from "../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="py-12 px-6 lg:px-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t.footer.copyright}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t.footer.madeWith}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
