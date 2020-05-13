export function setCookie (name, value, days) {
  days = days || 1
  value = encodeURIComponent(value)
  var d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days)
  // 未知原因报错暂时注释
  window.document.cookie = name + '=' + value + ';path=/;expires=' + d.toGMTString()
  // window.document.cookie = name + '=' + value
}
// 获取
export function getCookie (name) {
  var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? decodeURIComponent(v[2]) : null
}

export function delCookie (name) {
  setCookie(name, '', -1)
}
