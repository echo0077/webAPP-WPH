<template>
<div>
    <van-cell-group>
        <van-cell>
            <template #title>
                <span class="custom-title">产品参数：</span>
                <span class="cell_p">产地、风格、流行元素等</span>
            </template>
             <template #right-icon>
                <van-icon name="ellipsis" style="line-height: inherit;" />
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                <span class="custom-title">运费：</span>
                <span class="cell_p">新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
            </template>
        </van-cell>
    </van-cell-group>
    <van-cell-group>
        <van-cell>
            <template #title>
                <span class="cell_p cell_p2" v-for="(item , index) in cellData" :key="index">
                    <van-icon name="certificate" color="#e80080" />
                    {{item}}
                    </span>
            </template>
             <template #right-icon>
                <van-icon name="ellipsis" style="line-height: inherit;" />
            </template>
        </van-cell>
        <van-cell>
            <template #title>
                <van-icon name="good-job" color="rgb(232, 0, 128)" style="line-height: inherit;" />
                <span class="cell_p" v-text="'宝贝评价（' + taking +')'"></span>
            </template>
             <template #right-icon>
                <van-icon name="ellipsis" style="line-height: inherit;" />
            </template>
        </van-cell>
    </van-cell-group>
</div>
</template>
<script>
export default {
  props: {celllist: Object},
  data () {
    return {
      taking: 0,
      cellData: ['发货及售后', '顺丰配送', '7天无理由退货', '退货无忧', '7天可换']
    }
  },
  watch: {
    celllist: {
      handler (val) {
        this.taking = val.is_put
      }
    }
  }
}
</script>
<style scoped>
.custom-title{
    font-size: 14px;
    color: #222;
    font-weight: 700;
}
.cell_p{
    font-size: 12px;
    color: #98989f;
}
.van-cell-group{
    margin-bottom: 10px;
}
.cell_p2{
    margin-left: 5px;
}
</style>
