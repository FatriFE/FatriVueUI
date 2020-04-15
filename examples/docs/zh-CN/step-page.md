## step-page 步骤页
该组件用于页面组件的切换, 并且在切换的过程并不会产生页面跳转。

### 使用方法
:::demo 实现切换的页面组件需要包含在 `fa-step-pages` 组件中, active 用于选择当前激活的是第几级页面, 页面层级从 0 开始计数, 面包屑导航从子页面开始出现， 如果不需要需要设置 `:header="false""`
```html
   <div>
     <fa-step-pages :active="active">
            <el-card label="维保公司">
              <div slot="header">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="active = 1">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
             <el-card label="维保公司">
              <div slot="header">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="active = 2">操作按钮</el-button>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
            <el-card label="维保公司">
                 <div slot="header">
                   <span>卡片名称</span>
                   <el-button style="float: right; padding: 3px 0" type="text" @click="active = 0">操作按钮</el-button>
                 </div>
                 <div v-for="o in 4" :key="o" class="text item">
                   {{'列表内容 ' + o }}
                 </div>
               </el-card>
        </fa-step-pages>
        
    </div>
    <script>
        export default {
            data() {
                return {
                    active: 0,
                    index: 0
                }
            },
            methods: {
                demo() {
                    console.log(1)
                }
            }
        }
    </script>
```
:::

 默认情况下, 页面组件切换时, 会保存上一次切换到组件的状态，但是会从新渲染，如果需要每次重新渲染的时候初始化状态可在组件内部使用 `created` 或者像例子中的第二级组件一样使用 `@created` 来监听 `created` 周期 
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active     | 当前激活的等级， 从 0 开始计数    | Number  |  -        |     0  |
| header     | 是否需要在子页页面中出现导航组件   | Boolean  |  -        |   true    |

### slot Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 当前页面标记    | String  |  -        |     -  |
