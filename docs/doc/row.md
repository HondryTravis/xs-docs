# row 类

主要为行,列操作设置相关，设置高度，隐藏行列等，这个类被挂载到 data 实例下了，所以在全局的调用属性方法为：

::: tip 新版本
为每个单独的工作表都建立了单独的 data 对象，所以应该现在 instance.datas 中找到对应的 data 对象，在进行操作
:::

```js

// instance 你创建的实例，公有方法可以直接调用，私有方法不可以

// 你当前表的名字
const target_sheet_name = `sheet2`

const target_data = instance.datas.find(it => it.name === target_sheet_name)

target_data.rows.publicFn(args)

```

## 实例化

需要传入 高度 height，和总行数len, 为对象形式 `{ len, height }`

## 实例属性

### _(下划线)

为数据存放位置

### len

总行数

### height

默认行高

## 公有方法

### copyPaste(srcCellRange, dstCellRange, what, autofill = false, cb = () => {})

**功能** 复制粘贴

`@param srcCellRange` 输入复制区域

`@param dstCellRange` 输出粘贴区域

`@param what` type: all | format | text

`@param autofill` 自动填充

`@param cb` callback

### cutPaste(srcCellRange, dstCellRange)

**功能** 剪切粘贴

`@param srcCellRange` 输入剪切区域

`@param dstCellRange` 输出粘贴区域

### delete(sri, eri)

**功能** 删除行

`@param sri` 开始行坐标

`@param eri` 结束行坐标

### deleteCell(ri, ci, what = 'all')

**功能** 清除单个单元格

`@param ri` 行坐标

`@param ri` 行坐标

`@param what` type: all | text | format | merge 删除类型

### deleteCells(cellRange, what = 'all')

**功能** 清除区域单元格

`@param cellRange` 单元格选区

`@param what` type: all | text | format | merge 删除类型

### deleteColumn(sci, eci)

**功能** 删除列

`@param sri` 开始行坐标

`@param eri` 结束行坐标

### each(cb)

**功能** 针对于 row 做的增强版 each 函数

`@param cb` 回调函数，接受两个参数 ri, row

### eachCells(ri, cb)

**功能** 针对于单元格做的增强版 each 函数

`@param ri` 行 index

`@param cb` 回调函数，接受两个参数 ci, cell

### get(ri)

**功能** 获取某行数据

`@param ri` 行 index

### getCell(ri, ci)

**功能** 获取单元格数据

`@param ri` 行 index

`@param ci` 列 index

### getCellMerge(ri, ci)

**功能** 获取单元格合并信息

`@param ri` 行 index

`@param ci` 列 index

### getCellOrNew(ri, ci)

**功能** 获取单元格，未找到，返回默认值

`@param ri` 行 index

`@param ci` 列 index

### getData()

**功能** 获取所有行列数据

### getHeight(ri)

**功能** 获取高度

`@param ri` number 行index

### getOrNew(ri)

**功能** 获取某行，如果为找到，返回默认配置

### insert(sri, n = 1)

**功能** 插入行

`@param sri` 插入起始位置行坐标

`@param n` 数量

### insertColumn(sci, n = 1)

**功能** 插入列

`@param sci` 插入起始位置 列坐标

`@param n` 数量

### isHide(ri)

**功能** 检测是否是隐藏，返回Boolean

`@param ri` 数量

### maxCell()

**功能** 返回最右下角单元格坐标

### paste(src, dstCellRange)

**功能** 复制功能

`@param src` 输入复制的选区范围

`@param dstCellRange` 输出的复制选区范围

### setCell(ri, ci, cell, what = 'all')

**功能** 设置单元格数据，对象形式

`@param ri` 行 index

`@param ci` 列 index

`@param cell` cell 对象

`@param what` what: all | text | format， 设置类型

### setCellText(ri, ci, text)

**功能** 设置单元格文本，值形式

`@param ri` 行 index

`@param ci` 列 index

`@param text` string/number

### setData(d)

**功能** 设置所有单元格数据

`@param d` 传入的 data 数据

### setHeight(ri, v)

**功能** 设置行的高度

`@param ri` 行 index

`@param v` 高度,value

### setHide(ri, v)

**功能** 设置隐藏行

`@param ri` 行 index

`@param v` value

### setStyle(ri, style)

**功能** 设置行样式

`@param ri` 行 index

`@param style` 样式对象

### sumHeight(min, max, exceptSet)

**功能** 获取两个行之间的间距/高度

`@param min` 行开始index

`@param max` 行结束index

`@param exceptSet` 排除计算区域

### totalHeight()

**功能** 获取所有行高度的总和

### unhide(idx)

**功能** 取消隐藏行

`@param idx` 行index
