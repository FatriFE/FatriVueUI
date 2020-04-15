<template>
  <div class="fa-module-create-header clearfix">
    <div class="fa-module-create-header-left pull-left">
      <span class="fa-module-create-title">{{ header.title || '' }}</span>
      <template v-if="header.helpTip">
        <el-tooltip :open-delay="500" effect="dark" :content="header.helpTip.content" :placement="header.helpTip.position || 'right'">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </template>
    </div>
    <div class="fa-module-create-header-right pull-right">
      <template v-if="btns && btns.length">
        <el-button class="fa-module-create-btn" v-for="(btn, idx) in btns" :key="idx" type="primary" @click="handleClick(btn)" :disabled="btn.disabled">
          <i v-if="btn.icon" :class="btn.icon"></i>
          {{ btn.text }}
        </el-button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaModuleCreateHeader',
  props: {
    header: {
      type: Object,
      default: () => {}
    },
    btns: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleClick(btn) {
      if (btn.click) {
        btn.click()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fa-module-create-header {
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .fa-module-create-header-left {
    padding: 24px 0 24px 20px;
    .fa-module-create-title {
      margin-right: 10px;
      font-size: 16px;
      line-height: 24px;
      font-weight: bold;
    }
  }
  .fa-module-create-header-right {
    padding: 16px 20px 16px 0;
    .fa-module-create-btn {
      margin-left: 10px;
    }
  }
}
</style>
