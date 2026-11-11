/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'conventions',
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: ['main-site', 'live-map', 'accounts', 'company-platform', 'forum'],
    },
  ],
};
module.exports = sidebars;
