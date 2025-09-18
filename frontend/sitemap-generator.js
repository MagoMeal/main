const fs = require('fs');

const routes = [
  '/', 
  '/about', 
  '/menu', 
  '/contact'
]; // Add all your React routes here

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>https://www.magomeal.nl${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>0.8</priority>
  </url>
`).join('')}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', sitemap);
console.log('✅ sitemap.xml generated in /public/');
