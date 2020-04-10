<template>
  <span class="fa-valid-input">
    <span v-if="isRequired" class="valid-input-item-required">*</span>
    <input
      type="text"
      class="valid-input-item"
      :class="{ 'input-valid': validateState === 'error', 'input-disabled': disabled }"
      :value="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <span v-if="validateState === 'error'" class="valid-input-item-message">{{ validateMessage }}</span>
  </span>
</template>

<script>
import Schema from 'async-validator'
import emitter from './mixin.js'
export default {
  name: 'FaValidInput',
  mixins: [emitter],
  props: {
    value: {
      type: String,
      default: ''
    },
    validation: {
      type: Array
    },
    prop: {
      type: String,
      default: ''
    },
    placeholder: {
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
      currentValue: this.value,
      isRequired: false,
      validateState: '',
      validateMessage: ''
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  mounted() {
    if (this.prop) {
      this.dispatch('FaValidTable', 'on-input-item-add', this)
      this.setRules()
    }
  },
  beforeDestroy() {
    this.dispatch('FaValidTable', 'on-input-item-remove', this)
  },
  methods: {
    handleInput(event) {
      const { value } = event.target
      this.currentValue = value
      // 双向绑定
      this.$emit('input', value)
      // change
      this.$emit('change', value)
      if (!value) {
        // clear
        this.$emit('clear')
      }
      this.validate('change')
    },
    handleBlur(event) {
      // blur
      this.$emit('blur', event)
      this.validate('blur')
    },
    handleFocus(event) {
      // focus
      this.$emit('focus', event)
    },
    setRules() {
      const rules = this.getRules()
      if (rules.length) {
        this.isRequired = rules.some(i => i.required)
      }
    },
    getRules() {
      return this.validation || []
    },
    getFilteredRules(trigger) {
      const rules = this.getRules()
      return rules.filter(r => !r.trigger || r.trigger.indexOf(trigger) !== -1)
    },
    validate(trigger, callback = function() {}) {
      const rules = this.getFilteredRules(trigger)
      if (!rules || rules.length === 0) {
        return true
      }
      this.validateState = 'validating'
      const descriptor = {
        [this.prop]: rules
      }
      const schema = new Schema(descriptor)
      const model = {
        [this.prop]: this.currentValue
      }
      schema.validate(model, { firstFields: true }, errors => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''
        callback(this.validateMessage)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fa-valid-input {
  display: inline-block;
  position: relative;
  .valid-input-item-required {
    color: #f56c6c;
    vertical-align: middle;
  }
  .valid-input-item-message {
    position: absolute;
    left: 6px;
    top: 45px;
    background-color: #fff;
    border-radius: 4px;
    padding: 2px 6px;
    border: 1px solid #d5d5d5;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-size: 12px;
    line-height: 20px;
    color: #f56c6c;
    &:after,
    &:before {
      border: solid transparent;
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
    }
    &:before {
      border-width: 9px;
      border-bottom-color: #d5d5d5;
      top: -19px;
      left: 5px;
    }
    &:after {
      border-width: 8px;
      border-bottom-color: #fff;
      top: -16px;
      left: 6px;
    }
  }
  .valid-input-item {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    appearance: none;
    color: #606266;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: calc(100% - 20px);
    font-size: 14px;
    &::placeholder {
      color: #c0c4cc;
      font-size: 14px;
    }
    &:hover {
      border-color: #c0c4cc;
    }
    &:focus {
      border-color: #409eff;
    }
    &.input-valid {
      border-color: #f56c6c !important;
      box-shadow: 0 0 0 2px rgba(234, 69, 14, 0.2);
    }
    &.input-disabled {
      user-select: none;
      color: #c0c4cc;
      cursor: not-allowed;
      border-color: #dcdfe6 !important;
      background-color: #f5f7fa;
    }
  }
}
</style>
