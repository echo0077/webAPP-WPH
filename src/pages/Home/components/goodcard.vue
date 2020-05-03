<template>
    <div style="background-color: rgb(245, 245, 245);margin-top:10px;margin-bottom:70px;">
        <img class="title_img" src="https://h2a.appsimg.com/a.appsimg.com/upload/flow/2020/04/29/153/15881292008877_1125x222_90.png!85.webp" alt="">
        <van-card
        v-for="(item,index) in 3"
        :key="index"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        origin-price="10.00"
        style="background-color: #fff;"
        thumb="https://img.yzcdn.cn/vant/cat.jpeg"
        >
            <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
            </template>
            <template #footer>
                <van-icon class-prefix="my-icon" name="gouwu" color='rgb(254, 64, 112)'/>
            </template>
        </van-card>
        <div class="center_img">
            <img v-for="(item,index) in imgList" :key="index" :src="item" alt="">
        </div>
        <van-grid :column-num="3" :gutter="10"  >
            <van-grid-item v-for="(item,index) in gridList" :key="index">
                <van-image :src="item.imgUrl" />
                <span>{{item.text}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/04/28/21/ias_158806216629621_1135x545_85.jpg',
        'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/04/28/4/ias_158806219311345_1135x545_85.jpg',
        'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/04/29/180/ias_158814147779160_1135x545_85.jpg',
        'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/04/28/57/ias_158806309333547_1135x545_85.jpg',
        'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2020/04/28/26/ias_158806188123610_1135x545_85.jpg'
      ],
      gridList: [
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/03/23/143/14478a1f-b77e-4cf7-92d0-a6e4eb732f92_212x212_90.jpg',
          text: '连衣裙'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00100397/10012635/806220856-1610113722954842112-1610113722954846210-1_212x212_90.jpg',
          text: '女士T恤'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/104218/2020/0319/186/4a7b44e1-6cfd-4ef6-9092-19c49c462972_212x212_90.jpg',
          text: '女士外套'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/03/20/186/90f8060a-76f2-4cac-a491-c8c1ad2f8312_212x212_90.jpg',
          text: '运动休闲鞋'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/611579/2020/0420/67/1005f290-2569-4836-9a62-56eff582d3a7_212x212_90.jpg',
          text: '护肤套装'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/03/08/129/6b3853d2-b199-43fb-a7db-b8d64497f2ff_212x212_90.jpg',
          text: '跑步鞋'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/138720/2019/1216/30/0fc9d314-4367-42f6-a769-56086249d32b_212x212_90.jpg',
          text: '女单鞋'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/10/07/43/01d4b9fa-9d15-4222-af4e-15dfc8086dbe_212x212_90.jpg',
          text: '运动裤'
        },
        {
          imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/108779/2019/0720/13/d4abee89-373c-4a32-b8c1-ed1edc8d9197_212x212_90.jpg',
          text: '女士衬衫'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.van-card__title {
    max-height: 32px;
    font-weight: 500;
    line-height: 22px;
    font-size: 16px;
}
.van-card__footer{
    position:absolute;
    right: 30px;
    top:60px;
}
.title_img{
    width: 100%;
    height: 110px;
}
.center_img{
    background-color:rgb(245, 245, 245);
}
.center_img img{
    width: 100%;
    height: 180px;
    margin-top:10px
}
/deep/.van-grid-item__content{
    padding-bottom: 8px;
    span{
        font-size: 14px;
    }
}
</style>
