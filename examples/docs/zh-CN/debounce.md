## debounce 防抖组件 
该组件为函数式组件， 用于向当前子组件中的事件添加节流特性。

### 使用方式
:::demo 向debounce 组件传入节流时间和子组件内需要节流事件的名称， 就可以快速的实现子组件内的事件节流
```html
<fa-debounce :time="300" event="change">
    <fa-switch v-model="open" @change="demo"/>
</fa-debounce>

<script>
export default {
data() {
        return {
            open: true
        }       
    },
    methods: {
        demo() {
            console.log('demo')
        }
    }
}
</script>
```
:::

### 监听 native 事件 
:::demo 当子组件内的事件是声明为 .native 模式, 在 VNode 中事件会注册到 nativeOn 属性中, debounce 组件内部对 .native 模式做了处理, 在组件上声明 native 属性, 就可以监听子组件的 .native 事件 
```html
<fa-debounce :time="300" event="click" native>
    <el-button @click.native="demo">测试</el-button>
</fa-debounce>

<script>
export default {
data() {
        return {
            open: true
        }       
    },
    methods: {
        demo() {
            console.log('demo')
        }
    }
}
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| event     | 子组件内需要防抖的事件名称（必填项）   | String  |  -        |     -  |
| time     | 防抖机制的时间间隔, 单位毫秒   | Number  |  -        |   1000    |
| native     | 当需要监听的子组件时间包含 native Event 和 $event 事件时, 是否选择 native 事件, 默认选择 组件 $event 事件   | Boolean  |  -        |   false    |
