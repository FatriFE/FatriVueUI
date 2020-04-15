## module-create-header 模块主页页头
`fa-module-create-header` 模块主页页头组件，具有标题解释和操作按钮

### 基础用法
通过字符和回调函数传参实现

:::demo 
```html
    <fa-module-create-header
      :header="createHeader.header"
      :btns="createHeader.btns"
    ></fa-module-create-header>
    <script>
      export default {
        data() {
          return {
            createHeader: {
              header: {
                title: '测试模块',
                helpTip: {
                  content: '测试模块的解释说明',
                  position: 'right',
                },
              },
              btns: [
                {
                  text: '创建测试',
                  icon: 'el-icon-plus',
                  disabled: false,
                  click: (e) => {
                    if (e) e.preventDefault();
                    console.log('create test')
                  },
                },
              ],
            }
          }
        },
      }
    </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header          | 模块标题       | Object    |  {}      |    ''    |
| header.title    | 标题文字       | String    |  --      |    ''    |
| header.helpTip  | content: 解释文字, position: 悬浮文字的位置     | Object    |  --      |    --    |
| btns            | 操作按钮       | Array    |  []      |    ''    |
| btn.text        | 按钮名称       | String    |  --      |    ''    |
| btn.icon        | 按钮内部的icon | String    |  --         |    ''    |
| btn.disabled    | 按钮是否禁用   | Boolean   |  true, false  |    false    |
| btn.click       | 按钮的点击回调 | Function  |   --         |    --    |