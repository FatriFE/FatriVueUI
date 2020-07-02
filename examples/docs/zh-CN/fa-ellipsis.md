## fa-ellipsis 单行省略
`fa-ellipsis` 基于 `el-tooltip` 组件， 为单行或多行文本超出规定宽度时显示 `xxx...` 格式， 并用气泡的形式展示全部内容

:::demo 
```html
    <fa-ellipsis :maxWidth="150" content="定文本为单行/多行溢出显示格式,设定文本为单行/多行溢出显示格式,设定文本为">
        设定文本为单行/多行溢出显示格式,设定文本为单行/多行溢出显示格式,设定文本为单行/多行溢出显示格式
    </fa-ellipsis>
```
:::



### 属性
名称|说明|类型|可选值|默认值
:---:|:---:|:---:|:---:|:---:
row|设定文本为单行/多行溢出显示格式|String/Number|-|1
content|文本溢出时，汽包中显示的内容|String|-|-
maxWidth|文本出现溢出的宽度|String/Number|-|80

> `fa-ellipsis` 同样继承了  `el-tooltip` 的所有属性，如主题等，参照  [el-tooltip](https://element.eleme.cn/#/zh-CN/component/tooltip)

### slot    
参数|说明
:---:|:---:
-| 触发 `el-tooltip` 显示的 `HTML` 文本
