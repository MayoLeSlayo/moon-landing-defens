/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://werethemoonlandingsreal.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ]
  },
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
}
