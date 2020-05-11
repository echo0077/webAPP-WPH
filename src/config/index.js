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
  return ['/marketing', path].join('')
}

export const API = {
  // 获取权限
  FIND_MENU_BY_USER_ID: urlHandler('/menu/findMenuByUserId'),
  // 新休息室下单
  LOUNGENEW_ADD: urlHandler('/loungeNew/add')
}
