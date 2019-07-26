<template>
  <div>
    <van-nav-bar title="修改收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import {
  Cell,
  CellGroup,
  Col,
  Icon,
  Row,
  Tabbar,
  TabbarItem,
  AddressList
} from "vant";

export default {
  data() {
    return {};
  },

  methods: {
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
