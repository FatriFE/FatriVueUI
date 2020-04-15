## step-page 步骤页
:::demo step-page 说明 demo 
```html
   <div>
     <fa-step-pages :active="active" title="demo">
            <fa-step-page label="维保公司">
                页面一
                <el-button @click="active = 1">change</el-button>
                <el-input v-model="index"></el-input>
            </fa-step-page>
            <fa-step-page @create="demo" label="维保人员">
                页面二
                <el-button @click="active = 2">change</el-button>
            </fa-step-page>
            <fa-step-page @create="demo" label="维保电梯">
                页面三
                <el-button @click="active = 0">change</el-button>
            </fa-step-page>
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
