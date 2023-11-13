import { themes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import type { Plugin } from '@docusaurus/types'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
const lightTheme = themes.github
const darkTheme = themes.dracula

export default {
  title: 'Dorfpflege Rössing - Interne Homepage',
  noIndex: true,
  tagline:
    'Hier findest Du alle Unterlagen zur Arbeit in der Dorfpflege Rössing',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.dorfpflege.rössing.de/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'levino', // Usually your GitHub org/username.
  projectName: 'docs-dorfpflege-roessing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },
  plugins: [
    () =>
      ({
        name: 'responsive-images',
        configureWebpack: (_, isServer) => ({
          mergeStrategy: {
            'module.rules': 'prepend',
          },
          module: {
            rules: [
              {
                test: /\.(?:png|jpe?g)$/i,
                use: [
                  {
                    loader: require.resolve('@docusaurus/responsive-loader'),
                    options: {
                      // Don't emit for server-side rendering
                      emitFile: !isServer,
                      // eslint-disable-next-line global-require
                      adapter: require('@docusaurus/responsive-loader/sharp'),
                      name: 'assets/img/[name].[hash:hex:7].[width].[ext]',
                      max: 1920,
                      min: 640,
                      steps: 4,
                      format: 'webp',
                    },
                  },
                ],
              },
            ],
          },
        }),
      } satisfies Plugin),
    () =>
      ({
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(tailwind)
          postcssOptions.plugins.push(autoprefixer)
          return postcssOptions
        },
      } satisfies Plugin),
  ],

  presets: [
    [
      'classic',
      {
        pages: {},
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/unterlagen',
          path: 'unterlagen',
          editUrl:
            'https://github.com/levino/docs-dorfpflege-roessing/tree/main/',
        },
        blog: {
          path: 'berichte',
          blogTitle: 'Berichte der Dorfpflege',
          routeBasePath: 'berichte',
          editUrl:
            'https://github.com/levino/docs-dorfpflege-roessing/tree/main/',
          blogDescription:
            'Berichte über Aktionen, die die Dorfpflege veranstaltet hat, sowie Protokolle der Versammlungen.',
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.webp',
    navbar: {
      title: 'Dorpflege Rössing',
      logo: {
        alt: 'Die rössinger Eichen',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Unterlagen',
          to: '/unterlagen',
        },
        {
          label: 'Berichte',
          to: '/berichte',
          position: 'left',
        },
        {
          label: 'Impressum',
          to: '/imprint',
          position: 'right',
        },
        {
          href: 'https://github.com/levino/docs-dorfpflege-roessing',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Dorfpflege Rössing e.V.`,
    },
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
    },
  } satisfies Preset.ThemeConfig,
} satisfies Config
