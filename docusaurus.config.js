// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DAX Studio',
  tagline: 'The ultimate tool for working with DAX queries',
  url: 'https://daxstudio.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DaxStudio', // Usually your GitHub org/user name.
  projectName: 'DaxStudio-Docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

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
          //editUrl:
          //  'https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/daxstudio/daxstudio-docs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-GK4BT4EGQ9',
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DAX Studio',
        logo: {
          alt: 'DAX Studio Logo',
          src: 'img/daxstudio-logo-light.svg',
          srcDark: 'img/daxstudio-logo-dark.svg',
        },
        
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/downloads', label: 'Downloads', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {href: 'https://github.com/daxstudio/daxstudio/discussions', label:'Discussions',position:'right'  },
          {href: 'https://github.com/daxstudio/daxstudio/issues', label:'Issues / Requests',position:'right'  },
          {
            to: '/Sponsors',
            label: 'Sponsor',
            position: 'right',
          },
        ],
      },
      announcementBar: {
        id: 'support_us',
        content:
          'If you would like to support the development of DAX Studio check out the <a target="_blank" rel="noopener noreferrer" href="/contributing">contributing</a> page',
        // backgroundColor: '--color--primary',
         textColor: '#091E42',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/category/tutorials',
              },
              {
                label: 'Features',
                to: '/docs/features/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/daxstudio/daxstudio/discussions',
              },
              {
                label: 'Issues & Feature Requests',
                href: 'https://github.com/daxstudio/daxstudio/issues',
              }
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contributing',
                to: '/contributing',
              },
              {
                label: 'Sponsors',
                to: '/sponsors',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DAX Studio. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dax'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'USDO2S63VO',
  
        // Public API key: it is safe to commit it
        apiKey: 'ec3953d03f14df2d21379c9f6dbd1984',
  
        indexName: 'daxstudio',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        //searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        //searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
  plugins:[
    './plugins/github-releases/src',

    ['@docusaurus/plugin-client-redirects',
      {

        // redirects: [
        //   // /docs/oldDoc -> /docs/newDoc
        //   {
        //     to: '/docs/tutorials/writing-dax-queries',
        //     from: '/tutorials/writing-dax-queries',
        //   },
        //],
        // createRedirects(existingPath) {
        //   if (existingPath.includes('/docs/')) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace('/docs/', '/documentation/'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ]
  ],
  //scripts: [
  //  {
  //  src: "https://kit.fontawesome.com/bb44c52cf7.js", 
  //  crossorigin: "anonymous",
  //  async: true,
  //  }
  //],
};

module.exports = config;
