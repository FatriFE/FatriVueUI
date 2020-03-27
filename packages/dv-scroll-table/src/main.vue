<template>
  <div class="dv-scroll-board" :ref="ref">
    <div class="header" v-if="header.length && mergedConfig" :style="`background-color: ${headerColor};`">
      <div
        class="header-item"
        v-for="(headerItem, i) in header"
        :key="headerItem + i"
        :style="
          `
          height: ${headerHeight}px;
          line-height: ${headerHeight}px;
          width: ${widths[i]}px;
        `
        "
        :align="aligns[i]"
        v-html="headerItem"
      ></div>
    </div>

    <div v-if="mergedConfig" class="rows" :style="`height: ${height - (header.length ? headerHeight : 0)}px;`">
      <div
        class="row-item"
        v-for="(row, ri) in rows"
        :key="row.toString() + row.scroll"
        :style="
          `
          height: ${heights[ri]}px;
          line-height: ${heights[ri]}px;
          background-color: ${row.rowIndex % 2 === 0 ? evenRowColor : oddRowColor};
          color: ${row.rowIndex % 2 === 0 ? evenRowTextColor : oddRowTextColor};
        `
        "
      >
        <div
          class="ceil"
          v-for="(ceil, ci) in row.ceils"
          :key="ceil + ri + ci"
          :style="`width: ${widths[ci]}px;`"
          :align="aligns[ci]"
          v-html="ceil"
          @click="emitEvent(ri, ci, row, ceil)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import autoResize from './minxin'
export default {
  name: 'FaDvScrollTable',
  mixins: [autoResize],
  props: {
    config: { type: Object, default: () => ({}) },
    header: { type: Array, default: () => [] },
    // data: { type: Array, default: () => [] },
    rowNum: { type: [Number, String], default: 5 },
    headerColor: { type: String, default: '#00BAFF' },
    oddRowColor: { type: String, default: '#003B51' },
    oddRowTextColor: { type: String, default: '#ffffff' },
    evenRowColor: { type: String, default: '#0A2732' },
    evenRowTextColor: { type: String, default: '#ffffff' },
    waitTime: { type: [String, Number], default: 2000 },
    headerHeight: { type: [String, Number], default: 35 },
    columnWidth: { type: Array, default: () => [] },
    align: { type: Array, default: () => [] },
    carousel: { type: String, default: 'single', validate: val => ['single', 'page'].indexOf(val) !== -1 }
  },
  data() {
    return {
      ref: 'scroll-board',

      defaultConfig: {
        /**
         * @description Board data
         * @type {Array<Array>}
         * @default data = []
         */
        data: []
      },
      mergedConfig: null,
      rowsData: [],
      rows: [],
      widths: [],
      heights: [],
      avgHeight: 0,
      aligns: [],
      animationIndex: 0,
      animationHandler: '',
      updater: 0
    }
  },
  watch: {
    config: {
      handler(val) {
        const { stopAnimation, calcData } = this
        stopAnimation()
        calcData()
      },
      deep: true
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      this.calcData()
    },
    onResize() {
      const { mergedConfig, calcWidths, calcHeights } = this

      if (!mergedConfig) return

      calcWidths()

      calcHeights()
    },
    calcData() {
      const { mergeConfig, calcRowsData } = this

      mergeConfig()

      calcRowsData()

      const { calcWidths, calcHeights, calcAligns } = this

      calcWidths()

      calcHeights()

      calcAligns()

      const { animation } = this

      animation(true)
    },
    mergeConfig() {
      let { config, defaultConfig } = this

      this.mergedConfig = { ...defaultConfig, ...config }
    },
    calcRowsData() {
      let { data } = this.mergedConfig

      data = data.map((ceils, i) => ({ ceils, rowIndex: i }))

      const rowLength = data.length

      if (rowLength > this.rowNum && rowLength < 2 * this.rowNum) {
        data = [...data, ...data]
      }

      data = data.map((d, i) => ({ ...d, scroll: i }))

      this.rowsData = data
      this.rows = data
    },
    calcWidths() {
      const { width, mergedConfig, rowsData } = this

      const { header } = mergedConfig

      const usedWidth = this.columnWidth.reduce((all, w) => all + w, 0)

      let columnNum = 0
      if (rowsData[0]) {
        columnNum = rowsData[0].ceils.length
      } else if (header.length) {
        columnNum = header.length
      }

      const avgWidth = (width - usedWidth) / (columnNum - this.columnWidth.length)

      const widths = new Array(columnNum).fill(avgWidth)

      this.widths = [...this.columnWidth, ...widths]
    },
    calcHeights(onresize = false) {
      const { height, mergedConfig, header } = this

      const { rowNum, data } = mergedConfig

      let allHeight = height

      if (header.length) allHeight -= this.headerHeight

      const avgHeight = allHeight / this.rowNum

      this.avgHeight = avgHeight

      if (!onresize) this.heights = new Array(data.length).fill(avgHeight)
    },
    calcAligns() {
      const { header, mergedConfig } = this

      const columnNum = header.length

      let aligns = new Array(columnNum).fill('left')

      this.aligns = [...aligns, ...this.align]
    },
    async animation(start = false) {
      let { avgHeight, animationIndex, mergedConfig, rowsData, animation, updater } = this

      const rowLength = rowsData.length

      if (this.rowNum >= rowLength) return

      if (start) {
        await new Promise(resolve => setTimeout(resolve, this.waitTime))
        if (updater !== this.updater) return
      }

      const animationNum = this.carousel === 'single' ? 1 : this.rowNum

      let rows = rowsData.slice(animationIndex)
      rows.push(...rowsData.slice(0, animationIndex))

      this.rows = rows
      this.heights = new Array(rowLength).fill(avgHeight)

      await new Promise(resolve => setTimeout(resolve, 300))
      if (updater !== this.updater) return

      this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))

      animationIndex += animationNum

      const back = animationIndex - rowLength
      if (back >= 0) animationIndex = back

      this.animationIndex = animationIndex
      this.animationHandler = setTimeout(animation, this.waitTime - 300)
    },
    stopAnimation() {
      const { animationHandler, updater } = this

      this.updater = (updater + 1) % 999999

      if (!animationHandler) return

      clearTimeout(animationHandler)
    },
    emitEvent(ri, ci, row, ceil) {
      const { ceils, rowIndex } = row

      this.$emit('click', {
        row: ceils,
        ceil,
        rowIndex,
        columnIndex: ci
      })
    }
  },
  destroyed() {
    stopAnimation()
  }
}
</script>
<style scoped lang="scss">
.dv-scroll-board {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;

  .text {
    padding: 0 10px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    .header-item {
      @extend .text;
      transition: all 0.3s;
    }
  }

  .rows {
    overflow: hidden;

    .row-item {
      display: flex;
      font-size: 14px;
      transition: all 0.3s;
    }

    .ceil {
      @extend .text;
    }

    .index {
      border-radius: 3px;
      padding: 0 3px;
    }
  }
}
</style>
