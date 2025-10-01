import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useTranslation from '../hooks/useTranslation';
import { Home } from 'lucide-react';

const NotFound = () => {
  const { language } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-8xl sm:text-9xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tighter">
          404
        </h1>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          {language === 'fr' ? 'Page non trouvée' : 'Page Not Found'}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          {language === 'fr'
            ? "Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
            : "Sorry, the page you are looking for does not exist or has been moved."}
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <Home size={18} />
          {language === 'fr' ? "Retour à l'accueil" : 'Back to Home'}
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

