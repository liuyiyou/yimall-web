<template>
  <div>
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
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
  GridItem,
  CouponCell,
  CouponList
} from "vant";

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
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [GridItem.name]: GridItem
  },
   data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]
    }
  },

  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
};
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
</script>
