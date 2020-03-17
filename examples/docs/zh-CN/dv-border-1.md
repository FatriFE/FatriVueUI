## dv-border-1 大屏边框1
使用 svg 制作的带有动画的边框效果组件，适用于大屏项目。

### 基本使用
:::demo dv-border-1
```html
<div style="height: 200px;width: 200px" >
    <fa-dv-border-1 />
</div>
```
:::

### 改变边框颜色
:::demo 颜色类型可以为颜色关键字、十六进制色、RGB及RGBA
```html
<div style="height: 200px;width: 200px" >
    <fa-dv-border-1 :color="['#50BFFF', '#FF506A']"/>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color     | 边框使用两种颜色进行替换动画， 使用该属性可以改变交替的颜色, 需要注意的时最多只能使用两种颜色   | Array  |  -            |    ['#4fd2dd', '#235fa7']     |
