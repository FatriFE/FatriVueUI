<template>
  <div class="fa-select">
    <span class="fa-button--left" v-if="label">{{ label }}</span>
    <el-select
      size="mini"
      ref="input"
      v-model="selectValue"
      :style="{ width: width ? width + 'px' : null }"
      class="fa-select--right"
      v-bind="$attrs"
      :placeholder="placeholder"
      :class="selectValue === null ? 'input-select' : ''"
      v-on="$listeners"
    >
      <slot />
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'FaSelect',
  inheritAttrs: false,
  props: {
    label: { type: String, default: null },
    placeholder: { type: String, default: '全部' },
    value: { type: [String, Number, Boolean], default: null },
    width: { type: [Number, String], default: null }
  },
  data() {
    return {
      selectValue: null
    }
  },
  watch: {
    selectValue: {
      handler(val) {
        this.$emit('input', val)
      },
      immediate: true
    },
    value: {
      handler(val) {
        this.selectValue = val
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.input-select {
  /deep/ .el-input__inner {
    color: #cccccc !important;
  }
}

.fa-select {
  display: flex;
  /deep/ .el-input__inner {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.fa-button--left {
  background-color: #f5f7fa;
  box-sizing: border-box;
  white-space: nowrap;
  line-height: 26px;
  border: 1px solid #dcdfe6;
  border-right: 0;
  padding-left: 10px;
  padding-right: 10px;
  color: #909399;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  border-radius: 4px 0 0 4px;
}
</style>
