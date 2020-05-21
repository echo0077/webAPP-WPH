import {
  get, post
}
  from '../util/http'
import {
  API
}
  from '../config'

import QS from 'qs'

// ************************综合商城接口*************************//

// 首页获取商品信息 APPSELECT: urlHandler('/appSelect')
export function appSelect (data) {
  return get(API.APPSELECT, data)
}

// 详情页获取商品信息 APPDATAILS: urlHandler('/appDatails')
export function appDatails (data) {
  return get(API.APPDATAILS, data)
}

// 用户注册 APPREGS: urlHandler('/appRegs')
export function appRegs (data) {
  return post(API.APPREGS, QS.stringify(data))
}

// 用户登录 APPLOGIN: urlHandler('/appLogin')
export function appLogin (data) {
  return post(API.APPLOGIN, QS.stringify(data))
}

// 购物车商品信息提交 SETSHOPPING: urlHandler('/setShopping')
export function setShopping (data) {
  return post(API.SETSHOPPING, QS.stringify(data))
}

// 购物车商品信息获取 GETSHOPPING: urlHandler('/getShopping')
export function getShopping (data) {
  return get(API.GETSHOPPING, data)
}

// 删除购物车商品 DELETSHOPPING: urlHandler('/deleteShopping')
export function deleteShopping (data) {
  return get(API.DELETSHOPPING, data)
}

// 模糊查询 SEARCH: urlHandler('/search')
export function search (data) {
  return post(API.SEARCH, QS.stringify(data))
}

// 提交订单 SETORDER: urlHandler('/setOrder')
export function setOrder (data) {
  return post(API.SETORDER, QS.stringify(data))
}

// 获取订单数据 GETORDER: urlHandler('/getOrder')
export function getOrder (data) {
  return get(API.GETORDER, data)
}
