## select 下拉框
基于elementUI 二次封装的 select 组件.


### 下拉框前置


:::demo `label` 设置下拉框前置元素名称,默认为: 选择设备类型

```html
    <div style="display: flex;">
        <fa-select></fa-select>
        <fa-select :label="label" style="margin-left: 20px"></fa-select>
    </div>
    <script>
        export default {
            data() {
                return {
                    label: '选择设备'
                }
            }
        }
    </script>
```
:::

### 设置下拉框为多选还是单选

:::demo `deviceList` 传入设备列表, 默认下拉显示为单选框, `checkbox`属性修改为多选框

```html
    <div style="display: flex;">
        <fa-select :deviceList="deviceList1" ></fa-select>
        <fa-select :deviceList="deviceList2" checkbox style="margin-left: 20px"></fa-select>
    </div>
    <script>
        export default {
            data() {
                return {
                    deviceList1: [
                        {
                            typeId: 1,
                            name: "应变传感器",
                            sensorList: [
                                {sensorId: 101, sensorName: "应变传感器01"},
                                {sensorId: 102, sensorName: "应变传感器02"},
                                {sensorId: 103, sensorName: "应变传感器03"},
                                {sensorId: 104, sensorName: "应变传感器04"},
                                {sensorId: 105, sensorName: "应变传感器05"},
                                {sensorId: 106, sensorName: "应变传感器06"}
                            ],
                            checkAll: true,
                            checkedItems: [101],
                            isIndeterminate: false
                        },
                        {
                            typeId: 2,
                            name: "静力水准仪",
                            sensorList: [
                                {sensorId: 107, sensorName: "静力水准仪01"},
                                {sensorId: 108, sensorName: "静力水准仪02"},
                                {sensorId: 109, sensorName: "静力水准仪03"}
                            ],
                            checkAll: false,
                            checkedItems: [],
                            isIndeterminate: false
                        }
                    ],
                    deviceList2: [
                        {
                            typeId: 1,
                            name: "应变传感器",
                            sensorList: [
                                {sensorId: 101, sensorName: "应变传感器01"},
                                {sensorId: 102, sensorName: "应变传感器02"},
                                {sensorId: 103, sensorName: "应变传感器03"},
                                {sensorId: 104, sensorName: "应变传感器04"},
                                {sensorId: 105, sensorName: "应变传感器05"},
                                {sensorId: 106, sensorName: "应变传感器06"}
                            ],
                            checkAll: true,
                            checkedItems: [101,102,103,104,105,106],
                            isIndeterminate: false
                        },
                        {
                            typeId: 2,
                            name: "静力水准仪",
                            sensorList: [
                                {sensorId: 107, sensorName: "静力水准仪01"},
                                {sensorId: 108, sensorName: "静力水准仪02"},
                                {sensorId: 109, sensorName: "静力水准仪03"}
                            ],
                            checkAll: false,
                            checkedItems: [],
                            isIndeterminate: false
                        }
                    ]
                }
            }
        }
    </script>
```
:::


### 下拉框方法


:::demo `checked` 为当前组件暴露的方法,返回值是当前选中的 `typeId` 和 `checkedItems`数组组合的对象,`checkedItems`数组内为当前 `typeId` 下选中的 `sensorId`

```html
    <div style="display: flex;">
        <fa-select :deviceList="deviceList1" @checked="checkedSensor"></fa-select>
        <fa-select :deviceList="deviceList2" checkbox style="margin-left: 20px" @checked="checkedSensor"></fa-select>
    </div>
    <script>
        export default {
            data() {
                return {
                    deviceList1: [
                        {
                            typeId: 1,
                            name: "应变传感器",
                            sensorList: [
                                {sensorId: 101, sensorName: "应变传感器01"},
                                {sensorId: 102, sensorName: "应变传感器02"},
                                {sensorId: 103, sensorName: "应变传感器03"},
                                {sensorId: 104, sensorName: "应变传感器04"},
                                {sensorId: 105, sensorName: "应变传感器05"},
                                {sensorId: 106, sensorName: "应变传感器06"}
                            ],
                            checkAll: true,
                            checkedItems: [101],
                            isIndeterminate: false
                        },
                        {
                            typeId: 2,
                            name: "静力水准仪",
                            sensorList: [
                                {sensorId: 107, sensorName: "静力水准仪01"},
                                {sensorId: 108, sensorName: "静力水准仪02"},
                                {sensorId: 109, sensorName: "静力水准仪03"}
                            ],
                            checkAll: false,
                            checkedItems: [],
                            isIndeterminate: false
                        }
                    ],
                    deviceList2: [
                        {
                            typeId: 1,
                            name: "应变传感器",
                            sensorList: [
                                {sensorId: 101, sensorName: "应变传感器01"},
                                {sensorId: 102, sensorName: "应变传感器02"},
                                {sensorId: 103, sensorName: "应变传感器03"},
                                {sensorId: 104, sensorName: "应变传感器04"},
                                {sensorId: 105, sensorName: "应变传感器05"},
                                {sensorId: 106, sensorName: "应变传感器06"}
                            ],
                            checkAll: true,
                            checkedItems: [101,102,103,104,105,106],
                            isIndeterminate: false
                        },
                        {
                            typeId: 2,
                            name: "静力水准仪",
                            sensorList: [
                                {sensorId: 107, sensorName: "静力水准仪01"},
                                {sensorId: 108, sensorName: "静力水准仪02"},
                                {sensorId: 109, sensorName: "静力水准仪03"}
                            ],
                            checkAll: false,
                            checkedItems: [],
                            isIndeterminate: false
                        }
                    ]
                }
            },
            methods: {
                checkedSensor(val) {
                    console.log(val)
                }
            }
        }
    </script>
```
:::



### Attributes
| 参数          | 说明          | 类型    | 可选值 | 默认值   |
|---------------|--------------|---------|-------|----------|
| label         | 输入框前置内容 | String  |   -   | '选择设备类型'|
| checkbox      | 切换单选/多选  | Boolean | true/false | false  |
| deviceList    | 传入数据数组   | Array  |   -    | [] , 参照例子格式 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| checked | 选中状态发生变化时的回调函数 | 返回值是当前选中的 typeId 和 checkedItems 数组组合的对象,checkedItems数组内为当前 typeId 下选中的 sensorId  |
