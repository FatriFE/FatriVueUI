<template>
  <div class="fatri-srcoll-num">
    <div v-for="(i, index) in arr" :key="index">
      <div class="num" :ref="'fatri-num-wrapper' + id + index" :style="numStyle">
        <div :ref="'fatri-nums' + id + index" class="nums">
          <span v-for="i in 10" :ref="'fatri-num' + id + index" :key="i" class="num-wrapper">{{ i - 1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaScrollNum',
  props: {
    num: {
      type: [Number, String],
      default: 0
    },
    scrollTime: {
      type: [Number, String],
      default: 3
    },
    numStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      id: Math.random(),
      arr: [this.num]
    }
  },
  watch: {
    num(n) {
      this.getRef(n)
    }
  },
  mounted() {
    this.getRef(this.num)
  },
  methods: {
    getRef(n) {
      if (isNaN(n)) {
        return this.$message.error('请检查传入的数字')
      }
      this.arr = n.toString().split('')
      let padding = 2
      if (Object.keys(this.numStyle).length && this.numStyle.hasOwnProperty('padding')) {
        padding = Number(this.numStyle['padding'].substr(0, this.numStyle['padding'].length - 2))
      }
      this.$nextTick(() => {
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i] !== '0') {
            this.$refs[`fatri-nums${this.id}${i}`][0].style.transitionDuration = this.scrollTime + 's'
          }
          this.$refs[`fatri-num-wrapper${this.id}${i}`][0].style.width = this.$refs[`fatri-num${this.id}${i}`][0].offsetWidth + 'px'
          this.$refs[`fatri-num-wrapper${this.id}${i}`][0].style.height = this.$refs[`fatri-num${this.id}${i}`][0].offsetHeight + 'px'
          this.$refs[`fatri-nums${this.id}${i}`][0].style.top = this.$refs[`fatri-num${this.id}${i}`][0].offsetHeight * -this.arr[i] + padding + 'px'
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.fatri-srcoll-num {
  display: flex;
  .num {
    padding: 2px;
    // border: 1px solid #3e8dfb;
    // border-radius: 3px;
    font-size: 30px;
    font-weight: 700;
    position: relative;
    overflow: hidden;
    .nums {
      position: absolute;
      top: 5px;
      display: flex;
      flex-direction: column;
      transition-property: top;
      // transition-duration: 3s;
      transition-timing-function: ease;
      // transition-delay: 1s;
    }
  }
}
</style>
