## valid-input 校验输入框
`fa-valid-input` 具有校验功能的输入框

### 基础用法

用法与 elmentUI-input 基本一致

:::demo 
```html
    <fa-valid-input
      v-model="value" 
      :validation="valueValidation" 
      placeholder="请输入value" 
      prop="value"
      @blur="handleBlur" 
      @focus="handleFocus" 
      @change="handleChange" 
      @clear="handleClear"
    ></fa-valid-input>
    <script>
        export default {
            data() {
                return {
                    value: '',
                    valueValidation: [{
                      required: true,
                      message: '请输入value'
                    }]
                }
            },
            methods: {
              handleChange(val) {
                console.log(val)
              },
              handleBlur(e) {
                console.log(e)
              },
              handleFocus(e) {
                console.log(e)
              },
              handleClear() {
                console.log('input is clear')
              }
            }
        }
    </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value       | 输入框的值         | String   |  --      |    ''    |
| validation  | 校验规则           | Array    |  --      |    null    |
| prop        | 校验字段           | String    |  --      |    ''    |
| placeholder | placeholder       | String   |  --       |    ''    |
| disabled    | 是否禁用           | Boolean  |  'true', 'false'  |    false    |
