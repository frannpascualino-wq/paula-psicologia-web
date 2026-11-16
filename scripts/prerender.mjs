import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrEntry = resolve(root, 'dist-ssr/entry-server.js');

const { render, doctorData, content } = await import(pathToFileURL(ssrEntry).href);
const template = readFileSync(resolve(dist, 'index.html'), 'utf-8');

const { seo, profile, links, assets } = doctorData;
const site = seo.siteUrl;
const langs = ['es', 'pt'];
const today = new Date().toISOString().slice(0, 10);

const escapeAttr = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const absolute = (path) => (path.startsWith('http') ? path : `${site}${path}`);

function structuredData(lang) {
  const t = content[lang];
  const meta = seo[lang];
  const businessId = `${site}/#consultorio`;
  const personId = `${site}/#paula-cogorno`;
  const services = [
    ...t.services.cards.map((card) => ({ name: card.title, description: card.descPrimary })),
    t.services.emotionalSupport && {
      name: t.services.emotionalSupport.title,
      description: t.services.emotionalSupport.paragraphs[2],
    },
  ].filter(Boolean);

  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      url: `${site}/`,
      name: `${profile.name} · ${profile.professionalTitle}`,
      inLanguage: ['es-MX', 'pt-BR'],
      publisher: { '@id': personId },
    },
    {
      '@type': 'WebPage',
      '@id': `${meta.ogUrl}#webpage`,
      url: meta.ogUrl,
      name: meta.title,
      description: meta.description,
      inLanguage: meta.htmlLang,
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': businessId },
      primaryImageOfPage: absolute(assets.profilePhoto),
      dateModified: today,
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: profile.name,
      honorificPrefix: profile.professionalPrefix,
      jobTitle: 'Psicóloga clínica',
      description: t.about.p1,
      image: absolute(assets.profilePhoto),
      url: `${site}/`,
      knowsLanguage: ['es', 'pt'],
      knowsAbout: lang === 'pt'
        ? ['Psicanálise', 'Terapia Cognitivo-Comportamental', 'Terapia de casal', 'Terapia familiar', 'Ansiedade', 'Luto']
        : ['Psicoanálisis', 'Terapia Cognitivo-Conductual', 'Terapia de pareja', 'Terapia familiar', 'Ansiedad', 'Duelo'],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Cédula Profesional',
        identifier: profile.credential.replace(/\D/g, ''),
        recognizedBy: { '@type': 'GovernmentOrganization', name: 'Secretaría de Educación Pública (SEP)' },
      },
      worksFor: { '@id': businessId },
      sameAs: [links.doctoralia],
    },
    {
      '@type': ['MedicalBusiness', 'LocalBusiness'],
      '@id': businessId,
      name: `${profile.professionalPrefix} ${profile.name} · ${profile.professionalTitle}`,
      description: meta.description,
      url: `${site}/`,
      image: [absolute(assets.ogImage), absolute(assets.profilePhoto)],
      logo: absolute(assets.logo),
      telephone: profile.phone,
      email: profile.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hegel 120, 5to piso, Oficina 501, Polanco V Sección',
        addressLocality: 'Miguel Hidalgo',
        addressRegion: 'Ciudad de México',
        postalCode: '11560',
        addressCountry: 'MX',
      },
      hasMap: links.maps,
      areaServed: [
        { '@type': 'City', name: 'Ciudad de México' },
        { '@type': 'Country', name: 'México' },
      ],
      availableLanguage: ['es', 'pt'],
      founder: { '@id': personId },
      employee: { '@id': personId },
      sameAs: [links.doctoralia],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t.services.title,
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': businessId },
            areaServed: 'Ciudad de México',
          },
        })),
      },
      potentialAction: {
        '@type': 'ReserveAction',
        target: links.doctoralia,
        name: t.nav.cta,
      },
    },
  ];

  if (t.faq) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${meta.ogUrl}#faq`,
      inLanguage: meta.htmlLang,
      mainEntity: t.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}

function head(lang) {
  const meta = seo[lang];
  const ogImage = absolute(assets.ogImage);
  const alternates = langs
    .map((l) => `<link rel="alternate" hreflang="${seo[l].htmlLang}" href="${seo[l].ogUrl}" />`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${seo.es.ogUrl}" />`);

  return [
    `<meta name="description" content="${escapeAttr(meta.description)}" />`,
    `<meta name="keywords" content="${escapeAttr(meta.keywords)}" />`,
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    `<meta name="author" content="${escapeAttr(profile.name)}" />`,
    `<link rel="canonical" href="${meta.ogUrl}" />`,
    ...alternates,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(`${profile.name} · ${profile.professionalTitle}`)}" />`,
    `<meta property="og:title" content="${escapeAttr(meta.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeAttr(meta.ogDescription)}" />`,
    `<meta property="og:url" content="${meta.ogUrl}" />`,
    `<meta property="og:locale" content="${meta.ogLocale}" />`,
    `<meta property="og:locale:alternate" content="${seo[lang === 'es' ? 'pt' : 'es'].ogLocale}" />`,
    `<meta property="og:image" content="${ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:image:alt" content="${escapeAttr(meta.ogTitle)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttr(meta.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(meta.ogDescription)}" />`,
    `<meta name="twitter:image" content="${ogImage}" />`,
    '<meta name="geo.region" content="MX-CMX" />',
    '<meta name="geo.placename" content="Polanco, Miguel Hidalgo, Ciudad de México" />',
    `<script type="application/ld+json">${structuredData(lang)}</script>`,
  ].map((line) => `    ${line}`).join('\n');
}

function page(lang) {
  const meta = seo[lang];
  const html = render(lang);
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${meta.htmlLang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace('    <!--seo-head-->', head(lang))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
}

for (const lang of langs) {
  const outDir = resolve(dist, seo[lang].path.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), page(lang));
}

const sitemapUrls = langs.map((lang) => {
  const alternates = langs
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${seo[l].htmlLang}" href="${seo[l].ogUrl}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${seo.es.ogUrl}"/>`)
    .join('\n');
  return `  <url>\n    <loc>${seo[lang].ogUrl}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;
}).join('\n');

writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapUrls}\n</urlset>\n`,
);

rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${langs.map((l) => seo[l].path).join(', ')} and sitemap.xml`);
