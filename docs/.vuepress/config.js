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
        text: '学习', 
        ariaLabel: '菜单',
        items: [
          {
            text: '文档',
            items: [
              {text: 'API', link: '/doc/'}
            ]
          }
        ]
      },
      { 
        text: '指南', 
        link: '/guide/' 
      },
      { 
        text: '配置', 
        link: '/config/' 
      },
    ],
    sidebar:{
      '/guide/':[
        {
          title: '指南',
          collapsable: false,
          children:[
            'summary',
          ]
        },
        {
          title: '深入',
          collapsable: false,
          children:[
            'deepchange'
          ]
        }
      ],
      '/doc/':[
        {
          title: 'Api',
          collapsable: false,
          children:[
            'spreadsheet',
          ]
        },
      ],
      '/config/':[
        {
          title: '配置指南',
          collapsable: false,
          children:[
            'config_list',
          ]
        },
      ]
    },
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 Github 上编辑此页',
    lastUpdated: '更新时间',
  }
}