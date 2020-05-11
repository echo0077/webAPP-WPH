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
                <span class="cell_p cell_p2"><van-icon name="certificate" color="#e80080" />发货及售后</span>
                <span class="cell_p cell_p2"><van-icon name="certificate" color="#e80080" />顺丰配送</span>
                <span class="cell_p cell_p2"><van-icon name="certificate" color="#e80080" />7天无理由退货</span>
                <span class="cell_p cell_p2"><van-icon name="certificate" color="#e80080" />退货无忧</span>
                <span class="cell_p cell_p2"><van-icon name="certificate" color="#e80080" />7天可换</span>
            </template>
             <template #right-icon>
                <van-icon name="ellipsis" style="line-height: inherit;" />
            </template>
        </van-cell>
    </van-cell-group>
</div>
</template>
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