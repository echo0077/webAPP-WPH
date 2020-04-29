<template>
    <div style="background-color: #f5f5f5;padding-top:10px">
        <van-grid :column-num="4" :gutter="10" square >
            <van-grid-item v-for="(item,index) in iconList" :key="index">
                <van-icon class-prefix="my-icon" :name="item.name" color='rgb(254, 64, 112)'/>
                <span>{{item.text}}</span>
            </van-grid-item>
        </van-grid>
    </div>
</template>
<script>
export default {
    data() {
        return {
            iconList:[
                {
                    name:'xiebaopeishizhuanhuan',
                    text:'鞋包'
                },
                {
                    name:'jiaju',
                    text:'家具'
                },
                {
                    name:'muying',
                    text:'母婴'
                },
                {
                    name:'shipin',
                    text:'食品'
                },
                {
                    name:'fushi-',
                    text:'服饰'
                },
                {
                    name:'xihuyongpin',
                    text:'洗护'
                },
                {
                    name:'angellist',
                    text:'颜值货'
                },
                {
                    name:'building_',
                    text:'直达专柜'
                }
            ]
        }
    },
}
</script>
<style scoped>
    span{
        font-size: 12px;
    }
</style>