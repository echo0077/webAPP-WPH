function clone (Obj) {
  let buf
  if (Obj instanceof Date) {
    return Obj
  } else if (Obj instanceof Array) {
    buf = []
    let i = Obj.length
    while (i--) {
      buf[i] = clone(Obj[i])
    }
    return buf
  } else if (Obj instanceof Object) {
    buf = {}
    for (let k in Obj) {
      buf[k] = clone(Obj[k])
    }
    return buf
  } else {
    return Obj
  }
}
const install = function (Vue) {
  Vue.prototype.formatDate = function (date, ms, month) {
    // date: Wed Aug 22 2018 08:49:39 GMT+0700 (新西伯利亚标准时间)  默认 2018-08-22 参数2 2018-08-22 08:49:39
    if (typeof date === 'string') return date
    // date = new Date(date - 60 * 12 * 60 * 1000)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let h = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    m = m < 10 ? ('0' + m) : m; d = d < 10 ? ('0' + d) : d; h = h < 10 ? ('0' + h) : h
    minute = minute < 10 ? ('0' + minute) : minute; second = second < 10 ? ('0' + second) : second
    if (ms) return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
    else if (month) return y + '-' + m
    else return y + '-' + m + '-' + d
  }
  Vue.prototype.toThousands = function (num) {
    if (!num) return 0
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }
  Vue.prototype.cloneDeep = clone
  Vue.prototype.toNonExponential = function (num) {
    let nums = Number(num)
    var m = nums.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/)
    return nums.toFixed(Math.max(0, (m[1] || '').length - m[2]))
  }
}
export default { install }
