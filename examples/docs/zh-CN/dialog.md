## dialog 弹出框
基于 el-dialog 二次开发的适用于 fatrife 项目的弹框组件。 

### 大屏样式弹窗
:::demo dialog 大屏模式使用 demo
```html
<el-button @click="show = !show">切换弹出框状态</el-button>
<fa-dialog :visible.sync="show">
    <template v-slot:title>弹出框标题</template>
    body
    <template v-slot:footer>footer</template>
</fa-dialog>

<script>
export default {
    data(){
        return {
            show: false
        }  
    }
}
</script>
```
:::
### 精简模式弹窗
:::demo 设置 mode = simple 将dialog 设置为精简模式， 精简模式下的弹窗的 padding 将会消失，这使得弹窗变得更加精简。 
```html
<el-button @click="show = !show">切换弹出框状态</el-button>
<fa-dialog mode="simple" :visible.sync="show">
    <template v-slot:title>弹出框标题</template>
    <template v-slot:header> 这是header 部分</template>
    body
    <template v-slot:footer>footer</template>
</fa-dialog>

<script>
export default {
    data(){
        return {
            show: false
        }  
    }
}
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 弹窗的模式   | String  |  dv:大屏模式 simple:精简模式  normal:正常模式         |    ['#4fd2dd', '#235fa7']     |

> 使用同 `el-dialog`

