const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'X-Spreadsheet中文文档',
  description: '极简、高效、配置简单',
  markdown: {
    lineNumbers: true
  },
  base: '/x-spreadsheet-doc/',
  extraWatchFiles: [
    '.vuepress/nav.js', 
    '.vuepress/sidebar.js'
  ],
  themeConfig: {
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'HondryTravis/xs-docs',
    nav,
    sidebar,
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    lastUpdated: '更新时间',
  }
}
