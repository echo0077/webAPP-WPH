import {
  get, post, getExport, postFormData
}
  from '../util/http'
import {
  API
}
  from '../config'

import QS from 'qs'

export function test (params, urlParams = {}) {
  let urlParam = QS.parse(urlParams)
  return post(API.TEST + '?' + urlParam, params).then(test.checkRes)
}
// 订单详情
export function getOrderDetail (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_DETAIL + '?' + urlParam, params)
}

// 根据角色判定按钮权限   OAFLOW_AUTHORITY: urlHandler('/oaflow/authority'),
export function oaflowAuthority (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.OAFLOW_AUTHORITY + '?' + urlParam, params)
}
// 付费选座信息补录  PAIDSEAT_PAIDSEATSUPPLY: urlHandler('/paidSeat/paidSeatSupply')
export function getPaidSeatPaidSeatSupply (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.PAIDSEAT_PAIDSEATSUPPLY + '?' + urlParam, params)
}

// 补录里程    MILEAGE_ADDMILEAGE: urlHandler('/mileage/addMileage')
export function getMileageAddMileage (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.MILEAGE_ADDMILEAGE + '?' + urlParam, params)
}

// 后管取消订单 ORDER_CANCELL: urlHandler('/order/cancell')
export function getOrderCancell (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_CANCELL + '?' + urlParam, params)
}
// 确认订单 ORDER_COMPLETE: urlHandler('/order/complete')
export function getOrderComplete (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_COMPLETE + '?' + urlParam, params)
}
// 我的订单列表 ORDER_MYDATAGRID: urlHandler('/order/myDataGrid')
export function getOrderMyDataGrid (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_MYDATAGRID + '?' + urlParam, params)
}
// 根据订单号查询付费选座信息   PAIDSEAT_FINDBYORDERID: urlHandler('/paidSeat/findByOrderId')
export function getPaidSeatFindByOrderIdd (data) {
  return get(API.PAIDSEAT_FINDBYORDERID, data)
}
// 根据订单号查询付费选座订单信息   PAIDSEAT_FINDPAIDSEATORDERBYORDERID: urlHandler('/paidSeat/findPaidSeatOrderByOrderId')
export function getpPaidSeatfFindPaidSeatOrderByOrderId (data) {
  return get(API.PAIDSEAT_FINDPAIDSEATORDERBYORDERID, data)
}
// 订单列表信息   ORDER_ALLDATA: urlHandler('/order/allDataGrid')
export function getOrderDataGrid (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_ALLDATA + '?' + urlParam, params)
}
// 根据商品id查询商品快照 GOODS_SELECTGOODSSNAPSHOTBYID: urlHandler('/goods/selectGoodsSnapShotById')
export function getSelectGoodsSnapShotById (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.GOODS_SELECTGOODSSNAPSHOTBYID + '?' + urlParam, params)
}
// 基本信息-查询所有机构信息 USERUNIT_SLECTUSERUNITLIST: urlHandler('/userUnit/slectUserUnitList')
export function getSLECTUSERUNITLIST (params) {
  // let urlParam = QS.stringify(urlParams)
  return post(API.USERUNIT_SLECTUSERUNITLIST, params)
}
//  基本信息-查询用户信息 USER_GETUSER: urlHandler('/user/getUser')
export function getUser (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.USER_GETUSER + '?' + urlParam, params)
}
// 提交优惠票订单 SPECIALFARE_SUBMIT: urlHandler('/specialfare/submit')
export function setSubmit (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.SPECIALFARE_SUBMIT + '?' + urlParam, params)
}
// 提交团队违约金订单 TEAMDAMAGES_ADD: urlHandler('/teamDamages/add')
export function setAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.TEAMDAMAGES_ADD + '?' + urlParam, params)
}
// 提交金银卡订单 CARD_ADD: urlHandler('/card/add')
export function setCardAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.CARD_ADD + '?' + urlParam, params)
}
//  提交客票退票订单 TRFD_ADD: urlHandler('/trfd/add')
export function setTrfdAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.TRFD_ADD + '?' + urlParam, params)
}
// 提交客票改期订单 RESCHEDULING_ADD: urlHandler('/rescheduling/add')
export function setReschedulingAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.RESCHEDULING_ADD + '?' + urlParam, params)
}
// 提交升舱订单 UPGRADE_ADD: urlHandler('/upgrade/add')
export function setUpgradeAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.UPGRADE_ADD + '?' + urlParam, params)
}
// 提交里程订单 MILEAGE_ADD: urlHandler('/mileage/add')
export function setMileageAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.MILEAGE_ADD + '?' + urlParam, params)
}
// 提交付费选座订单 PAIDSEAT_ADD: urlHandler('/paidSeat/submit')
export function setPaidseatAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.PAIDSEAT_ADD + '?' + urlParam, params)
}
// 提交优惠卷订单 COUPON_ADD: urlHandler('/coupon/add')
export function setCouponAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.COUPON_ADD + '?' + urlParam, params)
}
// 新版优惠券提交 COUPONINFO_ADDNEWCOUPONDETAIL: urlHandler('/couponInfo/addNewCouponDetail')
export function setNewCouponAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.COUPONINFO_ADDNEWCOUPONDETAIL + '?' + urlParam, params)
}
// 导出订单 ORDERTOTAL_EXPORT: urlHandler('/orderTotal/export')
export function orderExport (params, urlParams) {
  let urlParam = QS.stringify(urlParams, { indices: false })
  return getExport(API.ORDERTOTAL_EXPORT + '?' + urlParam)
}
// 优惠票补录  /specialfare/supply   SPECIALFARE_SUPPLY: urlHandler('/specialfare/supply')
export function getSpecialfareSupply (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.SPECIALFARE_SUPPLY + '?' + urlParam, params)
}
// 优惠票补录完成提交 SPECIALFARE_COMPLETE: urlHandler('/specialfare/complete'),
export function getSpecialfareComplete (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.SPECIALFARE_COMPLETE + '?' + urlParam, params)
}
// 升舱补录  /upgrade/updateBatchById   UPGRADE_UPDATE: urlHandler('/upgrade/updateBatchById')
export function updateBatchById (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.UPGRADE_UPDATE + '?' + urlParam, params)
}
// 客票改期补录  /rescheduling/updateBatchById   RESCHEDULING_UPDATE: urlHandler('/rescheduling/updateBatchById')
export function updateRescheduling (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.RESCHEDULING_UPDATE + '?' + urlParam, params)
}
// 优惠券一次补录  /coupon/firstSupply    COUPON_FIRSTSUPPLY: urlHandler('/coupon/firstSupply')
export function firstSupply (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.COUPON_FIRSTSUPPLY + '?' + urlParam, params)
}
// 导出订单 BATCH_EXPORT: urlHandler('/coupon/DownLoadAddExcelBatchNumber')
export function batchExport (urlParams) {
  let urlParam = QS.stringify(urlParams)
  return getExport(API.BATCH_EXPORT + '?' + urlParam)
}
// 优惠券批次已使用金额补录
export function couponFindAddNoMoneyFetch (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.COUPUN_FIND_ADD_NO_MONEY + '?' + urlParam, params)
}
// 下载补录模板excel
export function couponDownLoadAddExcelFetch (params) {
  return get(API.COUPUN_DOWNLOAD_ADD_EXCEL, params)
}
// 导入补录信息
export function couponImportByExcelFetch (params) {
  return postFormData(API.COUPUN_IMPORT_BY_EXCEL, params)
}
// 二次补录
export function couponSecondSupplyFetch (params) {
  return post(API.COUPUN_SECOND_SUPPLY, params)
}
// 权限验证 WHITELIST_ADD: urlHandler('/whiteList/add')
export function whiteListAdd (params) {
  return post(API.WHITELIST_ADD, params)
}
// 获取权限 FIND_MENU_BY_USER_ID: urlHandler('/menu/findMenuByUserId')
export function findMenuByUserId (params) {
  return get(API.FIND_MENU_BY_USER_ID, params)
}
// 货币菜单 GET_MONEY_MENU: urlHandler('/moneyOrder/getMoneyMenu')
export function getMoneyMenu (params) {
  return post(API.GET_MONEY_MENU, params)
}
// 货币列表 GET_MONEY_ORDER_LIST: urlHandler('/moneyOrder/getMoneyOrderList')
export function getMoneyOrderList (params) {
  let urlParam = QS.stringify(params)
  return post(API.GET_MONEY_ORDER_LIST + '?' + urlParam, params)
}
// 货币分配-添加积分 MONEY_ORDER_ADD: urlHandler('/moneyOrder/add')
export function moneyOrderAdd (params) {
  return post(API.MONEY_ORDER_ADD, params)
}
// 货币调整 MONEY_ORDER_ADJUST: urlHandler('/moneyOrder/adjust')
export function moneyOrderAdjust (params) {
  return post(API.MONEY_ORDER_ADJUST, params)
}
// 货币设置-新增货币 MONEY_ADD: urlHandler('/money/add')
export function moneyAdd (params) {
  return post(API.MONEY_ADD, params)
}
// 货币设置-修改编辑 MONEY_EDIT: urlHandler('/money/edit')
export function moneyEdit (params) {
  return post(API.MONEY_EDIT, params)
}
// 货币设置-货币列表 MONEY_MONEYLIST: urlHandler('/money/moneyList')
export function moneyMoneylist (params) {
  return post(API.MONEY_MONEYLIST, params)
}
// 货币设置-货币列表 MONEY_MY_MONEY: urlHandler('/money/myMoney')
export function moneyMyMoney (params) {
  return post(API.MONEY_MY_MONEY, params)
}
// 货币批量追加解析 MONEYORDER_GETMONEYEXCEL: urlHandler('/moneyOrder/getMoneyExcel')
export function moneyOrderGetMoneyExcel (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.MONEYORDER_GETMONEYEXCEL + '?' + urlParam, params)
}
// 货币批量导出 MONEYORDER_DOREPORTBATCCHAPPENDEXL: urlHandler('/moneyOrder/doReportBatchAppendExl')
export function moneyOrderDoReportBatchAppendExl (params) {
  return getExport(API.MONEYORDER_DOREPORTBATCCHAPPENDEXL, params)
}
// 货币设置-部门全部列表 urlHandler('/department/getDepartmentList')
export function getDepartmentList (params) {
  return post(API.GET_DEPARTMENT_LIST, params)
}
// 货币设置-部门一级列表 GET_ONE_DEPARTMENT: urlHandler('/department/getOneDepartment')
export function getOneDepartment (params) {
  return post(API.GET_ONE_DEPARTMENT, params)
}
// 部门一级权限部门列表 GET_ONE_DEPARTMENTLIST: urlHandler('/department/getOneDepartmentList')
export function getOneDepartmentList (params) {
  return post(API.GET_ONE_DEPARTMENTLIST, params)
}
// 根据部门id获取部门详情 MONEYORDER_DEPARTMENTDETAILS: urlHandler('/moneyOrder/DepartmentDetails')
export function getDepartmentDetails (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.MONEYORDER_DEPARTMENTDETAILS + '?' + urlParam, params)
}
// 货币分配调整记录 MONEYORDER_GETMONEYORDERLIST: urlHandler('/moneyOrder/getMoneyOrderList')
export function getgetMoneyOrderList (params) {
  return post(API.MONEYORDER_GETMONEYORDERLIST, params)
}
// 货币设置-日志图表 GET_CHARTS: urlHandler('/moneyOrder/getChart')
export function getCharts (params) {
  return post(API.GET_CHARTS, params)
}
// 货币分配列表库存 ALLOT_LIST: urlHandler('/moneyStock/allotList'),
export function allotList (params) {
  let urlParam = QS.stringify(params)
  return post(API.ALLOT_LIST + '?' + urlParam, params)
}
// 根据部门id获取部门详情 DEPARTMENT_DETAILS: urlHandler('/moneyOrder/DepartmentDetails')
export function departmentDetails (params) {
  let urlParam = QS.stringify(params)
  return post(API.DEPARTMENT_DETAILS + '?' + urlParam, params)
}
// 日志报表 GET_DETAILS: urlHandler('/moneyOrder/getDetails')
export function getDetails (params) {
  return post(API.GET_DETAILS, params)
}
// 货币分配调整记录导出  MONEYORDER_GETMONEYORDERLISTEXL: urlHandler('/moneyOrder/getMoneyOrderListExl')
export function getOrderListExl (urlParams) {
  let urlParam = QS.stringify(urlParams)
  return getExport(API.MONEYORDER_GETMONEYORDERLISTEXL + '?' + urlParam)
}
// 我的部门订单 MY_DEPT_ORDER: urlHandler('/order/myDeptOrder')
export function myDeptOrder (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.MY_DEPT_ORDER + '?' + urlParam, params)
}
// 我的部门订单 GET_DETAILS_EXL: urlHandler('/moneyOrder/getDetailsExl')
export function getDetailsExl (params) {
  let urlParam = QS.stringify(params)
  return getExport(API.GET_DETAILS_EXL + '?' + urlParam)
}
// 清空测试数据 DELETE_DEPARTMENT:urlHandler('/moneyOrder/deleteDepartment')
export function deleteDepartment (params) {
  return post(API.DELETE_DEPARTMENT, params)
}
// 资源管理列表 GOODS_SELECTLIST: urlHandler('/goods/selectList')
export function getGoodsSelectList (params) {
  return post(API.GOODS_SELECTLIST, params)
}
// 资源管理上下架 GOODS_EDIT: urlHandler('/goods/edit')
export function GoodsEdit (params) {
  return get(API.GOODS_EDIT, params)
}
// 草稿箱删除 GOODS_DELETE: urlHandler('/goods/delete')
export function GoodsDelete (params) {
  return get(API.GOODS_DELETE, params)
}
// 根据商品ID获取资源详情 GOODS_SELECTGOODSDETAILSBYID: urlHandler('/goods/selectGoodsDetailsById')
export function GoodsSelectGoodsDetailById (params) {
  return get(API.GOODS_SELECTGOODSDETAILSBYID, params)
}
// 部门模板名字 SELECT_MOULD_NAME: urlHandler('/mould/selectMouldName')
export function selectMouldName (params) {
  return get(API.SELECT_MOULD_NAME, params)
}
// 部门模板数据 SELECT_MOULD_LIST: urlHandler('/mould/selectMouldList')
export function selectMouldList (params) {
  return get(API.SELECT_MOULD_LIST, params)
}
// 添加部门模版 MOULD_ADD:urlHandler('/mould/add')
export function mouldAdd (params) {
  return post(API.MOULD_ADD, params)
}
// 删除部门模版 MOULD_Delete:urlHandler('/mould/delete')
export function mouldDelete (params) {
  return get(API.MOULD_Delete, params)
}
// 修改部门模版 MOULD_Edit:urlHandler('/mould/edit')
export function mouldEdit (params) {
  return post(API.MOULD_Edit, params)
}
// 添加商品 GOODS_ADD: urlHandler('/goods/add')
export function goodsAdd (params) {
  return post(API.GOODS_ADD, params)
}
// 编辑商品 GOODS_UPDATE: urlHandler('/goods/update')
export function goodsUpdata (params) {
  return post(API.GOODS_UPDATE, params)
}
// 类目树 SELECT_CATEGORY: urlHandler('/goods/selectCategory')
export function selectCategory (params) {
  return post(API.SELECT_CATEGORY, params)
}
// 首页类目树 SELECT_HOME: urlHandler('/goods/selectHome'),
export function selectHome (params) {
  return post(API.SELECT_HOME, params)
}
// 二级类目树 GOODS_SELECTTWOCATEGORY: urlHandler('/goods/selectTwoCategory')
export function selectTwoCategory (params) {
  return post(API.GOODS_SELECTTWOCATEGORY, params)
}
// 添加休息室 LOUNGE_ADD: urlHandler('/lounge/add')
export function setLoungeAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.LOUNGE_ADD + '?' + urlParam, params)
}
// 添加休息室补录图片 ADD_LOUNGE: urlHandler('/lounge/addlounge')
export function addLounge (params) {
  return post(API.ADD_LOUNGE, params)
}
// 休息室补录文件地址
export function loungeDetailsExl (params) {
  return getExport(params)
}
// 校验商品是否被限制 GOODS_BLACKLIST_ISLIMITED: urlHandler('/goodsBlacklist/isLimited')
export function goodsBlackListIslimited (params) {
  return get(API.GOODS_BLACKLIST_ISLIMITED, params)
}
// 首页热门资源 SELECT_HOST_RESOURCE_LIST: urlHandler('/goods/selectHostResourceList')
export function selectHostResourceList (params) {
  return post(API.SELECT_HOST_RESOURCE_LIST, params)
}
// 类目管理页类目数据 GET_CATEGORY: urlHandler('/goods/getCategory')
export function getCategory (params) {
  return post(API.GET_CATEGORY, params)
}
// 类目列表添加  ADD_CATEGORY: urlHandler('/goods/addCategory')
export function addCategory (params) {
  return post(API.ADD_CATEGORY, params)
}
// 类目列表删除  REMOVE_CATEGORY: urlHandler('/goods/removeCategory')
export function removeCategory (params) {
  return post(API.REMOVE_CATEGORY, params)
}
// 类目列表排序  ORDER_CATEGORY: urlHandler('/goods/orderCategory')
export function orderCategory (params) {
  return post(API.ORDER_CATEGORY, params)
}
// 通用资源提交订单 COMMONRESOURCES_ADD: urlHandler('/commonResources/add')
export function setCommonresourcesAdd (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.COMMONRESOURCES_ADD + '?' + urlParam, params)
}
// 购物车列表 SELECT_SHOPPING: urlHandler('/shopping/selectShopping')
export function selectShopping (params) {
  return post(API.SELECT_SHOPPING, params)
}
// 查询部门订单列表 ORDERTOTAL_SELECTMYDEPTORDERLIST: urlHandler('/orderTotal/selectMyDeptOrderList')
export function selectMyDeptOrderList (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDERTOTAL_SELECTMYDEPTORDERLIST + '?' + urlParam, params)
}
// 查询我的订单列表 ORDERTOTAL_SELECTMYORDERLIST: urlHandler('/orderTotal/selectMyOrderList')
export function selectMyOrderList (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDERTOTAL_SELECTMYORDERLIST + '?' + urlParam, params)
}
// 查询后管订单总表列表 ORDERTOTAL_SELECTTOTALORDERLIST: urlHandler('/orderTotal/selectTotalOrderList')
export function selectTotalOrderList (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDERTOTAL_SELECTTOTALORDERLIST + '?' + urlParam, params)
}
// 购物车列表删除 SHOPPING_DELETE: urlHandler('/shopping/delete')
export function shoppingDelete (params) {
  return post(API.SHOPPING_DELETE, params)
}
// 购物车列表数量 GET_USERGOODS_COUNT: urlHandler('/shopping/getUserGoodsCount')
export function getUsergoodsCount (params) {
  return post(API.GET_USERGOODS_COUNT, params)
}
// 里程补录明细列表 SELECT_MILEAGE_INCOME_DETAIL: urlHandler('/mileage/selectMileageIncomeDetail')
export function selectMileageIncomeDetail (params) {
  return post(API.SELECT_MILEAGE_INCOME_DETAIL, params)
}
// 里程完成补录 SUPPLY_FINISH: urlHandler('/mileage/supplyFinish')
export function supplyFinish (params) {
  return post(API.SUPPLY_FINISH, params)
}
// 里程多次补录 MILEAGE_INCOME: urlHandler('/mileage/mileageIncome')
export function mileageIncome (params) {
  return postFormData(API.MILEAGE_INCOME, params)
}
// 里程实时入账 MILEAGE_CONFIRM: urlHandler('/mileage/confirm'),
export function mileageConfirm (params) {
  return post(API.MILEAGE_CONFIRM, params)
}
// 购物车总订单下单 ORDER_ORDERSUBMIT: urlHandler('/order/orderSubmit')
export function orderOrderSubmit (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.ORDER_ORDERSUBMIT + '?' + urlParam, params)
}
// 购物车申请信息 shoppingDetails: urlHandler('/shopping/shoppingDetails')
export function shoppingDetails (params) {
  return post(API.SHOPPING_DETAILS, params)
}
// 里程多次补录反馈详情报表下载 DOWN_LOAD_ERROR_EXCEL: urlHandler('/mileage/downLoadErrorExcel')
export function downLoadErrorExcel (params) {
  let urlParam = QS.stringify(params)
  return getExport(API.DOWN_LOAD_ERROR_EXCEL + '?' + urlParam)
}
// 里程查询多次补录文件的状态 SELECT_BY_MILEAGEID: urlHandler('/mileage/selectByMileageId')
export function selectByMileageId (params) {
  return post(API.SELECT_BY_MILEAGEID, params)
}
// 更改里程多次补录文件的状态 UPDATE_MILEAGE_STATUS: urlHandler('/mileage/updateMileageStatus')
export function updateMileageStatus (params) {
  return post(API.UPDATE_MILEAGE_STATUS, params)
}
// 里程查询注册码 SELECT_REGIS_TRATION_CODE: urlHandler('/mileage/selectRegisTrationCode'),
export function selectRegisTrationCode (params) {
  return get(API.SELECT_REGIS_TRATION_CODE, params)
}
// 广告列表 SELECT_BILL: urlHandler('/bill/selectBill')
export function selectBill (params) {
  return post(API.SELECT_BILL, params)
}
// 广告排序 SORT_BILL: urlHandler('/bill/sortBill')
export function sortBill (params) {
  return post(API.SORT_BILL, params)
}
// 广告添加/编辑 SAVE_BILL: urlHandler('/bill/save')
export function saveBill (params) {
  return post(API.SAVE_BILL, params)
}
// 文章类目添加、编辑 ARTICLECATEGORY_ADDORUPDATE: urlHandler('/articleCategory/addOrUpdate')
export function articleCategoryAddOrUpdate (params) {
  return post(API.ARTICLECATEGORY_ADDORUPDATE, params)
}
// 文章类目删除 ARTICLECATEGORY_DELETE: urlHandler('/articleCategory/delete')
export function articleCategoryDelete (params) {
  return post(API.ARTICLECATEGORY_DELETE, params)
}
// 文章类目编辑子分类排序 ARTICLECATEGORY_EDIT: urlHandler('/articleCategory/edit')
export function articleEdit (params) {
  return post(API.ARTICLECATEGORY_EDIT, params)
}
// 文章类目列表 ARTICLECATEGORY_GETCATEGORY: urlHandler('/articleCategory/getCategory')
export function articleGetCategory (params) {
  return post(API.ARTICLECATEGORY_GETCATEGORY, params)
}
// 文章内容添加、编辑 ARTICLECONTENT_ADDORUPDATE: urlHandler('/articleContent/addOrUpdate')
export function articleContentAddOrUpdate (params) {
  return post(API.ARTICLECONTENT_ADDORUPDATE, params)
}
// 文章内容分页查询 ARTICLECONTENT_DATAGRID: urlHandler('/articleContent/dataGrid')
export function articleDataGrid (params) {
  return post(API.ARTICLECONTENT_DATAGRID, params)
}
// 文章内容删除  ARTICLECONTENT_DELETE: urlHandler('/articleContent/delete')
export function articleContentDelete (params) {
  return post(API.ARTICLECONTENT_DELETE, params)
}
// 文章内容-根据查询文章id查询详情 ARTICLECONTENT_SELECTARTICLEBYID: urlHandler('/articleContent/selectArticleById')
export function articleContentSelectArticleById (params) {
  return post(API.ARTICLECONTENT_SELECTARTICLEBYID, params)
}
// 文章内容-根据分类分页查询文章 ARTICLECONTENT_SELECTDATAGRIDBYCATEGORYID: urlHandler('/articleContent/selectDataGridByCategoryId'),
export function articleContentSelectDataGridByCategoryId (params) {
  return post(API.ARTICLECONTENT_SELECTDATAGRIDBYCATEGORYID, params)
}
// 文章内容-后台是否显示文章 ARTICLECONTENT_UPDATEARTICLESTATUS: urlHandler('/articleContent/updateArticleStatus'),
export function articleContentUpdateArticleStatus (params) {
  return post(API.ARTICLECONTENT_UPDATEARTICLESTATUS, params)
}
// 文章内容-相关产品添加商品 ARTICLERELATEDPRODUCTS_ADD: urlHandler('/articleRelatedProducts/add'),
export function articleRelatedProductsAdd (params) {
  return post(API.ARTICLERELATEDPRODUCTS_ADD, params)
}
// 文章内容-相关产品根据商品类别id查询商品 ARTICLERELATEDPRODUCTS_SELECTBYCATID: urlHandler('/articleRelatedProducts/selectByCatId'),
export function articleRelatedProductsSelectByCatId (params) {
  return post(API.ARTICLERELATEDPRODUCTS_SELECTBYCATID, params)
}
// 文章内容-相关产品一级类目 ARTICLERELATEDPRODUCTS_SELECTONECATEGORY: urlHandler('/articleRelatedProducts/selectOneCategory'),
export function articleRelatedProductsSelectOneCategory (params) {
  return post(API.ARTICLERELATEDPRODUCTS_SELECTONECATEGORY, params)
}
// 广告是否显示 UPDATE_BILL_SATUS: urlHandler('/bill/updateBillSatus')
export function updateBillSatus (params) {
  return post(API.UPDATE_BILL_SATUS, params)
}
// sku列表 SELECT_SKU: urlHandler('/sku/selectSku')
export function selectSku (params) {
  return post(API.SELECT_SKU, params)
}
// sku删除 DELETE_SKU: urlHandler('/sku/delete')
export function deleteSku (params) {
  return post(API.DELETE_SKU, params)
}
// 添加/编辑sku ADD_SKU: urlHandler('/sku/add')
export function addSku (params) {
  return post(API.ADD_SKU, params)
}
// sku获取商品详情 SKUGOODS_SELECTGOODSDETAILS: urlHandler('/skuGoods/selectGoodsDetails')
export function skuGoodsSelectGoodsDetails (params) {
  return post(API.SKUGOODS_SELECTGOODSDETAILS, params)
}
// 根据商品ID获取sku SKUGOODS_SELECTSKUGOODSBYGOODSID: urlHandler('/skuGoods/selectSkuGoodsByGoodsId')
export function skuGoodsSelectSkuGoodsByGoodsId (params) {
  return get(API.SKUGOODS_SELECTSKUGOODSBYGOODSID, params)
}
// 查询资源id GET_DETECTION: urlHandler('/bill/getDetection')
export function getDetection (params) {
  return post(API.GET_DETECTION, params)
}
// 购物车热门资源 GOODS_SELECT_SHOPPING: urlHandler('/goods/selectShopping')
export function goodsSelectShopping (params) {
  return post(API.GOODS_SELECT_SHOPPING, params)
}
// 根据id获取sku查看编辑的数据 GET_SKU_DETAILS: urlHandler('/sku/getSku')
export function getSkuDetails (params) {
  return post(API.GET_SKU_DETAILS, params)
}
// 类目id获取sku商品名称 GET_SKU_CATEGORY_GOODSNAME: urlHandler('/sku/getSkuCategoryGoodsName')
export function getSkuCategoryGoodsName (params) {
  return post(API.GET_SKU_CATEGORY_GOODSNAME, params)
}
// 根据id查询类目 GET_ARTICLECATEGORY_SELECTPIDBYCID: urlHandler('/articleCategory/selectPIdbyCId')
export function getArticleCategorySelectPIdbyCId (params, urlParams) {
  let urlParam = QS.stringify(urlParams)
  return post(API.GET_ARTICLECATEGORY_SELECTPIDBYCID + '?' + urlParam, params)
}
// 前台更多分页查询文章 GET_ARTICLECONTENT_ARTICLECONTENTDATAGRID: urlHandler('/articleContent/articleContentDataGrid')
export function getArticleContentArticleContentDataGrid (params) {
  return post(API.GET_ARTICLECONTENT_ARTICLECONTENTDATAGRID, params)
}
// 根据当前登录用户按钮权限 SVC_GETUSERPERMISSION: urlHandler('/svc/getUserPermission')
export function svcGetUserPermission (params) {
  return get(API.SVC_GETUSERPERMISSION, params)
}
// 新优惠券列表 SELECT_COUPON_DETAIL: urlHandler('/couponInfo/selectCouponDetail')
export function selectCouponDetail (params) {
  return post(API.SELECT_COUPON_DETAIL, params)
}
// 新优惠券 导出数据
export function getBatchListExl (urlParams) {
  let urlParam = QS.stringify(urlParams)
  return getExport(API.GET_BATCH_LIST_EXL + '?' + urlParam)
}
// 新优惠券 下载劵码 GET_COUPON_CODE_EXL: urlHandler('/couponInfo/getCouponCodeExl')
export function getCouponCodeExl (urlParams) {
  let urlParam = QS.stringify(urlParams)
  return getExport(API.GET_COUPON_CODE_EXL + '?' + urlParam)
}
// 新优惠券查询详情页 SELECT_NEW_COUPON_DETAIL: urlHandler('/couponInfo/selectNewCouponDetail')
export function selectNewCouponDetail (params) {
  return post(API.SELECT_NEW_COUPON_DETAIL, params)
}
// 新优惠券添加编辑 COUPON_INFO_ADD: urlHandler('/couponInfo/add')
export function couponInfoAdd (params) {
  return post(API.COUPON_INFO_ADD, params)
}
// 新优惠券 支付网关等数据 GET_COUPON_LABEL: urlHandler('/couponInfo/getCouponLabel')
export function getCouponLabel (params) {
  return post(API.GET_COUPON_LABEL, params)
}
// 新优惠券 查看明细 COUPON_SELECT_BY_ID: urlHandler('/couponInfo/selectById')
export function couponSelectById (params) {
  return post(API.COUPON_SELECT_BY_ID, params)
}
// 新优惠券 查询该批次属于哪个模板 ORDER_COUPON_TEMPLATE: urlHandler('/couponInfo/orderCouponTemplate')
export function orderCouponTemplate (params) {
  return post(API.ORDER_COUPON_TEMPLATE, params)
}
// 优惠券获取审批人 GET_USERS: urlHandler('/couponInfo/getUsers'),
export function couponGetUsers (params) {
  return post(API.GET_USERS, params)
}
// 获取oa汇报组 OAFLOW_GETOAGROUP: urlHandler('/oaflow/getOaGroup')
export function oaflowGetoagroup (params) {
  return post(API.OAFLOW_GETOAGROUP, params)
}
// 显示批办历史 OAFLOW_HISTORIC: urlHandler('/oaflow/historic')
export function oaflowHistoric (params) {
  return post(API.OAFLOW_HISTORIC, params)
}
// 审批撤回 OAFLOW_WITHDRAW: urlHandler('/oaflow/withdraw')
export function oaflowWithDraw (params) {
  return post(API.OAFLOW_WITHDRAW, params)
}
// 根据订单ID获取审批详情 GET_OAFLOW_APPROVALDETAIL: urlHandler('/oaflow/approvalDetail')
export function getApprovalDetail (params) {
  return post(API.GET_OAFLOW_APPROVALDETAIL, params)
}
// 根据总订单id获取oaId SELECT_ORDERSBYTOTALORDERID: urlHandler('/order/selectOrdersByTotalOrderId')
export function selectOaIdByTatalOrderId (params) {
  return post(API.SELECT_ORDERSBYTOTALORDERID, params)
}
// 审批意见 OAFLOW_HANDLEOA: urlHandler('/oaflow/handleOa')
export function sendOaFlowHandLeOa (params) {
  return post(API.OAFLOW_HANDLEOA, params)
}
// 按工号查询oa人员信息 OAFLOW_USERLIST: urlHandler('/oaflow/userList')
export function getOaUsersById (params) {
  return post(API.OAFLOW_USERLIST, params)
}
// 获取某人同oa部门下的人员名单 OAFLOW_USERS: urlHandler('/oaflow/users')
export function getOaUsers (params) {
  return post(API.OAFLOW_USERS, params)
}
// 按姓名查询oa人员信息 OAFLOW_USERSBYNAME: urlHandler('/oaflow/usersByName')
export function getOaUsersByName (params) {
  return post(API.OAFLOW_USERSBYNAME, params)
}
// 传阅 OAFLOW_PASSALONG: urlHandler('/oaflow/passAlong')
export function OaFlowPassAlong (params) {
  return post(API.OAFLOW_PASSALONG, params)
}
// 预付费行李EMD完成补录 PREPAYMENTLUGGAGE_ADDFINISHED: urlHandler('/prepaymentLuggage/addFinished'),
export function prepaymentAddFinished (params) {
  return post(API.PREPAYMENTLUGGAGE_ADDFINISHED, params)
}
// 预付费行李EMD资源补录 PREPAYMENTLUGGAGE_ADDED: urlHandler('/prepaymentLuggage/added'),
export function prepaymentAddEd (params) {
  return post(API.PREPAYMENTLUGGAGE_ADDED, params)
}
// 通过OrderId返还OrderVo对象 PREPAYMENTLUGGAGE_GETORDERVO: urlHandler('/prepaymentLuggage/getOrderVo'),
export function prepaymentGetOrderVo (params) {
  return post(API.PREPAYMENTLUGGAGE_GETORDERVO, params)
}
// 预付费行李EMD资源下单 PREPAYMENTLUGGAGE_PLACEORDER: urlHandler('/prepaymentLuggage/placeOrder'),
export function prepaymentPlaceOrder (params) {
  return post(API.PREPAYMENTLUGGAGE_PLACEORDER, params)
}
// 客票变更资源完成补录 TICKETALTERATION_ADDFINISHED: urlHandler('/ticketAlteration/addFinished'),
export function TicketAddFinished (params) {
  return post(API.TICKETALTERATION_ADDFINISHED, params)
}
// 客票变更资源补录 TICKETALTERATION_ADDED: urlHandler('/ticketAlteration/added'),
export function TicketAdded (params) {
  return post(API.TICKETALTERATION_ADDED, params)
}
// 通过OrderId返还OrderVo对象 TICKETALTERATION_GETORDERVO: urlHandler('/ticketAlteration/getOrderVo'),
export function TicketGetOrderVo (params) {
  return post(API.TICKETALTERATION_GETORDERVO, params)
}
// 客票变更资源下单 TICKETALTERATION_PLACEORDER: urlHandler('/ticketAlteration/placeOrder'),
export function TicketPlaceOrder (params) {
  return post(API.TICKETALTERATION_PLACEORDER, params)
}
// 通过OrderId返还OrderVo对象 AMDDEDUCTION_GETORDERVO: urlHandler('/amdDeduction/getOrderVo'),
export function AmdDeductionGetOrderVo (params) {
  return post(API.AMDDEDUCTION_GETORDERVO, params)
}
// ADM/ER抵扣单资源下单 AMDDEDUCTION_PLACEORDER: urlHandler('/amdDeduction/placeOrder')
export function AmdDeductionPlaceOrder (params) {
  return post(API.AMDDEDUCTION_PLACEORDER, params)
}
// 客票退票补录 TRFDADDED_ADDED: urlHandler('/trfdAdded/added'),
export function TrfdAddedAdded (params) {
  return post(API.TRFDADDED_ADDED, params)
}
// 客票退票补录完成 TRFDADDED_ADDFINISHED: urlHandler('/trfdAdded/addFinished')
export function TrfdAddedAddFinished (params) {
  return post(API.TRFDADDED_ADDFINISHED, params)
}
// 付费选座EMD完成补录  PAIDSEAT_ADDFINISHED: urlHandler('/paidSeat/addFinished')
export function PaidSeatAddFinished (params) {
  return post(API.PAIDSEAT_ADDFINISHED, params)
}
// 订单反馈-添加反馈 ORDERBACK_ADD: urlHandler('/orderBack/add'),
export function OrderBackAdd (params) {
  return post(API.ORDERBACK_ADD, params)
}
// 根据订单id查询反馈 ORDERBACK_SELECTORDERBACK: urlHandler('/orderBack/selectOrderBack')
export function OrderBackSelectOrderBack (params) {
  return post(API.ORDERBACK_SELECTORDERBACK, params)
}
// 结束订单反馈 ORDERBACK_ISDELETE: urlHandler('/orderBack/isDelete')
export function OrderBackIsDelete (params) {
  return post(API.ORDERBACK_ISDELETE, params)
}
// 优惠券发放劵码  CREATE_ISSUE: urlHandler('/couponInfo/createIssue')
export function createIssue (params) {
  return post(API.CREATE_ISSUE, params)
}
// 新休息室下单 LOUNGENEW_ADD: urlHandler('/loungeNew/add')
export function LoungeNewAdd (params) {
  return post(API.LOUNGENEW_ADD, params)
}
