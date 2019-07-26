<template>
  <div>
    <img
      class="user-poster"
      
    />
    <van-row class="user-links">
      <van-col span="6">
        <van-icon size="50px" name="pending-payment" @click="gotoOrders" />待付款
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="tosend" />待发货
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="logistics" />已发货
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="records" />待评价
      </van-col>
    </van-row>

    <van-row class="user-links">
      <van-col span="6">
        <van-icon size="50px" name="location-o" @click="gotoAddress" />收货地址
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="points" />我的积分
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="coupon-o" />优惠券
      </van-col>
      <van-col span="6">
        <van-icon size="50px" name="goods-collect-o" />我的收藏
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link @click="gotoCouponList"/>
    </van-cell-group>

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
import { Cell, CellGroup, Col, Icon, Row, Tabbar, TabbarItem } from "vant";

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
  data() {
    return {
      active: 3
    };
  },
  methods: {
    gotoAddress() {
      this.$router.push({ name: "address" });
    },
    gotoOrders() {
      this.$router.push({ name: "order" });
    },
    gotoCouponList(){
      this.$router.push({name:"coupon"})
    }
  }
};
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
