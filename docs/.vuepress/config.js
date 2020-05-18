const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'X-Spreadsheet中文文档',
  description: '数据驱动的基于 Web 的 Excel 库',
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
