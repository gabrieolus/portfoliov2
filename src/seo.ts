export const SITE_URL = 'https://gabrielfiore.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

export type SeoMetadata = {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'profile' | 'article';
  noindex?: boolean;
};

export const SEO_ROUTES: SeoMetadata[] = [
  {
    path: '/',
    title: 'Gabriel Fiore | Product Designer & Design Systems',
    description:
      'Portfolio of Gabriel Fiore, a Product Designer based in Sorocaba, Brazil, focused on UX/UI, design systems, developer handoff and AI workflows.',
    type: 'profile',
  },
  {
    path: '/about',
    title: 'About Gabriel Fiore | Product Designer',
    description:
      'Learn about Gabriel Fiore\'s experience designing SaaS products, design systems and UX/UI solutions for fintech and e-commerce teams.',
    type: 'profile',
  },
  {
    path: '/cases/blaze-campaign-builder',
    title: 'Blaze Campaign Builder | Gabriel Fiore',
    description:
      'Product design case study for a modular campaign builder that helps e-commerce store owners create, manage and monitor marketing campaigns.',
    type: 'article',
  },
  {
    path: '/cases/blaze-product-page-redesign',
    title: 'Blaze Product Page Redesign | Gabriel Fiore',
    description:
      'UX/UI case study improving product discovery, information hierarchy and purchasing flexibility for a cannabis e-commerce platform.',
    type: 'article',
  },
  {
    path: '/cases/kore-builders',
    title: 'Kore.Builders Platform | Gabriel Fiore',
    description:
      'UX/UI design case study for a private-capital platform that helps developers and founders build and launch financial products.',
    type: 'article',
  },
  {
    path: '/cases/kore-rebranding',
    title: 'Kore Rebranding | Gabriel Fiore',
    description:
      'Branding and logo redesign case study for Kore, a Canadian fintech platform serving the private capital market.',
    type: 'article',
  },
  {
    path: '/cases/kore-website',
    title: 'Kore Website Design | Gabriel Fiore',
    description:
      'Web design case study covering UX/UI, illustration and motion work created for the Kore private-capital ecosystem.',
    type: 'article',
  },
  {
    path: '/storybook',
    title: 'Portfolio Storybook | Gabriel Fiore',
    description:
      'Internal visual reference for the components, foundations and interaction patterns used across Gabriel Fiore\'s portfolio.',
    type: 'website',
    noindex: true,
  },
];

export const DEFAULT_SEO = SEO_ROUTES[0];

export function normalizePath(pathname: string) {
  if (pathname === '/') return pathname;
  return pathname.replace(/\/+$/, '');
}

export function getSeoForPath(pathname: string) {
  const normalizedPath = normalizePath(pathname);
  return SEO_ROUTES.find((route) => route.path === normalizedPath) ?? DEFAULT_SEO;
}

export function getCanonicalUrl(path: string) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`;
}
