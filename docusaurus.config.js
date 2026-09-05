/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Sailfish Studio Documentation',
  url: 'https://sailfish-studio.github.io',
  baseUrl: '/Sailfish-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Sailfish-Studio',
  projectName: 'Sailfish-Docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Sailfish Studio Documentation',
      items: [
        {
          href: '/packager/',
          label: 'Packager',
          position: 'left'
        },
        {
          href: '/development/',
          label: 'Development',
          position: 'left'
        },
        {
          href: 'https://turbowarp.org/',
          label: 'TurboWarp',
          position: 'right'
        },
        {
          href: 'https://github.com/TurboWarp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // This is all supposed to be public
      appId: 'HORQ9E5CCA',
      apiKey: 'c3873ce4208edb896a31bb3e7c2cbdad',
      indexName: 'turbowarp'
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
