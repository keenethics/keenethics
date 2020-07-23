const fs = require('fs');
const { createClient } = require('contentful');
const dotenv = require('dotenv-safe');

dotenv.config('./.env');
const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const currentDate = new Date().toISOString().split('T')[0];
const pagesName = fs.readdirSync('./pages')
  .filter((file) => file.match(/^(?!_|post|index.*$).*\.js$/g))
  .map((name) => name.replace('.js', ''));

const getPostsList = async () => {
  if (!SPACE_ID || !ACCESS_TOKEN) return null;

  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });

  return client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
    select: 'fields.categories,fields.heroImage,fields.slug,fields.title,fields.publishDate',
  });
};

const sitemapWrapper = (pagesSitemap, postsSitemap) => `
<urlset>
  <url>
    <loc>https://keenethics.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${pagesSitemap}
  ${postsSitemap}
</urlset>
`;

const getSitemapItems = (paths, basePath = '') => paths.map((path) => `
  <url>
    <loc>https://keenethics.com/${basePath}${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`).join('');

const generateSitemap = async () => {
  const posts = (await getPostsList()).items.map(({ fields }) => fields.slug);
  const pagesSitemap = getSitemapItems(pagesName);
  const postsSitemap = getSitemapItems(posts, 'blog/');
  const sitemap = sitemapWrapper(pagesSitemap, postsSitemap);
  fs.writeFileSync('./public/sitemap.xml', sitemap);
};

generateSitemap();
