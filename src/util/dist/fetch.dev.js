"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrderDetail = getOrderDetail;
exports.goodsAdd = goodsAdd;
exports.whiteListAdd = whiteListAdd;
exports.moneyMyMoney = moneyMyMoney;
exports.appSelect = appSelect;
exports.appDatails = appDatails;
exports.appRegs = appRegs;
exports.appLogin = appLogin;
exports.setShopping = setShopping;
exports.getShopping = getShopping;
exports.deleteShopping = deleteShopping;
exports.search = search;
exports.setOrder = setOrder;
exports.getOrder = getOrder;
exports.liulaobanzhuanshuSearch = liulaobanzhuanshuSearch;

var _http = require("../util/http");

var _config = require("../config");

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 订单详情
function getOrderDetail(params, urlParams) {
  var urlParam = _qs["default"].stringify(urlParams);

  return (0, _http.post)(_config.API.ORDER_DETAIL + '?' + urlParam, params);
} // 根据订单号查询付费选座信息 
// 添加商品 GOODS_ADD: urlHandler('/goods/add')


function goodsAdd(params) {
  return (0, _http.post)(_config.API.GOODS_ADD, params);
} // 权限验证 WHITELIST_ADD: urlHandler('/whiteList/add')


function whiteListAdd(params) {
  return (0, _http.post)(_config.API.WHITELIST_ADD, params);
} // 货币设置-货币列表 MONEY_MY_MONEY: urlHandler('/money/myMoney')


function moneyMyMoney(params) {
  return (0, _http.post)(_config.API.MONEY_MY_MONEY, params);
}
/************************综合商城接口*************************/
//首页获取商品信息 APPSELECT: urlHandler('/appSelect')


function appSelect(data) {
  return (0, _http.get)(_config.API.APPSELECT, data);
} //详情页获取商品信息 APPDATAILS: urlHandler('/appDatails')


function appDatails(data) {
  return (0, _http.get)(_config.API.APPDATAILS, data);
} //用户注册 APPREGS: urlHandler('/appRegs')


function appRegs(data) {
  return (0, _http.post)(_config.API.APPREGS, _qs["default"].stringify(data));
} //用户登录 APPLOGIN: urlHandler('/appLogin')


function appLogin(data) {
  return (0, _http.post)(_config.API.APPLOGIN, _qs["default"].stringify(data));
} //购物车商品信息提交 SETSHOPPING: urlHandler('/setShopping')


function setShopping(data) {
  return (0, _http.post)(_config.API.SETSHOPPING, _qs["default"].stringify(data));
} //购物车商品信息获取 GETSHOPPING: urlHandler('/getShopping')


function getShopping(data) {
  return (0, _http.get)(_config.API.GETSHOPPING, data);
} //删除购物车商品 DELETSHOPPING: urlHandler('/deleteShopping')


function deleteShopping(data) {
  return (0, _http.get)(_config.API.DELETSHOPPING, data);
} //模糊查询 SEARCH: urlHandler('/search')


function search(data) {
  return (0, _http.post)(_config.API.SEARCH, _qs["default"].stringify(data));
} //提交订单 SETORDER: urlHandler('/setOrder')


function setOrder(data) {
  return (0, _http.post)(_config.API.SETORDER, _qs["default"].stringify(data));
} //获取订单数据 GETORDER: urlHandler('/getOrder')


function getOrder(data) {
  return (0, _http.get)(_config.API.GETORDER, data);
} //获取订单数据 LIULAOBANZHUANSHUSEARCH: urlHandler('/liulaobanzhuanshuSearch')


function liulaobanzhuanshuSearch(data) {
  return (0, _http.post)(_config.API.LIULAOBANZHUANSHUSEARCH, _qs["default"].stringify(data));
}