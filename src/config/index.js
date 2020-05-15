export const SESSION_KEY = {
}

export const COOKIE_KEY = {
}

// localStorage 存储key
export const LOCAL_KEY = {
}

export const URL_KEY = {
  // url地址携带的token
  TOKEN: 'token'
}

// 页面名称
export const PAGE_NAME = {
}

function urlHandler (path) {
  return ['http://localhost:8080', path].join('')
}

export const API = {
  // 首页获取商品信息
  APPSELECT: urlHandler('/appSelect'),
  //详情页获取商品信息
  APPDATAILS: urlHandler('/appDatails'),
  //用户注册
  APPREGS: urlHandler('/appRegs'),
  //用户登录
  APPLOGIN: urlHandler('/appLogin'),
  //购物车商品信息提交
  SETSHOPPING: urlHandler('/setShopping'),
  //购物车商品信息获取
  GETSHOPPING: urlHandler('/getShopping'),
  //删除购物车商品
  DELETSHOPPING: urlHandler('/deleteShopping'),
  //模糊查询
  SEARCH: urlHandler('/search'),
  //提交订单
  SETORDER: urlHandler('/setOrder'),
  //获取订单数据
  GETORDER: urlHandler('/getOrder'),
  //获取订单数据
  LIULAOBANZHUANSHUSEARCH: urlHandler('/liulaobanzhuanshuSearch'),
}
