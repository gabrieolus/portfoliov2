import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {render, routes} from '../.prerender/entry-server.js';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(projectRoot, 'dist');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const siteUrl = 'https://gabrielfiore.com';
const ogImage = `${siteUrl}/og.png`;

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function canonicalUrl(routePath) {
  return routePath === '/' ? `${siteUrl}/` : `${siteUrl}${routePath}/`;
}

function structuredData(seo) {
  if (seo.path === '/' || seo.path === '/about') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Gabriel Fiore',
      url: `${siteUrl}/`,
      jobTitle: 'Product Designer',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sorocaba',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      sameAs: [
        'https://www.linkedin.com/in/gabrieolus/',
        'https://www.behance.net/gabrieolus',
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: seo.title.split(' | ')[0],
    description: seo.description,
    url: canonicalUrl(seo.path),
    image: ogImage,
    author: {
      '@type': 'Person',
      name: 'Gabriel Fiore',
      url: `${siteUrl}/`,
    },
  };
}

function createHead(seo) {
  const title = escapeAttribute(seo.title);
  const description = escapeAttribute(seo.description);
  const canonical = canonicalUrl(seo.path);
  const jsonLd = JSON.stringify(structuredData(seo)).replaceAll('<', '\\u003c');

  return `<!-- SEO:START -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="${seo.noindex ? 'noindex, nofollow' : 'index, follow'}" />
    <link rel="canonical" href="${canonical}" />

    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="${seo.type ?? 'website'}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />

    <script type="application/ld+json">${jsonLd}</script>
    <!-- SEO:END -->`;
}

for (const route of routes) {
  const {appHtml, seo} = render(route);
  const imagePreloads = appHtml.match(/^(?:<link rel="preload" as="image"[^>]*\/>)+/)?.[0] ?? '';
  const prioritizedImagePreload = imagePreloads.match(/<link rel="preload" as="image"[^>]*\/>/)?.[0] ?? '';
  const hydratableAppHtml = appHtml.slice(imagePreloads.length);
  const html = template
    .replace(/<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/, createHead(seo))
    .replace('</head>', `${prioritizedImagePreload}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${hydratableAppHtml}</div>`);
  const outputDir = route === '/' ? distDir : path.join(distDir, route.slice(1));

  await mkdir(outputDir, {recursive: true});
  await writeFile(path.join(outputDir, 'index.html'), html);
}

await rm(path.join(projectRoot, '.prerender'), {recursive: true, force: true});
console.log(`Prerendered ${routes.length} routes.`);
