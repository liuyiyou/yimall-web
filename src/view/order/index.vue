<template>
  <div>
    <van-nav-bar title="订单列表" left-arrow @click-left="onClickLeft" />
    <van-tabs @click="onClicTab">
      <van-tab title="待付款">
        <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
          <van-list v-model="list[0].loading" :finished="list[0].finished" @load="onLoad(0)">
            <van-cell v-for="item in list[0].items" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="待发货">
        <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
          <van-list v-model="list[0].loading" :finished="list[0].finished" @load="onLoad(0)">
            <van-cell v-for="item in list[0].items" :key="item" :title="item" />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="已发货">已发货</van-tab>
      <van-tab title="待发货">待评价</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Vue from "vue";
import { Cell, CellGroup, Tab, Tabs, Card, List, NavBar, Toast } from "vant";
import Axios from "axios";
Vue.component(NavBar.name, NavBar);
Vue.component(Toast.name, Toast);
Vue.component(List.name, List);
Vue.component(Card.name, Card);
Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
export default {
  data() {
    return {
      loading: false,
      finished: false,
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },

  methods: {
    onClicTab(name, title) {
      this.$toast(name + title);
    },
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    onLoad(index, isRefresh) {
      Axios.get("orderlist.json")
        .then(function(response) {
          if (response.data.success) {
            let list = response.data.data;
            console.log(list);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      const list = this.list[index];
      list.loading = true;
      setTimeout(() => {
        if (isRefresh) {
          list.items = [];
        }
        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }
        list.loading = false;
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }
        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 500);
    },
    onRefresh(index) {
      const list = this.list[index];
      setTimeout(() => {
        list.error = false;
        list.finished = false;
        list.refreshing = false;
        this.onLoad(index, true);
      }, 1000);
    },
    viewOrderDetail(prod) {
      this.$router.push({ name: "goods", params: { prod: prod.prodId } });
    }
  }
};
</script>
