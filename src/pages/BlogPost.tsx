"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import useTranslation from "../hooks/useTranslation";
import { getArticleBySlug, Article } from "../articles";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useTranslation();
  const [post, setPost] = useState<Article | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const article = getArticleBySlug(slug, language as 'fr' | 'en');
      setPost(article);
    }
    setLoading(false);
  }, [slug, language]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return language === 'fr'
      ? date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center text-gray-500 dark:text-gray-400">
          Chargement de l'article...
        </div>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  const ArticleContent = post.component;

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, Brandon Kamga, développement web, article technique`}
        url={`/blog/${post.slug}`}
        type="article"
        publishedTime={new Date(post.date).toISOString()}
      />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation />
      
      <article className="pt-24 sm:pt-32">
        <header className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/blog"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
              >
                <ArrowLeft size={16} />
                {language === 'fr' ? 'Retour au blog' : 'Back to blog'}
              </Link>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-8 text-base text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full"
                  >
                    <Tag size={14} />
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          </div>
        </header>

        <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ArticleContent />
            </motion.div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
    </>
  );
};

export default BlogPost;
