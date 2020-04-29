# Editor 类

**主要功能：** 页面编辑框，动态更新位置，换行，设定表格值，提示建议触发处，验证器相关

## 说明

这些有助于你理解该文件作用

## 私有方法

### resetTextareaSize()

动态刷新编辑框宽高设定函数

### insertText({ target }, itxt)

插入文本值

`@param {target}` 目标编辑框

`@param itext` 规则

### keydownEventHandler(evt)

监听键盘按下事件触发函数

`@param evt` 触发事件对象

### inputEventHandler(evt)

监听编辑框 `textarea` 输入事件触发函数

`@param evt` 触发事件对象

### setTextareaRange(position)

设置编辑框 `textarea` 中的光标位置

`@param position` 位置

### setText(text, position))

设置编辑框 `textarea` 中的光标位置，并且设定值

`@param text` 目标值

`@param position` 光标要设定的位置

### suggestItemClick(it)

设置输入状态下提示框点击事件

`@param it` 点击的目标对象值

### resetSuggestItems()

重置提示框内容设置函数

### dateFormat(d)

日期格式化

`@param d` 日期对象

## 公有方法

统一使用`instance.function` 调用

### setFreezeLengths(width, height)

保存冻结行列设定的宽高到配置中，便于计算

`@param witdth` 冻结列的总宽度

`@param height` 冻结行的总高度

### clear()

清除所有输入状态，设定为默认值

### setOffset(offset, suggestPosition = 'top')

设定编辑器偏移量，定位

`@param offset` 偏移对象

`@param suggestPosition` 设定位置是在编辑框 `textarea`的上方还是下方，两个值 `top` | `bottom`

### setCell(cell, validator)

设置单元格的值，并加载验证器

`@param cell` 单元格
`@param validator` 验证规则

### setText(text)

设定值，并更新输入框大小

`@parame text` 目标值
