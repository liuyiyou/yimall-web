<template>
  <div>
    <van-nav-bar
      title="搜索结果"
      left-arrow
      @click-left="onClickLeft"
    />

    <!--  <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >

      </van-list>-->

    <template v-for="prod in prods">
      <div @click="viewGoodsDetail(prod)">
        <van-card v-for="prod in prods"
                  :id=prod.prodId
                  :price=prod.price
                  :title=prod.prodName
                  :thumb=prod.pic>
        </van-card>
      </div>
    </template>
  </div>
</template>

<script>

import Vue from 'vue'
import {Card, List, NavBar, Toast} from 'vant'

Vue.component(NavBar.name, NavBar)
Vue.component(Toast.name, Toast)
Vue.component(List.name, List)
Vue.component(Card.name, Card)
let prods = [
  {
    'countryId': 'CN',
    'couponFlag': 0,
    'freightPrice': 0,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/29/2903/290301/002/36A8E2DC9D769616.jpg',
    'price': 95,
    'prodId': 229030100201,
    'prodName': '想和你相约在冬季，吃锅热腾腾的鱼，把你定下来',
    'prodPrice': 95,
    'promName': '',
    'promotionType': 0,
    'referPrice': 95,
    'saleChannel': 20,
    'saled': 80,
    'saledTotal': 722,
    'taxRate': 0,
    'weight': 16
  },
  {
    'countryId': 'AU',
    'couponFlag': 0,
    'freightPrice': -1,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/23/2302/230202/029/0F39D0558973141C.jpg',
    'price': 318.5,
    'prodId': 223020202901,
    'prodName': '(2瓶装)Unichi 生蚝精华胶囊 60粒/瓶 男性补充体力 补肾强精',
    'prodPrice': 313.5,
    'promName': '设置默认调去商品品牌名称',
    'promotionType': 0,
    'referPrice': 318.5,
    'saleChannel': 10,
    'saled': 55,
    'saledTotal': 730,
    'taxRate': 0,
    'weight': 15
  },
  {
    'countryId': 'AU',
    'couponFlag': 0,
    'freightPrice': 0,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/21/2103/210307/017/52E5A0132408454A.jpg',
    'price': 94,
    'prodId': 221030701702,
    'prodName': 'Sukin 苏芊 洗发水+护发素 保湿修复干燥/蛋白滋养干枯受损',
    'prodPrice': 89,
    'promName': '',
    'promotionType': 0,
    'referPrice': 94,
    'saleChannel': 30,
    'saled': 17,
    'saledTotal': 265,
    'taxRate': 11.9,
    'weight': 13
  },
  {
    'countryId': 'NZ',
    'couponFlag': 0,
    'freightPrice': 0,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/21/2101/210101/066/1801ADA450817EB3.jpg',
    'price': 46,
    'prodId': 221010106601,
    'prodName': '老师都打算减肥',
    'prodPrice': 41,
    'promName': '',
    'promotionType': 0,
    'referPrice': 46,
    'saleChannel': 30,
    'saled': 12,
    'saledTotal': 512,
    'taxRate': 26.4,
    'weight': 13
  },
  {
    'countryId': 'NZ',
    'couponFlag': 0,
    'freightPrice': -1,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/23/2304/230405/0003/D646787A5E2E6470.jpg',
    'price': 125.7,
    'prodId': 1501010003,
    'prodName': 'Thompson\'s 汤普森 葡萄籽精华胶囊 120粒/瓶 淡斑抗衰老',
    'prodPrice': 120.7,
    'promName': '测试商品123测试商品',
    'promotionType': 0,
    'referPrice': 125.7,
    'saleChannel': 10,
    'saled': 176,
    'saledTotal': 535,
    'taxRate': 0,
    'weight': 12
  },
  {
    'countryId': 'TW',
    'couponFlag': 0,
    'freightPrice': 0,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/24/2403/240302/024/35DAD78E5EC43C24.jpg',
    'price': 34.7,
    'prodId': 224030202401,
    'prodName': '胜记大荣 黑豆豉酱 240g/瓶 台湾调料调味酱 拌面下饭酱',
    'prodPrice': 29.7,
    'promName': '一二三四五六七八九十一二三四五',
    'promotionType': 0,
    'referPrice': 34.7,
    'saleChannel': 20,
    'saled': 12,
    'saledTotal': 202,
    'taxRate': 0,
    'weight': 11
  },
  {
    'actId': 3230,
    'actType': 3,
    'countryId': 'CN',
    'couponFlag': 0,
    'freightPrice': -1,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 0,
    'pic': 'product/28/2803/280301/004/EF0DF0E68DE18BAA.jpg',
    'price': 15.9,
    'prodId': 228030100402,
    'prodName': '猪兼强 清远无忧班 C1无忧手动挡 考驾照轻松无忧',
    'prodPrice': 10.9,
    'promName': '',
    'promotionType': 11,
    'referPrice': 15.9,
    'saleChannel': 10,
    'saled': 2,
    'saledTotal': 206,
    'taxRate': 0,
    'weight': 0
  },
  {
    'couponFlag': 0,
    'freightPrice': -1,
    'hotFlag': 0,
    'navId': 999,
    'newFlag': 1,
    'pic': 'product/21/2101/210101/134/6F6AB23CC2FF2D21.jpg',
    'price': 104,
    'prodId': 221010113401,
    'prodName': '测试商品',
    'prodPrice': 99,
    'promName': '10000',
    'promotionType': 0,
    'referPrice': 104,
    'saleChannel': 10,
    'saled': 0,
    'saledTotal': 578,
    'taxRate': 0,
    'weight': 0
  }
]

export default {
  data () {
    return {
      prods: prods,
      loading: false,
      finished: false
    }
  },

  methods: {
    onClickLeft () {
      Toast('返回')
      this.$router ? this.$router.back() : window.history.back()
    },
    onLoad () {
      //
    },
    viewGoodsDetail (prod) {
      this.$router.push({ name: 'goods', params: { prod: prod.prodId }})
    }
  }
}

</script>

<style lang="less">
  .card__footer {
    padding-top: 10px;
  }

  .card__tags {
    .van-tag {
      margin-right: 5px;
    }
  }
</style>
