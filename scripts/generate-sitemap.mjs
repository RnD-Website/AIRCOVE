// Generates public/sitemap.xml from the data files. Run: node scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs';
import { services } from '../src/data/services.js';
import { blogPosts } from '../src/data/blogPosts.js';
import { locations } from '../src/data/locations.js';

const base = 'https://aircove.example';
const paths = ['/', '/about', '/services', '/offers', '/financing', '/service-areas', '/blog', '/contact', '/privacy-policy', '/terms',
  ...services.map((s) => `/services/${s.slug}`),
  ...blogPosts.map((p) => `/blog/${p.slug}`),
  ...locations.map((l) => `/service-areas/${l.slug}`)];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>\n`;
writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml: ${paths.length} urls`);
