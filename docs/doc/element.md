# 自定义 Element 类

该类为自定义 dom 元素element类

调用方法：由于是自定义底层基类，所以一般是你创建的元素

## 实例属性

### el

挂载的是当前元素生成的原生 HTMLElement 对象

### data

挂载单个数据对象到 html 中，目前好像没有使用，可以自定义

## 公有方法

### data(key, value) 设置数据

设置 data 对象的值

### on(eventNames, handler) 事件监听

`@param eventNames` 事件名

`@param handler` 事件

### offset(value) 设置偏移

只有四个属性有用，left、top、right、bottom

`@param value` 值，例: `{ left: 35 }` 不需要单位，value 为对象{key, value}

### scroll(v) 设置滚动

只有两个属性有用， left、top

`@param v` 为对象{key, value}

### box() 获取元素相对视口信息

方法返回元素的大小及其相对于视口的位置

### parent() 获取父节点

方法获取父节点元素

### children(...eles) 添加多个子节点

可以添加任意数量的子节点

`@param eles` 必须为原生 HTMLElement 对象，可以添加多个

### removeChild(el) 移除子节点

`@param el` 必须为原生 HTMLElement 对象

### child(arg) 添加单个子节点

`@param arg` 可以为原生 HTMLElement 对象，也可以只是 string

### contains(ele)

用于检测当前DOM对象返回的节点中的子节点是否包含指定节点，返回值为布尔类型

`@param ele` 必须为原生 HTMLElement 对象

### className(v) 获取/设置类名

用来设置 className ，在 v 有值的情况下，没有值返回当前的 className

`@param v` class

### addClass(name) 添加类名

`@param name` string

### hasClass(name) 检查类名，返回布尔值

`@param name` string

### toggle(cls = 'active') 切换类名

`@param cls` string

### toggleClass(name) 切换类名

`@param name` string

### active(flag = true, cls = 'active') 设置激活类名

`@param flag` Boolean

`@param cls` string

### checked(flag = true) 设置选中/激活

`@param flag` Boolean

### disabled(flag = true) 设置不可编辑

`@param flag` Boolean

### attr(key, value) 设置属性

`@param key` string

`@param value` string/number

### removeAttr(key) 移出属性

`@param key` string

### html(content) 设置/获取 html 值

带参数设置 html，不带参数获取 html 值

`@param content` string

### val(v) 设置value

带参数设置 value，不带参数获取 value 值

### focus() 获取焦点

自动获取焦点

### cssRemoveKeys(...keys) 移出 css

通过 key 的方式移出 css

`@param keys` string

### css(name, value) 设置样式 css

`@param name` string

`@param value` string/number

### computedStyle() 获得计算后的样式

### show() 显示当前元素

### hide() 隐藏当前元素
