## 安装

### npm/yarn 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i @fatri/vue-ui
yarn add @fatri/vue-ui
```

### 引入 @Fatri/vue-ui

你可以引入整个 @Fatri/vue-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 @Fatri/vue-ui。

#### 完整引入
在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import FatriUI from '@Fatri/vue-ui';
import App from './App.vue';

Vue.use(FatriUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 单个组件引入
如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Input, Select } from '@Fatri/vue-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Input)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
