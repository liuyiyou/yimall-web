<template>
  <div>
    <!--搜索框 start-->
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
      />
    </form>
    <!--搜索框 end-->

    <van-row>

      <van-tabs v-model="active">
        <van-tab title="分类">
          <van-tree-select
            :items="items"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @navclick="onNavClick"
            @itemclick="onItemClick"
          />
        </van-tab>
        <van-tab title="品牌" >
          <van-row class="brands">
            <van-col span="8">
              收货地址
            </van-col>
            <van-col span="8">
              我的积分
            </van-col>
            <van-col span="8">
              优惠券
            </van-col>
          </van-row>
          <van-row class="brand">
            <van-col span="8">
              收货地址
            </van-col>
            <van-col span="8">
              我的积分
            </van-col>
            <van-col span="8">
              优惠券
            </van-col>
          </van-row>
          <van-row class="brand">
            <van-col span="8">
              收货地址
            </van-col>
            <van-col span="8">
              我的积分
            </van-col>
            <van-col span="8">
              优惠券
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </van-row>

    <!--底部栏 start-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/#/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" url="/#/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" url="/#/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" url="/#/user">个人中</van-tabbar-item>
    </van-tabbar>
    <!--底部栏 end-->
  </div>

</template>

<script>
import {Col, Row, Search, Swipe, SwipeItem, Tab, Tabbar, TabbarItem, Tabs, TreeSelect} from 'vant'
export default {

  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [Col.name]: Col,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [TreeSelect.name]: TreeSelect,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data () {
    return {
      images: [
        'https://oss.yanglaoban.com/system/banner/D49160C2B6693ECF.jpg?x-oss-process=image/resize,p_70',
        'https://oss.yanglaoban.com/system/banner/5C431C18689C2FB0.jpg?x-oss-process=image/resize,p_70'
      ],
      active: 0,
      items,
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    }
  },
  created() {
    api.http('/get/classList', { params: { domain: '', limit: 10, offset: 5 }})
      .then(res => {
        this.classList = res.result;
      });
  },
  methods: {
    onNavClick (index) {
      this.mainActiveIndex = index
    },
    onItemClick (data) {
      // this.activeId = data.id
      this.$router.push({ name: 'search' })
    }
  }
}

let items = [
  {
    // 导航名称
    text: '时尚美妆',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '面部护肤',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '时尚彩妆',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '美发护发',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '香水香氛',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '面部护肤',
        // id，作为匹配选中状态的标识
        id: 1
      }
    ]
  },
  {
    // 导航名称
    text: '时尚美妆2',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '面部护肤2',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '时尚彩妆2',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '美发护发2',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '香水香氛',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '面部护肤',
        // id，作为匹配选中状态的标识
        id: 1
      }
    ]
  },
  {
    // 导航名称
    text: '时尚美妆3',
    // 该导航下所有的可选项
    children: [
      {
        // 名称
        text: '面部护肤3',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '时尚彩妆3',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '美发护发3',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '香水香氛',
        // id，作为匹配选中状态的标识
        id: 1
      },
      {
        // 名称
        text: '面部护肤',
        // id，作为匹配选中状态的标识
        id: 1
      }
    ]
  }
]

</script>

<style>
  .brands .content-main .brands-item li {
    float: left;
    width: 4.864rem;
    margin-right: .34133333rem;
  }
</style>
