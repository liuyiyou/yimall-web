<template>
  <div>
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit" />
  </div>
</template>

<script>
import {
  NavBar,
  AddressList,
  Cell,
  CellGroup,
  Col,
  Icon,
  Row,
  Tabbar,
  TabbarItem,
  Toast
} from "vant";
const axios = require("axios");
const defaultListQuery = {};

export default {
  components: {
    [NavBar.name]: NavBar,
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
      chosenAddressId: "0",
      active: 3,
      list: [],
      total: 0,
      listLoading: true
    };
  },
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.listLoading = false;
      let array = new Array();
      axios
        .get("address.json")
        .then(function(response) {
          if (response.data.success) {
            let list = response.data.data;
            list.forEach(element => {
              console.log(element);
              var address = {
                id: element.id,
                name: element.consignee,
                tel: element.consignTel,
                address: element.consigneeAddr
              };
              array.push(address);
            });

            this.chosenAddressId = "2";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      this.list = array;

      this.chosenAddressId = "2";
      
    },
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
