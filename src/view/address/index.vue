<template>
  <div>
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import {
  AddressList,
  Cell,
  CellGroup,
  Col,
  Icon,
  Row,
  Tabbar,
  TabbarItem
} from "vant";
// import {fetchList} from '@/api/address'

// const Mock = require("mockjs");

const defaultListQuery = {};

export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [AddressList.name]: AddressList
  },
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      chosenAddressId: "1",
      active: 3,
      list: null,
      disabledList: null,
      total: 0,
      listLoading: true
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      console.info("address.method.getlist....");
      Mock.mock("/get/address_list", "post");
      this.listLoading = false;
      this.list = [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ];
      this.disabledList = [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ];
    },
    onLoad() {},
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    onAdd() {
      this.$router.push({ name: "address_edit" });
    },

    onEdit(item, index) {
      this.$router.push({ name: "address_edit" });
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
