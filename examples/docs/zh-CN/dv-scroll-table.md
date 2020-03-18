## dv-scroll-table 滚动表格
轮播表可以单条轮播也可以整页轮播.

### 基本用法
:::demo 使用 `config.data` 绑定数据, 使用 `columnWidth` 改变列宽, 使用 `oddRowColor` `oddRowTextColor` 分别改变奇数行的背景颜色和文字颜色
```html
<fa-dv-scroll-table 
    style="width:500px;height:220px"
    :config="config"  
    :columnWidth="columnWidth" 
    oddRowColor="rgba(0,0,0,0)" 
    oddRowTextColor="#333333"
>
</fa-dv-scroll-table>

<script>
export default {
    data() {
        return {
            config: {
                data: [
                   ['行1列1', '行1列2', '行1列3'],
                       ['行2列1', '行2列2', '行2列3'],
                       ['行3列1', '行3列2', '行3列3'],
                       ['行4列1', '行4列2', '行4列3'],
                       ['行5列1', '行5列2', '行5列3'],
                       ['行6列1', '行6列2', '行6列3'],
                       ['行7列1', '行7列2', '行7列3'],
                       ['行8列1', '行8列2', '行8列3'],
                       ['行9列1', '行9列2', '行9列3'],
                       ['行10列1', '行10列2', '行10列3']
                ],
            },
            columnWidth: [50, 80]
        }   
    }
}
</script>
```
:::

### 整页滚动
:::demo 
```html
<fa-dv-scroll-table 
    style="width:500px;height:220px"
    :config="config"  
    carousel="page"
>
</fa-dv-scroll-table>

<script>
export default {
    data() {
        return {
            config: {
                data: [
                   ['行1列1', '行1列2', '行1列3'],
                       ['行2列1', '行2列2', '行2列3'],
                       ['行3列1', '行3列2', '行3列3'],
                       ['行4列1', '行4列2', '行4列3'],
                       ['行5列1', '行5列2', '行5列3'],
                       ['行6列1', '行6列2', '行6列3'],
                       ['行7列1', '行7列2', '行7列3'],
                       ['行8列1', '行8列2', '行8列3'],
                       ['行9列1', '行9列2', '行9列3'],
                       ['行10列1', '行10列2', '行10列3']
                ],
            }
        }   
    }
}
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| headerColor     | 表头的背景颜色显示   | String  |  - |#00BAFF|
| oddRowColor     | 奇数行的背景颜色显示   | String  |  - | #003B51|
| oddRowTextColor     | 奇数行的文字颜色显示   | String  | -| #ffffff |
| evenRowColor     | 奇数行的背景颜色显示   | String  | - | #0A2732 |
| evenRowTextColor     | 奇数行的文字颜色显示   | String  | - | #ffffff|
| columnWidth     | 表格列宽组成的数组, 默认平均宽度   | Array  |  - | []|
| waitTime     | 滚动间隔 (ms)  | Number  |  - |2000 |
| carousel     | 滚动形式， 表格每次滚动一行或者整个页面滚动  | String  |  single、page |single |


