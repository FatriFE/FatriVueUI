## select 下拉框
基于elementUI 二次封装的 select 组件. 主要是新增前置 label 

### 下拉框前置


:::demo `label` 设置下拉框前置元素名称,默认为: 选择设备类型

```html
    <div style="display: flex;">
        <fa-select label="前置label">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
           </el-option>
        </fa-select>
    </div>
   <script>
     export default {
       data() {
         return {
           options: [{
             value: null,
             label: '全部'
           },{
             value: '选项1',
             label: '黄金糕'
           }, {
             value: '选项2',
             label: '双皮奶'
           }, {
             value: '选项3',
             label: '蚵仔煎'
           }, {
             value: '选项4',
             label: '龙须面'
           }, {
             value: '选项5',
             label: '北京烤鸭'
           }],
           value: ''
         }
       }
     }
   </script>
```
:::



### Attributes
| 参数          | 说明          | 类型    | 可选值 | 默认值   |
|---------------|--------------|---------|-------|----------|
| label         | 输入框前置内容 | String  |   -   | '选择设备类型'|

> 其他参数和事件参照 el-select
