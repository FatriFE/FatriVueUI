## switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。


:::demo 绑定 `v-model` 到一个 `Boolean` 类型的变量。 
```html
<fa-switch v-model="open" />

<script>
export default {
    data() {
        return {
            open: true
        }       
    }
}
</script>
```
:::


### 设置文字
:::demo 设置 `active-text` `inactive-text` 分别为打开状态时的文字和关闭时的文字 
```html
<div>
<fa-switch v-model="open" active-text="打开" inactive-text="关闭"/>
<br><br>
<fa-switch v-model="open2" active-text="按年付费" inactive-text="按月结算" :text-insert="false"/>
</div>

<script>
export default {
    data() {
        return {
            open: true,
            open2: false
        }       
    }
}
</script>
```
:::

### 设置大小
:::demo 
```html
<div>
<fa-switch v-model="open" active-text="打开" inactive-text="关闭" />
<fa-switch v-model="open" active-text="打开" inactive-text="关闭" size="small"/>
<fa-switch v-model="open" active-text="打开" inactive-text="关闭" size="medium"/>
<br><br>
<fa-switch v-model="open2" active-text="按年付费" inactive-text="按月结算" :text-insert="false"/>
<fa-switch v-model="open2" active-text="按年付费" inactive-text="按月结算" :text-insert="false"  size="small"/>
<fa-switch v-model="open2" active-text="按年付费" inactive-text="按月结算" :text-insert="false"  size="medium"/>
</div>

<script>
export default {
    data() {
        return {
            open: true,
            open2: false
        }       
    }
}
</script>
```
:::

### 设置颜色
:::demo
```html
<fa-switch 
    v-model="open" 
    active-text="打开" 
    active-color="#1583CE" 
    active-text-color="#13CE66" 
    inactive-text="关闭" 
    inactive-text-color="#15CECB" 
    inactive-color="#CE152C"
/>

<script>
export default {
    data() {
        return {
            open: true,
        }       
    }
}
</script>
```
:::



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value/v-model     | 绑定值   | boolean  |   true/false            |    false     |
| disabled     | 是否禁止   | boolean    | - |     false   |   |
| active-text     | 打开时的文字描述   | string    | — | -   |
| active-color     | 打开时的背景颜色   | string    | — | #13CE66   |
| active-text-color     | 打开时的文字描述颜色(text-insert 为 true 时有效果)   | string    | — | #ffffff   |
| inactive-text     | 关闭时的文字描述   | string    | — | -   |
| inactive-color     | 关闭时的背景颜色   | string    | — | #cccccc   |
| inactive-text-color     | 关闭时的文字描述颜色(text-insert 为 true 时有效果)   | string    | — | #ffffff   |
| text-insert     | 文字描述放置是否放置在开关里面   | boolean    | true/false | true   |
| size     | 组件大小   | string    | medium / small / mini | mini   |

