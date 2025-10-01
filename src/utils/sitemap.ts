import { getArticles } from '../articles';

export const generateSitemap = () => {
  const baseUrl = 'https://brandonkamga.dev';
  const currentDate = new Date().toISOString();
  
  // Pages statiques
  const staticPages = [
    {
      url: '/',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    }
  ];

  // Articles de blog
  const articles = getArticles('fr');
  const blogPages = articles.map(article => ({
    url: `/blog/${article.slug}`,
    lastmod: new Date(article.date).toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};
