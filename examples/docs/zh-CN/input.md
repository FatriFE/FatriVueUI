## input 输入框
基于elementUI el-input二次封装的组件, 基本用法与elementUI el-input一致.


### 基础用法

提供输入显示为`3-4-4`格式。

:::demo  使用 v-model 绑定当前输入号码值, 显示值为`3-4-4`格式. 绑定变量初始值为 String
```html
    <fa-input v-model="demo"></fa-input>
    <script>
        export default {
            data() {
                return {
                    demo: ''
                }
            }
        }
    </script>
```
:::

### slot 插槽

 `slot` 插槽用法。

:::demo  使用 `prependLabel` 新增输入框前置内容, 使用 `appendLabel` 新增输入框后置内容.
```html
    <fa-input v-model="demo1" prependLabel="电话号码"></fa-input>
    <fa-input v-model="demo2" appendLabel="电话号码" style="margin-top: 15px;"></fa-input>
    <script>
        export default {
            data() {
                return {
                    demo1: '',
                    demo2: ''
                }
            }
        }
    </script>
```
:::

### 输入框图标

:::demo  使用 `suffixIcon` 输入框尾部图标, 使用 `prefixIcon` 输入框头部图标.
```html
    <fa-input v-model="demo3" suffixIcon="el-icon-search"></fa-input>
    <fa-input v-model="demo4" prefixIcon="el-icon-search" style="margin-top: 15px;"></fa-input>
    <script>
        export default {
            data() {
                return {
                    demo3: '',
                    demo4: ''
                }
            }
        }
    </script>
```
:::

### 输入框禁用

:::demo  使用 `disabled` 禁用输入框.
```html
    <fa-input v-model="demo5" disabled></fa-input>
    <script>
        export default {
            data() {
                return {
                    demo5: '13800138000'
                }
            }
        }
    </script>
```
:::


### Attributes
| 参数          | 说明          | 类型    | 可选值 | 默认值   |
|---------------|--------------|---------|-------|----------|
| value/v-model | 绑定值        | String  |   -   | ''      |
| prependLabel  | 输入框前置内容 | String  |   -   | ''      |
| appendLabel   | 输入框后置内容 | String  |   -   | ''      |
| prefixIcon    | 输入框头部图标 | String  |   -   | ''      |
| suffixIcon    | 输入框尾部图标 | String  |   -   | ''      |
| disabled      | 是否禁止       | Boolean |   -   | false  |  
