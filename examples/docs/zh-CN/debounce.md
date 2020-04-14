## debounce 防抖组件 
该组件为函数式组件， 用于向当前子组件中的事件添加节流特性。

### 使用方式
:::demo 向debounce 组件传入节流时间和子组件内需要节流事件的名称， 就可以快速的实现子组件内的事件节流。像 `el-input` `fa-switch`  组件因为组件内部使用 `value-input` 的形式实现了 `v-model` 语法糖的语法, 所以当该组件的 `render` 函数中因为 `value` 值发生变化会再次执行, 当需要节流该组件上的 `change` 等事件时，可以通过 `watch value` 绑定的值，实现节流， 这时 `fa-debounce` 上的 `event` 设置为 `input`

```html
<fa-debounce :time="300" event="change">
    <fa-switch v-model="open" @change="demo"/>
</fa-debounce>

<script>
export default {
    data() {
        return {
            open: false
        }       
    },
    methods: {
        demo() {console.log('demo')}
    }
}
</script>
```
:::


### 监听 native 事件 
:::demo 当子组件内的事件是声明为 .native 模式, 在 VNode 中事件会注册到 nativeOn 属性中, debounce 组件内部对 .native 模式做了处理, 在组件上声明 native 属性, 就可以监听子组件的 .native 事件 
```html
<fa-debounce :time="300" event="click">
    <el-button @click="demo">测试</el-button>
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
