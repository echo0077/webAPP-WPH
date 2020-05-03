<template>
<div>
    <Title/>
    <!-- <Sidebar/> -->
    <div class="list">
        <div class="list_left">
            <van-sidebar v-model="activeKey" @change="onChange">
                <van-sidebar-item v-for="(item,index) in sidebarList" :key="index" :title="item" />
            </van-sidebar>
        </div>
        <div class="list_right">
            <Selected
            :gridList="gridList">
            </Selected>
        </div>
    </div>
    <Tabbar/>
</div>
</template>
<script>
import Title from '@/components/titile.vue'
import Tabbar from '@/components/tabbar'
import Selected from './components/selected'
import { Notify } from 'vant'
export default {
  components: {Title, Tabbar, Selected},
  data () {
    return {
      activeKey: 0,
      sidebarList: [
        '精选推荐',
        '女装',
        '男装',
        '女鞋',
        '男鞋',
        '箱包皮具',
        '手表配饰',
        '护肤彩妆',
        '家居家纺'
      ],
      gridList: [],
      goods: {
        '0': [
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/15/107/ias_932cfc828e5718db12ea59f1a2bc872f_120x120_90.png',
            text: '香薰蜡烛'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/614913/2020/0219/13/743dacad-1962-4b98-a49d-d8fd2c0f7709_420_531_120x120_90.jpg!75.webp',
            text: '理发/美发'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/14/10/ias_da0f6c1be3ee4507f5cd537be19a3ed4_120x120_90.png',
            text: '休闲食品'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/613137/2020/0316/110/a42fb9f5-c5e6-4d76-a6d6-a61e6fc6b1a6_420_531_120x120_90.jpg!75.webp',
            text: '手机通讯'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/14/175/ias_f1da7cb4306f30b7b0ad3cec56e4a031_120x120_90.png',
            text: '母婴纸品'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/14/30/ias_9b37732d46b7447dbdfce73065aa373e_120x120_90.png',
            text: '耳机/蓝牙耳机'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/15/197/ias_957b9a1b598b52488f5438d97fe8c705_120x120_90.png',
            text: '洗发护发'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/15/60/ias_db82ab735d86ab6feb324545ba239c42_120x120_90.png',
            text: '牙膏'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/11/27/106/ias_492a1e25461b16fcffc368d8e794899d_120x120_90.png',
            text: '手足护理'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/15/147/ias_fdfd7adcd105b3cf5123ac7264fc09d3_120x120_90.png',
            text: '斯凯奇'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/14/157/ias_bc609d5c4293a2e529d17e351ebf5f9a_120x120_90.png',
            text: '耐克'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/2020/03/27/6/a4d52612-f9e0-4780-bc30-d626c176e928_420_531_120x120_90.jpg!75.webp',
            text: '阿迪达斯'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/104218/2020/0420/173/5afc462f-d367-4562-b9fa-db7615946223_420_531_120x120_90.jpg!75.webp',
            text: '巴拉巴拉'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/11/14/52/ias_60d3ace806bb2cd0221adf091b87da64_120x120_90.png',
            text: '斐乐'
          },
          {
            imgUrl: 'https://a.appsimg.com/upload/merchandise/pdcvis/606111/2020/0312/95/1633540e-ef3d-435f-9267-985d82658763_420_531_120x120_90.jpg!75.webp',
            text: 'Lee Cooper'
          }
        ],
        '1': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/10/22/20/15717101185745_120x120_90.jpg',
            text: 'T恤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/30/15622214817122_120x120_90.jpg',
            text: '衬衫'
          },
          {
            imgUrl: 'https://d.vpimg1.com/upcb/2019/10/19/146/ias_f64716c53994bdbdb2339bd48039797b_120x120_90.png',
            text: '针织衫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/186/15374407517095_120x120_90.png',
            text: '卫衣'
          },
          {
            imgUrl: 'https://c.vpimg1.com/upcb/2019/10/18/151/ias_2760ef39bb3ff758af413d6779cab52e_120x120_90.png',
            text: '毛衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/6/15374404957643_120x120_90.png',
            text: '风衣'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/02/24/38/9272911f-1fcd-4d8d-954d-ef8fc8e7f24f_120x120_90.jpg',
            text: '西装外套'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/09/20/142/15374405563607_120x120_90.png',
            text: '棒球服'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/08/24/129/15351130269783_120x120_90.jpg',
            text: '针织外套'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/26/68/15196478636599_120x120_90.jpg',
            text: '牛仔裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/11/21/66/15427963696708_120x120_90.png',
            text: '阔腿裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/186/15622216523313_120x120_90.jpg',
            text: '短裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/04/25/1/15246473217940_120x120_90.jpg',
            text: '连体/背带裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/26/54/15196480197088_120x120_90.jpg',
            text: '打底裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/10/22/151/15717104531666_120x120_90.jpg',
            text: '连衣裙'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/06/11/11/15286886223150_120x120_90.png',
            text: '半身裙'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/07/04/0/15622103775507_120x120_90.jpg',
            text: '旗袍'
          }
        ],
        '2': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/29/157890966135010841_120x120_90.png',
            text: '短袖T恤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/55/157890971017910114_120x120_90.png',
            text: '长袖T恤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/163/157890978192310888_120x120_90.png',
            text: '薄款卫衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/23/132/158492803958110452_120x120_90.png',
            text: '短袖衬衫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/89/15674034317735_120x120_90.png',
            text: 'Polo衫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/55/15674043208516_120x120_90.png',
            text: '毛衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/134/15674084811118_120x120_90.png',
            text: '休闲裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/191/15674086009791_120x120_90.png',
            text: '牛仔裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/133/15674091167183_120x120_90.png',
            text: '西裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/136/157891061159610195_120x120_90.png',
            text: '工装裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/3/157891071164310663_120x120_90.png',
            text: '短裤'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/56/15674045177176_120x120_90.png',
            text: '风衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/01/13/183/157891014063910362_120x120_90.png',
            text: '薄外套'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/107/15674044361938_120x120_90.png',
            text: '夹克'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/27/15674044876361_120x120_90.png',
            text: '西装'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/16/15674050426923_120x120_90.png',
            text: '皮衣'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/158/15674050651248_120x120_90.png',
            text: '马甲/背心'
          }
        ],
        '3': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/179/158806642829610362_120x120_90.png',
            text: '凉鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/190/158806641480910643_120x120_90.png',
            text: '单鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/119/15677383084975_120x120_90.jpg',
            text: '休闲鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/2/15677347017628_120x120_90.jpg ',
            text: '小白鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/61/15677346925235_120x120_90.jpg',
            text: '运动鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/02/133/15674284341232_120x120_90.jpg',
            text: '高跟鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/03/07/123/15519539714764_120x120_90.jpg',
            text: '老爹鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/121/158806233051010128_120x120_90.png',
            text: '乐福鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/02/05/81/158089052282310018_120x120_90.png',
            text: '帆布鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/30/163/158556763611110539_120x120_90.png',
            text: '后空鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/168/8debf144-0d6d-46ec-9cdf-f6d8adeb0a7f_120x120_90.jpg',
            text: '一脚蹬'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/04/23/72/15559999807598_120x120_90.jpg',
            text: '椰子鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/08/19/121/15661774772143_120x120_90.jpg',
            text: '板鞋'
          }
        ],
        '4': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/01/38/15095396723182_120x120_90.jpg',
            text: '休闲皮鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/112/89d5af26-be02-441d-acbc-34e1cc1bbba5_120x120_90.jpg',
            text: '帆布鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/143/dd47679a-7959-4f96-b5c2-d25853b3e044_120x120_90.jpg',
            text: '一脚蹬'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/26/112/15196343888852_120x120_90.jpg',
            text: '豆豆鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/03/07/144/15519543169374_120x120_90.jpg',
            text: '老爹鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/155/15677395694790_120x120_90.jpg',
            text: '运动鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/04/23/100/15560002178188_120x120_90.jpg',
            text: '椰子鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/23/96af9c7b-bbc7-4b48-a37c-48b99d269e33_120x120_90.jpg ',
            text: '小白鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/42/84a2bd45-4750-4688-95f1-a2c38f8b7b48_120x120_90.jpg',
            text: '正装鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/52/b171dc6b-4bbf-4e8e-a293-8d5c560da601_120x120_90.jpg',
            text: '英伦鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/20/181/ea7967c6-4108-4050-8fe3-6178f2a58579_120x120_90.jpg',
            text: '系带商务鞋'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/01/98/e449d266-fd5e-45c7-82be-f4c5b07d3005_120x120_90.jpg',
            text: '布洛克鞋'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/11/12/15129733788281_120x120_90.jpg',
            text: '板鞋'
          }
        ],
        '5': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/27/15677358669712_120x120_90.jpg',
            text: '斜挎包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/02/03/56/15491828529383_120x120_90.jpg',
            text: '手提包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/11/56/15129737481735_120x120_90.jpg',
            text: '男/女钱包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/04/28/172/158806345093210469_120x120_90.png',
            text: '真皮包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/02/22/11/15193002178762_120x120_90.jpg',
            text: '单肩包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/21/12/15112541607351_120x120_90.jpg',
            text: '实用大包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/03/15/15096995407805_120x120_90.jpg',
            text: '手拿包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/03/133/15096997774559_120x120_90.jpg',
            text: '小方包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/18/131/15135888351749_120x120_90.jpg',
            text: '商务公文包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/27/43/4e86cbf1-f608-477f-a16b-9285ce76c5d8_120x120_90.jpg',
            text: '单肩/斜挎包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/09/06/176/15677359812916_120x120_90.jpg',
            text: '双肩包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/06/116/15099352972207_120x120_90.jpg',
            text: '电脑包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/11/06/74/15099608361609_120x120_90.jpg',
            text: '钥匙包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/01/02/122/17273453-ba8c-4c03-8457-7fcb133735ba_120x120_90.jpg',
            text: '零钱包'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/10/27/9/cc93c88c-757f-494d-a584-be3408846019_120x120_90.jpg',
            text: '旅行包'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/08/03/39/15332855144298_120x120_90.jpg',
            text: '拉杆箱'
          }
        ],
        '6': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/176/158311451208510205_120x120_90.jpg',
            text: '机械男表'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/113/158311449921510413_120x120_90.jpg',
            text: '机械女表'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/168/158311453673710926_120x120_90.jpg',
            text: '石英女表'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/56/158311455026310121_120x120_90.jpg',
            text: '石英男表'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/116/158311456709110843_120x120_90.jpg',
            text: '商务腕表'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/38/158311781811410162_120x120_90.png',
            text: '打火机'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/176/158311773192610709_120x120_90.jpg',
            text: '项链'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/65/158311774490910671_120x120_90.jpg',
            text: '耳饰'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/117/158311775718910003_120x120_90.jpg',
            text: '戒指'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/158/158311779656510776_120x120_90.png',
            text: '发饰'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/02/136/158311783316810513_120x120_90.jpg',
            text: '胸针'
          }
        ],
        '7': [
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/109/b8dffa5d-1f24-495c-bf70-6dd32af00699_120x120_90.png',
            text: '面膜'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/198/f7e46bb5-394a-4fb9-8020-1f4219daccbf_120x120_90.jpg',
            text: '面部精华'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/122/d20de9d6-30b9-4e9c-addf-827fe486b42a_120x120_90.png',
            text: '眼线笔'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/06/192/4ee9c39f-d28b-4290-bdc1-a309d9d946ac_120x120_90.png',
            text: '气垫bb'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/34/1fd89259-2a39-4fa0-bc47-f1f7cf7f1693_120x120_90.png',
            text: '眼影'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/39/7e651cc8-bfb9-4f05-bb71-37de270af534_120x120_90.jpg',
            text: '粉饼'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/132/b67020e0-27d5-4fb3-a1c0-6733d7e76ed3_120x120_90.png',
            text: '唇釉'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/08/28/162/15669864637720_120x120_90.jpg',
            text: '口红'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/05/02/199/f18e0192-fe58-4eb0-ac78-d1b9a76174f5_120x120_90.png',
            text: '睫毛膏'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/07/26/84/2f608ca5-b19d-4194-a0c7-c96e590d9d87_120x120_90.jpg',
            text: '腮红'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/05/14/105/15578170774520_120x120_90.png',
            text: '香水'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/02/24/47/6df78067-bb13-4e52-a2a8-96446aefa9d8_120x120_90.jpg',
            text: '美甲'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/01/19/21/44978c8f-47e9-4e59-b6c4-0b8c5437c256_120x120_90.png',
            text: '化妆棉'
          }
        ],
        '8': [
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/04/194/158329364749310749_120x120_90.png',
            text: '床上套件'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/02/01/152/46c44aa1-4a10-4f91-8d6e-df7328445980_120x120_90.png',
            text: '蚕丝被'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/24/193/a7d60b67-60b5-4d26-bd5c-246b65e5a854_120x120_90.png',
            text: '枕头'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/12/11/148/995c2c36-ecaa-4fce-853c-f0d538e9b606_120x120_90.png',
            text: '蚊帐'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/03/21/155/15216262975498_120x120_90.png ',
            text: '凉席'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2019/08/01/179/64fd01df-3d72-4241-b33a-c9004677d0d3_120x120_90.png',
            text: '床垫床褥'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2020/03/04/13/158329352915710385_120x120_90.png',
            text: '毛毯'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2019/03/14/108/15525599945957_120x120_90.jpg',
            text: '被芯'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2018/11/09/107/ad41b450-d857-46de-9b48-b61a8469a604_120x120_90.jpg',
            text: '电热毯'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/26/81/15142784568521_120x120_90.png',
            text: '抱枕'
          },
          {
            imgUrl: 'https://a.vpimg4.com/upload/category/2017/11/24/132/1106b76c-3755-4458-bdfa-1b489483d6bf_120x120_90.png',
            text: '坐垫'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2017/12/26/99/15142785816146_120x120_90.png',
            text: '窗帘'
          },
          {
            imgUrl: 'https://a.vpimg3.com/upload/goadmin/2018/03/06/174/15203038617754_120x120_90.png',
            text: '地毯'
          }
        ]
      }
    }
  },
  methods: {
    onChange (index) {
      Notify({ type: 'primary', message: index })
      this.gridList = this.goods[index]
    }
  },
  created () {
    this.gridList = this.goods[0]
  }
}
</script>
<style lang="less" scoped>
.list{
    display: flex;
}
.list_left{
    width: 25%;
}
.list_right{
    width: 75%;
    position:absolute;
    left: 25%;
     height:80%;
     overflow:auto
}
</style>
