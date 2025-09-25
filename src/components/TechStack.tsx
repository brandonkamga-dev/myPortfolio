
"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, Brain, Wrench } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const TechStack = () => {
  const { t } = useTranslation();
  const categories = [
    {
      title: t.techStack.categories.frontend,
      icon: <Code size={24} />,
      techs: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"]
    },
    {
      title: t.techStack.categories.backend,
      icon: <Server size={24} />,
      techs: ["Python", "FastAPI", "Node.js", "Spring Boot", "Java"]
    },
    {
      title: t.techStack.categories.database,
      icon: <Database size={24} />,
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
    },
    {
      title: t.techStack.categories.devopsCloud,
      icon: <Cloud size={24} />,
      techs: ["Docker", "Git", "GitHub Actions", "Linux", "AWS"]
    },
    {
      title: t.techStack.categories.aiDataScience,
      icon: <Brain size={24} />,
      techs: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Jupyter"]
    },
    {
      title: t.techStack.categories.toolsOthers,
      icon: <Wrench size={24} />,
      techs: ["VS Code", "Postman", "Figma", "Notion"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.techStack.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-50 dark:bg-gray-700 rounded text-center hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-default inline-block"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium text-xs sm:text-sm whitespace-nowrap">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
