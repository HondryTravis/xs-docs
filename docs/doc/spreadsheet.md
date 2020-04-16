# X-Spreadsheet

主要入口

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

## 方法

### `loadData(data)` 加载数据

`@param {data}` json 数据格式

**如何获取数据格式:** 请使用 `getData()` 方法

```js
  import Spreadsheet from "x-data-spreadsheet";

  const xs = new Spreadsheet("#x-spreadsheet-demo")

  // data 是 json 格式
  // 加载数据
  xs.loadData(data)

```

### `getData()` 获取数据

获取数据

```js
  // 获取数据 d
  const d = xs.getData()
```

### `change(callbak)` 变更事件

页面操作或者数据发生变化

```js
  // 如
  xs.change(function(data){
    // 默认会返回整个数据 json
  })
```

### `locale(lang, message)` 本地化

```js
  // 加载语言包
  xs.locale('zh-cn');
```

### `on(eventName, callback)` 绑定事件

监听事件

```js
  xs.on('cell-selected', function(cell, ri, ci) {
    // to do ...
  })
```
