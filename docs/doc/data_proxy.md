# data_proxy 数据驱动核心类

数据核心类，里边代理了很多功能

```js
  // instance 你创建的实例，公有方法可以直接调用，私有方法不可以
  instance.data.publicFn(args)
  // 或者
  instance.sheet.data.publicFn(args)
```

## 私有方法

### Method: `canPaste`

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

### Method: `copyPaste`

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

### Method: `cutPaste`

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

### Method:`setStyleBorder`

设置指定的单元格边框

`@param {Number}` ri 行下标

`@param {Number}` ci 列下标

`@param {Object}` bss 边框样式

```js
function setStyleBorder(ri, ci, bss) {
  // 将 bss 样式通过 this.addStyle 方法添加到样式数据中，并将返回的样式下标设置到 cell.style 单元格数据中
})
```

### Method:`setStyleBorders` 

根据当前选区（this.selector）批量设置多个单元格的边框

`@param {String}` mode all 全部 | inside 内边框 | outside 外边框 | horizontal 水平边框 | vertical 竖边框 | none 无边框

`@param {String}` style 边框样式

`@param {String}` color 边框样式

```js
function setStyleBorders({ mode, style, color }) {
  // 根据 mode 设置边框
})
```

### Method:`getCellRowByY`

根据 Y 坐标获取所在行的下标

`@param {Number}` y Y坐标

`@param {Number}` scrollOffsety 滚动条 Offset Y

`@returns {Object}` 带有 ri 行下标的对象

```js
function getCellRowByY(y, scrollOffsety) {
  // 根据 Y 坐标返回 { ri, top, height }
})
```
### Method: `getCellRowByX` 

获得单元格的通过 X 的坐标

根据 X 坐标获取所在行的下标

`@param {Number}` x X坐标

`@param {Number}` scrollOffsety 滚动条 Offset X

返回格式

```ts
interface ICellRetun {
  ci: number
  left: number
  width: number
}
```
## DataProxy 类

### Method: `addValidation(mode, ref, validator)`

添加验证

@param mode 编辑模式

@param ref 参考范围

@param validator 验证器

### Method: `removeValidation()`

移除验证范围
### Method: `getSelectedValidator()` 

获得选中范围类的过滤或验证器

### Method: `getSelectedValidation()` 

获得选中范围类的过滤或验证器具体信息

### Method: `canUndo()`

是否可以不做，撤销操作
### Method: `canRedo()`

是否可以重做

### Method: `undo()`

撤销一步

### Method: `redo()`

重做一步

### Method: `copy()`

复制当前的选区

### Method: `copyToSystemClipboard()`

复制到系统剪切板

### Method: `cut()`

集成剪切事件

### Method: `paste(what, error)`

粘贴事件

@param what: all(所有) | text(文字) | format(格式)

@param error: Function

### Method: `pasteFromText(txt)`

粘贴文字

@param txt: string

### Method: `autofill(cellRange, what, error)`

自动填充

@param cellRange: CellRange

@param what: all(所有) | text(文字) | format(格式)

@param error: Function

### Method: `clearClipboard()`

清除剪切板数据

### Method: `calSelectedRangeByEnd(ri, ci)`

计算选区范围，通过结束坐标

@param ri 行索引

@param ci 列索引


### Method: `calSelectedRangeByStart(ri, ci)`

计算选区范围，通过开始坐标

@param ri 行索引

@param ci 列索引

### Method: `setSelectedCellAttr(property, value)`

设置选中单元格属性

@param property: string 属性

@param value: string | number | unknow

### Method: `setSelectedCellText(text, state = 'input)`

设置选中单元格文字

@param text: string 文字

@param state: string 当前输入状态

### Method: `getSelectedCell()`

获得当前选中单元格

### Method: `xyInSelectedRect()`

判断当前鼠标点击坐标是否在选中范围内

### Method: `getSelectedRect()`

获得选中的矩形区域

### Method: `getClipboardRect()`

获得当前剪切板选中区域

### Method: `getRect(cellRange)`

获得设定选中范围区域

@param cellRange: CellRange

### Method: `getCellRectByXY(x, y)`

获得当前选中区域，通过鼠标的 x 和 y 坐标

@param x: number

@param y: number


### Method: `isSignleSelected()`

判断是否是单个选中

### Method: `canUnmerge()`

能否不合并

### Method: `merge()`

合并

### Method: `unmerge()`

不做合并，撤销合并

### Method: `canAutofilter()`

能自动过滤

### Method: `autofilter()`

过滤

### Method: `setAutoFilter(ci, order, operator, value)`

设置过滤器

@param ci 列索引

@param order 排序方式

@param operator  操作

@param value 值

### Method: `resetAutoFilter()`

重置自动过滤

### Method: `deleteCell(what = 'all')`

删除单元格

@param what: string all(所有) | fomat(格式)

### Method: `insert(type, n = 1)`

插入行或者列

@param type: string 可能的值 row | column

@param n: number > 0

### Method: `delete(type)`

删除选中行或者列

@param type: string 可能的值 row | column

### Method: `scrollx(x, cb)`

滚动 x 距离触发 cb

@param x: number 距离

@param cb: Function 触发的回调函数

### Method: `scrolly(y, cb)`

滚动 y 距离触发 cb

@param y: number 距离

@param cb: Function 触发的回调函数

### Method: `cellRect(ri, ci)`

返回当前单元格的具体坐标信息

@param ri: number 行索引

@param ci: number 列索引

### Method: `getCell(ri, ci)`

获得当前单元格，通过索引

@param ri: number 行索引

@param ci: number 列索引

### Method: `getCellTextOrDefault(ri, ci)`

获得当前单元格文字或者默认值

@param ri: number 行索引

@param ci: number 列索引

### Method: `getCellStyle(ri, ci)`

获得当前单元格样式

@param ri: number 行索引

@param ci: number 列索引

### Method: `getCellStyleOrDefault(ri, ci)`

获得当前单元格样式或者默认值

@param ri: number 行索引

@param ci: number 列索引


### Method: `getSelectedCellStyle()`

获得当前选中单元格样式

### Method: `setCellText(ri, ci, text, state)`

设定指定单元格值，并更新输入状态

@param ri: number 行索引

@param ci: number 列索引

@param text: string 文字

@param state: string input | finished

### Method: `freezeIsActive()`

冻结是否可以激活

### Method: `setFreeze(ri, ci)`

设置冻结栏

@param ri: number 行索引

@param ci: number 列索引

### Method: `freezeTotalWidth()`

获得冻结栏的总计宽度

### Method: `freezeTotalHeight()`

获得冻结栏总计高度

### Method: `setRowHeight(ri, height)`

设置某一行高度

@param ri: number 行索引

@param height: number 行高度

### Method: `setColWidth(ci, width)`

设置某一列宽度

@param ci: number 列索引

@param width: number 列宽度

### Method: `viewHeight()`

获得可视区域高度

### Method: `viewWidth()`

获得可视区域宽度

### Method: `freezeViewRange()`

获得冻结范围

### Method: `contentRange()`

获得文本区域显示范围

### Method: `exceptRowTotalHeight(sri, eri)`

获得忽略行后的总计高度

### Method: `viewRange()`

获得可视区显示范围

### Method: `eachMergesInView(viewRange, cb)`

每个合并发生的时候触发的回调

@param viewRange: ViewRange

@param cb: Function

### Method: `hideRowsOrCols()`

隐藏选中列或者行

### Method: `unhideRowsOrCols(type, index)`

取消隐藏行或者列

@param type: row | col

@param index: row-index | col-index

### Method: `rowEach(min, max, cb)`

行遍历，可以指定范围

@param min: number 最小行

@param max: number 最大行

@param cb: Function


### Method: `colEach(min, max, cb)`


列遍历，可以指定范围

@param min: number 最小列

@param max: number 最大列

@param cb: Function


### Method: `defaultStyle()`

获得默认样式

### Method: `addStyle(nstyle)`

设置多个样式

@param nstyle object

### Method: `changeData(cb)`

设置数据变化时的回调函数

@param cb: Function


### Method: `setData(d)`

设置表格数据，d 如果不知道可以通过 getData() 方法先获取一份默认的看看

@param d: object


### Method: `getData()`

获得当前表格的数据
