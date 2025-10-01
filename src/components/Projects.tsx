"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: t.projects.projectsList.egolya.title,
      description: t.projects.projectsList.egolya.description,
      stack: ["Node.js", "Express", "LangChain", "Gemini AI", "Docker"],
      github: null,
      demo: null,
      year: "2024"
    },
    {
      title: t.projects.projectsList.coachMyMove.title,
      description: t.projects.projectsList.coachMyMove.description,
      stack: ["React", "Tailwind CSS", "Node.js", "Express", "LangChain", "ChromaDB", "Gemini AI API", "Docker"],
      github: null,
      demo: null,
      year: "2024"
    },
    {
      title: t.projects.projectsList.lescracksWebsite.title,
      description: t.projects.projectsList.lescracksWebsite.description,
      stack: ["React", "Tailwind CSS"],
      github: null,
      demo: null,
      year: "2024"
    },
    {
      title: t.projects.projectsList.dishTrad.title,
      description: t.projects.projectsList.dishTrad.description,
      stack: ["React", "Tailwind CSS", "Node.js", "FastAPI", "RabbitMQ", "LangChain", "ChromaDB", "TensorFlow", "PostgreSQL", "Docker"],
      github: null,
      demo: null,
      year: "2024"
    },
    {
      title: t.projects.projectsList.portfolioPersonnel.title,
      description: t.projects.projectsList.portfolioPersonnel.description,
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: null,
      demo: "https://brandonkamga.griote.org/blog",
      year: "2024"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors rounded-lg"
                  >
                    <Github size={16} />
                    {t.projects.buttons.code}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors rounded-lg"
                  >
                    <ExternalLink size={16} />
                    {t.projects.buttons.demo}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;