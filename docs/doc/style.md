# 样式对照表

```javascript
const style = [
  {
    border: {
      bottom: ["thick", "#000"]
    },
    color: "#ddd",
    bgColor: "#eee",
    font: {
      italic: true,
      size: 16,
      name: "YaHei",
      bold: true
    },
    underline: true,
    valign: "middle",
    align: "center"
  }
];
```

### border - 边框样式

> border 边框样式数据['边框样式', '边框颜色']

> thick, thin, medium 对应的边框样式为：solid

bottom

| bottom             | cssStyle                       |
| ------------------ | ------------------------------ |
| ['thick', '#000']  | border-bottom: solid 3px #000  |
| ['thin', '#000']   | border-bottom: solid 1px #000  |
| ['medium', '#000'] | border-bottom: solid 2px #000  |
| ['dashed', '#000'] | border-bottom: dashed 1px #000 |
| ['dotted', '#000'] | border-bottom: dotted 1px #000 |
| ['double', '#000'] | border-bottom: double 1px #000 |

top

| top                | cssStyle                    |
| ------------------ | --------------------------- |
| ['thick', '#000']  | border-top: solid 3px #000  |
| ['thin', '#000']   | border-top: solid 1px #000  |
| ['medium', '#000'] | border-top: solid 2px #000  |
| ['dashed', '#000'] | border-top: dashed 1px #000 |
| ['dotted', '#000'] | border-top: dotted 1px #000 |
| ['double', '#000'] | border-top: double 1px #000 |

top

| right              | cssStyle                      |
| ------------------ | ----------------------------- |
| ['thick', '#000']  | border-right: solid 3px #000  |
| ['thin', '#000']   | border-right: solid 1px #000  |
| ['medium', '#000'] | border-right: solid 2px #000  |
| ['dashed', '#000'] | border-right: dashed 1px #000 |
| ['dotted', '#000'] | border-right: dotted 1px #000 |
| ['double', '#000'] | border-right: double 1px #000 |

left

| left               | cssStyle                     |
| ------------------ | ---------------------------- |
| ['thick', '#000']  | border-left: solid 3px #000  |
| ['thin', '#000']   | border-left: solid 1px #000  |
| ['medium', '#000'] | border-left: solid 2px #000  |
| ['dashed', '#000'] | border-left: dashed 1px #000 |
| ['dotted', '#000'] | border-left: dotted 1px #000 |
| ['double', '#000'] | border-left: double 1px #000 |

### color - 字体颜色

| color  | cssStyle    |
| ------ | ----------- |
| '#HEX' | color: #HEX |

### bgColor - 背景颜色

| bgcolor | cssStyle              |
| ------- | --------------------- |
| '#HEX'  | backgroundColor: #HEX |

### font - 字体样式

> italic 字体斜体效果, italic 为 true 值为：italic
> \${} 表示取值

| font   | cssStyle              |
| ------ | --------------------- |
| italic | font-style: italic    |
| size   | font-size: \${size}   |
| bold   | font-weight: bold     |
| name   | font-family: \${name} |

### underline - 文本下划线

> underline 文本下划线样式, underline 为 true 值为：underline

| underline | cssStyle                   |
| --------- | -------------------------- |
| true      | text-decoration: underline |

### strike - 文本中划线

> strike 文本中划线样式, strike 为 true line-through

| strike | cssStyle                      |
| ------ | ----------------------------- |
| true   | text-decoration: line-through |

### valign - 文本纵向对齐显示方式

| valign | cssStyle               |
| ------ | ---------------------- |
| bottom | vertical-align: bottom |
| middle | vertical-align: middle |
| top    | vertical-align: top    |

### align - 文本横向对齐显示方式

| align  | cssStyle           |
| ------ | ------------------ |
| center | text-align: center |
| left   | text-align: left   |
| right  | text-align: right  |
