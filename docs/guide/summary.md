# 快速上手

## 简述

作者：[myliang](https://github.com/myliang)

这是一个基于 Web(es6) canvas 构建的轻量级 Excel 开发库

像这样

![demo](/x-spreadsheet-doc/images/sheet-demo.png)

或者查看 [demo](https://myliang.github.io/x-spreadsheet)

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

## 绑定事件

简单的事件绑定

```js
  const s = new Spreadsheet("#x-spreadsheet-demo")
  // event of click on cell
  s.on('cell-selected', (cell, ri, ci) => {});
  s.on('cells-selected', (cell, { sri, sci, eri, eci }) => {});
  // edited on cell
  s.on('cell-edited', (text, ri, ci) => {});
```

## 快速设定单元格值

通过`instance.cellText(ri,ci,text)`来设定值，调用`reRender()`来刷新，你将会看到数据的变化

```js
  const s = new Spreadsheet("#x-spreadsheet-demo")
  s.cellText(5, 5, 'xxxx').cellText(6, 5, 'yyy').reRender();
```

## 快速本地化

### 如果是在 js 中引入

```js
  // npm
  import Spreadsheet from 'x-data-spreadsheet';
  import zhCN from 'x-data-spreadsheet/dist/locale/zh-cn';

  Spreadsheet.locale('zh-cn', zhCN);
  new Spreadsheet(document.getElementById('xss-demo'))
```

### 可以使用 CDN

```html
<!-- Import via CDN -->
<link rel="stylesheet" href="https://unpkg.com/x-data-spreadsheet@1.1.1/dist/xspreadsheet.css">
<script src="https://unpkg.com/x-data-spreadsheet@1.1.1/dist/xspreadsheet.js"></script>
<script src="https://unpkg.com/x-data-spreadsheet@1.1.1/dist/locale/zh-cn.js"></script>

<script>
  x_spreadsheet.locale('zh-cn');
</script>
```

## 加入开发者

```bash
  # 拉取<repo>
  git clone https://github.com/myliang/x-spreadsheet.git
  # 进入项目开发目录
  cd x-spreadsheet
  # 安装相关依赖
  npm install
  # just do it
  npm run dev
```

## 浏览器支持

chrome, firefox, Safari

## 许可申明

**MIT** 协议
