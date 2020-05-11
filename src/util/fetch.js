import {
  get, post
}
  from '../util/http'
import {
  API
}
  from '../config'

import QS from 'qs'

// 订单详情
export function getOrderDetail (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_DETAIL + '?' + urlParam, params)
}
// 根据订单号查询付费选座信息   PAIDSEAT_FINDBYORDERID: urlHandler('/paidSeat/findByOrderId')
export function getPaidSeatFindByOrderIdd (data) {
  return get(API.PAIDSEAT_FINDBYORDERID, data)
}

// 权限验证 WHITELIST_ADD: urlHandler('/whiteList/add')
export function whiteListAdd (params) {
  return post(API.WHITELIST_ADD, params)
}
// 货币设置-货币列表 MONEY_MY_MONEY: urlHandler('/money/myMoney')
export function moneyMyMoney (params) {
  return post(API.MONEY_MY_MONEY, params)
}

// 添加商品 GOODS_ADD: urlHandler('/goods/add')
export function goodsAdd (params) {
  return post(API.GOODS_ADD, params)
}
