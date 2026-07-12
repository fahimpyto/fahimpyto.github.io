import { SITE } from '../data/site';

const siteUrl = SITE.url;

export interface SchemaContext {
  title: string;
  description: string;
  canonical: string;
  currentPath: string;
  type?: string;
  publishedTime?: string;
  tags?: string[];
}

const imageObject = {
  '@type': 'ImageObject',
  '@id': `${siteUrl}/#profile-image`,
  url: siteUrl + '/fa_lkn.webp',
  caption: 'Fahim Ahmed',
};

const personSchema = {
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Fahim Ahmed',
  alternateName: 'fahimpyto',
  url: siteUrl + '/',
  image: imageObject,
  description: SITE.description,
  jobTitle: 'Python Automation Expert',
  knowsAbout: [
    'Python', 'Playwright', 'BeautifulSoup', 'Selenium',
    'Django', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn',
    'Web Scraping', 'Technical SEO', 'Structured Data',
    'Core Web Vitals', 'Data Analysis', 'Git', 'Linux',
    'Open Source', 'AI-assisted Automation',
  ],
  sameAs: [
    'https://github.com/fahimpyto',
    'https://linkedin.com/in/fahimpyto',
    'https://www.facebook.com/fahimpyto',
    'https://pypi.org/project/metascrub/',
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl + '/',
  name: SITE.title,
  alternateName: 'fahimpyto',
  description: SITE.description,
  publisher: { '@id': `${siteUrl}/#person` },
  copyrightHolder: { '@id': `${siteUrl}/#person` },
  creator: { '@id': `${siteUrl}/#person` },
  inLanguage: 'en',
};

function generateBreadcrumbs(currentPath: string) {
  const parts = currentPath.split('/').filter(Boolean);
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' },
  ];
  let accumulated = '';
  for (const part of parts) {
    accumulated += '/' + part;
    const name = part
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    items.push({
      '@type': 'ListItem',
      position: items.length + 1,
      name,
      item: siteUrl + accumulated,
    });
  }
  return {
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/#breadcrumb`,
    itemListElement: items,
  };
}

export function homepageSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...personSchema,
        mainEntityOfPage: { '@id': `${ctx.canonical}#webpage` },
      },
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#person` },
        mainEntity: { '@id': `${siteUrl}/#person` },
        primaryImageOfPage: { '@id': `${siteUrl}/#profile-image` },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function aboutSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'ProfilePage',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': `${siteUrl}/#person` },
        primaryImageOfPage: { '@id': `${siteUrl}/#profile-image` },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function collectionPageSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'CollectionPage',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function blogPostingSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'BlogPosting',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        author: { '@id': `${siteUrl}/#person` },
        datePublished: ctx.publishedTime,
        keywords: ctx.tags?.join(', '),
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function softwareSourceCodeSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        author: { '@id': `${siteUrl}/#person` },
        copyrightHolder: { '@id': `${siteUrl}/#person` },
        datePublished: ctx.publishedTime,
        keywords: ctx.tags?.join(', '),
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function contactPageSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'ContactPage',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function webPageSchema(ctx: SchemaContext) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      websiteSchema,
      {
        '@type': 'WebPage',
        '@id': `${ctx.canonical}#webpage`,
        url: ctx.canonical,
        name: ctx.title,
        description: ctx.description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        breadcrumb: { '@id': `${siteUrl}/#breadcrumb` },
        inLanguage: 'en',
      },
      generateBreadcrumbs(ctx.currentPath),
    ],
  };
}

export function getSchema(ctx: SchemaContext) {
  const path = ctx.currentPath;
  const type = ctx.type;

  if (path === '/') return homepageSchema(ctx);
  if (path === '/about') return aboutSchema(ctx);
  if (path === '/contact') return contactPageSchema(ctx);
  if (path === '/projects' || path === '/articles') return collectionPageSchema(ctx);
  if (type === 'article' && path.startsWith('/articles/')) return blogPostingSchema(ctx);
  if (type === 'article' && path.startsWith('/projects/')) return softwareSourceCodeSchema(ctx);
  return webPageSchema(ctx);
}
