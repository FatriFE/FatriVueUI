<template>
  <div>
    <el-input :id="'fatri-input' + id" :value="show" @input="handleInput" :suffix-icon="suffixIcon" :prefix-icon="prefixIcon" :disabled="disabled">
      <template v-if="prependLabel" slot="prepend">{{ prependLabel }}</template>
      <template v-if="appendLabel" slot="append">{{ appendLabel }}</template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'FaInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    prependLabel: {
      type: String,
      default: ''
    },
    appendLabel: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: '',
      id: Math.random()
    }
  },
  created() {
    if (this.value) {
      let show = this.value.split('')
      if (show.length > 2 && show.length < 7) {
        show.splice(3, 0, '-')
      } else if (show.length >= 7) {
        show.splice(3, 0, '-')
        show.splice(8, 0, '-')
      }
      this.show = show.join('')
    }
  },
  watch: {
    value: {
      handler(newValue, oldValue) {
        const start = document.getElementById(`fatri-input${this.id}`).selectionStart
        const show = newValue.replace(/-/g, '').split('')
        if (show.length > 11) return
        if (show.length > 2 && show.length < 7) {
          show.splice(3, 0, '-')
        } else if (show.length >= 7) {
          show.splice(3, 0, '-')
          show.splice(8, 0, '-')
        }
        // 输入的时候
        if (newValue.length > oldValue.length) {
          this.$nextTick(() => {
            if (start === 4) {
              document.getElementById(`fatri-input${this.id}`).selectionStart = 5
              document.getElementById(`fatri-input${this.id}`).selectionEnd = 5
            } else if (start === 9) {
              document.getElementById(`fatri-input${this.id}`).selectionStart = 10
              document.getElementById(`fatri-input${this.id}`).selectionEnd = 10
            }
            if (this.show.split('')[this.show.split('').length - 1] === '-') {
              document.getElementById(`fatri-input${this.id}`).selectionStart = start
              document.getElementById(`fatri-input${this.id}`).selectionEnd = start
            }
            if (this.show.split('')[this.show.split('').length - 2] === '-') {
              document.getElementById(`fatri-input${this.id}`).selectionStart = start + 1
              document.getElementById(`fatri-input${this.id}`).selectionEnd = start + 1
            }
          })
          this.show = show.join('')
        }
        // 删除的时候
        else {
          if (newValue.length === 3 && oldValue.length === 4) {
            this.show = show.join('').replace(/-/g, '')
          } else if (newValue.length === 7 && oldValue.length === 8) {
            this.show = show.join('').substring(0, 8)
          } else {
            this.show = show.join('')
          }
          if (show.length === 9 && show[8] === '-') {
            this.show = show.join('').substring(0, 8)
          }
          if (show.length === 4 && show[3] === '-') {
            this.show = show.join('').replace(/-/g, '')
          }
          this.$nextTick(() => {
            document.getElementById(`fatri-input${this.id}`).selectionStart = start
            document.getElementById(`fatri-input${this.id}`).selectionEnd = start
          })
        }
      }
    }
  },
  methods: {
    handleInput(show) {
      const value = show.replace(/-/g, '')
      if (show !== this.show && this.show.length < 11) {
        this.show = show
      }
      if (value.length <= 11) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
