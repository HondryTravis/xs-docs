# Spreadsheet

主要入口类，涉及表格初始化，data 初始化相关

调用方法为：

```js
  // instance 你创建的实例，公有方法可以直接调用，私有方法不可以
  instance.publicFn(args)
```

## 主要实例

统一暴露在 `window` 下

```javascript
// 你可以在 window 上访问
const spreadsheet = (el, options = {}) => new Spreadsheet(el, options);
if (window) {
  window.x_spreadsheet = spreadsheet;
  window.x_spreadsheet.locale = (lang, message) => locale(lang, message);
}
// 你可以这样创建
const xs = x_spreadsheet(id, config)
```

也可以将库作为你开发的目录

```js
// index.js 这是默认导出的
export default Spreadsheet;
export {
  spreadsheet,
};
// you local main page
// 你可以直接导入本地库引入
import Spreadsheet from '[path]'
```

## 公有方法

### addSheet(name, active)

**功能** 添加多表

`@param name` string 名称

`@param active` boolean 默认为 true

### cell(ri, ci, sheetIndex)

**功能** 获得单元格内容

`@param ri` number 行坐标

`@param ci` number 列坐标

`@param sheetIndex` number 默认值为：0，当前表格index

### cellStyle(ri, ci, sheetIndex)

**功能** 获得单元格样式属性

`@param ri` number 行坐标

`@param ci` number 列坐标

`@param sheetIndex` number 默认值为：0，当前表格index

### cellText(ri, ci, text, sheetIndex)

**功能** 设置选定表格中的单元格的值

`@param ri` number 行坐标

`@param ci` number 列坐标

`@param text` string

`@param sheetIndex` number 默认值为：0，当前表格index

### reRender()

**功能** 重新刷新整个表格

### deleteSheet()

**功能** 删除当前表

### loadData(data) 加载数据

`@param {data}` json 数据格式

**如何获取数据格式:** 请使用 `getData()` 方法

```js
  import Spreadsheet from "x-data-spreadsheet";

  const xs = new Spreadsheet("#x-spreadsheet-demo")

  // data 是 json 格式
  // 加载数据
  xs.loadData(data)

```

### getData() 获取数据

获取数据

```js
  // 获取数据 d
  const d = xs.getData()
```

### change(callback) 变更事件

页面操作或者数据发生变化

```js
  // 如
  xs.change(function(data){
    // 默认会返回整个数据 json
  })
```

### locale(lang, message) 本地化

```js
  // 加载语言包, 需要cdn 引入汉化文件或者从本地导入
  xs.locale('zh-cn');
```

### on(eventName, callback) 绑定事件

监听事件

```js
  xs.on('cell-selected', function(cell, ri, ci) {
    // to do ...
  })
```
