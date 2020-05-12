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
  // 获取权限
  APPSELECT: urlHandler('/appSelect'),
  // 新休息室下单
  LOUNGENEW_ADD: urlHandler('/loungeNew/add')
}
