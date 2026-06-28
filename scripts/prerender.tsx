import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App, { getCanonical, getFaqSchema, organizationSchema, pages, SITE_URL, type PageContent } from '../src/App.tsx';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

const escapeAttribute = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escapeScriptJson = (value: unknown) =>
  JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

const replaceOrInsertMeta = (html: string, selector: RegExp, tag: string) => {
  if (selector.test(html)) {
    return html.replace(selector, tag);
  }

  return html.replace('</head>', `    ${tag}\n  </head>`);
};

const injectHead = (html: string, page: PageContent) => {
  const canonical = getCanonical(page.path);
  let nextHtml = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(page.title)}</title>`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, '');

  const tags = [
    {
      selector: /<meta name="description" content="[^"]*" \/>/,
      tag: `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    },
    {
      selector: /<link rel="canonical" href="[^"]*" \/>/,
      tag: `<link rel="canonical" href="${canonical}" />`,
    },
    {
      selector: /<meta property="og:title" content="[^"]*" \/>/,
      tag: `<meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    },
    {
      selector: /<meta property="og:description" content="[^"]*" \/>/,
      tag: `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    },
    {
      selector: /<meta property="og:url" content="[^"]*" \/>/,
      tag: `<meta property="og:url" content="${canonical}" />`,
    },
    {
      selector: /<meta property="og:image" content="[^"]*" \/>/,
      tag: `<meta property="og:image" content="${SITE_URL}/images/interface-dashboard.jpg" />`,
    },
    {
      selector: /<meta name="twitter:title" content="[^"]*" \/>/,
      tag: `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    },
    {
      selector: /<meta name="twitter:description" content="[^"]*" \/>/,
      tag: `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    },
    {
      selector: /<meta name="twitter:image" content="[^"]*" \/>/,
      tag: `<meta name="twitter:image" content="${SITE_URL}/images/interface-dashboard.jpg" />`,
    },
  ];

  tags.forEach(({ selector, tag }) => {
    nextHtml = replaceOrInsertMeta(nextHtml, selector, tag);
  });

  const jsonLd = [
    `<script id="usenexora-organization-schema" type="application/ld+json">${escapeScriptJson(organizationSchema)}</script>`,
    `<script id="usenexora-faq-schema" type="application/ld+json">${escapeScriptJson(getFaqSchema(page))}</script>`,
  ].join('\n    ');

  return nextHtml.replace('</head>', `    ${jsonLd}\n  </head>`);
};

const removeClientScripts = (html: string) =>
  html
    .replace(/\s*<script type="module"[^>]*><\/script>/g, '')
    .replace(/\s*<link rel="modulepreload"[^>]*>/g, '');

const getOutputPath = (routePath: string) => {
  if (routePath === '/') {
    return path.join(distDir, 'index.html');
  }

  return path.join(distDir, routePath.replace(/^\//, ''), 'index.html');
};

const template = await readFile(templatePath, 'utf8');

await Promise.all(
  pages.map(async (page) => {
    const appHtml = renderToString(<App initialPath={page.path} />);
    const html = removeClientScripts(
      injectHead(template, page).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
    );
    const outputPath = getOutputPath(page.path);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf8');
  }),
);

console.log(`Prerendered ${pages.length} routes.`);
