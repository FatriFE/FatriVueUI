<template>
  <div class="module-detail-header-refresh" @click="handleClick">
    <i class="el-icon-refresh-right refresh-btn"></i>
  </div>
</template>
<script>
export default {
  name: 'fa-detail-header-refresh-btn',
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.module-detail-header-refresh {
  width: 36px;
  height: 36px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  vertical-align: bottom;
  box-sizing: border-box;
  .refresh-btn {
    vertical-align: middle;
    color: rgba(0, 0, 0, 0.45);
    font-size: 20px;
    line-height: 34px;
  }
  &:hover {
    border: 1px solid #409eff;
    .refresh-btn {
      color: rgba(0, 0, 0, 0.8);
    }
  }
}
</style>
