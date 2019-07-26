<template>
  <div>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>

    <!--底部栏 start-->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" url="/index">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" url="/user">个人中心</van-tabbar-item>
    </van-tabbar>
    <!--底部栏 end-->
  </div>
</template>

<script>
import {Cell, CellGroup, Col, Icon, Row, Tabbar, TabbarItem} from 'vant'

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      active: 3
    }
  }
}
</script>

<style lang="less">
  .user {
    &-poster {
      width: 100%;
      height: 53vw;
      display: block;
    }

    &-group {
      margin-bottom: 15px;
    }

    &-links {
      padding: 15px 0;
      font-size: 12px;
      text-align: center;
      background-color: #fff;

      .van-icon {
        display: block;
        font-size: 24px;
      }
    }
  }
</style>
