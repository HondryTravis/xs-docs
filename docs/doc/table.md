# Table 类

该类主要负责表格的绘制和渲染

::: tip 新版本
为每个单独的工作表都建立了单独的 data 对象，所以应该现在 instance.datas 中找到对应的 data 对象，在进行操作
:::

调用方法为：

```js
  // instance 你创建的实例，公有方法可以直接调用，私有方法不可以
  instance.sheet.table.publicFn(args)
```

## 实例化

需要传递代理 data_proxy 生成的对象，需要自定义 Element，不是

```js
const table = new Table(el, data)
```

## 实例属性

### el

为当前 table 挂载的自定义 Element，不是 HTMLElement

### draw

挂载绘画工具类，为 canvas 构建底层

### data

挂载代理 data_proxy 生成的对象

**注意**：不是绑定值

## 私有方法

### renderAutofilter(viewRange)

**功能**：渲染自动过滤函数

`@param viewRange` 视口范围，Object 类型

### renderCell(draw, data, rindex, cindex, yoffset = 0)

**功能**：渲染单元格

`@param draw` 绘制 canvas 工具类

`@param data` 为 data_proxy 生成的对象

`@param rindex` 行坐标, 0 开始

`@param cindex` 列坐标, 0 开始

`@param yoffset` y 轴偏移量

### renderContent(viewRange, fw, fh, tx, ty)

**功能**：渲染文本

`@param viewRange` 视口范围，Object 类型

`@param fw` 左边index栏宽度

`@param fh` 表格最顶部标题栏高度

`@param tx` 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和

`@param ty` 表格中如果存有冻结行列，那么 ty 为冻结行高度总和

### renderContentGrid({ sri, sci, eri, eci, w, h }, fw, fh, tx, ty)

**功能**：渲染网格线

`@param sri` 开始行坐标

`@param sci` 开始列坐标

`@param eri` 结束行坐标

`@param eci` 结束列坐标

`@param w` 宽度

`@param h` 高度

`@param fw` 左边index栏宽度

`@param fh` 表格最顶部标题栏高度

`@param tx` 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和

`@param ty` 表格中如果存有冻结行列，那么 ty 为冻结行高度总和

### renderFixedHeaders(type, viewRange, w, h, tx, ty)

**功能**：渲染标题栏和左侧 index 栏样式

`@param type` type: all | left | top

`@param w` 宽度

`@param h`  高度

`@param tx` 表格中如果存有冻结行列，那么 tx 为冻结行宽度总和

`@param ty` 表格中如果存有冻结行列，那么 ty 为冻结行高度总和

### renderFixedLeftTopCell(fw, fh)

**功能**：渲染标题栏和 index 栏左上角交界处单元格

`@param fw` 左边index栏宽度

`@param fh` 表格最顶部标题栏高度

### renderFreezeHighlightLine(fw, fh, ftw, fth)

**功能**：渲染冻结行列高亮线

`@param fw` 左边index栏宽度

`@param fh` 表格最顶部标题栏高度

`@param ftw` 表格中如果存有冻结行列，那么 ftw 为冻结行宽度总和

`@param fth` 表格中如果存有冻结行列，那么 fth 为冻结行高度总和

### renderSelectedHeaderCell(x, y, w, h)

**功能**：渲染选中标题栏和 index 栏样式

`@param x` 计算值距离左边的距离

`@param y` 计算值距离顶部的距离

`@param w` 列宽

`@param h` 行高

## 公有方法

### resetData(data)

**功能**：刷新数据

`@param data` data_proxy 对象

### render()

**功能**： 渲染表格

用法：

```js
const table = new Table(el, data)
table.render()
```

### clear()

**功能**： 清除表格绘制画板区域

```js
const table = new Table(el, data)
table.clear()
```

## 其他

### tableFixedHeaderStyle()

**功能**：获得默认配置的 table 标题栏和 index 栏选中样式

### tableGridStyle

默认网格样式声明

### cellPaddingWidth

单元格默认 padding

### tableFixedHeaderCleanStyle

默认填充样式
