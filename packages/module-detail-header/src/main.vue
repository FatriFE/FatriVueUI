<template>
  <div class="fa-module-detail-header clearfix">
    <div class="fa-module-detail-breadCrumb pull-left">
      <template v-if="breadCrumbs && breadCrumbs.length">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="bread in breadCrumbs" :key="bread.id">
            <template v-if="bread.click">
              <a @click="handleClick(bread)">
                <span class="bread-text">{{ bread.text }}</span>
              </a>
            </template>
            <template v-if="!bread.click">
              <span class="bread-text">{{ bread.text }}</span>
            </template>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
    </div>
    <div class="fa-module-detail-operation pull-right">
      <template v-if="creates && creates.length">
        <el-button class="fa-module-operation-btn" size="medium" v-for="(btn, idx) in creates" :key="idx" type="primary" @click="handleClick(btn)" :disabled="btn.disabled">
          <i :class="btn.icon"></i>
          {{ btn.text }}
        </el-button>
      </template>
      <template v-if="refresh && refresh.click">
        <refresh-btn @click="handleRefresh"></refresh-btn>
      </template>
    </div>
  </div>
</template>
<script>
import RefreshBtn from './refreshBtn.vue'

export default {
  name: 'FaModuleDetailHeader',
  components: {
    RefreshBtn
  },
  props: {
    breadCrumbs: {
      type: Array,
      default: () => []
    },
    creates: {
      type: Array,
      default: () => []
    },
    refresh: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick(item) {
      if (item.click) {
        item.click()
      }
    },
    handleRefresh() {
      if (this.refresh.click) {
        this.refresh.click()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.fa-module-detail-header {
  width: 100%;
  height: 72px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  .fa-module-detail-breadCrumb {
    padding: 24px 0 24px 20px;
    .bread-text {
      display: inline-block;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: middle;
      font-size: 14px;
      line-height: 24px;
    }
  }
  .fa-module-detail-operation {
    padding: 18px 20px 18px 0;
    .fa-module-operation-btn {
      margin-right: 10px;
    }
  }
}
</style>
