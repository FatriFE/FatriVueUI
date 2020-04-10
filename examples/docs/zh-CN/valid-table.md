## valid-table 校验表格
具有校验功能表格，与 `fa-valid-input` 配合使用，可以实现对内部所有 `fa-valid-input` 的校验

### 基础用法

:::demo 
```html
    <div class="valid-table-box">
      <fa-valid-table ref="validTable">
        <el-table :data="source">
            <el-table-column label="键">
              <template slot-scope="scope">
                <fa-valid-input v-model="scope.row.key" :validation="keyValidation" prop="key" placeholder="请输入键" @blur="handleInputBlur"></fa-valid-input>
              </template>
            </el-table-column>
            <el-table-column label="值">
              <template slot-scope="scope">
                <fa-valid-input v-model="scope.row.value" :validation="valueValidation" prop="value" placeholder="请输入值"></fa-valid-input>
              </template>
            </el-table-column>
            <el-table-column label="类型">
              <template slot-scope="scope">
                <el-select size="medium" v-model="scope.row.type" placeholder="请选择类型">
                  <el-option v-for="item in typeArr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header">
                <span>
                  <span style="margin-right: 5px;">操作</span>
                  <el-button type="primary" size="small" @click="handleAdd">添加</el-button>
                </span>
              </template>
              <template slot-scope="scope">
                <el-button type="danger" size="small" @click="handleDelete(scope.row.key)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
      </fa-valid-table>
    </div>
    <script>
        export default {
            data() {
                const _this = this
                return {
                  source: [],
                  typeArr: [
                    {
                      label: '数值',
                      value: 'Number'
                    },
                    {
                      label: '字符串',
                      value: 'String'
                    },
                    {
                      label: '布尔值',
                      value: 'Boolean'
                    }
                  ],
                  keyValidation: [
                    { required: true, message: '请输入键', trigger: 'blur' },
                    {
                      validator: function(rule, value, callback) {
                        const keyArr = _this.source.map(i => i.key)
                        if (keyArr.indexOf(value) !== keyArr.lastIndexOf(value)) {
                          return callback(new Error('键不可重复'))
                        }
                        callback()
                      },
                    }
                  ],
                  valueValidation: [{ required: true, message: '请输入值', trigger: 'blur' }]
                }
            },
            methods: {
              handleAdd() {
                if (!this.source.length) {
                  this.source.push({
                    key: '',
                    value: '',
                    type: 'Number'
                  })
                  return
                }
                // validate
                this.$refs.validTable.validate(valid => {
                  if (!valid) {
                    return
                  }
                  this.source.push({
                    key: '',
                    value: '',
                    type: 'Number'
                  })
                })
              },
              handleDelete(key) {
                this.source = this.source.filter(item => item.key !== key)
              },
              handleInputBlur() {
                // 联动输入框校验
                this.$refs.validTable.validateField('key')
              }
            }
        }
    </script>
```
:::


### Methods
| 方法名        | 说明         | 参数           |
|----------    |--------      |----------      |
|validate      |校验整个表单   |callback         |
|validateField |校验部分表单   |String(prop), Array< String >(props)|