
"use client";

import { GraduationCap, Briefcase, Users, Code, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import useTranslation from "../hooks/useTranslation";

const Experience = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      icon: <GraduationCap size={24} />,
      title: t.experience.experiences.baccalaureat.title,
      organization: t.experience.experiences.baccalaureat.organization,
      period: "2021 – 2022",
      location: t.experience.experiences.baccalaureat.location,
      type: "education",
      description: [],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users size={24} />,
      title: t.experience.experiences.gdscBackendLead.title,
      organization: t.experience.experiences.gdscBackendLead.organization,
      period: "2023 – 2024",
      location: t.experience.experiences.gdscBackendLead.location,
      description: t.experience.experiences.gdscBackendLead.description,
      type: "leadership",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Code size={24} />,
      title: t.experience.experiences.technicalInstructor.title,
      organization: t.experience.experiences.technicalInstructor.organization,
      period: "Avril – Juin 2024",
      location: t.experience.experiences.technicalInstructor.location,
      description: t.experience.experiences.technicalInstructor.description,
      type: "teaching",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Briefcase size={24} />,
      title: t.experience.experiences.propentaTech.title,
      organization: t.experience.experiences.propentaTech.organization,
      period: "Depuis Avril 2025",
      location: t.experience.experiences.propentaTech.location,
      description: t.experience.experiences.propentaTech.description,
      type: "work",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Briefcase size={24} />,
      title: t.experience.experiences.seesSoftengine.title,
      organization: t.experience.experiences.seesSoftengine.organization,
      period: "Depuis Mai 2025",
      location: t.experience.experiences.seesSoftengine.location,
      description: t.experience.experiences.seesSoftengine.description,
      type: "work",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education': return t.experience.types.education;
      case 'leadership': return t.experience.types.leadership;
      case 'teaching': return t.experience.types.teaching;
      case 'work': return t.experience.types.work;
      default: return type;
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 sm:w-1 bg-blue-600" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Node */}
                <div className="absolute left-6 sm:left-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-600 border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg" />
                </div>

                {/* Experience Card */}
                <div className="ml-12 sm:ml-20 lg:ml-0 lg:w-full lg:flex lg:justify-center">
                  <div className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8 xl:pr-12' : 'lg:ml-auto lg:pl-8 xl:pl-12'
                  }`}>
                    <motion.div
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Header */}
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                            {exp.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                                {getTypeLabel(exp.type)}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 leading-tight">
                              {exp.title}
                            </h3>
                            <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        {exp.description && exp.description.length > 0 && (
                          <div className="space-y-3">
                            <div className="h-px bg-gray-200 dark:bg-gray-600" />
                            <ul className="space-y-2">
                              {exp.description.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300"
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                                  <span className="flex-1 leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End */}
          <div className="flex justify-center mt-12">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
