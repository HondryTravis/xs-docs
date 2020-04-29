# Sheet 类

**主要功能：** 表格初始化，事件初始化，绑定

## 实例属性

方便深入学习，实例属性概述

### eventMap

`eventMap`  初始化事件 Map 对象，类似事件管理中心，挂载到 Sheet 类上

### el

`el` 初始化 Sheet 实例的 element 对象，**element：** 为重写 element 对象，非原生 dom 对象，挂载到 Sheet 类上

### toolbar

`toolbar`  初始化工具栏实例化对象，挂载到 Sheet 类上

### print

`print`  初始化打印实例对象，挂载到 Sheet 类上

### data

`print`  初始化 data_proxy 实例对象，挂载到 Sheet 类上

### tableEl

`tableEl` 初始化 table 实例的 element 实例，挂载到 Sheet 类上

### rowResizer

`rowResizer` 初始化行调整实例对象，挂载到 Sheet 类上

### colResizer

`colResizer` 初始化列调整实例对象，挂载到 Sheet 类上

### verticalScrollbar

`verticalScrollbar` 初始化垂直方向滚动条实例对象，挂载到 Sheet 类上

### horizontalScrollbar

`horizontalScrollbar`  初始化水平方向滚动条实例对象，挂载到 Sheet 类上

### editor

`editor`  初始化表格编辑功能实例对象，挂载到 Sheet 类上

### modalValidation

`modalValidation` 初始化格式验证实例对象，挂载到 Sheet 类上

### contextMenu

`contextMenu`  初始化右键菜单实例对象，挂载到 Sheet 类上

### selector

`selector`  初始化选择器实例对象，功能涉及点选操作，挂载到 Sheet 类上

### overlayerEl

`overlayerEl`  初始化覆盖层 dom 实例对象，挂载到 Sheet 类上

### sortFilter

`sortFilter`  初始化筛选实例对象，挂载到 Sheet 类上

### table

`table` 初始化表格实例对象，挂载到 Sheet 类上

## 公有方法

### on(eventName, func)

可以通过实例化后的 Sheet 实例调用，绑定事件函数

`@param eventName`  事件名

`@param func`  自定义事件

调用方法 `实例.on(eventName, func){}`

### trigger(eventName, ...args)

可以通过实例化后的 Sheet 实例调用，监听触发函数

`@param eventName` 事件名

`@param ...args` 一个或多个参数

调用方法 `实例.trigger(eventName, ...args){}`

### resetData(data)

可以通过实例化后的 Sheet 实例调用，重置刷新表格

`@param data` 数据

调用方法 `实例.resetData(data)`

### loadData(data)

可以通过实例化后的 Sheet 实例调用，加载必要数据

`@param data` 数据

调用方法 `实例.loadData(data)`

### freeze(ri, ci)

可以通过实例化后的 Sheet 实例调用，设定冻结行/列

`@param ri` 行的索引

`@param ci` 列的索引

调用方法 `实例.freeze(ri, ci)`

### undo()

挂载撤销函数

调用方法 `实例.undo()`

### redo()

挂载重做函数

调用方法 `实例.redo()`

### reload()

重新加载表格，初始化事件等

调用方法 `实例.reload()`

### getRect()

可以获得当前表格的宽和高，不包含 index 栏和表格 title 栏

调用方法 `实例.getRect()`

### getTableOffset()

可以获得当前表格的宽和高，left，top获得当前表格的详细偏移信息

调用方法 `实例.getTableOffset()`

## 私有方法

### scrollbarMove()

滚动条滚动事件设置

### selectorSet()

表格选择器设定

### selectorMove()

表格选择器移动时设定

### overlayerMousemove(evt)

表格覆盖层鼠标按下移动事件

`@param evt` 事件event对象

### overlayerMousescroll(evt)

表格覆盖层鼠标滚动事件

`@param evt` 事件event对象

### overlayerTouch(direction, distance)

表格覆盖层触摸事件

`@param direction` 方向

`@param distance` 距离

### verticalScrollbarSet()

垂直方向滚动条设定

### horizontalScrollbarSet()

水平方向滚动条设定

### sheetFreeze()

冻结行列设置函数

### sheetReset()

表格重置刷新函数

### clearClipboard()

清空剪切板

### copy()

复制函数

### cut()

剪切函数

### paste()

粘贴函数

### hideRowsOrCols()

隐藏行列函数

### unhideRowsOrCols(type, index)

取消隐藏行列

`@param type` row | col

`@param index` rowIndex | colIndex

### autofilter()

自动过滤函数

### toolbarChangePaintformatPaste()

格式粘贴

### overlayerMousedown(evt)

覆盖层鼠标按下操作

`@param evt` event 对象

### editorSetOffset()

编辑层偏移

### editorSet()

编辑层设定

### verticalScrollbarMove(distance)

垂直方向滚动设定

`@param distance` 距离

### horizontalScrollbarMove(distance)

水平方向滚动设定

`@param distance` 距离

### rowResizerFinished(cRect, distance)

调整行结束事件

`@param cRect` 边界

`@param distance` 距离

### colResizerFinished(cRect, distance)

调整列结束事件

`@param cRect` 边界

`@param distance` 距离

### dataSetCellText(text, state = 'finished')

设置 data，并重新刷新表格

`@param text` 文本

`@param state` 输入状态

### insertDeleteRowColumn(type)

实现表格的功能的整合

`@param type` 功能类型

### toolbarChange(type, value)

工具栏发生改变触发的事件

`@param type` 功能类型

`@param value` 目标结果值

### sortFilterChange(ci, order, operator, value)

筛选发生改变事件

`@param ci` 列 id

`@param order` 顺序

`@param operator` 操作值

`@param value` 结果值

### sheetInitEvents()

表格初始化绑定事件
