## dialog 弹出框
:::demo dialog 说明 demo 
```html
<el-button @click="show = !show">切换弹出框状态</el-button>
<fa-dialog :visible.sync="show"></fa-dialog>

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

> 使用同 `el-dialog`
