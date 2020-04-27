import * as Type from './type.util'

/**
 * 对设置到storage中的数据进行预处理，主要是将val为引用类型的数据转为string类型
 * @param {Any} val
 * @return 非引用类型数据
 */
function setValHandler (val) {
  if (Type.isObject(val) || Type.isArray(val)) {
    val = JSON.stringify(val)
  }
  return val
}

function getValHandler (val) {
  if (typeof val === 'string') {
    try {
      let temp = JSON.parse(val)
      if (Type.isArray(temp) || Type.isObject(temp)) {
        return temp.GLOBAL_TAG ? temp.value : temp
      } else {
        return val
      }
    } catch (e) {
      return val
    }
  } else {
    return val
  }
}

// 封装
export function local (key, val) {
  if (val !== undefined) {
    if (!Type.isArray(val) && !Type.isObject(val)) {
      val = {
        value: val,
        GLOBAL_TAG: true
      }
    }
    localStorage[key] = setValHandler(val)
  } else {
    return getValHandler(localStorage[key])
  }
}

export function session (key, val) {
  if (val !== undefined) {
    if (!Type.isArray(val) && !Type.isObject(val)) {
      val = {
        value: val,
        GLOBAL_TAG: true
      }
    }
    sessionStorage[key] = setValHandler(val)
  } else {
    return getValHandler(sessionStorage[key])
  }
}

session.clear = () => {
  sessionStorage.clear()
}

local.clear = () => {
  localStorage.clear()
}
