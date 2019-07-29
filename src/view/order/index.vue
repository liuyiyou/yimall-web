<template>
  <div>
    <van-nav-bar title="订单列表" left-arrow @click-left="onClickLeft" />
    <van-tabs @click="onClicTab">
      <van-tab title="待付款">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <van-cell v-for="item in list" :key="item" :title="item.orderId" />
        </van-list>
      </van-tab>
      <van-tab title="待发货">待发货</van-tab>
      <van-tab title="已发货">已发货</van-tab>
      <van-tab title="待评价">待评价</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { orderList } from "@/request/api";
const defaultListQuery = {
  pageNum: 1,
  pageSize: 20
};
export default {
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      loading: false,
      finished: false,
      list: []
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      defaultListQuery.pageNum = defaultListQuery.pageNum + 1;
      orderList(listQuery).then(res => {
        let data = res.data;
        this.list = data.records;
        console.log(data.current == data.pages);
        if (data.current == data.pages) {
          this.loading = true;
          this.finished = true;
        }
      });
    },
    onClicTab(name, title) {
      this.$toast(name + title);
    },
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    viewOrderDetail(prod) {
      this.$router.push({ name: "goods", params: { prod: prod.prodId } });
    }
  }
};
</script>
