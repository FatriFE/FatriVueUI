<template>
  <div class="fa-valid-table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FaValidTable',
  data() {
    return {
      inputs: []
    }
  },
  created() {
    this.$on('on-input-item-add', input => {
      if (input) {
        this.inputs.push(input)
      }
    })
    this.$on('on-input-item-remove', input => {
      if (input.validation && input.validation.length) {
        this.inputs.splice(this.inputs.indexOf(input), 1)
      }
    })
  },
  methods: {
    validate(callback) {
      this.execValid(this.inputs, callback)
    },
    validateField(field, callback = function() {}) {
      const validateInputs = this.inputs.filter(i => field.indexOf(i.prop) !== -1)
      this.execValid(validateInputs, callback)
    },
    execValid(inputs, callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        inputs.forEach(input => {
          input.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === inputs.length) {
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fa-valid-table {
  padding: 10px;
  background-color: #fff;
}
</style>
