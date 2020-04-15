module.exports = {
  title: 'X-Spreadsheet中文文档',
  description: '数据驱动的基于 Web 的 Excel 库',
  markdown: {
    lineNumbers: true
  },
  base: '/x-spreadsheet-doc/',
  themeConfig: {
    sidebarDepth: 2,
    repo: 'HondryTravis/xs-docs',
    nav: [
      { 
        text: '指南', 
        link: '/guide/' 
      },
      { 
        text: '配置', 
        link: '/config/' 
      },
    ],
  }
}