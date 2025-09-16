import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Biotz Academy',
  tagline: 'Everything you need to know about Biotz to master the ins and outs of our IoT ecosystem.',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://academy.biotz.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'biotz', // Usually your GitHub org/user name.
  projectName: 'academy', // Usually your repo name.

  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    // Preload critical fonts
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/fonts/your-main-font.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/img/scalability-2.webp',
        as: 'image',
        type: 'image/webp',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com',
      },
    },
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Biotz Academy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/biotz-logo.svg',
        srcDark: 'img/biotz-logo-dark.svg',
      },
      items: [
        {
          to: 'docs/category/tutorials',
          position: 'right',
          label: 'Tutorial',
        },
        {
          to: 'docs/category/how-to-guides',
          position: 'right',
          label: 'How to',
        },
        {
          to: 'docs/category/reference-guides',
          position: 'right',
          label: 'Reference guides',
        },
        {
          to: 'docs/category/examples',
          position: 'right',
          label: 'Examples',
        },
        {
          href: 'https://www.biotz.io/company/blog',
          label: 'Blog',
          position: 'right'},
        {
          href: 'https://www.biotz.io/contact-us',
          label: 'Contact us',
          position: 'right',
          className: 'boton-navbar'
        },
        { href: '/', label: 'EN', position: 'right', className: 'lang-toggle' },
        { href: '/es/', label: 'ES', position: 'right', className: 'lang-toggle' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'General',
          items: [
            {
              label: `hello@biotz.io
              Biotz SL
              B-75081794`,
              href: 'mailto:hello@biotz.io?subject=Website%20contact!',
            },
          ],
        },
        {
          title: 'Head Office',
          items: [
            {
              label:
              `Santa Marina 3
               20560 Oñati
              (Guipúzcoa) Spain`,
              href: 'mailto:asier.galdos@biotz.io?subject=Website%20contact!',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/products/magnet-smart-software-platforms-biotz/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Biotz Academy. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['clojure','json','bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;