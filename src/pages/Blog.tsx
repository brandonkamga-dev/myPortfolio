"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import useTranslation from "../hooks/useTranslation";

// Type pour les articles de blog
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  featured?: boolean;
}

const Blog = () => {
  const { t, language } = useTranslation();

  // Articles de blog (en attendant l'intégration Markdown)
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: language === 'fr' 
        ? "Introduction au DevOps moderne : CI/CD avec GitHub Actions" 
        : "Modern DevOps Introduction: CI/CD with GitHub Actions",
      excerpt: language === 'fr'
        ? "Découvrez comment mettre en place une pipeline CI/CD robuste avec GitHub Actions pour automatiser vos déploiements et améliorer la qualité de votre code."
        : "Learn how to set up a robust CI/CD pipeline with GitHub Actions to automate your deployments and improve your code quality.",
      date: "2024-01-15",
      readTime: language === 'fr' ? "8 min de lecture" : "8 min read",
      tags: ["DevOps", "CI/CD", "GitHub Actions"],
      slug: "devops-moderne-github-actions",
      featured: true
    },
    {
      id: "2", 
      title: language === 'fr'
        ? "Machine Learning avec FastAPI : Créer une API robuste"
        : "Machine Learning with FastAPI: Building a Robust API",
      excerpt: language === 'fr'
        ? "Guide complet pour créer une API de machine learning performante avec FastAPI, de la conception à la mise en production."
        : "Complete guide to creating a performant machine learning API with FastAPI, from design to production deployment.",
      date: "2024-01-10",
      readTime: language === 'fr' ? "12 min de lecture" : "12 min read",
      tags: ["Machine Learning", "FastAPI", "Python"],
      slug: "ml-fastapi-api-robuste"
    },
    {
      id: "3",
      title: language === 'fr'
        ? "React et TypeScript : Bonnes pratiques pour 2024"
        : "React and TypeScript: Best Practices for 2024",
      excerpt: language === 'fr'
        ? "Les dernières bonnes pratiques pour développer des applications React avec TypeScript, incluant les hooks personnalisés et la gestion d'état."
        : "Latest best practices for developing React applications with TypeScript, including custom hooks and state management.",
      date: "2024-01-05",
      readTime: language === 'fr' ? "10 min de lecture" : "10 min read",
      tags: ["React", "TypeScript", "Frontend"],
      slug: "react-typescript-bonnes-pratiques-2024"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr' 
      ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section avec Grid Background */}
      <section className="pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'fr' ? 'Blog' : 'Blog'}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {language === 'fr' 
                ? "Mes réflexions sur le développement, le DevOps, et les technologies modernes"
                : "My thoughts on development, DevOps, and modern technologies"
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles de blog */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid gap-8 md:gap-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${post.featured ? 'md:grid md:grid-cols-2 md:gap-8 md:items-center' : ''}`}
              >
                <div className={`${post.featured ? 'order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
                  >
                    {language === 'fr' ? 'Lire l\'article' : 'Read article'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {post.featured && (
                  <div className="order-1 mb-6 md:mb-0">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl flex items-center justify-center">
                      <div className="text-blue-600 dark:text-blue-400 text-6xl font-bold opacity-20">
                        {post.id}
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
