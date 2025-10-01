"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import useTranslation from "../hooks/useTranslation";
import { getArticles } from "../articles";

const Blog = () => {
  const { language } = useTranslation();
  const blogPosts = getArticles(language as 'fr' | 'en');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr'
      ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <SEO 
        title="Blog - Brandon Kamga"
        description="Articles techniques de Brandon Kamga sur le développement web, React, TypeScript, Python, DevOps et Machine Learning. Découvrez des tutoriels et bonnes pratiques."
        keywords="blog développement, articles techniques, React, TypeScript, Python, DevOps, Machine Learning, tutoriels, bonnes pratiques, Brandon Kamga"
        url="/blog"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navigation />

        <main className="pt-24 sm:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.header
              className="text-center mb-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                {language === 'fr' ? 'Blog' : 'Blog'}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {language === 'fr' 
                  ? 'Découvrez mes articles sur le développement web, les bonnes pratiques et les technologies modernes'
                  : 'Discover my articles on web development, best practices and modern technologies'
                }
              </p>
            </motion.header>

            <div className="grid gap-8 lg:gap-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 dark:text-gray-400 mb-4 lg:mb-0">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <time dateTime={post.date}>{formatDate(post.date)}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
                          >
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link to={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                    >
                      {language === 'fr' ? 'Lire l\'article' : 'Read article'}
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
