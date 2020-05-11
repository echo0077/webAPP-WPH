<template>
    <div class="p_box">
        <p style='line-height: 26px'>
            <van-button round size="mini">疯抢价</van-button>
            <span style="font-size:26px">￥199</span>
            <span class="old_price">￥799</span>
        </p>
        <p class="p_title">茵曼 | 2020夏新款女款方领纯美修身小飞袖约会甜蜜棉质凉爽背带裙</p>
    </div>
</template>
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