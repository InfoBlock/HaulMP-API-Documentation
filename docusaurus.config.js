// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HaulMP API',
  tagline: 'Reference for the public HaulMP endpoints',
  url: 'https://infoblock.github.io',
  baseUrl: '/HaulMP-API-Documentation/',
  organizationName: 'infoblock',
  projectName: 'HaulMP-API-Documentation',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  favicon: 'img/favicon.svg',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      {
        docs: { routeBasePath: '/', sidebarPath: require.resolve('./sidebars.js') },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  themeConfig: {
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: 'HaulMP API',
      items: [
        { to: '/', label: 'Docs', position: 'left' },
        { href: 'https://haulmp.com', label: 'haulmp.com', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright:
        'Unofficial documentation compiled from the endpoint inventory dated 2 Oct 2026. Endpoints may change without notice.',
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  },
};

module.exports = config;
