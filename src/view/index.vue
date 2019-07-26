<template>
  <!--Component template should contain exactly one root element-->
  <div>
    <van-row gutter="20">
      <!--搜索框 start-->
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <!--搜索框 end-->
      <!--广告banner start-->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in images" :key="index" class="banner-lazyload">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <!--广告banner end-->
      <van-grid :column-num="3">
        <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="两点"></van-grid-item>
      </van-grid>
      <van-grid :column-num="2">
        <van-grid-item
          v-for="item in goods"
          :key="item.id"
          :name="item.id"
          icon="photo-o"
          :text="item.title"
          to="goods"
        ></van-grid-item>
      </van-grid>
      <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
       
      </van-list>-->
    </van-row>
    <van-divider>到底部了</van-divider>
    <!--底部栏 start-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" url="/#/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" url="/#/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" url="/#/user">个人中心</van-tabbar-item>
    </van-tabbar>
    <!--底部栏 end-->
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import {
  Card,
  Col,
  Divider,
  Lazyload,
  Row,
  List,
  Search,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Grid,
  GridItem
} from "vant";
Vue.use(Lazyload);
import { loadavg } from "os";
export default {
  components: {
    [Card.name]: Card,
    [Divider.name]: Divider,
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      active: 0,
      list: [],
      loading: false,
      finished: false,
      value: "美女",
      goods: [
        {
          id: "1",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "12",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "13",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "141",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "134",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        },
        {
          id: "144",
          title: "进口香蕉",
          desc: "约250g，2根",
          price: 200,
          num: 1,
          thumb:
            "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        }
      ]
    };
  },
  methods: {
    onSearch() {
      console.info("点击搜索");
    },
    onCancel() {
      console.info("点击取消");
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style>
.banner-lazyload img,
.banner-lazyload div[lazy] {
  box-sizing: border-box;
  width: 100%;
  height: 250px;
  /* margin-bottom: 16px; */
  /* padding: 16px; */
  /* background-color: white; */
  /* background-repeat: no-repeat; */
  /* background-position: 16px; */
  /* background-size: 315px 250px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
}
</style>