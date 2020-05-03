<template>
    <div>
        <van-grid :column-num="3">
            <van-grid-item v-for="(item,index) in gridList" :key="index">
                <van-image :src="item.imgUrl" />
                <span>{{item.text}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
  props: ['gridList'],
  data () {
    return {
    //   gridList: [
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/03/23/143/14478a1f-b77e-4cf7-92d0-a6e4eb732f92_212x212_90.jpg',
    //       text: '连衣裙'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvop/00100397/10012635/806220856-1610113722954842112-1610113722954846210-1_212x212_90.jpg',
    //       text: '女士T恤'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/104218/2020/0319/186/4a7b44e1-6cfd-4ef6-9092-19c49c462972_212x212_90.jpg',
    //       text: '女士外套'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2020/03/20/186/90f8060a-76f2-4cac-a491-c8c1ad2f8312_212x212_90.jpg',
    //       text: '运动休闲鞋'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/611579/2020/0420/67/1005f290-2569-4836-9a62-56eff582d3a7_212x212_90.jpg',
    //       text: '护肤套装'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/03/08/129/6b3853d2-b199-43fb-a7db-b8d64497f2ff_212x212_90.jpg',
    //       text: '跑步鞋'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/138720/2019/1216/30/0fc9d314-4367-42f6-a769-56086249d32b_212x212_90.jpg',
    //       text: '女单鞋'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/2019/10/07/43/01d4b9fa-9d15-4222-af4e-15dfc8086dbe_212x212_90.jpg',
    //       text: '运动裤'
    //     },
    //     {
    //       imgUrl: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/108779/2019/0720/13/d4abee89-373c-4a32-b8c1-ed1edc8d9197_212x212_90.jpg',
    //       text: '女士衬衫'
    //     }
    //   ]
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.van-grid-item__content{
    padding: 16px 1px;
    span{
        // position: absolute;
        // bottom: 10px;
        // color: rgb(254, 64, 112);
        font-size: 14px;
    }
}
</style>
