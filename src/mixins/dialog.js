/**
 * Created by starlee on 2020/03/21.
 */
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
    visible: {
      handler(val) {
        this.show = val
      },
      immediate: true
    }
  }
}
