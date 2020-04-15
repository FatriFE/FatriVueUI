## module-detail-header 模块详情页头
`fa-module-detail-header` 模块详情页头组件，具有面包屑和操作按钮

:::demo
```html
    <fa-module-detail-header
      :breadCrumbs="detailHeader.breadCrumbs"
      :creates="detailHeader.creates"
      :refresh="detailHeader.refresh"
    ></fa-module-detail-header>
    <script>
      export default {
        data() {
          return {
            detailHeader: {
              breadCrumbs: [
                {
                  id: 'test',
                  text: '测试',
                  click: () => {
                    console.log('breadcrumb click.')
                    // this.$router.push('/')
                  }
                },
                {
                  id: 'testDetail',
                  text: '测试详情'
                }
              ],
              creates: [
                {
                  text: '创建测试详情',
                  icon: 'el-icon-plus',
                  disabled: false,
                  click: (e) => {
                    if (e) e.preventDefault();
                    console.log('create test detail.')
                  },
                },
              ],
              refresh: {
                click: () => {
                  console.log('refresh.')
                }
              }
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
| breadCrumbs      | 面包屑数组         | Array        |  []           |    ''    |
| breadCrumb.id    | 面包屑项的id       | String，唯一  |  --           |    ''    |
| breadCrumb.text  | 名称              | String        |  --           |    --    |
| breadCrumb.click | 点击回调           | Function     |  --           |    --    |
| creates          | 操作按钮           | Array        |  []           |    ''    |
| create.text      | 按钮名称           | String       |  --           |    ''    |
| create.icon      | 按钮内部的icon     | String       |  --           |    ''    |
| create.disabled  | 按钮是否禁用       | Boolean      |  true, false  |    false  |
| create.click     | 按钮的点击回调     | Function     |   --          |    --    |
| refresh          | 刷新按钮           | Object       |  {}           |    ''    |
| refresh.click    | 刷新的回调         | Function     |   --          |    --    |