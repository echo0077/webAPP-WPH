<template>
  <div>
    <van-cell title="我的订单" is-link to="/Order" size="large" value="查看全部订单" />
        <van-grid :border="false" class="order">
            <van-grid-item icon="balance-pay" text="待付款" to="/payment"/>
            <van-grid-item icon="send-gift-o" text="待发货" to="/sendGoods"/>
            <van-grid-item icon="logistics" text="待收货" to="/goodsReceived"/>
            <van-grid-item icon="comment-o" text="评价" to="/taking"/>
        </van-grid>
        <van-cell-group class="order">
            <van-cell icon="vip-card" title="会员福利" size="large" is-link />
            <van-cell icon="gold-coin" title="我的优惠" size="large" is-link />
        </van-cell-group>
        <van-cell-group class="order">
            <van-cell icon="like" title="我的收藏" size="large" is-link to="/Collection" value="查看"/>
            <van-cell icon="location" title="我的地址" size="large" is-link value="编辑" to="/Location"/>
            <van-cell icon="friends" title="联系人" size="large" is-link value="编辑" to="/Contacts"/>
        </van-cell-group>
        <van-cell-group class="order">
            <van-cell icon="hot" title="热卖商品" size="large" is-link />
            <van-cell icon="setting" title="设置" size="large" is-link value="编辑" to="/setup" />
        </van-cell-group>
    </div>
</template>

<style scoped>
  .order{
    width: 100%;
    padding-bottom: 10px;
    background-color:#f5f5f5;
    }
</style>
