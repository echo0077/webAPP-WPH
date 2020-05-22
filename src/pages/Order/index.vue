<template>
    <div class="order">
      <Title/>
      <van-cell-group v-for="(item, index) in orderList" :key="index" class="van-card">
        <van-card
          :num="item.p_num"
          :price="item.pay_total"
          :desc="item.adderss"
          :title="item.p_title"
          :thumb="item.img"
        >
          <!-- <template #footer>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">卖了换钱</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">查看物流</van-button>
            <van-button size="mini" round plain color="rgb(254, 64, 112)">评价</van-button>
          </template> -->
        </van-card>
      </van-cell-group>
    </div>
</template>
<script>
import Title from '@/components/titile'
import { getOrder } from '@/util/fetch'
import {getCookie} from '@/util/cookie'

export default {
  components: {Title},
  data() {
    return {
      orderList:[]
    }
  },
  async created() {
    let userId = getCookie('userId')
    let parm = {'userId': userId}
    let data = await getOrder(parm)
    console.log(data);
    if(data.code === 0){
      this.orderList = data.param
    }
    
  },
}
</script>
<style scoped>
  .order{
    width: 100%;
    background-color: #f5f5f5;
  }
  .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
  .van-card{
    background-color: #fff;
  }
  .van-card__title {
    font-size: 14px;
  }
  .van-button--mini {
    min-width: 70px;
    font-size: 12px;
    height: 27px;
  }
</style>
