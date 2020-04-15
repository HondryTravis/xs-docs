# X-Spreadsheet

主要入口

## 主要实例

统一暴露在 `window` 下

```javascript
// 你可以在 window 上访问
if (window) {
  window.x_spreadsheet = spreadsheet;
  window.x_spreadsheet.locale = (lang, message) => locale(lang, message);
}
```

## 方法

### `loadData(data)`

`@param {data}` json 数据格式

**如何获取数据格式:** 请使用 `getData()` 方法

```js
  import Spreadsheet from "x-data-spreadsheet";

  const xs = new Spreadsheet("#x-spreadsheet-demo")

  // data 是 json 格式
  // 加载数据
  xs.loadData(data)

```

### `getData()`

获取数据

```js
  // 获取数据 d
  const d = xs.getData()
```

### `change(callbak)`

页面操作或者数据发生变化

```js
  // 如
  xs.change(function(data){
    // 默认会返回整个数据 json
  })
```

### `locale(lang, message)`

```js
  xs.locale('zh-cn');
```

### `on(eventName, callback)`

监听事件

```js
  xs.on('cell-selected', function(cell, ri, ci) {
    // to do ...
  })
```
