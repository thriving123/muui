// Vue install
import Vue from "vue";

import alert from "./index.vue";

export const MuAlert = {
  install(Vue: Vue.App) {
    // 1. 添加全局方法或属性
    Vue.component("mu-alert", alert);
  },
};
// 设置install方法导出给main使用
