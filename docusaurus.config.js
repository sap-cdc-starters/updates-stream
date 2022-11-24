// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Updates Stream SAP CDC',
  tagline: '@unofficial playground',
  url: 'https://cl.cdcs.site',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'http://cdcs.site/', // Usually your GitHub org/user name.
  projectName: 'updates-stream', // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sap-cdc-starters/updates-stream/tree/main/docs/',
        },
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'logo',
          src: 'img/smart_things.png',
        },
        items: [
          {
            label: 'Docs',
            position: 'left',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar'
            
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [ 
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/gigya',
              },
            
              {
                label: 'SAP Help',
                href: 'https://help.sap.com/docs/SAP_CUSTOMER_DATA_CLOUD/8b8d6fffe113457094a17701f63e3d6a/de20e73c5f0e4df0bc5ab38e2717f494.html?locale=en-US&q=updates',
              },

              {
                label: 'GitHub',
                href: 'https://github.com/sap-cdc-starters/updates-stream',
                position: 'right',
                className: 'header-github-logo',
                label: "GitHub",

                'aria-label': 'GitHub Repo',

              }
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      plugins:[
        '@docusaurus/theme-live-codeblock',
        
      ]
    }),
};

module.exports = config;
