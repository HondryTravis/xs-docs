# 快速上手

## 简述

作者：[myliang](https://github.com/myliang)

这是一个基于 Web(es6) canvas 构建的轻量级 Excel 开发库

## 快速入门开发

### CDN

你可以直接在 html 静态文件中引入

```html
<link rel="stylesheet" href="https://unpkg.com/x-data-spreadsheet@1.0.13/dist/xspreadsheet.css">
<script src="https://unpkg.com/x-data-spreadsheet@1.0.13/dist/xspreadsheet.js"></script>

<script>
  x_spreadsheet('#xspreadsheet');
</script>
```

### NPM

你可以使用 npm 包的形式安装

```bash
  # 基于项目构建
  npm install x-data-spreadsheet
```

在 html 中

```html
<div id="x-spreadsheet-demo"></div>
```

在 js 中

```javascript
import Spreadsheet from "x-data-spreadsheet";
// If you need to override the default options, you can set the override
// const options = {};
// new Spreadsheet('#x-spreadsheet-demo', options);
const s = new Spreadsheet("#x-spreadsheet-demo")
  .loadData({}) // load data
  .change(data => {
    // save data to db
  });

// data validation
s.validate()
```

## 默认配置

```javascript
{
  mode: 'edit', // edit | read
  showToolbar: true,
  showGrid: true,
  showContextmenu: true,
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth,
  },
  row: {
    len: 100,
    height: 25,
  },
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  },
  style: {
    bgcolor: '#ffffff',
    align: 'left',
    valign: 'middle',
    textwrap: false,
    strike: false,
    underline: false,
    color: '#0a0a0a',
    font: {
      name: 'Helvetica',
      size: 10,
      bold: false,
      italic: false,
    },
  },
}
```

## 导入和导出

关于如何导出，请[查看](https://github.com/SheetJS/sheetjs/tree/master/demos/xspreadsheet#saving-data)
如果需要自定义导出，可以使用 [SheetJs](https://github.com/SheetJS/sheetjs) 来完成导出，并且再次感谢

## 浏览器支持

chrome, firefox, Safari
