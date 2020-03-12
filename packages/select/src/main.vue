<template>
  <div class="spcial-select">
    <div>
      <el-button class="spcial-select--left" size="mini" :id="'fatri-select' + id">{{ label }}</el-button>
      <el-button class="spcial-select--right" size="mini" @click="handleShow">
        {{ selectValue }}
        <i :class="'el-icon--right el-icon-arrow-' + dir"></i>
      </el-button>
    </div>
    <div v-show="isClick" class="spcial-select--contain" :id="'fatri-contain' + id">
      <div v-if="!deviceList.length" class="no-data">暂无数据</div>
      <el-tabs v-else v-model="activeName" type="border-card" style="width: 500px" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in deList" :key="index" :label="item.name" :name="item.name">
          <el-radio-group v-if="!checkbox" v-model="item.checkedItems[0]" @change="handleCheckedItems">
            <el-radio v-for="sensor in item.sensorList" :key="sensor.sensorId" :label="sensor.sensorId" class="d2-mb-10 d2-mt-10">
              {{ sensor.sensorName }}
            </el-radio>
          </el-radio-group>
          <el-checkbox
            v-if="checkbox"
            v-model="item.checkAll"
            :indeterminate="item.isIndeterminate"
            class="d2-mb-10 d2-mt-10"
            @change="handleCheckAll($event, item.sensorList)"
          >
            全选
          </el-checkbox>
          <el-checkbox-group v-if="checkbox" v-model="item.checkedItems" @change="handleCheckedItems">
            <el-checkbox v-for="sensor in item.sensorList" :key="sensor.sensorId" :label="sensor.sensorId" class="d2-mb-10 d2-mt-10">
              {{ sensor.sensorName }}
            </el-checkbox>
          </el-checkbox-group>
        </el-tab-pane>
      </el-tabs>
      <el-button  v-if="checkbox && deviceList.length" style="float: right" size="mini" @click="comfirm">
        确定
      </el-button>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
export default {
  name: 'FaSelect',
  props: {
    label: {
      type: String,
      default: '选择设备类型'
    },
    deviceList: {
      type: Array,
      default: () => []
    },
    checkbox: {
      type: Boolean,
      default: false 
    }
  },
  data() {
    return {
      isClick: false,
      selectValue: '',
      checkAll: true, //选中所有
      checkedItems: [], // 当前tab页的所有选中项
      itemList: [], // 当前tab页的所有选择项
      activeName: '', // 当前tab页
      tabIndex: 0, // 当前tab页下标
      isIndeterminate: false, // 半选
      deList: cloneDeep(this.deviceList),
      id: Math.random()
    }
  },
  computed: {
    dir() {
      return this.isClick ? 'up' : 'down'
    }
  },
  watch: {
    deviceList(val) {
      this.deList = val
    }
  },
  created() {
    if (this.deviceList.length) {
      this.selectValue = this.deviceList[0].name
    }
  },
  mounted() {
    document.getElementById(`fatri-contain${this.id}`).style.left = document.getElementById(`fatri-select${this.id}`).offsetWidth + 1 + 'px'
  },
  methods: {
    handleClick(tab, event) {
      // 切换tab的时候重置
      this.tabIndex = tab.index
      this.selectValue = this.deList[tab.index].name
    },
    handleShow() {
      if (this.deList.length) {
        // 初始化设置,默认第一个全选
        this.activeName = this.deList[this.tabIndex].name
      }
      // 判断多选情况下,是否一个都没有选择
      let flag = true
      for (let i=0; i< this.deList.length; i++) {
        if (this.deList[i].checkedItems.length) {
          this.activeName = this.deList[i].name
          this.tabIndex = i
          this.selectValue = this.deList[i].name
          flag = false
          break
        }
      }
      // 多选情况下,都没有选择的时候,提示,不收起
      if (flag && this.isClick && this.deviceList.length) {
        this.$message({
          message: '请至少选择一项',
          type: 'warning'
        })
        return
      }
      this.isClick = !this.isClick
    },
    handleCheckedItems(value) {
      let { deList, tabIndex } = this
      if (this.checkbox) {
        let checkedCount = value.length
        deList.forEach((i, index) => {
            if (index === Number(tabIndex)) {
                i.checkAll = checkedCount === i.sensorList.length
                i.isIndeterminate = checkedCount > 0 && checkedCount < i.sensorList.length
                i.checkedItems = value
            } else {
                i.checkedItems = []
                i.checkAll = false
                i.isIndeterminate = false
            }
        })
      } 
      else {
        deList[tabIndex].checkedItems = []
        deList[tabIndex].checkedItems.push(value)
        this.comfirm()
      }
    },
    handleCheckAll(val, list) {
      let { deList, tabIndex } = this
      deList.forEach((i, index) => {
        if (index === Number(tabIndex)) {
            i.checkedItems = val ? list.map(item => { return item.sensorId }) : []
            i.isIndeterminate = false
        } else {
            i.checkedItems = []
            i.checkAll = false
            i.isIndeterminate = false
        }
      })
    },
    comfirm() {
      let { deList, tabIndex } = this
      let flag = true
      let data = {}
      // 单选框情况下
      if (!this.checkbox) {
        data = {
          checkedItems: deList[tabIndex].checkedItems,
          typeId: deList[tabIndex].typeId
        }
        deList.forEach((i, index) => {
          if (index !== Number(tabIndex)) {
            i.checkedItems = []
          }
        })
      }
      // 多选框情况下
      else {
        for (let i=0; i< deList.length; i++) {
          if (deList[i].checkedItems.length) {
            data = {
              checkedItems: deList[i].checkedItems,
              typeId: deList[i].typeId
            }
            this.selectValue = deList[i].name
            flag = false
            break
          }
        }
        if (flag) {
          this.$message({
            message: '请至少选择一项',
            type: 'warning'
          })
          return
        }
      }
      this.$emit('checked', data)
      this.isClick = false
    }
  }
}
</script>


<style lang="scss" scoped>
.spcial-select {
  display: flex;
  flex-direction: column;
  position: relative;
  .spcial-select--left {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 0px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .spcial-select--right {
    margin-left: 0;
  }
  .spcial-select--contain {
    position: absolute;
    // width: 460px;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    top: 32px;
    left: 94px;
    z-index: 1;
    max-height: 400px;
    overflow-y: auto;
    .el-tabs--border-card {
      box-shadow: none;
      border: none;
    }
    .no-data {
      width: 200px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
