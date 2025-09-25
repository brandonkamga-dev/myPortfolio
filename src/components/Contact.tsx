
"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <div className="w-24 h-px bg-gray-300 dark:bg-gray-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            {t.contact.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:lestartege@gmail.com"
              className="flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded"
            >
              <Mail size={20} />
              brandonkamga237@gmail.com
            </a>
            
            <a
              href="https://wa.me/237650830057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors rounded"
            >
              <MessageCircle size={20} />
              {t.contact.whatsapp}
            </a>
          </div>
          
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="https://github.com/brandonkamga-dev"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
