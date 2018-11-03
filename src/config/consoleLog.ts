/**
 *
 * @param {string} isDebug   是否打印 console.log
 */
export function openConsoleLog(isDebug) {
  var oldConsoleLog = console.log
  console.log = function () {
    if (isDebug) {
      oldConsoleLog.apply(this, arguments)
    }
  }
}