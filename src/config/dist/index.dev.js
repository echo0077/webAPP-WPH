'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.API = exports.PAGE_NAME = exports.URL_KEY = exports.LOCAL_KEY = exports.COOKIE_KEY = exports.SESSION_KEY = void 0
var SESSION_KEY = {}
exports.SESSION_KEY = SESSION_KEY
var COOKIE_KEY = {} // localStorage 存储key

exports.COOKIE_KEY = COOKIE_KEY
var LOCAL_KEY = {}
exports.LOCAL_KEY = LOCAL_KEY
var URL_KEY = {
  // url地址携带的token
  TOKEN: 'token'
} // 页面名称

exports.URL_KEY = URL_KEY
var PAGE_NAME = {}
exports.PAGE_NAME = PAGE_NAME

function urlHandler (path) {
  return ['/marketing', path].join('')
}

var API = {
  // 获取权限
  FIND_MENU_BY_USER_ID: urlHandler('/menu/findMenuByUserId'),
  // 后管取消订单
  ORDER_CANCELL: urlHandler('/order/cancell'),
  // 确认订单
  ORDER_COMPLETE: urlHandler('/order/complete'),
  // 订单详情
  ORDER_DETAIL: urlHandler('/order/details'),
  // 我的订单列表
  ORDER_MYDATAGRID: urlHandler('/order/myDataGrid'),
  // 根据订单号查询付费选座信息
  PAIDSEAT_FINDBYORDERID: urlHandler('/paidSeat/findByOrderId'),
  //  根据订单号查询付费选座订单信息
  PAIDSEAT_FINDPAIDSEATORDERBYORDERID: urlHandler('/paidSeat/findPaidSeatOrderByOrderId'),
  //  订单列表信息
  // ORDER_ALLDATA: urlHandler('/order/allDataGrid'),
  ORDER_ALLDATA: urlHandler('/order/allDataGrid'),
  //  根据商品id查询商品快照
  GOODS_SELECTGOODSSNAPSHOTBYID: urlHandler('/goods/selectGoodsSnapShotById'),
  //  基本信息-查询所有机构信息
  // USERUNIT_SLECTUSERUNITLIST: urlHandler('/userUnit/slectUserUnitList'),
  // 基本信息查询单位信息
  USERUNIT_SLECTUSERUNITLIST: urlHandler('/org/selectList'),
  //  基本信息-查询用户信息
  USER_GETUSER: urlHandler('/user/getUser'),
  // 付费选座信息补录
  PAIDSEAT_PAIDSEATSUPPLY: urlHandler('/paidSeat/paidSeatSupply'),
  // 补录里程  /mileage/addMileage
  MILEAGE_ADDMILEAGE: urlHandler('/mileage/addMileage'),
  // 提交优惠票订单
  SPECIALFARE_SUBMIT: urlHandler('/specialfare/submit'),
  // 提交团队违约金订单
  TEAMDAMAGES_ADD: urlHandler('/teamDamages/add'),
  // 提交金银卡订单
  CARD_ADD: urlHandler('/card/add'),
  // 提交客票退票订单
  TRFD_ADD: urlHandler('/trfd/add'),
  // 提交客票改期订单
  RESCHEDULING_ADD: urlHandler('/rescheduling/add'),
  // 提交升舱订单
  UPGRADE_ADD: urlHandler('/upgrade/add'),
  // 提交里程订单
  MILEAGE_ADD: urlHandler('/mileage/add'),
  // 提交付费选座订单
  PAIDSEAT_ADD: urlHandler('/paidSeat/submit'),
  // 提交优惠卷订单
  COUPON_ADD: urlHandler('/coupon/add'),
  // 新版优惠券提交
  COUPONINFO_ADDNEWCOUPONDETAIL: urlHandler('/couponInfo/addNewCouponDetail'),
  // 优惠票补录  /specialfare/supply
  SPECIALFARE_SUPPLY: urlHandler('/specialfare/supply'),
  // 优惠票补录完成
  SPECIALFARE_COMPLETE: urlHandler('/specialfare/complete'),
  // 导出订单
  // ORDER_EXPORT: urlHandler('/order/export'),
  ORDERTOTAL_EXPORT: urlHandler('/orderTotal/export'),
  // 升舱新票号补录
  UPGRADE_UPDATE: urlHandler('/upgrade/updateBatchById'),
  // 客票改期补录
  RESCHEDULING_UPDATE: urlHandler('/rescheduling/updateBatchById'),
  // 优惠券一次补录
  COUPON_FIRSTSUPPLY: urlHandler('/coupon/firstSupply'),
  // 下载批次号补录模板
  BATCH_EXPORT: urlHandler('/coupon/DownLoadAddExcelBatchNumber'),
  // 优惠券批次已使用金额补录
  COUPUN_FIND_ADD_NO_MONEY: urlHandler('/coupon/findAddNoMoney'),
  // 下载补录模板excel
  COUPUN_DOWNLOAD_ADD_EXCEL: urlHandler('/coupon/DownLoadAddExcel'),
  // 导入补录信息
  COUPUN_IMPORT_BY_EXCEL: urlHandler('/coupon/importByExcel'),
  // 二次补录
  COUPUN_SECOND_SUPPLY: urlHandler('/coupon/secondSupply'),
  // 权限验证
  WHITELIST_ADD: urlHandler('/whiteList/add'),
  // 货币分配-货币菜单
  GET_MONEY_MENU: urlHandler('/moneyOrder/getMoneyMenu'),
  // 货币分配-货币列表
  GET_MONEY_ORDER_LIST: urlHandler('/moneyOrder/getMoneyOrderList'),
  // 货币分配-添加积分
  MONEY_ORDER_ADD: urlHandler('/moneyOrder/add'),
  // 货币调整
  MONEY_ORDER_ADJUST: urlHandler('/moneyOrder/adjust'),
  // 货币设置-新增货币
  MONEY_ADD: urlHandler('/money/add'),
  // 货币设置-修改编辑
  MONEY_EDIT: urlHandler('/money/edit'),
  // 货币设置-货币列表
  MONEY_MONEYLIST: urlHandler('/money/moneyList'),
  // 首页-用户积分数据
  MONEY_MY_MONEY: urlHandler('/money/myMoney'),
  // 货币批量追加解析
  MONEYORDER_GETMONEYEXCEL: urlHandler('/moneyOrder/getMoneyExcel'),
  // 货币批量追加导出
  MONEYORDER_DOREPORTBATCCHAPPENDEXL: urlHandler('/moneyOrder/doReportBatchAppendExl'),
  // 部门全部接口
  GET_DEPARTMENT_LIST: urlHandler('/department/getDepartmentList'),
  // 部门一级接口
  GET_ONE_DEPARTMENT: urlHandler('/department/getOneDepartment'),
  // 部门一级权限部门列表
  GET_ONE_DEPARTMENTLIST: urlHandler('/department/getOneDepartmentList'),
  // 根据部门id获取部门详情
  MONEYORDER_DEPARTMENTDETAILS: urlHandler('/moneyOrder/adjustDetails'),
  // 货币分配调整记录
  MONEYORDER_GETMONEYORDERLIST: urlHandler('/moneyOrder/getMoneyOrderList'),
  // 日志报表图表
  GET_CHARTS: urlHandler('/moneyOrder/getChart'),
  // 货币分配列表库存
  ALLOT_LIST: urlHandler('/moneyStock/allotList'),
  // 根据部门id获取部门详情
  DEPARTMENT_DETAILS: urlHandler('/moneyOrder/DepartmentDetails'),
  // 日志报表
  GET_DETAILS: urlHandler('/moneyOrder/getDetails'),
  // 货币分配调整记录导出
  MONEYORDER_GETMONEYORDERLISTEXL: urlHandler('/moneyOrder/getMoneyOrderListExl'),
  // 我的部门订单
  MY_DEPT_ORDER: urlHandler('/order/myDeptOrder'),
  // 日志报表导出
  GET_DETAILS_EXL: urlHandler('/moneyOrder/getDetailsExl'),
  // 清空测试数据
  DELETE_DEPARTMENT: urlHandler('/moneyOrder/deleteDepartment'),
  // 资源管理列表
  GOODS_SELECTLIST: urlHandler('/goods/selectList'),
  // 资源管理上下架
  GOODS_EDIT: urlHandler('/goods/edit'),
  // 草稿箱删除
  GOODS_DELETE: urlHandler('/goods/delete'),
  // 根据商品ID获取资源详情
  GOODS_SELECTGOODSDETAILSBYID: urlHandler('/goods/selectGoodsDetailsById'),
  // 部门模板名字
  SELECT_MOULD_NAME: urlHandler('/mould/selectMouldName'),
  // 部门模板列表
  SELECT_MOULD_LIST: urlHandler('/mould/selectMouldList'),
  // 添加部门模版
  MOULD_ADD: urlHandler('/mould/add'),
  // 删除部门模版
  MOULD_Delete: urlHandler('/mould/delete'),
  // 修改部门模版
  MOULD_Edit: urlHandler('/mould/edit'),
  // 添加商品
  GOODS_ADD: urlHandler('/goods/add'),
  // 编辑商品
  GOODS_UPDATE: urlHandler('/goods/update'),
  // 首页类目树
  SELECT_HOME: urlHandler('/goods/selectHome'),
  // 首页类目树
  SELECT_CATEGORY: urlHandler('/goods/selectCategory'),
  // 二级类目树
  GOODS_SELECTTWOCATEGORY: urlHandler('/goods/selectTwoCategory'),
  // 添加休息室
  LOUNGE_ADD: urlHandler('/lounge/add'),
  // 添加休息室补录图片
  ADD_LOUNGE: urlHandler('/lounge/addlounge'),
  // 校验商品是否被限制
  GOODS_BLACKLIST_ISLIMITED: urlHandler('/goodsBlacklist/isLimited'),
  // 首页热门资源
  SELECT_HOST_RESOURCE_LIST: urlHandler('/goods/selectHostResourceList'),
  // 类目管理页类目数据
  GET_CATEGORY: urlHandler('/goods/getCategory'),
  // 类目列表添加
  ADD_CATEGORY: urlHandler('/goods/addCategory'),
  // 类目列表删除
  REMOVE_CATEGORY: urlHandler('/goods/removeCategory'),
  // 类目列表排序
  ORDER_CATEGORY: urlHandler('/goods/orderCategory'),
  // 通用资源提交订单
  COMMONRESOURCES_ADD: urlHandler('/commonResources/add'),
  // 购物车列表
  SELECT_SHOPPING: urlHandler('/shopping/selectShopping'),
  // 查询部门订单列表
  ORDERTOTAL_SELECTMYDEPTORDERLIST: urlHandler('/orderTotal/selectMyDeptOrderList'),
  // 查询我的订单列表
  ORDERTOTAL_SELECTMYORDERLIST: urlHandler('/orderTotal/selectMyOrderList'),
  // 查询后管订单总表列表
  ORDERTOTAL_SELECTTOTALORDERLIST: urlHandler('/orderTotal/selectTotalOrderList'),
  // 购物车列表删除
  SHOPPING_DELETE: urlHandler('/shopping/delete'),
  // 购物车列表数量
  GET_USERGOODS_COUNT: urlHandler('/shopping/getUserGoodsCount'),
  // 里程补录明细列表
  SELECT_MILEAGE_INCOME_DETAIL: urlHandler('/mileage/selectMileageIncomeDetail'),
  // 里程完成补录
  SUPPLY_FINISH: urlHandler('/mileage/supplyFinish'),
  // 里程多次补录
  MILEAGE_INCOME: urlHandler('/mileage/mileageIncome'),
  // 购物车总订单下单
  ORDER_ORDERSUBMIT: urlHandler('/order/orderSubmit'),
  // 里程多次补录反馈详情报表下载
  DOWN_LOAD_ERROR_EXCEL: urlHandler('/mileage/downLoadErrorExcel'),
  // 购物车申请信息
  SHOPPING_DETAILS: urlHandler('/shopping/shoppingDetails'),
  // 里程查询多次补录文件的状态
  SELECT_BY_MILEAGEID: urlHandler('/mileage/selectByMileageId'),
  // 更改里程多次补录文件的状态
  UPDATE_MILEAGE_STATUS: urlHandler('/mileage/updateMileageStatus'),
  // 文章类目添加、编辑
  ARTICLECATEGORY_ADDORUPDATE: urlHandler('/articleCategory/addOrUpdate'),
  // 文章类目删除
  ARTICLECATEGORY_DELETE: urlHandler('/articleCategory/delete'),
  // 文章类目编辑子分类排序
  ARTICLECATEGORY_EDIT: urlHandler('/articleCategory/edit'),
  // 文章类目列表
  ARTICLECATEGORY_GETCATEGORY: urlHandler('/articleCategory/getCategory'),
  // 文章内容添加、编辑
  ARTICLECONTENT_ADDORUPDATE: urlHandler('/articleContent/addOrUpdate'),
  // 文章内容分页查询
  ARTICLECONTENT_DATAGRID: urlHandler('/articleContent/dataGrid'),
  // 文章内容删除
  ARTICLECONTENT_DELETE: urlHandler('/articleContent/delete'),
  // 文章内容-根据查询文章id查询详情
  ARTICLECONTENT_SELECTARTICLEBYID: urlHandler('/articleContent/selectArticleById'),
  // 文章内容-根据分类分页查询文章
  ARTICLECONTENT_SELECTDATAGRIDBYCATEGORYID: urlHandler('/articleContent/selectDataGridByCategoryId'),
  // 文章内容-后台是否显示文章
  ARTICLECONTENT_UPDATEARTICLESTATUS: urlHandler('/articleContent/updateArticleStatus'),
  // 文章内容-相关产品添加商品
  ARTICLERELATEDPRODUCTS_ADD: urlHandler('/articleRelatedProducts/add'),
  // 文章内容-相关产品根据商品类别id查询商品
  ARTICLERELATEDPRODUCTS_SELECTBYCATID: urlHandler('/articleRelatedProducts/selectByCatId'),
  // 文章内容-相关产品一级类目
  ARTICLERELATEDPRODUCTS_SELECTONECATEGORY: urlHandler('/articleRelatedProducts/selectOneCategory'),
  // 广告列表
  SELECT_BILL: urlHandler('/bill/selectBill'),
  // 广告排序
  SORT_BILL: urlHandler('/bill/sortBill'),
  // 广告添加/编辑
  SAVE_BILL: urlHandler('/bill/save'),
  // 广告是否显示
  UPDATE_BILL_SATUS: urlHandler('/bill/updateBillSatus'),
  // sku列表
  SELECT_SKU: urlHandler('/sku/selectSku'),
  // 删除sku
  DELETE_SKU: urlHandler('/sku/delete'),
  // 添加/编辑sku
  ADD_SKU: urlHandler('/sku/add'),
  // sku获取商品详情
  SKUGOODS_SELECTGOODSDETAILS: urlHandler('/skuGoods/selectGoodsDetails'),
  // 根据商品ID获取sku
  SKUGOODS_SELECTSKUGOODSBYGOODSID: urlHandler('/skuGoods/selectSkuGoodsByGoodsId'),
  // 查询资源id
  GET_DETECTION: urlHandler('/bill/getDetection'),
  // 购物车热门资源
  GOODS_SELECT_SHOPPING: urlHandler('/goods/selectShopping'),
  // 根据id获取sku查看编辑的数据
  GET_SKU_DETAILS: urlHandler('/sku/getSku'),
  // 类目id获取sku商品名称
  GET_SKU_CATEGORY_GOODSNAME: urlHandler('/sku/getSkuCategoryGoodsName'),
  // 根据id查询类目
  GET_ARTICLECATEGORY_SELECTPIDBYCID: urlHandler('/articleCategory/selectPIdbyCId'),
  // 前台更多分页查询文章
  GET_ARTICLECONTENT_ARTICLECONTENTDATAGRID: urlHandler('/articleContent/articleContentDataGrid'),
  // 根据当前登录用户按钮权限
  SVC_GETUSERPERMISSION: urlHandler('/svc/getUserPermission'),
  // 优惠券列表
  SELECT_COUPON_DETAIL: urlHandler('/couponInfo/selectCouponDetail'),
  // 新优惠券查询详情页
  SELECT_NEW_COUPON_DETAIL: urlHandler('/couponInfo/selectNewCouponDetail'),
  // 新优惠券添加编辑
  COUPON_INFO_ADD: urlHandler('/couponInfo/add'),
  // 新优惠券 支付网关等数据
  GET_COUPON_LABEL: urlHandler('/couponInfo/getCouponLabel'),
  // 新优惠券 导出数据
  GET_BATCH_LIST_EXL: urlHandler('/couponInfo/getBatchListExl'),
  // 新优惠券 查看明细
  COUPON_SELECT_BY_ID: urlHandler('/couponInfo/selectById'),
  // 新优惠券 查询该批次属于哪个模板
  ORDER_COUPON_TEMPLATE: urlHandler('/couponInfo/orderCouponTemplate'),
  // 获取oa汇报组
  OAFLOW_GETOAGROUP: urlHandler('/oaflow/getOaGroup'),
  // 显示批办历史
  OAFLOW_HISTORIC: urlHandler('/oaflow/historic'),
  // 审批撤回
  OAFLOW_WITHDRAW: urlHandler('/oaflow/withdraw'),
  // 根据订单ID获取审批详情
  GET_OAFLOW_APPROVALDETAIL: urlHandler('/oaflow/approvalDetail'),
  // 根据总订单id获取oaId
  SELECT_ORDERSBYTOTALORDERID: urlHandler('/order/selectOrdersByTotalOrderId'),
  // 审批意见
  OAFLOW_HANDLEOA: urlHandler('/oaflow/handleOa'),
  // 按工号查询oa人员信息
  OAFLOW_USERLIST: urlHandler('/oaflow/userList'),
  // 获取某人同oa部门下的人员名单
  OAFLOW_USERS: urlHandler('/oaflow/users'),
  // 按姓名查询oa人员信息
  OAFLOW_USERSBYNAME: urlHandler('/oaflow/usersByName'),
  // 传阅
  OAFLOW_PASSALONG: urlHandler('/oaflow/passAlong'),
  // 根据角色判定按钮权限
  OAFLOW_AUTHORITY: urlHandler('/oaflow/authority'),
  // 预付费行李EMD完成补录
  PREPAYMENTLUGGAGE_ADDFINISHED: urlHandler('/prepaymentLuggage/addFinished'),
  // 预付费行李EMD资源补录
  PREPAYMENTLUGGAGE_ADDED: urlHandler('/prepaymentLuggage/added'),
  // 通过OrderId返还OrderVo对象
  PREPAYMENTLUGGAGE_GETORDERVO: urlHandler('/prepaymentLuggage/getOrderVo'),
  // 预付费行李EMD资源下单
  PREPAYMENTLUGGAGE_PLACEORDER: urlHandler('/prepaymentLuggage/placeOrder'),
  // 客票变更资源完成补录
  TICKETALTERATION_ADDFINISHED: urlHandler('/ticketAlteration/addFinished'),
  // 客票变更资源补录
  TICKETALTERATION_ADDED: urlHandler('/ticketAlteration/added'),
  // 通过OrderId返还OrderVo对象
  TICKETALTERATION_GETORDERVO: urlHandler('/ticketAlteration/getOrderVo'),
  // 客票变更资源下单
  TICKETALTERATION_PLACEORDER: urlHandler('/ticketAlteration/placeOrder'),
  // 通过OrderId返还OrderVo对象
  AMDDEDUCTION_GETORDERVO: urlHandler('/amdDeduction/getOrderVo'),
  // ADM/ER抵扣单资源下单
  AMDDEDUCTION_PLACEORDER: urlHandler('/amdDeduction/placeOrder')
}
exports.API = API
