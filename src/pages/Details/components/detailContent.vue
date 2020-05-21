<template>
    <div class="p_box">
        <p style='line-height: 26px'>
            <van-button round size="mini">疯抢价</van-button>
            <span style="font-size:26px" v-text="'￥' + vip_price"></span>
            <span class="old_price" v-text="'￥' + old_price"></span>
        </p>
        <p class="p_title" v-text="'茵曼 | ' + p_title"></p>
    </div>
</template>
<script>
export default {
  props: {textlist: Object},
  data () {
    return {
      p_title: '',
      old_price: 0,
      vip_price: 0
    }
  },
  watch: {
    textlist: {
      handler (val) {
        this.p_title = val.title
        this.old_price = val.price
        this.vip_price = val.vip_price
      }
    }
  }
}
</script>
<style scoped lang="less">
.p_box{
    background: #fff;
}
.van-button--mini{
    background-image: linear-gradient(270deg,#cb78dc,#de3d96);
}
.old_price{
    text-decoration: line-through;
    color: #98989f;
}
p{
    margin: 10px 5px 0 5px;
}
.p_title{
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 10px;
}
</style>
