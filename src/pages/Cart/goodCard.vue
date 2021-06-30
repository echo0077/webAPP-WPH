<template>
<div>
    <div class="goodcar_box">
        <van-swipe-cell v-for="(item , index) in carlist" :key="index">
            <van-checkbox
            v-model="item.checked"
            class="checke_item"
            checked-color="#07c160"
            @change="choose(index)"
            ></van-checkbox>
            <van-card
                :price="item.vip_price"
                :desc="item.color + '，' + item.name"
                :title="item.p_title"
                class="goods-card"
                :thumb="item.img"
            />
            <p class="card-conent__stepper">
                <van-stepper v-model="item.num" min="1" :max="item.stock" ref="mun_box" @change="onChange(item.num,index)"/>
            </p>
            <template #right>
                <van-button square type="danger"  class="delete-button" @click="delData(index)" text="删除" />
                <van-button square type="primary" class="delete-button" @click="colletion" text="收藏" />
            </template>
        </van-swipe-cell>
    </div>
    <div>
        <van-submit-bar :price="Allprice" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked" checked-color="#07c160" @click="allCheck">全选</van-checkbox>
        </van-submit-bar>
    </div>
</div>
</template>
<script>
import {local} from '@/util/storage.util'
import { getShopping, deleteShopping, setShopping } from '@/util/fetch'
import {Dialog, Toast} from 'vant'

export default {
  data () {
    return {
      carlist: [],
      checked: false,
      Allprice: 0
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取商品信息
    async getList () {
      let userId = local('userId')
      let params = {'userId': userId}
      let data = await getShopping(params)
      this.carlist = data.payload
    },
    // 提交订单
    onSubmit () {
      if (this.Allprice === 0) {
        Toast.fail('还没有选中商品哦！')
      } else {
        let selected = []
        selected = this.carlist.filter(item => item.checked === true)
        this.$router.push({path: '/Payment', query: {list: selected}})
      }
    },
    // 修改商品数量
    async onChange (value, index) {
      let userId = local('userId')
      let skuId = this.carlist[index].sku_id
      let procuctId = this.carlist[index].product_id
      let parm = {
        skuId: skuId, // skuID
        userId: userId, // 用户id
        procuctId: procuctId, // 商品id
        shoppingNumber: value // 购买数量
      }
      let data = await setShopping(parm)
      window.console.log(data)
    },
    // 单选
    choose (index) {
      let priceArr = []
      let checkArr = []
      let price = Number
      let s = 0
      let a = true
      if (this.carlist[index].checked) {
        this.Allprice += this.carlist[index].vip_price * this.carlist[index].num * 100
      } else {
        this.Allprice -= this.carlist[index].vip_price * this.carlist[index].num * 100
      }
      this.carlist.forEach(e => {
        price = e.vip_price * e.num * 100
        priceArr.push(price)
        if (e.checked === false) {
          a = false
        } else {
          checkArr.push(index)
        }
      })
      this.checked = a
      if (this.checked) {
        // 全选时计算总额，循环数组相加
        for (let i = 0; i < priceArr.length; i++) {
          s += priceArr[i]
        }
        this.Allprice = s
      } else {
        if (checkArr.length === 0) {
          this.Allprice = 0
        }
      }
    },
    // 全选
    allCheck () {
      let a = this.checked
      this.carlist = this.carlist.map(e => {
        e.checked = a
        return e
      })
    },
    // 商品删除
    delData (index) {
      Dialog.confirm({
        message: '确认删除这个宝贝？'
      }).then(async () => {
        let userId = local('userId')
        let skuid = this.carlist[index].sku_id
        let params = {'userId': userId, 'skuId': skuid}
        await deleteShopping(params)
        this.getList()
      }).catch(() => {})
    },
    // 商品收藏
    colletion () {
      Toast.success('收藏成功')
    }
  }
}
</script>
<style scoped lang="less">
.goodcar_box{
    background: #f5f5f5;
    margin-bottom: 120px;
    min-height: 505px;
    .van-card__title{
        line-height: 32px;
        font-size: 16px;
    }
    .van-card__desc{
        position: absolute;
        top: 35px;
    }
}
.van-swipe-cell{
    margin-bottom: 10px;
}
.goods-card {
    margin: 0;
    background-color: #ffffff;
  }
  .delete-button {
    height: 100%;
  }
  .van-card{
      padding: 16px 10px 20px 50px;
  }
  .checke_item{
      position: absolute;
      left: 19px;
      top: 50px;
      z-index: 1;
  }
  .van-submit-bar{
      bottom: 60px;
  }
  .card-conent__stepper {
   .van-stepper {
      position: absolute;
      bottom: 13px;
      right: 25px;
     .van-stepper__plus,
     .van-stepper__minus {
       border-radius: 50%;
       background-color: #fff;
       border: 1px solid #ccc;
       width: 22px;
       height: 22px;
     }
     .van-stepper__input {
       background-color: #fff;
     }
   }
}
</style>
