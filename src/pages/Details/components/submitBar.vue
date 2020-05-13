<template>
  <div>
    <DetailSku :addGoods="addGoods" :skulist = 'skuData' ref="goodSku" />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" to="/Cart" text="购物车" />
      <van-goods-action-icon
        icon="star-o"
        @click="collection"
        v-if="isShow"
        text="收藏"
        color="#ff5000"
      />
      <van-goods-action-icon icon="star" @click="show" v-else text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="onShopping" />
      <van-goods-action-button type="danger" text="立即购买" @click="onShopping" />
    </van-goods-action>
  </div>
</template>
<script>
import DetailSku from './detailSku'
// import {getCookie} from "@/util/cookie";
// import { Toast } from 'vant';

export default {
  props:{submtlist : Object},
  components: {
    DetailSku
  },
  data () {
    return {
      isShow: true,
      addGoods: false,
      skuData:{},
    }
  },
  watch: {
    submtlist:{
      handler(val){
        this.skuData = val
      }
    }
  },
  methods: {
    collection () {
      this.isShow = false
    },
    show () {
      this.isShow = true
    },
    toShow (val) {
      this.addGoods = val
    },
    onShopping () {
      // let userName = getCookie("token")
      //  if(userName == undefined){
      //    Toast('没有登录，请先登录');
      //    this.$router.push('/SignIn')
      //  }else{
         this.$refs.goodSku.toShow(true);
      //  }
    }
  }
}
</script>
