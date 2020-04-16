# 参数说明

这些参数都是在第一次实例化加载的，也可以后期设定，但是建议一次对自己需要变更的提前修改加载

## 只读/编辑 模式切换

你只需要将配置中的 `mode` 设置为 `read` 或者 `edit` 在第一次加载的时候

```js
  mode: 'read'// 'edit'
```

## 工具栏

工具栏的显示状态 `showToolbar: Boolean`

```js
  showToolbar: true // false
```

## 网格

内容区域网格显示状态 `showGrid: Boolean`

```js
  showGrid: true // false
```

## 右键菜单

切换右键菜单显示状态 `showContextmenu: Boolean`

```js
  showContextmenu: true // false
```

## 指定表格宽高

这包含工具栏高度，可以调整表格固定的宽高 `view` 属性的 `height` 和 `width`

```js
  // 可以是固定值
  view: {
    height: () => document.documentElement.clientHeight,
    width: () => document.documentElement.clientWidth
  }
```

## 行

调整行的高度和默认展示数量，分别通过 `height` 属性和 `len` 调整

```js
  row: {
    height: 25,
    len: 100
  }
```

## 列

可以调整默认显示的列数 `len`，A-Z，默认每个列的宽度 `width` ，左边序列栏默认宽度 `indexWidth` ，以及每个列默认最小宽度 `minWidth`

```js
  col: {
    len: 26,
    width: 100,
    indexWidth: 60,
    minWidth: 60,
  }
```

## 样式

可以调整表格渲染的样式

```js
style: {
    // 背景颜色
    bgcolor: '#ffffff',
    // 水平对齐方式
    align: 'left',
    // 垂直对齐方式
    valign: 'middle',
    // 是否需要换行
    textwrap: false,
    // 虚线边框
    strike: false,
    // 下画线
    underline: false,
    // 文字颜色
    color: '#0a0a0a',
    // 字体设置
    font: {
      // 字体
      name: 'Helvetica',
      // 字号大小
      size: 10,
      // 是否加粗
      bold: false,
      // 斜体
      italic: false,
    },
  }
```
