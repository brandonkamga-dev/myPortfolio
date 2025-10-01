import React from 'react';

const ArticleLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <article className="max-w-none">
      <div className="space-y-12">
        <div className="prose prose-xl dark:prose-invert max-w-none 
          prose-headings:tracking-tight prose-headings:font-bold
          prose-h1:text-5xl prose-h1:mb-12 prose-h1:mt-16 prose-h1:leading-tight
          prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-10 prose-h2:leading-tight prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-700 prose-h2:pb-4
          prose-h3:text-3xl prose-h3:mt-16 prose-h3:mb-8 prose-h3:leading-tight
          prose-p:text-xl prose-p:leading-relaxed prose-p:mb-8 prose-p:text-gray-700 prose-p:dark:text-gray-300
          prose-ul:mb-10 prose-ul:space-y-4 prose-ul:pl-8
          prose-ol:mb-10 prose-ol:space-y-4 prose-ol:pl-8
          prose-li:text-xl prose-li:leading-relaxed prose-li:text-gray-700 prose-li:dark:text-gray-300
          prose-strong:font-bold prose-strong:text-gray-900 prose-strong:dark:text-white
          prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-3 prose-code:py-1.5 prose-code:rounded-lg prose-code:font-mono prose-code:text-base prose-code:text-blue-600 prose-code:dark:text-blue-400
          prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-8 prose-blockquote:py-6 prose-blockquote:bg-blue-50 prose-blockquote:dark:bg-blue-900/20 prose-blockquote:rounded-r-xl prose-blockquote:my-12
          prose-hr:border-gray-200 prose-hr:dark:border-gray-700 prose-hr:my-16">
          {children}
        </div>
      </div>
    </article>
  );
};

export default ArticleLayout;

