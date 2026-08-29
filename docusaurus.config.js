const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZNS Manual',
  tagline: 'Hướng dẫn sử dụng Zalo ZNS cho doanh nghiệp và developer',
  favicon: 'img/favicon.svg',
  url: 'https://lamdaik263.github.io',
  baseUrl: '/zns-manual/',
  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'warn'}},
  i18n: {defaultLocale: 'vi', locales: ['vi']},
  presets: [['classic', {
    docs: {path: 'docs', routeBasePath: '/', sidebarPath: './sidebars.js', showLastUpdateTime: true, breadcrumbs: true},
    blog: false,
    pages: false,
    theme: {customCss: './src/css/custom.css'},
  }]],
  themeConfig: {
    image: 'img/zns-manual-social-card.svg',
    navbar: {
      title: 'ZNS Manual',
      logo: {alt: 'ZNS Manual', src: 'img/favicon.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'userGuide', position: 'left', label: 'Hướng dẫn'},
        {type: 'docSidebar', sidebarId: 'developer', position: 'left', label: 'Developer'},
        {href: 'https://developers.zalo.me/', label: 'Tài liệu API ↗', position: 'right'},
      ],
    },
    footer: {style: 'light', copyright: `ZNS Manual · Cập nhật ${new Date().getFullYear()}`},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

module.exports = config;
