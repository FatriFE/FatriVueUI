## status-card 状态卡片
`fa-status-card` 卡片列表，可展示当前项的状态，提供OK、WARN、ERROR三种状态

### 基础用法
配合prop和slot方式进行传值

:::demo
```html
  <div class="status-card-list">
    <fa-status-card
      v-for="item in list"
      :key="item.id"
      :entity="item"
      :columnNumber="3"
      :showStatus="true"
      statusKey="status">
        <template v-slot:name>
          <a class="status-card-btn " @click="titleClick(item)">{{ item.nameText || item.name }}</a>
        </template>
        <template v-slot:identifier>
          {{ `ID: ${item.id}` }}
        </template>
        <template v-slot:identifierCopy>
          <el-tooltip effect="dark" :content="tip" placement="top">
            <i
              class="el-icon-document-copy id-copy"
              v-clipboard:copy="item.id"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            ></i>
          </el-tooltip>
        </template>
        <template v-slot:btns>
          <a
            v-for="btn in dropBtns"
            :key="btn.text"
            @click="btn.click(item)"
            class="status-card-btn"
            :class="{ 'btn-delete-forbid': btn.disabled }"
            >{{ btn.text }}</a
          >
        </template>
        <template v-slot:form>
          <el-row class="status-card-row">
            <el-col class="status-card-row-label" :xs="24" :sm="24" :md="8" :lg="8" :xl="6">创建时间:</el-col>
            <el-col class="status-card-row-value" :xs="24" :sm="24" :md="16" :lg="16" :xl="18">{{ item.createdAt }}</el-col>
          </el-row>
          <el-row class="status-card-row" :gutter="10">
            <el-col class="status-card-row-label" :xs="24" :sm="24" :md="8" :lg="8" :xl="6">更新时间:</el-col>
            <el-col class="status-card-row-value" :xs="24" :sm="24" :md="16" :lg="16" :xl="18">{{ item.updatedAt }}</el-col>
          </el-row>
          <el-row class="status-card-row" :gutter="10">
            <el-col class="status-card-row-label" :xs="24" :sm="24" :md="8" :lg="8" :xl="6">描述:</el-col>
            <el-col class="status-card-row-value" :xs="24" :sm="24" :md="16" :lg="16" :xl="18">{{ item.description }}</el-col>
          </el-row>
        </template>
      </fa-status-card>
  </div>
  <script>
    export default {
      data() {
        return {
          tip: 'Copy',
          list: [
            {
              id: '1234567890',
              name: '测试11111111111111',
              createdAt: '2020/4/13 09:23:45',
              updatedAt: '2020/4/13 13:56:56',
              description: '测试测试测试测试测试',
              status: 'OK',
            },
            {
              id: '1234567891',
              name: '测试22222222222222',
              createdAt: '2020/4/13 09:23:45',
              updatedAt: '2020/4/13 13:56:56',
              description: '测试测试测试测试测试',
              status: 'WARN',
            },
            {
              id: '1234567892',
              name: '测试33333333333333',
              createdAt: '2020/4/13 09:23:45',
              updatedAt: '2020/4/13 13:56:56',
              description: '测试测试测试测试测试',
              status: 'OK',
            },
            {
              id: '1234567893',
              name: '测试44444444444444',
              createdAt: '2020/4/13 09:23:45',
              updatedAt: '2020/4/13 13:56:56',
              description: '测试测试测试测试测试',
              status: 'ERROR',
            },
            {
              id: '1234567894',
              name: '测试55555555555555',
              createdAt: '2020/4/13 09:23:45',
              updatedAt: '2020/4/13 13:56:56',
              description: '测试测试测试测试测试',
              status: 'WARN',
            },
          ],
          dropBtns: [
            {
              text: '编辑',
              icon: '',
              click: (e) => {
                console.log(e);
              },
            },
            {
              text: '删除',
              icon: '',
              click: (e) => {
                console.log(e);
              },
            },
          ],
        }
      },
      methods: {
        titleClick(entity) {
          console.log(entity);
        },
        onCopy() {
          const _this = this;
          this.tip = 'Copied';
          setTimeout(() => {
            this.tip = 'Copy';
          }, 2000);
        },
        onError() {
          console.log('Failed to copy.');
        },
      }
    }
    </script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| entity       | 输入框的值         | String   |  --      |    ''    |
| columnNumber  | 校验规则           | Array    |  --      |    null    |
| showStatus        | 校验字段           | String    |  --      |    ''    |
| statusKey | placeholder       | String   |  --       |    ''    |

### Slot
| name           | 说明    |
|----------      |-------- |
| name           | 卡片的名称 |
| identifier     | 卡片的唯一识别符（如id） |
| identifierCopy | id的复制区域（按钮） |
| btns           | 右上角的操作按钮，如编辑、删除 |
| form           | 卡片主题内容，可通过form展示当前项的信息 |
