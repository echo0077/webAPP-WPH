<template>
    <div>
        <van-card
        v-for="(item,index) in list"
        :key="index"
        :num='item.num'
        :price="item.vip_price"
        :desc="item.color + '，' + item.name"
        :title="'【'+item.p_name+'】'+item.p_title"
        :thumb="item.img"
        />
    </div>
</template>
<script>
export default {
    props:['list']
}
</script>
<style scoped>
.van-card{
    background: #fff;
}
.van-card__title {
    line-height: 32px;
    font-size: 14px;
}
.van-card__desc {
    line-height: 16px;
    font-size: 10px;
}
</style>