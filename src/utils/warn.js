/**
 * Created by starlee on 2020/04/10.
 */
/**
 * 向控制台抛出警告  不影响程序的执行
 * @param condition
 * @param message
 */
export const warn = (condition, message) => {
  if (condition) {
    console.warn(`[fatrife-ui] ${message}`)
  }
}

/**
 * 向控制台抛出错误 将会影响程序的后续执行
 * @param condition
 * @param message
 */
export const assert = (condition, message) => {
  if (condition) {
    throw new Error(message)
  }
}
