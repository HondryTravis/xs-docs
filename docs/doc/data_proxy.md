# data_proxy 数据驱动核心类

数据核心类，里边代理了很多功能

```js
  // instance 你创建的实例，公有方法可以直接调用，私有方法不可以
  instance.data.publicFn(args)
  // 或者
  instance.sheet.data.publicFn(args)
```

## 私有方法

### `canPaste` 判断是否可以粘贴

粘贴前调用，用以判断是否可以粘贴

`@param {Object}` src 由 cellRange 包装的对象，源单元格

`@param {Object}` dst 由 cellRange 包装的对象，目标单元格

`@param {Function}` error 错误回调 当目标单元格包含 merge 时调用

`@returns {boolean}` 是否可以粘贴

```js
function canPaste(src, dst, error = () => {}) {
  // 正常返回 Boolean 类型
  // 若目标单元格包含 merge 时则调用 error() 并返回 false
})
```

### `copyPaste` 粘贴复制的单元格

粘贴复制的单元格时使用，用以将源单元格复制到目标单元格

`@param {Object}` srcCellRange 由 cellRange 包装的对象，源单元格

`@param {Object}` dstCellRange 由 cellRange 包装的对象，目标单元格

`@param {String}` what 复制条件 all 全部 | format 仅格式

`@param {Boolean}` autofill 是否自动填充，默认 false

```js
function copyPaste(srcCellRange, dstCellRange, what, autofill = false) {
  // 根据 what 条件
  // 调用 rows.copyPaste 进行复制单元格
})
```

### `cutPaste` 粘贴剪切的单元格

粘贴剪切的单元格时使用，用以将源单元格复制到目标单元格

`@param {Object}` srcCellRange 由 cellRange 包装的对象，源单元格

`@param {Object}` dstCellRange 由 cellRange 包装的对象，目标单元格

`@param {String}` what 复制条件 all 全部 | format 仅格式

`@param {Boolean}` autofill 是否自动填充，默认 false

```js
function cutPaste(srcCellRange, dstCellRange) {
  // 调用 rows.cutPaste 进行粘贴剪切的单元格
})
```

### `setStyleBorder` 设置边框

设置指定的单元格边框

`@param {Number}` ri 行下标

`@param {Number}` ci 列下标

`@param {Object}` bss 边框样式

```js
function setStyleBorder(ri, ci, bss) {
  // 将 bss 样式通过 this.addStyle 方法添加到样式数据中，并将返回的样式下标设置到 cell.style 单元格数据中
})
```

### `setStyleBorders` 设置多个单元格边框

根据当前选区（this.selector）批量设置多个单元格的边框

`@param {String}` mode all 全部 | inside 内边框 | outside 外边框 | horizontal 水平边框 | vertical 竖边框 | none 无边框

`@param {String}` style 边框样式

`@param {String}` color 边框样式

```js
function setStyleBorders({ mode, style, color }) {
  // 根据 mode 设置边框
})
```

### `getCellRowByY` 根据 Y 坐标获取行

根据 Y 坐标获取所在行的下标

`@param {Number}` y Y坐标

`@param {Number}` scrollOffsety 滚动条 Offset Y

`@returns {Object}` 带有 ri 行下标的对象

```js
function getCellRowByY(y, scrollOffsety) {
  // 根据 Y 坐标返回 { ri, top, height }
})
```

## DataProxy 类

补充中……
