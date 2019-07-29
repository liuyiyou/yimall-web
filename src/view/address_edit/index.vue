<template>
  <div>
    <van-nav-bar title="修改收货地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      :address-info="addressInfo"
      show-delete
      show-set-default
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
import { Notify } from "vant";
Vue.use(Notify);

import { addAddress, editAddress, delAddress } from "@/request/api"; // 导入我们的api接口
import { areaList } from "@/data/area";
export default {
  data() {
    return {
      addressInfo: this.$route.params,
      areaList: areaList,
      searchResult: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router ? this.$router.back() : window.history.back();
    },
    onSave(content) {
      if (content.id) {
        editAddress(content).then(res => {
          Toast.success("修改成功");
          this.$router ? this.$router.back() : window.history.back();
        });
      } else {
        content.uid = 1;

        addAddress(content).then(res => {
          Toast.success("修改成功");
          this.$router ? this.$router.back() : window.history.back();
        });
      }
    },
    onDelete(content) {
      deleteAddrById(content.id);
      //这里可以加个动画
      this.$router ? this.$router.back() : window.history.back();
    }
  }
};
</script>
