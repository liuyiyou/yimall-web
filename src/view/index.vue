<template>
  <!--Component template should contain exactly one root element-->
  <div>
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
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!--广告banner end-->
    <van-grid :column-num="3">
      <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="两点" />
    </van-grid>

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
      <van-grid :column-num="2">
        <van-grid-item v-for="value in 12" :key="value" icon="photo-o" text="商品详情" />
      </van-grid>
    </van-list>

    <van-grid :column-num="2">
      <van-grid-item v-for="value in 12" :key="value" icon="photo-o" text="商品详情" />
    </van-grid>

    <!--底部栏 start-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/#/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" url="/#/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" url="/#/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" url="/#/user">个人中</van-tabbar-item>
    </van-tabbar>
    <!--底部栏 end-->
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import {
  Col,
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
import { loadavg } from "os";
export default {
  components: {
    [Search.name]: Search,
    [Row.name]: Row,
    [List.name]: List,
    [Swipe.name]: Swipe,
    [Col.name]: Col,
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
      finished: false
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
</style>