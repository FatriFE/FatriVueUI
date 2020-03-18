<template>
  <div v-if="show" class="fa-ellipsis">
    <span ref="hiddenDom" class="fa-ellipsis--hidden">{{ content }}</span>
    <el-tooltip v-if="realWidth > maxWidth" v-bind="$attrs" :content="content" v-on="$listeners">
      <div :style="computedStyle" class="fa-ellipsis__text" :class="parseInt(Number(row)) > 1 ? 'ellipsis--multi' : 'ellipsis--single'">
        <slot></slot>
      </div>
    </el-tooltip>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'FaEllipsis',
  inheritAttrs: false,
  props: {
    row: {
      type: [String, Number],
      default: 1
    },
    content: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: [Number, String],
      default: 80
    }
  },
  data() {
    return {
      realWidth: 0,
      show: false
    }
  },
  computed: {
    computedStyle() {
      const style = {}
      if (parseInt(Number(this.row)) === 1) {
        style.width = this.maxWidth ? (typeof this.maxWidth === 'number' ? this.maxWidth + 'px' : this.maxWidth.includes('px') ? this.maxWidth : this.maxWidth + 'px') : '80px'
      }
      if (parseInt(Number(this.row)) > 1) {
        style['-webkit-line-clamp'] = this.row
      }
      return style
    }
  },
  mounted() {
    this.show = true
    this.$nextTick(() => {
      this.realWidth = this.$refs.hiddenDom.clientWidth
    })
  }
}
</script>

<style lang="scss" scoped>
.fa-ellipsis {
  position: relative;
  #{&}__text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #{&}--single {
    white-space: nowrap;
  }
  #{&}--multi {
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .fa-ellipsis--hidden {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    color: transparent;
  }
}
</style>
