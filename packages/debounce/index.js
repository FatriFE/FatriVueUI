/**
 * Created by starlee on 2020/04/10.
 */
import { debounce } from 'lodash'
import { warn, assert } from '../../src/utils/warn'
export default {
  name: 'fa-debounce',
  functional: true,
  render(_, { slots, props }) {
    assert(!props.event && typeof props.event !== 'string', 'debounce event is required and is declared as a string')
    warn(slots().default.length > 1, 'debounce function just action on default slot and default slot should contains one component ')

    // time 默认为 1 秒
    const time = typeof props.time === 'number' && props.time > 0 ? props.time : 1000
    // 支持 native 属性而不赋值的写法
    let isNative = typeof props.native === 'boolean' ? props.native : typeof props.native === 'string' ? true : !!props.native
    console.log(slots().default[0], slots().default[0].data[isNative ? 'nativeOn' : 'on'])
    // slot 元素的原生事件集合
    let nativeEvents = (slots().default[0].data[isNative ? 'nativeOn' : 'on'] && Object.keys(slots().default[0].data[isNative ? 'nativeOn' : 'on'])) || []
    // slot 元素的 listeners 事件集合
    let listenersEvents = (slots().default[0].componentOptions.listeners && Object.keys(slots().default[0].componentOptions.listeners)) || []

    if (isNative && !nativeEvents.includes(props.event)) {
      warn(true, `native ${props.event} undefined !`)
    } else if (nativeEvents.includes(props.event)) {
      slots().default[0].data[isNative ? 'nativeOn' : 'on'][props.event] = debounce(slots().default[0].data[isNative ? 'nativeOn' : 'on'][props.event], time)
    }

    if (listenersEvents.includes(props.event) && !props.native) {
      slots().default[0].componentOptions.listeners[props.event] = debounce(slots().default[0].componentOptions.listeners[props.event], time)
    }

    return slots().default
  }
}
