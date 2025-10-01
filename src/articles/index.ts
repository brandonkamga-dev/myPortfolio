import React from 'react';
import DevopsModerneGithubActions from './DevopsModerneGithubActions';
import MlFastapiApiRobuste from './MlFastapiApiRobuste';
import ReactTypescriptBonnesPratiques2024 from './ReactTypescriptBonnesPratiques2024';

export interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  author: string;
  excerpt: string;
  component: React.FC;
}

export const articles: Record<'fr' | 'en', Article[]> = {
  fr: [
    {
      slug: 'devops-moderne-github-actions',
      title: 'Introduction au DevOps moderne : CI/CD avec GitHub Actions',
      date: '2024-01-15',
      readTime: '8 min de lecture',
      tags: ['DevOps', 'CI/CD', 'GitHub Actions'],
      author: 'Brandon Kamga',
      excerpt: "Le DevOps moderne nécessite une approche structurée pour l'intégration et le déploiement continus...",
      component: DevopsModerneGithubActions,
    },
    {
      slug: 'ml-fastapi-api-robuste',
      title: 'Machine Learning avec FastAPI : Créer une API robuste',
      date: '2024-01-10',
      readTime: '12 min de lecture',
      tags: ['Machine Learning', 'FastAPI', 'Python'],
      author: 'Brandon Kamga',
      excerpt: "FastAPI est devenu l'un des frameworks les plus populaires pour créer des APIs de machine learning performantes...",
      component: MlFastapiApiRobuste,
    },
    {
      slug: 'react-typescript-bonnes-pratiques-2024',
      title: 'React et TypeScript : Bonnes pratiques pour 2024',
      date: '2024-01-05',
      readTime: '10 min de lecture',
      tags: ['React', 'TypeScript', 'Frontend'],
      author: 'Brandon Kamga',
      excerpt: "L'écosystème React évolue constamment. Voici les bonnes pratiques à adopter en 2024 pour développer des applications robustes...",
      component: ReactTypescriptBonnesPratiques2024,
    },
  ],
  en: [
    {
      slug: 'devops-moderne-github-actions',
      title: 'Modern DevOps Introduction: CI/CD with GitHub Actions',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['DevOps', 'CI/CD', 'GitHub Actions'],
      author: 'Brandon Kamga',
      excerpt: 'Modern DevOps requires a structured approach for continuous integration and deployment...',
      component: DevopsModerneGithubActions,
    },
    {
      slug: 'ml-fastapi-api-robuste',
      title: 'Machine Learning with FastAPI: Building a Robust API',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Machine Learning', 'FastAPI', 'Python'],
      author: 'Brandon Kamga',
      excerpt: 'FastAPI has become one of the most popular frameworks for building high-performance machine learning APIs...',
      component: MlFastapiApiRobuste,
    },
    {
      slug: 'react-typescript-bonnes-pratiques-2024',
      title: 'React and TypeScript: Best Practices for 2024',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['React', 'TypeScript', 'Frontend'],
      author: 'Brandon Kamga',
      excerpt: 'The React ecosystem is constantly evolving. Here are the best practices to adopt in 2024 for developing robust applications...',
      component: ReactTypescriptBonnesPratiques2024,
    },
  ],
};

export const getArticles = (lang: 'fr' | 'en') => articles[lang].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getArticleBySlug = (slug: string, lang: 'fr' | 'en') => articles[lang].find(article => article.slug === slug);
