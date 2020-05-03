## ScrollNum 滚动数字
滚动数字,适用于大屏实时数据变化或者时间日期变化滚动.

### 基本用法

:::demo 使用 `num` 绑定数据,默认 `num` 为 0 ,支持数字字符串

```html
    <fa-scroll-num :num="num"/>
    <script>
        export default {
            data() {
                return {
                    num: '29',
                }
            }
        }
    </script>
```
:::

### 随机数字模拟滚动展示

:::demo 随机数字展示

```html
    <fa-scroll-num :num="num"/>
    <script>
        export default {
            data() {
                return {
                    num: Math.ceil(Math.random() *100 + 1),
                    timer: null
                }
            },
            mounted() {
                this.timer = setInterval(() => {
                    this.getRandom()
                }, 5000)
            },
            beforeDestroy() {
                clearInterval(this.timer)
                this.timer = null
            },
            methods: {
                getRandom() {
                    this.num = Math.ceil(Math.random() *100 + 1)
                }
            }
        }
    </script>
```
:::

### 转动时长

:::demo 使用 `scrollTime` 绑定转动时间,默认 `scrollTime` 为 3
```html
    <div style="display: flex;">
        <fa-scroll-num :num="num" :scroll-time="scrollTime" style="margin-right: 20px"/>
        <fa-scroll-num :num="num" scroll-time="6" />
    </div>
    <script>
        export default {
            data() {
                return {
                    num: '29',
                    scrollTime: 1,
                }
            }
        }
    </script>
```
:::

### 绑定样式

:::demo 使用 `numStyle` 绑定单个转动数字的样式,适用于添加边框,大小,图片等特定需求,默认字体大小 `30`,需要注意的是padding,由于滚动实现方式及数字大小问题,`padding-top`或者`padding-bottom`变大的同时,应该同时变大字体,否则隐藏的其他数字会显示出来.`padding-left`和`padding-right`则不受影响

```html
    <fa-scroll-num :num="num" :num-style="style"/>
    <script>
        export default {
            data() {
                return {
                    num: '29',
                    style: {
                        border: '1px solid #059BF0',
                        marginLeft: '10px',
                        borderRadius: '4px',
                        fontSize: '50px',
                        color: 'red'
                    }
                }
            }
        }
    </script>
```
:::


### Attributes
| 参数          | 说明          | 类型    | 可选值 | 默认值   |
|---------------|--------------|---------|-------|----------|
| num           | 滚动的数字    | Number,String  |   -  |  0 |
| scrollTime    | 滚动到传入数字的时长 | Number,String | - |  3 |
| numStyle      | 单个滚动数字的样式修改| Object  |   -    | {} , 由于滚动实现方式,需要注意 padding-top 和 padding-bottom 的处理|