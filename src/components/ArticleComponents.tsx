import React from 'react';

// Composant pour les titres principaux
export const ArticleTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
    {children}
  </h1>
);

// Composant pour les sous-titres
export const ArticleSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 leading-tight">
    {children}
  </h2>
);

// Composant pour les sous-sous-titres
export const ArticleSubSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-10 mb-4 leading-tight">
    {children}
  </h3>
);

// Composant pour les paragraphes
export const ArticleParagraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
    {children}
  </p>
);

// Composant pour les listes à puces
export const ArticleList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-8 mb-8 space-y-3">
    {children}
  </ul>
);

// Composant pour les éléments de liste
export const ArticleListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
    {children}
  </li>
);

// Composant pour les listes numérotées
export const ArticleOrderedList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ol className="list-decimal pl-8 mb-8 space-y-3">
    {children}
  </ol>
);

// Composant pour le code inline
export const ArticleInlineCode: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-md font-mono text-sm text-gray-900 dark:text-gray-100">
    {children}
  </code>
);

// Composant pour les citations
export const ArticleQuote: React.FC<{ children: React.ReactNode; author?: string }> = ({ children, author }) => (
  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
      {children}
    </p>
    {author && (
      <cite className="text-sm font-medium text-blue-600 dark:text-blue-400">
        — {author}
      </cite>
    )}
  </blockquote>
);

// Composant pour les notes/alertes
export const ArticleNote: React.FC<{ 
  children: React.ReactNode; 
  type?: 'info' | 'warning' | 'success' | 'error' 
}> = ({ children, type = 'info' }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-800 dark:text-yellow-200';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-800 dark:text-green-200';
      case 'error':
        return 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-800 dark:text-red-200';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-800 dark:text-blue-200';
    }
  };

  return (
    <div className={`border-l-4 pl-8 py-8 my-12 rounded-r-2xl shadow-sm ${getStyles()}`}>
      <div className="text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};

// Composant pour les sections avec fond
export const ArticleSection: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
  background?: boolean;
}> = ({ children, className = '', background = false }) => (
  <section className={`
    ${background ? 'bg-gray-50 dark:bg-gray-800/30 p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700/50' : 'py-8'} 
    my-16 
    ${className}
  `}>
    <div className="space-y-8">
      {children}
    </div>
  </section>
);

// Composant pour créer des séparateurs visuels
export const ArticleDivider: React.FC = () => (
  <hr className="my-20 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
);

// Composant pour les intro/lead paragraphes
export const ArticleLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-2xl leading-relaxed text-gray-600 dark:text-gray-400 font-light mb-12 border-l-4 border-blue-500 pl-8 py-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-r-2xl">
    {children}
  </p>
);
