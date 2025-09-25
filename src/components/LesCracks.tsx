"use client";

import { motion } from "framer-motion";
import { Users, Target, Zap, TrendingUp, ArrowRight, Star, Award, BookOpen, ExternalLink } from "lucide-react";
import useTranslation from "../hooks/useTranslation";

const LesCracks = () => {
  const { t } = useTranslation();
  const stats = [
    { number: "50+", label: "Talents accompagnés", icon: <Users size={24} /> },
    { number: "95%", label: "Taux de réussite", icon: <Target size={24} /> },
    { number: "3", label: "Années d'expérience", icon: <Award size={24} /> },
    { number: "100+", label: "Projets réalisés", icon: <Zap size={24} /> }
  ];

  const features = [
    {
      icon: <BookOpen size={32} />,
      title: "Formation Personnalisée",
      description: "Programmes adaptés aux besoins spécifiques de chaque talent tech",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users size={32} />,
      title: "Mentorat Expert",
      description: "Accompagnement par des professionnels expérimentés du secteur",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Target size={32} />,
      title: "Objectifs Concrets",
      description: "Focus sur des résultats mesurables et des compétences pratiques",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Croissance Continue",
      description: "Suivi long terme pour assurer une progression constante",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.lescracks.title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            {t.lescracks.description}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://lescracks.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors rounded font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
            {t.lescracks.visitButton}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default LesCracks;
