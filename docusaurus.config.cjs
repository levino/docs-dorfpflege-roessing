// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dorfpflege Rössing Dokumentation',
  tagline:
    'Hier finden Sie alle Unterlagen zur Arbeit in der Dorfpflege Rössing',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://docs.dorfpflege.rössing.de/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'levino', // Usually your GitHub org/user name.
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
    () => ({
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
    }),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/levino/docs-dorfpflege-roessing/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.webp',
      navbar: {
        title: 'Dokumentation der Dorpflege Rössing',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
