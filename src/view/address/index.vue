<template>
  <div>
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

import { apiAddressList } from "@/request/api";
const defaultListQuery = {};
export default {
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      chosenAddressId: "1",
      active: 3,
      list: [],
      listLoading: true
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.listLoading = true;
      apiAddressList().then(res => {
        let data = res.data;
        this.list = data.list;
        this.chosenAddressId = data.chosenAddressId;
      });
    },
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    onAdd() {
      this.$router.push({ name: "address_add" });
    },

    onEdit(item, index) {
      this.$router.push({ name: "address_edit", params: item });
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
