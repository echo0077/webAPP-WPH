<template>
  <van-sku
    v-model="show"
    ref="goodsSku"
    :sku="sku"
    :goods="goods"
    :goods-id="goodsId"
    :quota="quota"
    :quota-used="quotaUsed"
    :hide-stock="sku.hide_stock"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
  />
</template>
<script>
import { setShopping } from '@/util/fetch'
import {local} from '@/util/storage.util'
// import { Dialog } from "vant";
import { Toast } from 'vant'

export default {
  props: {skulist: Object},
  data () {
    return {
      show: false,
      goodsId: 1,
      id: Number,
      userId: 0,
      quota: 0,
      quotaUsed: 0,
      sku: {},
      goods: {
        // 数据结构见下方文档
        // 默认商品 sku 缩略图
        picture: ''
      }
    }
  },
  watch: {
    skulist: {
      handler (val) {
        this.sku = val.sku
        this.sku.list.forEach(item => {
          item.price *= 100
        })
        this.sku.price = this.sku.price.toFixed(2)
        this.goods.picture = this.sku.tree[0].v[0].previewImgUrl
      }
    }
  },
  created () {
    this.userId = local('userId')
  },
  methods: {
    toShow (val) {
      this.show = val
    },
    async onBuyClicked () {
      window.console.log(this.$refs.goodsSku.getSkuData());
      let obj = this.$refs.goodsSku.getSkuData()
      let parm = {
        skuId: obj.selectedSkuComb.id, // skuID
        userId: this.userId, // 用户id
        procuctId: obj.goodsId, // 商品id
        shoppingNumber: obj.selectedNum // 购买数量
      }
      let data = await setShopping(parm)
      if (data.code === 0) {
        let list = []
        obj.selectedSkuComb.price = obj.selectedSkuComb.price / 100
        obj.selectedSkuComb.num = obj.selectedNum
        obj.selectedSkuComb.vip_price = obj.selectedSkuComb.price
        obj.selectedSkuComb.product_id = obj.goodsId
        list.push(obj.selectedSkuComb)
        // window.console.log(list)
        this.$router.push({path: '/Payment', query: {list: list}})
      }
    },
    async onAddCartClicked (val) {
      // window.console.log(val);
      let parm = {
        skuId: val.selectedSkuComb.id, // skuID
        userId: this.userId, // 用户id
        procuctId: val.goodsId, // 商品id
        shoppingNumber: val.selectedNum // 购买数量
      }
      let data = await setShopping(parm)
      Toast(data.msg)
    }
  }
}
</script>
