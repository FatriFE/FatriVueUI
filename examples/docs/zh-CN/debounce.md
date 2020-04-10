## debounce 防抖组件 
该组件为函数式组件， 用于向当前子组件中的事件添加节流特性。

### 使用方式
:::demo 向debounce 组件传入节流时间和子组件内需要节流事件的名称， 就可以快速的实现子组件内的事件节流
```html
<fa-debounce :time="300" event="change" native>
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
